import { useEffect, useRef, useState } from 'react'
import { useFavorites } from '../../favorite/FavoriteContext'
import './Product.css'

function Product({ productObject, onView, addToBasket, item }) {
	const { name, price, description, photoName, soldOut, details } =
		productObject
	const [expanded, setExpanded] = useState(false)
	const cardRef = useRef(null)
	const { favorites, toggleFavorites } = useFavorites()

	const isFavorites = favorites.some(p => p.name === name)

	useEffect(() => {
		if (expanded && cardRef.current) {
			cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
			const timer = setTimeout(() => {
				setExpanded(false)
			}, 10_000)
			return () => clearTimeout(timer)
		}
	}, [expanded])

	const toggle = () => {
		if (soldOut) return

		const next = !expanded
		setExpanded(next)
		if (next) onView(productObject)
	}

	return (
		<li
			ref={cardRef}
			className={`product ${expanded ? 'expanded' : ''} ${
				soldOut ? 'sold-out' : ''
			}`}
			onClick={toggle}
			style={{ cursor: soldOut ? 'default' : 'pointer' }}
		>
			<div className='product-content'>
				<img src={photoName} alt={photoName} />
				<div>
					<h3>{name}</h3>
					<p>{description}</p>
					<div className='price-info'>
						<span>{price} ₽</span>
						<div className='order-btn'>
							<button
								className='btn-basket'
								onClick={e => {
									e.stopPropagation()
									if (!soldOut) {
										addToBasket(item, e)
									}
								}}
								disabled={soldOut}
							>
								<svg
									width='20'
									height='20'
									viewBox='0 0 24 24'
									fill='currentColor'
								>
									<path d='M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z' />
								</svg>
							</button>
						</div>
					</div>
					<p className={`status ${soldOut ? 'sold-out-text' : 'in-stock'}`}>
						Статус: {soldOut ? 'Продан' : 'В наличии'}
					</p>
				</div>

				<button
					className={`fav-btn ${isFavorites ? 'active' : ''}`}
					onClick={e => {
						e.stopPropagation()
						if (!soldOut) {
							toggleFavorites(productObject)
						}
					}}
					disabled={soldOut}
				>
					{isFavorites ? '❤️' : '🤍'}
				</button>
			</div>

			{expanded && (
				<div className='details'>
					{Array.isArray(details) && details.length > 0 ? (
						<ul>
							{details.map((d, i) => (
								<li key={i}>{d}</li>
							))}
						</ul>
					) : (
						<p>Подробности позже...</p>
					)}
				</div>
			)}
		</li>
	)
}

export default Product
