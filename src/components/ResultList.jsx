// styles
import './ResultList.css'

export default function ResultList({ data: recipes }) {

    console.log(recipes)

    return (
        <main className='grid'>
            {recipes && recipes.map(recipe => (
                <div key={recipe.idMeal} className='recipes'>
                    <div className='img-container'>
                        <img src={recipe.strMealThumb} alt="" />
                    </div>
                    <div className='text-container'>
                        <p>{recipe.strArea}</p>
                        <h3>{recipe.strMeal}</h3>
                    </div>
                </div>
            ))}
        </main>
    )
}