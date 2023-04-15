import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const NoticiasContext = createContext()

const NoticiasProvider = ({ children }) => {

    const [category, setCategory] = useState('all')
    const [news, setNews] = useState([])

    useEffect(() => {

        const consultarAPI = async () => {

            // const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
            const url = `https://inshorts.deta.dev/news?category=${category}`
            

            const { data } = await axios(url)

            setNews(data.data)
        }
        consultarAPI()

    }, [category])


    const handleChangeCategory = e => {
        setCategory(e.target.value)
    }

    return (
        <NoticiasContext.Provider
            value={{
                category,
                handleChangeCategory,
                news,
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