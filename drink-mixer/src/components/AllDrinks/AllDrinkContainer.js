import React from 'react-router-dom';

import List from '../List';
import Show from '../Show';

import './AllDrinkContainer.css';

function AllDrinkContainer(props) {
    const index=props.match.params.index;
    return(
        <div className='allDrinkContainer'>
            <List drinks={props.drinks} setActive={props.setActive} activeDrinkId={props.activeDrinkId}/>
            <Show drinks={props.drinks} drink={props.drinks[index]} />
        </div>
    )
}

export default AllDrinkContainer;