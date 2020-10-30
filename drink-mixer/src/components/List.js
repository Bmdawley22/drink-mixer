// import React
import React from 'react';

// import Link
import {Link} from 'react-router-dom';

// displaying a list of drinks as a side bar for users to select a drink from
//      to see additional information on the drink
function List(props) {
    return (
        <div>
            {props.bySpiritCategory && 
                <h2 className='category'>Spirit: {props.bySpiritCategory}</h2>
            }
            <div className='drinksList'>
                
                {props.drinks.map((drink, id) => {
                    return(
                        <Link 
                            to={props.onListClick ? '/by-spirit/show-drink/'+id : '/all-drinks/show-drink/'+id}
                            onClick={props.onListClick ? ()=> props.onListClick(id, drink.idDrink) : ()=> props.setActive(id)}
                            key = {id}
                        >
                            <div className={props.activeDrinkId === id ? 'active listItem' : 'listItem'}> 
                                <img src={drink.strDrinkThumb} alt='thumbnail' className='thumbnail'/>
                                <h4>{drink.strDrink}</h4>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

// export List
export default List;