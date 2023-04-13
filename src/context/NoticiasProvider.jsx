import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const NoticiasContext = createContext()





const NoticiasProvider = ({ children }) => {

    const [category, setCategory] = useState('general')
    const [country, setCountry] = useState('us')
    const [news, setNews] = useState([])
    const [page, setPage] = useState(1)
    const [totalNotice, setTotalNotice] = useState(0)

    useEffect(() => {

        const consultarAPI = async () => {

            const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`

            const { data } = await axios(url)

            setNews(data.articles)
            setTotalNotice(data.totalResults)
            setPage(1)
        }
        consultarAPI()

    }, [category, country])

    useEffect(() => {

        const consultarAPI = async () => {

            const url = `https://newsapi.org/v2/top-headlines?country=us&page=${page}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`

            const { data } = await axios(url)

            setNews(data.articles)
            setTotalNotice(data.totalResults)
        }
        consultarAPI()

    }, [page])

    const handleChangeCategory = e => {
        setCategory(e.target.value)
    }
    
    const handleChangeCountry = e => {
        setCountry(e.target.value)
    }

    const handleChangePage = (e, valor) => {
        // MUI manda e.target.value pero manda un segundo valor, que es el que nos conviene usar en este caso
        setPage(valor)
    }

    return (
        <NoticiasContext.Provider
            value={{
                category,
                handleChangeCategory,
                news,
                totalNotice,
                handleChangePage,
                page,
                country,
                handleChangeCountry
            }}
        >
            {children}
        </NoticiasContext.Provider>
    )
}

export {
    NoticiasProvider
}

export default NoticiasContext