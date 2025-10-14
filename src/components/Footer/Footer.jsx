import './Footer.css'

function Footer({ lastViewed }) {
	return (
		<footer className='footer'>
			{lastViewed ? (
				<div className='last-viewed'>
					<img src={lastViewed.photoName} alt={lastViewed.name} />
					<h3>{lastViewed.name}</h3>
					<div className='order'>
						<button className='btn'>Заказать сейчас</button>
					</div>
				</div>
			) : (
				<p>@flopper75</p>
			)}
		</footer>
	)
}

export default Footer
