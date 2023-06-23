import { useLocation } from "react-router-dom";

export default function NotFound() {
    const location = useLocation()
    const searchTerm = location.state.message

    return (
        <div style={{ marginTop: '30px' }} className="not-found">
            <h2>0 results found for "{searchTerm}".</h2>
            <p>Please try another search term.</p>
        </div>
    )
}