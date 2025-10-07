import './Footer.css'

function Footer({ lastViewed }) {
	return (
		<footer className='footer'>
			{lastViewed ? (
				<div>
					<img src={lastViewed.photoName} alt='' />
					<h3>{lastViewed.name}</h3>
				</div>
			) : (
				''
			)}
		</footer>
	)
}

export default Footer
