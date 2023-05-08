import React from 'react'
import FieldInput from '../components/atoms/field_input/FieldInput'
import RecipeList from '../components/molecules/recipe_list/RecipeList';

const Home = () => {
    return (
        <div className="px-5 py-5">
            <FieldInput>Masukan keyword....</FieldInput>

            <div className="pt-24">
                <RecipeList />
            </div>
        </div>
    )
}

export default Home