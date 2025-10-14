import { createContext, useContext, useState } from 'react'

const FavoriteContext = createContext()
export const useFavorites = () => useContext(FavoriteContext)

function FavoriteProvider({ children }) {
	const [favorites, setFavorites] = useState([])

	const toggleFavorites = product => {
		setFavorites(prev => {
			const exists = prev.find(p => p.name === product.name)
			if (exists) {
				return prev.filter(p => p.name !== product.name)
			} else {
				return [...prev, product]
			}
		})
	}

	const value = {
		favorites,
		toggleFavorites,
		count: favorites.length,
	}

	return (
		<FavoriteContext.Provider value={value}>
			{children}
		</FavoriteContext.Provider>
	)
}

export default FavoriteProvider
