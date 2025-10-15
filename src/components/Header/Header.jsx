import { NavLink } from 'react-router-dom'
import { useFavorites } from '../../favorite/FavoriteContext'
import './Header.css'

function Header({ lightMode, setLightMode }) {
	const { count } = useFavorites()

	const toggleTheme = () => {
		const newTheme = !lightMode
		setLightMode(newTheme)
		localStorage.setItem('theme', newTheme ? 'light' : 'dark')
		document.documentElement.setAttribute(
			'data-theme',
			newTheme ? 'light' : 'dark'
		)
	}

	return (
		<header className='header'>
			<div>
				<div className='header-left'>
					<img src='./logo.png' alt='E-Store' />
					<h1>E-Store</h1>
				</div>
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
				</nav>
				<div className='header-right'>
					<button
						className={`theme-toggle ${lightMode ? 'light' : 'dark'}`}
						onClick={toggleTheme}
						aria-label={
							lightMode
								? 'Переключить на темную тему'
								: 'Переключить на светлую тему'
						}
					>
						<div className='theme-toggle-track'>
							<div className='theme-toggle-thumb'>
								{lightMode ? (
									<img src='./sun.svg' alt='Солнце' className='theme-icon' />
								) : (
									<img src='./moon.svg' alt='Луна' className='theme-icon' />
								)}
							</div>
						</div>
					</button>
					<span className='favorites'>❤️ {count}</span>
				</div>
			</div>
		</header>
	)
}

export default Header
