// import React 
import React from 'react';

// function base
const RandomDrink = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Random Drink Generator</h1>
            <h2>{props.randomDrink.strDrink}</h2>
            <img src={props.randomDrink.strDrinkThumb} alt={props.randomDrink.strDrink}/>
        </div>
        )
}

// export 
export default RandomDrink;