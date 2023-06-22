// styles
import './Form.css'
// hooks
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Form({ open, setOpen }) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [value, setValue] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/search/${value}`)
        setValue("")
    }

    useEffect(() => {
        const handleWidthChange = () => setWindowWidth(window.innerWidth)
        window.addEventListener('resize', handleWidthChange)
        windowWidth > 414 && open === true && setOpen(false)
    }, [windowWidth])

    return (
        <>
            <form onSubmit={handleSubmit} className={open ? 'open form' : 'closed form'}>
                <input
                    type="text"
                    id='input'
                    required
                    placeholder='Search...'
                    value={value}
                    onChange={(e) => setValue(e.target.value)} />
                <button></button>
            </form>
            <span className={open ? 'open span' : 'closed span'} onClick={() => setOpen(!open)}></span>
        </>
    )
}