/** @format */

import { useState } from 'react'
import {
	createBrowserRouter,
	Outlet,
	RouterProvider,
	useLocation,
} from 'react-router-dom'
import './App.css'

import Basket from './components/Basket/Basket'
import Catalog from './components/Catalog/Catalog'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import HistoryBar from './components/HistoryBar/HistoryBar'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'
import FavoriteProvider from './favorite/FavoriteContext'

function Root({
	lightMode,
	setLightMode,
	lastViewed,
	searchTerm,
	setSearchTerm,
	basketAdd,
	addToBasket,
	setBasketAdd,
}) {
	const location = useLocation()
	const hideFooter =
		location.pathname === '/about' || location.pathname === '/contact'

	return (
		<FavoriteProvider>
			<div className={lightMode ? 'light-mode' : 'dark-mode'}>
				<div className='container'>
					<Header
						lightMode={lightMode}
						setLightMode={setLightMode}
						searchTerm={searchTerm}
						setSearchTerm={setSearchTerm}
					/>
					<Outlet />
					{!hideFooter && (
						<HistoryBar
							lastViewed={lastViewed}
							basketAdd={basketAdd}
							addToBasket={addToBasket}
							setBasketAdd={setBasketAdd}
						/>
					)}
					<Footer />
				</div>
			</div>
		</FavoriteProvider>
	)
}

function App() {
	const [lightMode, setLightMode] = useState(true)
	const [lastViewed, setLastViewed] = useState(null)
	const [searchTerm, setSearchTerm] = useState('')
	const [basketAdd, setBasketAdd] = useState([])

	const addToBasket = (product, e) => {
		e?.stopPropagation()
		setBasketAdd(prevProduct => {
			const existingItem = prevProduct.find(item => item.name === product.name)

			if (existingItem) {
				return prevProduct.map(item =>
					item.name === product.name
						? {
								...item,
								count: item.count + 1,
								currentPrice: product.price * (item.count + 1),
						  }
						: item
				)
			} else {
				return [
					...prevProduct,
					{ ...product, count: 1, currentPrice: product.price },
				]
			}
		})
	}

	const decrementBasket = (product, e) => {
		e?.stopPropagation()
		setBasketAdd(prevProduct => {
			const existingItem = prevProduct.find(item => item.name === product.name)

			if (existingItem) {
				return prevProduct
					.map(item =>
						item.name === product.name
							? {
									...item,
									count: item.count - 1,
									currentPrice: product.price * (item.count - 1),
							  }
							: item
					)
					.filter(item => item.count !== 0)
			}
		})
	}

	const router = createBrowserRouter([
		{
			path: '/',
			element: (
				<Root
					lightMode={lightMode}
					setLightMode={setLightMode}
					lastViewed={lastViewed}
					searchTerm={searchTerm}
					setSearchTerm={setSearchTerm}
					basketAdd={basketAdd}
					setBasketAdd={setBasketAdd}
					addToBasket={addToBasket}
					decrementBasket={decrementBasket}
				/>
			),
			children: [
				{
					index: true,
					element: (
						<Catalog
							onView={setLastViewed}
							searchTerm={searchTerm}
							addToBasket={addToBasket}
						/>
					),
				},
				{
					path: 'catalog',
					element: (
						<Catalog
							onView={setLastViewed}
							searchTerm={searchTerm}
							addToBasket={addToBasket}
						/>
					),
				},
				{
					path: 'about',
					element: <About />,
				},
				{
					path: 'contact',
					element: <Contact />,
				},
				{
					path: 'basket',
					element: (
						<Basket
							basketAdd={basketAdd}
							setBasketAdd={setBasketAdd}
							addToBasket={addToBasket}
							decrementBasket={decrementBasket}
						/>
					),
				},
			],
		},
	])

	return <RouterProvider router={router} />
}

export default App
