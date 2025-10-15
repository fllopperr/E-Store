import './HistoryBar.css'

function HistoryBar({ lastViewed }) {
	return (
		<footer className='history'>
			{lastViewed ? (
				<div className='last-viewed'>
					<img src={lastViewed.photoName} alt={lastViewed.name} />
					<h3>{lastViewed.name}</h3>
					<div className='order'>
						<button className='btn'>Заказать сейчас</button>
					</div>
					<div>
						<span>{lastViewed.price}</span>
					</div>
				</div>
			) : (
				<p>@flopper75</p>
			)}
		</footer>
	)
}

export default HistoryBar
