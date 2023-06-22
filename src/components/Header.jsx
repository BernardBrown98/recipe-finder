//styles 
import './Header.css'
// components
import Form from './Form'
// hooks
import { useState } from 'react'

export default function Headers() {
    const [open, setOpen] = useState(false)

    return (
        <header>
            <div className='header-container'>
                <h1 className={open ? 'closed h1' : 'open h1'}>Recipe Finder</h1>
                {open && <button id='cross' onClick={() => setOpen(!open)}></button>}
                <Form open={open} setOpen={setOpen} />
            </div>
        </header>
    )
}