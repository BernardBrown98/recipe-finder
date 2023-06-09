// styles
import './Form.css'
// hooks
import { useState } from 'react'
import useFetch from '../hooks/useFetch'
// component
import ResultList from './ResultList'

export default function Form() {
    const [url, setUrl] = useState("")
    const [value, setValue] = useState("")
    const [data] = useFetch(url)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
        setValue("")
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id='input'
                    placeholder='Search...'
                    value={value}
                    onChange={(e) => setValue(e.target.value)} />
                <button></button>
            </form>

            {/* optionial chaining "?." to prevent errors */}
            <ResultList data={data?.meals} />
        </>

    )
}