// styles
import './Results.css'
// hooks
import { Link, useParams } from 'react-router-dom'

export default function Results({ idMeal, strMeal, strMealThumb, strArea }) {
    const { area } = useParams()

    return (
        <div className='recipes'>
            <Link to={`/recipes/${idMeal}`} replace>
                <div className='img-container'>
                    <img src={strMealThumb} alt="" />
                </div>
            </Link>
            <div className='text-container'>
                {area && <Link to={`/area/${area}`}><p>{area}</p></Link>}
                {strArea && <Link to={`/area/${strArea}`}><p>{strArea}</p></Link>}
                <h3>{strMeal}</h3>
            </div>
        </div>
    )
}