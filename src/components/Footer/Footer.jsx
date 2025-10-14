import { useEffect, useState } from 'react'
import './Footer.css'

function Footer({ lastViewed }) {
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
			{lastViewed ? (
				<>
					<div className='last-viewed'>
						<img src={lastViewed.photoName} alt={lastViewed.name} />
						<h3>{lastViewed.name}</h3>
						<div className='order'>
							<button className='btn'>Заказать сейчас</button>
						</div>
					</div>
					<div className='working-hours'>
						{isOpen ? (
							<p>Мы открыты! Закроемся через: {hoursLeft} ч.</p>
						) : (
							<p>Мы закрыты! Откроемся через: {hoursLeft} ч.</p>
						)}
					</div>
				</>
			) : (
				<>
					<p>@flopper75</p>
					<div className='working-hours'>
						{isOpen ? (
							<p>Мы открыты! Закроемся через: {hoursLeft} ч.</p>
						) : (
							<p>Мы закрыты! Откроемся через: {hoursLeft} ч.</p>
						)}
					</div>
				</>
			)}
		</footer>
	)
}

export default Footer
