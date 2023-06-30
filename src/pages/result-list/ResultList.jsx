// styles
import './ResultList.css'
// hooks
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { useEffect, useState } from 'react'
// components
import Spinner from '../../components/Spinner'
import Results from '../../components/Results'

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
    const { isLoading, recipes } = useFetch(url)

    const recipesPerLoad = 16
    const [next, setNext] = useState(recipesPerLoad) //16 is the amount of inital recipes and amount of recipes loaded in
    useEffect(() => {
        setUrl(path)
    }, [searchTerm])

    return (
        <div className='result-list' >
            {isLoading && <Spinner />}
            {area && <h2 style={{ marginTop: '30px' }}>{area} Recipes</h2>}
            <main className='grid'>
                {recipes && recipes.slice(0, next)?.map(recipe => (
                    <Results key={recipe.idMeal} {...recipe} />
                ))}
            </main>

            {next < recipes?.length &&
                <button
                    className='btn'
                    onClick={() => setNext(prevNext => prevNext + recipesPerLoad)}>
                    Load More
                </button>
            }
        </div >

    )
}