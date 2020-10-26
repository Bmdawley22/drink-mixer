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

console.log(props)

    return (
        <div>
            <h1>Random Drink Generator</h1>
            <button onClick={props.onClick}>Random Drink</button>
            <h2>{props.randomDrink.strDrink}</h2>
            <div className="drinkWrapper">
                <div className="drinkInfo">
                    <img className="randomDrink" src={props.randomDrink.strDrinkThumb} alt={props.randomDrink.strDrink}/>
                    <div className="ingredient-container">
                        <h3>Ingredients: </h3>
                        <div className="measurements">
                            {measurements.map((measurement, id) => {
                                return (
                                    <div>
                                        {measurement ? <li key={id}>{measurement}</li> : null}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="ingredient">
                            {ingredients.map((ingredient, id) => {
                                return (
                                    <div>
                                        {ingredient ? <li key={id}>{ingredient}</li> : null}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <h3>Directions: </h3>   
                    <p>{props.randomDrink.strInstructions}</p>
                </div>
            </div>
            <button>Add Drink</button>
        </div>
    )
}

// export 
export default RandomDrink;