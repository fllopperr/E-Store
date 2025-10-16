function BasketSideBar({ basketItems = [] }) {
	const totalItems = basketItems.reduce(
		(sum, item) => sum + (item.count || 0),
		0
	)
	const totalPrice = basketItems.reduce(
		(sum, item) => sum + (item.currentPrice || 0) * (item.count || 0),
		0
	)

	return (
		<aside className='form-buy'>
			<form>
				<h2>Детали заказа</h2>
				<p>{totalItems} товаров</p>
				<h3>
					<span>Итого:</span>
					<span>{totalPrice} ₽</span>
				</h3>
				<button type='button' disabled={totalItems === 0}>
					{totalItems === 0 ? 'Корзина пуста' : 'Перейти к оформлению'}
				</button>
			</form>
		</aside>
	)
}
export default BasketSideBar
