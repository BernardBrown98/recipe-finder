// hooks
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { useEffect, useState } from 'react'
// components
import Form from '../../components/Form'
import Pagination from '../../components/Pagination'
import Spinner from '../../components/Spinner'
import Results from '../../components/Results'

export default function ResultList() {
    const { searchTerm, area } = useParams()
    console.log("NEW LOAD")
    const path = () => {
        return area === undefined ?
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
            :
            `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
    }
    const [url, setUrl] = useState(path)
    const { isLoading, recipes, setCurrentPage, pages, currentPage, totalPages } = useFetch(url)

    useEffect(() => {
        setUrl(path)
    }, [searchTerm])


    return (
        <>
            <Form />
            {isLoading && <Spinner />}
            {area && <h2 style={{ marginTop: '30px' }}>{area} Recipes</h2>}
            <main className='grid'>
                {recipes && recipes.map(recipe => (
                    <Results key={recipe.idMeal} {...recipe} />
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