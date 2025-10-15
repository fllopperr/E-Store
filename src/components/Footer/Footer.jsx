import { useEffect, useState } from 'react'
import './Footer.css'

function Footer() {
	const openHours = 19
	const closeHours = 21

	const [now, setNow] = useState(() => new Date())
	const hour = now.getHours()

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

	return (
		<footer className='footer'>
			<div className='footer-top'>
				<div className='footer-section'>
					<h3>О компании</h3>
					<ul>
						<li>
							<a href='/about'>О нас</a>
						</li>
						<li>
							<a href='/careers'>Карьера</a>
						</li>
						<li>
							<a href='/news'>Новости</a>
						</li>
						<li>
							<a href='/partners'>Партнёры</a>
						</li>
					</ul>
				</div>

				<div className='footer-section'>
					<h3>Покупателям</h3>
					<ul>
						<li>
							<a href='/delivery'>Доставка</a>
						</li>
						<li>
							<a href='/payment'>Оплата</a>
						</li>
						<li>
							<a href='/returns'>Возврат</a>
						</li>
						<li>
							<a href='/faq'>FAQ</a>
						</li>
					</ul>
				</div>

				<div className='footer-section'>
					<h3>Помощь</h3>
					<ul>
						<li>
							<a href='/support'>Поддержка</a>
						</li>
						<li>
							<a href='/privacy'>Политика конфиденциальности</a>
						</li>
						<li>
							<a href='/terms'>Пользовательское соглашение</a>
						</li>
						<li>
							<a href='/contacts'>Контакты</a>
						</li>
					</ul>
				</div>

				<div className='footer-section socials'>
					<h3>Мы в соцсетях</h3>
					<div className='footer-socials'>
						<a href='https://github.com' target='_blank' rel='noreferrer'>
							<i className='fa-brands fa-github'></i>
						</a>
						<a href='https://twitter.com' target='_blank' rel='noreferrer'>
							<i className='fa-brands fa-x-twitter'></i>
						</a>
						<a href='https://linkedin.com' target='_blank' rel='noreferrer'>
							<i className='fa-brands fa-linkedin'></i>
						</a>
						<a href='https://instagram.com' target='_blank' rel='noreferrer'>
							<i className='fa-brands fa-instagram'></i>
						</a>
					</div>
					<p className='footer-contact'>
						<i className='fa-solid fa-phone'></i> +7 (999) 123-45-67
					</p>
					<p className='footer-contact'>
						<i className='fa-solid fa-envelope'></i> support@mywebsite.ru
					</p>
				</div>
			</div>

			<div className='footer-bottom'>
				<p>© 2025 MyWebsite. Все права защищены.</p>
				<div className='working-hours'>
					{isOpen ? (
						<p>Мы открыты! Закроемся через: {hoursLeft} ч.</p>
					) : (
						<p>Мы закрыты! Откроемся через: {hoursLeft} ч.</p>
					)}
				</div>
			</div>
		</footer>
	)
}
export default Footer
