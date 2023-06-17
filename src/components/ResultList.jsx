// hooks
import { Link, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
// styles
import './ResultList.css'
// components
import Form from './Form'

export default function ResultList() {
    const { searchTerm } = useParams()
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
    const { data, isLoading } = useFetch(url)

    // optionial chaining "?." to prevent errors
    const recipes = data?.meals

    return (
        <>
            <Form />
            {isLoading && <p>Loading....</p>}
            <main className='grid'>
                {recipes && recipes.map(recipe => (
                    <div key={recipe.idMeal} className='recipes'>
                        <Link to={`/recipes/${recipe.idMeal}`}>
                            <div className='img-container'>
                                <img src={recipe.strMealThumb} alt="" />
                            </div>
                        </Link>
                        <div className='text-container'>
                            <p>{recipe.strArea}</p>
                            <h3>{recipe.strMeal}</h3>
                        </div>
                    </div>
                ))}
            </main>
        </>

    )
}