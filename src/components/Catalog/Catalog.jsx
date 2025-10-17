import productData from '../../data/productData'
import useDebounce from '../../hooks/useDebounce'
import Product from '../Product/Product'
import './Catalog.css'

function Catalog({ onView, searchTerm, addToBasket }) {
	const debounceSearch = useDebounce(searchTerm, 500)
	const getStatusText = soldOut => (soldOut ? 'продана' : 'в наличии')

	return (
		<main className='catalog'>
			<ul className='products'>
				{productData
					.filter(product => {
						const search = debounceSearch.toLowerCase()
						return (
							product.name.toLowerCase().includes(search) ||
							product.description.toLowerCase().includes(search) ||
							getStatusText(product.soldOut).toLowerCase().includes(search)
						)
					})
					.map(item => (
						<Product
							key={item.name}
							productObject={item}
							onView={onView}
							addToBasket={addToBasket}
							item={item}
						/>
					))}
			</ul>
		</main>
	)
}

export default Catalog
