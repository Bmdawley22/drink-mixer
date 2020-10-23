import React, { Component} from 'react';
import axios from 'axios';

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
        console.table(this.props.drinks)
        return(
            <div className='allDrinkContainer'>
                {this.state.drinks.map((drink,id)=> {
                    return (
                        <div className='allDrinkItem'> 
                            <img src={drink.strDrinkThumb} alt='all drink thumbnail' />
                        </div>
                    )
                })}
            </div>
        )    
    }
}

export default AllDrinks;