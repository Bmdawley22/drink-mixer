// import React 
import React from 'react';

// function base
const RandomDrink = (props) => {
    console.log(props)
    let ingredients = [];
    for (let i = 1; i < 16; i++) {
        const temp=`strIngredient${i}`
        ingredients.push(props.randomDrink[temp])
    }

     console.log(ingredients);

    return (
        <div>
            <h1>Random Drink Generator</h1>
            <div className="drinkWrapper">
                <div className="drinkInfo">
                    <h2>{props.randomDrink.strDrink}</h2>
                    <p>Ingredients:</p>
                    {ingredients.map((ingredient, id) => {
                        return (
                            <div>
                                {ingredient ? <li key={id}>{ingredient}</li> : null}
                            </div>
                        )
                    })}
                    <p>{props.randomDrink.strInstructions}</p>
                </div>
                <img src={props.randomDrink.strDrinkThumb} alt={props.randomDrink.strDrink}/>
            </div>
        </div>
        )
}

// export 
export default RandomDrink;