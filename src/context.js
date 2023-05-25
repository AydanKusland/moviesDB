import { useState, useContext, createContext } from 'react'
import useFetch from './useFetch'
// make sure to use https

const AppContext = createContext()

const AppProvider = ({ children }) => {
	const [query, setQuery] = useState('batman')
	const { loading, error, data: movies } = useFetch(`&s=${query}`)

	return (
		<AppContext.Provider value={{ loading, error, movies, query, setQuery }}>
			{children}
		</AppContext.Provider>
	)
}
// make sure use
export const useGlobalContext = () => {
	return useContext(AppContext)
}

export { AppProvider }
