import React from 'react';
import recipes from '../recipes'; // Adjust the import path as necessary 

function Main() {
    return (
        <div className="recipes">
            {recipes.map(recipe => (
                <div className="recipe" key={recipe.id}>
                    <img src={recipe.image} alt={recipe.title} className="recipe-image" />
                    <h3 className="recipe-title">{recipe.title}</h3>
                    <p className="recipe-description">{recipe.description}</p>
                    <span className="recipe-price">${recipe.price.toFixed(2)}</span>
                    <button className="order-button">Order Online</button>
                </div>
            ))}
        </div>
    );
}

export default Main;