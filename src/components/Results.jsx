// styles
import './Results.css'
// hooks
import { Link, useParams } from 'react-router-dom'

export default function Results({ idMeal, strMeal, strMealThumb, strArea }) {
    const { area } = useParams()

    return (
        <div className='recipes'>
            <Link to={`/recipes/${idMeal}`} >
                <div className='img-container'>
                    <img src={strMealThumb} alt="" />
                </div>
            </Link>
            <div className='text-container'>
                {area && <Link to={`/area/${area}`}><p>{area}</p></Link>}
                {strArea && <Link to={`/area/${strArea}`}><p>{strArea}</p></Link>}
                <Link to={`/recipes/${idMeal}`}><h3>{strMeal}</h3></Link>
            </div>
        </div>
    )
}