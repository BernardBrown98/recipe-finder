// styles
import './Recipe.css'
// hooks
import { useState } from 'react'
import useFetch from "../../hooks/useFetch"
import { useParams } from "react-router-dom"

export default function Recipe() {
    const { id } = useParams()
    const [url, setUrl] = useState("")

    return (
        <div>
            <h2>{id}</h2>
        </div>
    )
}