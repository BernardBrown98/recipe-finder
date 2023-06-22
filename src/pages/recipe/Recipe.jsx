// styles
import './Recipe.css'
// hooks
import useFetch from "../../hooks/useFetch"
import { useParams } from "react-router-dom"
// components
import Spinner from '../../components/Spinner'

export default function Recipe() {
    const { id } = useParams()
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    const { isLoading, data } = useFetch(url)

    const ingredients = []
    // combine seperate data object values into a single string and add them into ingredients array to be mapped over
    for (let i = 1; i <= 20; i++) {
        if (data && data[`strIngredient${i}`] !== "" && data[`strIngredient${i}`] !== null) {
            ingredients[i - 1] = data[`strMeasure${i}`] + ' ' + data[`strIngredient${i}`]
        }
    }

    return (
        data && (
            <div className='recipe-container'>
                <div className='recipe'>
                    {isLoading && <Spinner />}
                    <h2>{data.strMeal}</h2>
                    <div className='iframe-container'>
                        <iframe src={data.strYoutube.replace('watch?v=', 'embed/') + '?autoplay=1&mute=1'}></iframe>
                    </div>
                    <h3>Ingredients</h3>
                    <ul>
                        {ingredients.map((ing, idx) => (
                            <li key={idx}><span>{ing}</span></li>
                        ))}
                    </ul>
                    <h3>Directions</h3>
                    <p>{data.strInstructions}</p>
                </div>
            </div>


        )

    )
}