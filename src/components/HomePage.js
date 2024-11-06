import React, { useReducer } from 'react';
import recipes from '../recipes'; // Adjust the import path as necessary
import BookingPage from './BookingPage';

// Initialize available times (could be based on some API or initial values)
const initializeTimes = () => {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

// Reducer function to update available times (for now, it returns the same times regardless of the date)
const timesReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return initializeTimes(); // For now, just return the initial state
        default:
            return state;
    }
};

function Main() {

    const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);

    const updateTimes = (selectedDate) => {
        dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
    };

    return (

        <div className="main-container">
            <BookingPage availableTimes={availableTimes} updateTimes={updateTimes} />

            {recipes.map(recipe => (
                <div className="card" key={recipe.id}>
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