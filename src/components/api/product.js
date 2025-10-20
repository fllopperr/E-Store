export const PRODUCT_URL =
	process.env.REACT_APP_PRODUCT_URL ||
	'https://raw.githubusercontent.com/fllopperr/estore-data/refs/heads/main/product.json'

export const getProducts = async () => {
	try {
		const response = await fetch(PRODUCT_URL)

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`)
		}

		const products = await response.json()
		return products
	} catch (error) {
		console.error(`Ошибка при загрузке product.json:`, error)
		return []
	}
}
