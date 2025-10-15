/** @format */

import { useState } from 'react'
import {
	createBrowserRouter,
	Outlet,
	RouterProvider,
	useLocation,
} from 'react-router-dom'
import './App.css'

import Catalog from './components/Catalog/Catalog'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import HistoryBar from './components/HistoryBar/HistoryBar'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'
import FavoriteProvider from './favorite/FavoriteContext'

function Root({ lightMode, setLightMode, lastViewed }) {
	const location = useLocation()
	const hideFooter =
		location.pathname === '/about' || location.pathname === '/contact'
	return (
		<FavoriteProvider>
			<div className={lightMode ? 'light-mode' : 'dark-mode'}>
				<div className='container'>
					<Header lightMode={lightMode} setLightMode={setLightMode} />
					<Outlet />
					{!hideFooter && <HistoryBar lastViewed={lastViewed} />}
					<Footer />
				</div>
			</div>
		</FavoriteProvider>
	)
}

function App() {
	const [lightMode, setLightMode] = useState(true)
	const [lastViewed, setLastViewed] = useState(null)

	const router = createBrowserRouter([
		{
			path: '/',
			element: (
				<Root
					lightMode={lightMode}
					setLightMode={setLightMode}
					lastViewed={lastViewed}
				/>
			),
			children: [
				{
					index: true,
					element: <Catalog onView={setLastViewed} />,
				},
				{
					path: 'catalog',
					element: <Catalog onView={setLastViewed} />,
				},
				{
					path: 'about',
					element: <About />,
				},
				{
					path: 'contact',
					element: <Contact />,
				},
			],
		},
	])

	return <RouterProvider router={router} />
}

export default App
