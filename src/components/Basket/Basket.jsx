import './Basket.css'

function Basket({ basketAdd }) {
	return (
		<div className='basket-container'>
			{basketAdd.length > 0 ? (
				basketAdd.map((item, index) => (
					<div key={`${item.name}-${index}`} className='basket-item'>
						<img src={item.photoName} alt={item.name} />
						<div className='basket-info'>
							<p>{item.description}</p>
							<div className='order-info'>
								<div className='order-price'>
									<span>{item.currentPrice} ₽</span>
									<span className='quantity'>Количество: {item.count}</span>
								</div>
							</div>
						</div>
					</div>
				))
			) : (
				<p>Корзина пуста</p>
			)}
		</div>
	)
}

export default Basket
