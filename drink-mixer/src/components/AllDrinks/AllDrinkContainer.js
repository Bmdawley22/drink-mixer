import React from 'react-router-dom';

import AllDrinksList from './AllDrinksList';
import AllDrinksShow from './AllDrinksShow';

import './AllDrinkContainer.css';

function AllDrinkContainer(props) {
    const index=props.match.params.index;
    return(
        <div className='allDrinkContainer'>
            <AllDrinksList drinks={props.drinks} />
            <AllDrinksShow drinks={props.drinks} drink={props.drinks[index]} />
        </div>
    )
}

export default AllDrinkContainer;