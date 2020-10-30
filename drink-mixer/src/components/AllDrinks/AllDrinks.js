// import React
import React, { Component} from 'react';

// import Link
import {Link} from 'react-router-dom';

// displaying all drinks
//     when a drink is clicked will render a show page to show more information
class AllDrinks extends Component {
    constructor(props){
        super(props);

        this.state = {
            drinks: props.drinks
        }
    }

    render(){
        return(
            <div className='drinkBoardWrapper'>
                <h2>All Added Drinks</h2>
                <div className='drinkBoardContainer'>
                    <div className='drinkBoard'>
                        {this.state.drinks.map((drink,id)=> {
                            return (
                                <Link 
                                    to={'/all-drinks/show-drink/'+ id} 
                                    className='drinkLink'
                                    onClick={()=> this.props.setActive(id)}
                                    key={id}
                                > 
                                    <img 
                                        src={drink.strDrinkThumb} 
                                        alt='all drink thumbnail' 
                                    />
                                    <h3 className='drinkName'>{drink.strDrink}</h3>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        )    
    }
}

// export All Drinks
export default AllDrinks;