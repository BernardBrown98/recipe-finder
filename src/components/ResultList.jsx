// styles
import './ResultList.css'

export default function ResultList({ data: recipes }) {

    console.log(recipes)

    return (
        recipes && recipes.map(recipe => (
            <div key={recipe.idMeal} className='recipes'>
                <img src={recipe.strMealThumb} alt="" />
                <h2>{recipe.strArea}</h2>
                <h3>{recipe.strMeal}</h3>
            </div>
        ))
    )
}