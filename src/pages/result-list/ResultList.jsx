// styles
import './ResultList.css'
// hooks
import { Link, useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
// components
import Form from '../../components/Form'
import Pagination from '../../components/Pagination'
import Spinner from '../../components/Spinner'

export default function ResultList() {
    const { searchTerm } = useParams()
    console.log(searchTerm)
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
    const { isLoading, recipes, setCurrentPage, pages, currentPage, totalPages } = useFetch(url)

    return (
        <>
            <Form />
            {isLoading && <Spinner />}
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
            <Pagination
                pages={pages}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                totalPages={totalPages} />
        </>

    )
}