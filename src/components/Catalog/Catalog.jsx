import { useEffect, useMemo, useState } from 'react'
import useDebounce from '../../hooks/useDebounce'
import { getProducts } from '../api/product'
import Product from '../Product/Product'
import './Catalog.css'

function Catalog({ onView, searchTerm, addToBasket }) {
	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(false)

	const debounceSearch = useDebounce(searchTerm, 500)
	const getStatusText = soldOut => (soldOut ? 'продана' : 'в наличии')

	useEffect(() => {
		const loadProducts = async () => {
			setLoading(true)
			try {
				const products = await getProducts()
				setProducts(products)
			} catch (error) {
				console.error('Ошибка загрузки товаров:', error)
			} finally {
				setLoading(false)
			}
		}

		loadProducts()
	}, [])

	const filteredProducts = useMemo(() => {
		return products.filter(product => {
			const search = debounceSearch.toLowerCase().trim()
			return (
				product.name.toLowerCase().includes(search) ||
				product.description.toLowerCase().includes(search) ||
				getStatusText(product.soldOut).toLowerCase().includes(search)
			)
		})
	}, [debounceSearch, products])

	if (loading) {
		return <div className='loading'>Загрузка товаров...</div>
	}

	return (
		<main className='catalog'>
			<ul className='products'>
				{filteredProducts.map(item => (
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
