import productData from '../../data/productData'
import useDebounce from '../../hooks/useDebounce'
import Product from '../Product/Product'
import './Catalog.css'

function Catalog({ onView, searchTerm, addToBasket }) {
	const debounceSearch = useDebounce(searchTerm, 500)

	return (
		<main className='catalog'>
			<ul className='products'>
				{productData
					.filter(product =>
						product.name.toLowerCase().includes(debounceSearch.toLowerCase())
					)
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
