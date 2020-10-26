import React from 'react';
import {Link} from 'react-router-dom';
import '../AllDrinks/AllDrinksList.css';

function BySpiritList(props) {
    console.log(props)
    return (
        <div className='AllDrinksList'>
            {props.drinks.map((drink, id) => {
                return(
                    <Link 
                        to={'/by-spirit/show-drink/'+id}
                        onClick={()=> props.setActive(id)}
                    >
                        <div className={props.bySpiritActiveDrink===id ? "active" : ""}> 
                            <img src={drink.strDrinkThumb} alt='thumbnail' className='thumbnail'/>
                            {drink.strDrink} 
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default BySpiritList;