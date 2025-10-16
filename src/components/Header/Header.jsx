import { Link, NavLink } from 'react-router-dom'
import { useFavorites } from '../../favorite/FavoriteContext'
import './Header.css'

function Header({ lightMode, setLightMode, searchTerm, setSearchTerm }) {
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
					<div className='search-bar'>
						<input
							className='search-input'
							type='search'
							value={searchTerm}
							onChange={e => {
								setSearchTerm(e.target.value)
							}}
						/>
						<span className='search-icon'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								x='0px'
								y='0px'
								width='20'
								height='20'
								viewBox='0 0 32 32'
							>
								<path d='M 19 3 C 13.488281 3 9 7.488281 9 13 C 9 15.394531 9.839844 17.589844 11.25 19.3125 L 3.28125 27.28125 L 4.71875 28.71875 L 12.6875 20.75 C 14.410156 22.160156 16.605469 23 19 23 C 24.511719 23 29 18.511719 29 13 C 29 7.488281 24.511719 3 19 3 Z M 19 5 C 23.429688 5 27 8.570313 27 13 C 27 17.429688 23.429688 21 19 21 C 14.570313 21 11 17.429688 11 13 C 11 8.570313 14.570313 5 19 5 Z'></path>
							</svg>
						</span>
					</div>
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
					<div className='order-btn'>
						<Link to={'/basket'}>
							<button className='btn'>
								<svg
									width='20'
									height='20'
									viewBox='0 0 24 24'
									fill='currentColor'
								>
									<path d='M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z' />
								</svg>
							</button>
						</Link>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
