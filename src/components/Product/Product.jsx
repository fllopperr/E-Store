import { useEffect, useRef, useState } from 'react'
import { useFavorites } from '../../favorite/FavoriteContext'
import './Product.css'

function Product({ productObject, onView }) {
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
		const next = !expanded
		setExpanded(next)
		if (next) onView(productObject)
	}

	return (
		<li
			ref={cardRef}
			className={`product ${soldOut ? 'Продан' : ''} ${
				expanded ? 'В наличии' : ''
			}}`}
			onClick={toggle}
			style={{ cursor: 'pointer' }}
		>
			<img src={photoName} alt={photoName} />
			<div>
				<h3>{name}</h3>
				<p>{description}</p>
				<span>{price}</span>
				<p className='status'>Статус: {soldOut ? 'Продан' : 'В наличии'}</p>
				<button
					className={`fav-btn ${isFavorites ? 'active' : ''}`}
					onClick={e => {
						e.stopPropagation()
						toggleFavorites(productObject)
					}}
				>
					{isFavorites ? '❤️' : '🤍'}
				</button>
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
			</div>
		</li>
	)
}

export default Product
