import React from 'react';

import './AllDrinksList.css';

function AllDrinkList(props) {
    return (
        <div className='AllDrinksList'>
            {props.drinks.map((drink, id) => {
                return(
                    <div>
                        <img src={drink.strDrinkThumb} alt='thumbnail'/>
                        {drink.strDrink}
                    </div>
                )
            })}
        </div>
    )
}

export default AllDrinkList;