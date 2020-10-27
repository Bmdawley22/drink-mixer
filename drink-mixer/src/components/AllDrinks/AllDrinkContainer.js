import React from 'react-router-dom';

import AllDrinksList from './AllDrinksList';
import Show from '../Show';

import './AllDrinkContainer.css';

function AllDrinkContainer(props) {
    const index=props.match.params.index;
    return(
        <div className='allDrinkContainer'>
            <AllDrinksList drinks={props.drinks} setActive={props.setActive} allDrinksActiveDrink={props.allDrinksActiveDrink}/>
            <Show drinks={props.drinks} drink={props.drinks[index]} />
        </div>
    )
}

export default AllDrinkContainer;