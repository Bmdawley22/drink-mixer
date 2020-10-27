import React from 'react';
import {Link} from 'react-router-dom';
import './AllDrinks/AllDrinksList.css';

function List(props) {
    return (
        <div className='AllDrinksList'>
            {props.drinks.map((drink, id) => {
                return(
                    <Link 
                        to={props.onListClick ? '/by-spirit/show-drink/'+id : '/all-drinks/show-drink/'+id}
                        onClick={props.onListClick ? ()=> props.onListClick(id, drink.idDrink) : ()=> props.setActive(id)}
                        key = {id}
                    >
                        <div className={props.activeDrinkId === id ? "active" : ""}> 
                            <img src={drink.strDrinkThumb} alt='thumbnail' className='thumbnail'/>
                            {drink.strDrink} 
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default List;