import Form from "../../components/Form";
import { useLocation } from "react-router-dom";

export default function NotFound() {
    const location = useLocation()
    const searchTerm = location.state.message

    return (
        <div className="not-found">
            <Form />
            <h3>0 results found for "{searchTerm}".</h3>
            <p>Please try another search term.</p>
        </div>
    )
}