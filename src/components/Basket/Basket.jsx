import BasketSideBar from '../BasketSideBar/BasketSideBar'
import './Basket.css'

function Basket({ basketAdd, addToBasket, decrementBasket, setBasketAdd }) {
	const removeFromBasket = itemToRemove => {
		setBasketAdd(prev => prev.filter(item => item.name !== itemToRemove.name))
	}
	return (
		<div className='basket-container'>
			<div className='order-container'>
				{basketAdd.length > 0 ? (
					basketAdd.map((item, index) => (
						<div key={`${item.name}-${index}`} className='basket-item'>
							<img src={item.photoName} alt={item.name} />
							<div className='basket-info'>
								<p>{item.description}</p>
								<div className='order-info'>
									<div className='order-price'>
										<span>{item.currentPrice} ₽</span>
										<div className='quantity-controls'>
											<button
												className='decrement'
												onClick={e => decrementBasket(item, e)}
											>
												-
											</button>
											<span className='quantity'>{item.count}</span>
											<button
												className='increment'
												onClick={e => addToBasket(item, e)}
											>
												+
											</button>
										</div>
									</div>
								</div>
							</div>
							<button
								className='trash-basket'
								onClick={() => removeFromBasket(item)}
							>
								<img src='./trash.svg' alt='delete' />
							</button>
						</div>
					))
				) : (
					<p>Корзина пуста</p>
				)}
			</div>
			<div className='basket-sidebar'>
				<BasketSideBar basketItems={basketAdd} />
			</div>
		</div>
	)
}

export default Basket
