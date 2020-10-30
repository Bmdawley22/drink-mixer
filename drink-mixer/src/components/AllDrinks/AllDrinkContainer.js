// import React
import React from 'react';

// import List and Show
import List from '../List';
import Show from '../Show';

// passing information from List and Show
function AllDrinkContainer(props) {
    const index = props.match.params.index;
    return(
        <div className='drinkContainer'>
            <List drinks={props.drinks} setActive={props.setActive} activeDrinkId={props.activeDrinkId}/>
            <Show drinks={props.drinks} drink={props.drinks[index]} />
        </div>
    )
}

// export AllDrink Container
export default AllDrinkContainer;