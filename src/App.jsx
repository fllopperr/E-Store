/** @format */

import { useState } from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import './App.css'

import Catalog from './components/Catalog/Catalog'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'

function Root({ lightMode, setLightMode, lastViewed }) {
	return (
		<div className={lightMode ? 'light-mode' : 'dark-mode'}>
			<div className='container'>
				<Header lightMode={lightMode} setLightMode={setLightMode} />
				<Outlet />
				<Footer lastViewed={lastViewed} />
			</div>
		</div>
	)
}

function App() {
	const [lightMode, setLightMode] = useState(false)
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
					element: <Catalog />,
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
