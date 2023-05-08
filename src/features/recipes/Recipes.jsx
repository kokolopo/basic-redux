import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './recipesSlice';

const Recipes = () => {
    const dispatch = useDispatch();
    const { recipes, loading, error } = useSelector((state) => state.recipes);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Product List</h2>
            {recipes.map((product) => (
                <div key={product.id}>
                    <h3>{product.title}</h3>
                    <p>{product.category}</p>
                    <p>{product.like}</p>
                </div>
            ))}
        </div>
    )
}

export default Recipes