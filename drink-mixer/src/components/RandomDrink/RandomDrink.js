// import React 
import React from 'react';

// import Random drink styling page
import './RandomDrink.css';

// function base
const RandomDrink = (props) => {
    // creating a new array for just the ingredients in each random drink
    let ingredients = [];
    for (let i = 1; i < 16; i++) {
        const temp = `strIngredient${i}`;
        ingredients.push(props.randomDrink[temp]);
    }

    // creating a new array for just the measurements in each random drink
    let measurements = [];
    for (let i = 1; i < 16; i++) {
        const temp = `strMeasure${i}`;
        measurements.push(props.randomDrink[temp]);
    }

    return (
        <div className="randomDrinkContainer">
            <h1 className="randomDrink">Random Drink Generator</h1>
            <button onClick={props.onClick}>Random Drink</button>
            <h2>{props.randomDrink.strDrink}</h2>
            <div className="drinkWrapper">
                <img className="randomImage" src={props.randomDrink.strDrinkThumb} alt={props.randomDrink.strDrink}/>
                <div>
                <h3>Ingredients:</h3>
                    <div className="ingredient-container">
                        <div className="measurements">
                            {measurements.map((measurement, id) => {
                                return (
                                    <div className="measure" key={id}>
                                        {measurement ? <li >- {measurement}</li> : null}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="ingredient">
                            {ingredients.map((ingredient, id) => {
                                return (
                                    <div key={id}>
                                        {ingredient ? <li >{ingredient}</li> : null}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <br />
                    <h3>Directions: </h3>   
                    <p>{props.randomDrink.strInstructions}</p>
                </div>
            </div>
            <button onClick={() => props.addRandomDrink()}>Add Drink</button>
            {props.message && <h3>{props.message}</h3>}
        </div>
    )
}

// export 
export default RandomDrink;