import React from 'react';

import BySpiritList from './BySpiritList';
import BySpiritShow from './BySpiritShow';

import '../AllDrinks/AllDrinkContainer.css';

function BySpiritContainer(props) {
    console.log(props)

    return(
        <div className='allDrinkContainer'>
            <BySpiritList drinks={props.drinks} setActive={props.setActive} bySpiritActiveDrink={props.bySpiritActiveDrink}/>
        </div>
    )
}

export default BySpiritContainer;