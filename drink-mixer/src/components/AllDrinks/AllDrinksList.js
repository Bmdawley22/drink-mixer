import React from 'react';
import {Link} from 'react-router-dom';
import './AllDrinksList.css';

function AllDrinkList(props) {
    return (
        <div className='AllDrinksList'>
            {props.drinks.map((drink, id) => {
                return(
                    <div className={props.allDrinksActiveDrink===id ? "active" : ""}>
                        <Link 
                            to={'/all-drinks/show-drink/'+id}
                            onClick={()=> props.setActive(id)}
                        >
                           <img src={drink.strDrinkThumb} alt='thumbnail'/>
                            {drink.strDrink} 
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default AllDrinkList;