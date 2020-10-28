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
        <div className='randomDrinkContainer'>
            <h1>Random Drink Generator</h1>
            <button onClick={props.onClick}>Random Drink</button>
            <div className='randomDrink'>
                <h1>{props.randomDrink.strDrink}</h1>
                <div className='randomDrinkWrapper'>
                    <img className='randomImage' src={props.randomDrink.strDrinkThumb} alt={props.randomDrink.strDrink}/>
                    <div>
                    <h2>Ingredients:</h2>
                        <div className='random-ingredient-container'>
                            <div className='measurements'>
                                {measurements.map((measurement, id) => {
                                    return (
                                        <div className='randomMeasure' key={id}>
                                            {measurement ? <li >- {measurement}</li> : null}
                                        </div>
                                    )
                                })}
                            </div>
                            <div className='randomIngredient'>
                                {ingredients.map((ingredient, id) => {
                                    return (
                                        <div key={id}>
                                            {ingredient ? <li >{ingredient}</li> : null}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <h2>Directions: </h2>   
                        <p className='randomDirections'>{props.randomDrink.strInstructions}</p>
                    </div>
                </div>
                <button onClick={() => props.addRandomDrink()}>Add Drink</button>
                {props.message && <h3>{props.message}</h3>}
            </div>
        </div>
    )
}

// export Random Drink
export default RandomDrink;