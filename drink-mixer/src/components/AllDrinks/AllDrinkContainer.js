import React from 'react-router-dom';

function AllDrinkContainer(props) {
    const index=props.match.params.index;
    return(
        <div>
            <p>{props.drinks[index].strDrink}</p>
        </div>
    )
}

export default AllDrinkContainer;