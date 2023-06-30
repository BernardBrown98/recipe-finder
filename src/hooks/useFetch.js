// hooks
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useFetch(url) {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const searchTerm = url.slice(url.indexOf('?s=') + 3)

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true)
            try {
                const res = await fetch(url)
                if (!res.ok) {
                    throw new Error(res.statusText)
                }
                const json = await res.json()
                setIsLoading(false)
                if (json.meals === null) {
                    navigate('/not-found', { state: { message: searchTerm }, replace: true })
                }
                else {
                    setData(json.meals)
                }

            }
            catch (err) {
                console.log(err)
                setIsLoading(false)
            }
        }
        getData()
    }, [url])
    return { isLoading, recipes: data, data: data?.[0] }
}