import { useEffect, useState } from "react";

export default function useFetch(url) {
    const [data, setData] = useState(null)

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch(url)
                const json = await res.json()
                setData(json)
            }
            catch (err) {
                console.log(err)
            }
        }
        getData()
    }, [url])

    return [data]
}