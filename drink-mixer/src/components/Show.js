import React from 'react';

function Show(props) {
    let ingredients = [];
    for (let i = 1; i < 16; i++) {
        const temp=`strIngredient${i}`
        ingredients.push(props.drink[temp])
    }
    
    let measures =[];
    for (let i = 1; i < 16; i++) {
        const temp=`strMeasure${i}`
        measures.push(props.drink[temp])
    }
    return(
        <div>
            <div className='addDrinkButton'>
                {props.message !== undefined && <button onClick={() => props.addDrink(props.drink)}>Add Drink</button>}
                {props.message && <h3>{props.message}</h3>}
            </div>
            <div className='drinksShow'>
                <img src={props.drink.strDrinkThumb} alt='showDrinkImg' className='showDrinkImg' />
                <h1>{props.drink.strDrink}</h1>
                <div className='drinkWrapper'>
                    <div className='ingredientWrapper'>
                        <h2>Ingredients</h2>
                        <div className='ingredientContainer'>
                            <div className='ingredientMeasure'>
                                {measures.map((measure,id)=> {
                                    return (
                                        <div key={id}>
                                            {measure && <p>- {measure}</p>}
                                        </div>
                                    )
                                })}
                            </div>
                            <div className='ingredientName'>
                                {ingredients.map((ingredient, id)=> {
                                    return (
                                        <div key={id}>
                                            {ingredient && <p>{ingredient}</p>}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='showDirections'>
                        <h2>Directions</h2>
                        <p>{props.drink.strInstructions}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Show;