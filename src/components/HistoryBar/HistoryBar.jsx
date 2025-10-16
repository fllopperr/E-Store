import { useEffect, useRef, useState } from 'react'
import './HistoryBar.css'

function HistoryBar({ lastViewed, addToBasket }) {
	const [history, setHistory] = useState([])
	const sliderRef = useRef(null)

	// Добавляем просмотренный товар в историю
	useEffect(() => {
		if (lastViewed) {
			setHistory(prev => {
				const filtered = prev.filter(item => item.name !== lastViewed.name)
				return [lastViewed, ...filtered].slice(0, 10)
			})
		}
	}, [lastViewed])

	function removeHistoryEl(removeItem) {
		setHistory(prev => prev.filter(item => item.name !== removeItem.name))
	}

	const scroll = direction => {
		if (!sliderRef.current) return
		const scrollAmount = 220
		const slider = sliderRef.current

		if (direction === 'left') {
			if (slider.scrollLeft <= 0) {
				slider.scrollLeft = slider.scrollWidth - slider.clientWidth
			} else {
				slider.scrollLeft -= scrollAmount
			}
		} else {
			if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 10) {
				slider.scrollLeft = 0
			} else {
				slider.scrollLeft += scrollAmount
			}
		}
	}

	return (
		<div className='history'>
			<div className='history-container'>
				<button className='slider-btn prev' onClick={() => scroll('left')}>
					<svg width='16' height='16' viewBox='0 0 24 24' fill='currentColor'>
						<path d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z' />
					</svg>
				</button>

				<div className='history-slider' ref={sliderRef}>
					{history.length > 0 &&
						history.map((item, index) => (
							<div key={`${item.name}-${index}`} className='last-viewed'>
								<img src={item.photoName} alt={item.name} />
								<p>{item.description}</p>
								<div className='order-info'>
									<div className='order-price'>
										<span>{item.price} ₽</span>
									</div>
									<div className='order-btn'>
										<button className='btn' onClick={e => addToBasket(item, e)}>
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
								<button className='trash' onClick={() => removeHistoryEl(item)}>
									<img src='./trash.svg' alt='delete' />
								</button>
							</div>
						))}
				</div>

				<button className='slider-btn next' onClick={() => scroll('right')}>
					<svg width='16' height='16' viewBox='0 0 24 24' fill='currentColor'>
						<path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' />
					</svg>
				</button>
			</div>
		</div>
	)
}

export default HistoryBar
