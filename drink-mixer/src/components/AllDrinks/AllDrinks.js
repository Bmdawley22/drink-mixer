import React, { Component} from 'react';
import {Link} from 'react-router-dom';
//import axios from 'axios';

import './AllDrinks.css';

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
            <div className='allDrinkBoard'>
                {this.state.drinks.map((drink,id)=> {
                    return (
                        <Link 
                            to={'/all-drinks/show-drink/'+ id} 
                            className='allDrinkItem'
                            onClick={()=> this.props.setActive(id)}
                        > 
                            <img src={drink.strDrinkThumb} alt='all drink thumbnail' />
                            <div className='allDrinkName'>{drink.strDrink}</div>
                        </Link>
                    )
                })}
            </div>
        )    
    }
}

export default AllDrinks;