// styles
import './Form.css'
// hooks
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Form() {
    const [value, setValue] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/search/${value}`)
        setValue("")
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id='input'
                    required
                    placeholder='Search...'
                    value={value}
                    onChange={(e) => setValue(e.target.value)} />
                <button></button>
            </form>
        </>

    )
}