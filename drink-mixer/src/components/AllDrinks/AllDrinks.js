import React, { Component} from 'react';
import {Link} from 'react-router-dom';
//import axios from 'axios';

class AllDrinks extends Component {
    constructor(props){
        super(props);

        this.state={
            drinks: props.drinks
        }
    }

    async componentDidMount() {
        //const drinks = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
        //console.log(drinks.data);
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

export default AllDrinks;