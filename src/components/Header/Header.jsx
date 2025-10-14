import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useFavorites } from '../../favorite/FavoriteContext'
import './Header.css'

function Header({ lightMode, setLightMode }) {
	const openHours = 19
	const closeHours = 21

	const [now, setNow] = useState(() => new Date())
	const hour = now.getHours()
	const { count } = useFavorites()

	useEffect(() => {
		const id = setInterval(() => setNow(new Date()), 60_000)
		return () => clearInterval(id)
	}, [])

	const isOpen = hour >= openHours && hour < closeHours

	const hoursLeft = isOpen
		? closeHours - hour
		: hour < openHours
		? openHours - hour
		: 24 - hour + openHours

	const toggleTheme = () => {
		setLightMode(!lightMode)
	}

	return (
		<header className='header'>
			<div>
				<h1 style={{ color: 'white' }}>E - Store</h1>
				<nav className='nav'>
					<ul>
						<li>
							<NavLink to='/'>Главная</NavLink>
						</li>
						<li>
							<NavLink to='/catalog'>Каталог</NavLink>
						</li>
						<li>
							<NavLink to='/about'>О нас</NavLink>
						</li>
						<li>
							<NavLink to='/contact'>Контакты</NavLink>
						</li>
					</ul>
					<button onClick={toggleTheme}>
						{lightMode ? (
							<img src='./sun.svg' alt='' />
						) : (
							<img src='./moon.svg' alt='' />
						)}
					</button>
					<div>
						<span className='favorites'>❤️ {count}</span>
					</div>
				</nav>
			</div>
			<div className='working-hours'>
				{isOpen ? (
					<p>Мы открыты! Закроемся через: {hoursLeft} ч.</p>
				) : (
					<p>Мы закрыты! Откроемся через: {hoursLeft} ч.</p>
				)}
			</div>
		</header>
	)
}

export default Header
