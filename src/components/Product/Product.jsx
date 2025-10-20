import { useEffect, useRef, useState } from 'react'
import { useFavorites } from '../../favorite/FavoriteContext'
import './Product.css'

function Product({ onView, addToBasket, item }) {
	const [expanded, setExpanded] = useState(false)
	const cardRef = useRef(null)
	const { favorites, toggleFavorites } = useFavorites()

	const isFavorites = favorites.some(p => p.name === item.name)

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
		if (!item.inStock) return
		const next = !expanded
		setExpanded(next)
		if (next) onView(item)
	}

	return (
		<li
			ref={cardRef}
			className={`product ${expanded ? 'expanded' : ''} ${
				!item.inStock ? 'sold-out' : ''
			}`}
			onClick={toggle}
			style={{ cursor: item.inStock ? 'pointer' : 'default' }}
		>
			<div className='product-content'>
				<img src={item.images} alt={item.images} />
				<div>
					<h3>{item.name}</h3>
					<p>{item.description}</p>
					<div className='price-info'>
						<span>{item.price} ₽</span>
						<div className='order-btn'>
							<button
								className='btn-basket'
								onClick={e => {
									e.stopPropagation()
									if (item.inStock) {
										addToBasket(item, e)
									}
								}}
								disabled={!item.inStock}
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
					<p
						className={`status ${item.inStock ? 'in-stock' : 'sold-out-text'}`}
					>
						Статус: {item.inStock ? 'В наличии' : 'Продан'}
					</p>
				</div>

				<button
					className={`fav-btn ${isFavorites ? 'active' : ''}`}
					onClick={e => {
						e.stopPropagation()
						if (item.inStock) {
							toggleFavorites(item)
						}
					}}
					disabled={!item.inStock}
				>
					{isFavorites ? '❤️' : '🤍'}
				</button>
			</div>

			{expanded && (
				<div className='details'>
					{Array.isArray(item.specs) && item.specs.length > 0 ? (
						<ul>
							{item.specs.map((d, i) => (
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
