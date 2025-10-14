import { NavLink } from 'react-router-dom'
import { useFavorites } from '../../favorite/FavoriteContext'
import './Header.css'

function Header({ lightMode, setLightMode }) {
	const { count } = useFavorites()

	const toggleTheme = () => {
		setLightMode(!lightMode)
	}

	return (
		<header className='header'>
			<div>
				{/* Левый блок */}
				<div className='header-left'>
					<img src='./logo.png' alt='E-Store' />
					<h1>E-Store</h1>
				</div>

				{/* Центральный блок - навигация */}
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

				{/* Правый блок */}
				<div className='header-right'>
					<button className='theme-toggle' onClick={toggleTheme}>
						{lightMode ? (
							<img src='./sun.svg' alt='Светлая тема' />
						) : (
							<img src='./moon.svg' alt='Тёмная тема' />
						)}
					</button>
					<span className='favorites'>❤️ {count}</span>
				</div>
			</div>
		</header>
	)
}

export default Header
