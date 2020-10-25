// import React 
import React from 'react';

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
        <div>
            <h1 className="randomDrink">Random Drink Generator</h1>
            <button onClick={props.onClick}>Random Drink</button>
            <div className="drinkWrapper">
                <h2>{props.randomDrink.strDrink}</h2>
                <div className="drinkInfo">
                <img className="randomImage" src={props.randomDrink.strDrinkThumb} alt={props.randomDrink.strDrink}/>
                    <div className="ingredient-container">
                        <h3>Ingredients:</h3>
                        <div className="measurements">
                            {measurements.map((measurement, id) => {
                                return (
                                    <div className="measure">
                                        {measurement ? <li key={id}>{measurement}</li> : null}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="ingredients">
                            {ingredients.map((ingredient, id) => {
                                return (
                                    <div>
                                        {ingredient ? <li key={id}>{ingredient}</li> : null}
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
        </div>
    )
}

// export 
export default RandomDrink;