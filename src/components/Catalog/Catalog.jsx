import productData from '../../data/productData'
import Product from '../Product/Product'
import './Catalog.css'

function Catalog({ onView }) {
	return (
		<main className='catalog'>
			<ul className='products'>
				{productData.map(item => (
					<Product productObject={item} onView={onView} />
				))}
			</ul>
		</main>
	)
}

export default Catalog
