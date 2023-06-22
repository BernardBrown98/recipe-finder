// hooks
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { useEffect, useState } from 'react'
// components
import Pagination from '../components/Pagination'
import Spinner from '../components/Spinner'
import Results from '../components/Results'

export default function ResultList() {
    const { searchTerm, area } = useParams()
    const path = () => {
        if (searchTerm === undefined && area === undefined) return `https://www.themealdb.com/api/json/v2/9973533/latest.php`
        return area === undefined ?
            `https://www.themealdb.com/api/json/v2/9973533/search.php?s=${searchTerm}`
            :
            `https://www.themealdb.com/api/json/v2/9973533/filter.php?a=${area}`
    }
    const [url, setUrl] = useState(path)
    const { isLoading, recipes, setCurrentPage, pages, currentPage, totalPages, handlePageChange } = useFetch(url)

    useEffect(() => {
        setUrl(path)
    }, [searchTerm])


    return (
        <div style={{ paddingInline: '30px', maxWidth: '1280px', margin: '0 auto' }}>
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
                totalPages={totalPages}
                handlePageChange={handlePageChange} />
        </div >

    )
}