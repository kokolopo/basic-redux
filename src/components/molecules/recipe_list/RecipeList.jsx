import React, { useEffect } from 'react'
import RecipeCard from '../../atoms/recipe_card/RecipeCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from "../../../slices/recipeSlice";
import { Link } from 'react-router-dom';

const RecipeList = () => {
    const dispatch = useDispatch()
    const { recipes, loading, error } = useSelector(state => state.recipes)

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])

    if (loading) {
        return <div className='flex justify-center items-center'>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="container flex flex-wrap gap-3 pt-14">
            {
                recipes.map((item, index) => (
                    <Link to={`/detail/${item.id}`}>
                        <RecipeCard key={index}>
                            <RecipeCard.Header>{item.name}</RecipeCard.Header>
                            <RecipeCard.Subtitle>{item.email}</RecipeCard.Subtitle>
                        </RecipeCard>
                    </Link>

                ))
            }
        </div>
    )
}

export default RecipeList