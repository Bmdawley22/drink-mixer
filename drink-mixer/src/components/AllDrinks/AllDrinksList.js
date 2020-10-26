import React from 'react';
import {Link} from 'react-router-dom';
import './AllDrinksList.css';

function AllDrinkList(props) {
    return (
        <div className='AllDrinksList'>
            {props.drinks.map((drink, id) => {
                return(
                    <Link 
                        to={'/all-drinks/show-drink/'+id}
                        onClick={()=> props.setActive(id)}
                    >
                        <div className={props.allDrinksActiveDrink===id ? "active" : ""}> 
                            <img src={drink.strDrinkThumb} alt='thumbnail' className='thumbnail'/>
                            {drink.strDrink} 
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default AllDrinkList;