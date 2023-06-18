// hooks
import usePagination from '../hooks/usePagination'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useFetch(url) {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const searchTerm = url.slice(url.indexOf('?s=') + 3)
    const { recipes, setCurrentPage, pages, currentPage, totalPages } = usePagination(8, data)

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true)
            try {
                const res = await fetch(url)
                if (!res.ok) {
                    throw new Error(res.statusText)
                }
                console.log(res)
                const json = await res.json()
                setIsLoading(false)
                if (json.meals === null) {
                    navigate('/not-found', { state: { message: searchTerm } })
                }
                else {
                    setData(json.meals)
                    // resets pagination when current page is higher than 1 and new data is fetched
                    setCurrentPage(1)
                }

            }
            catch (err) {
                console.log(err)
                setIsLoading(false)
            }
        }
        getData()
    }, [url])
    return { isLoading, recipes, setCurrentPage, pages, currentPage, totalPages }
}