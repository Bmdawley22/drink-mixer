import React, { Component } from 'react';

import BySpiritList from './BySpiritList';
import BySpiritShow from './BySpiritShow';

import axios from 'axios';


import '../AllDrinks/AllDrinkContainer.css';

class BySpiritContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeDrink: {},
            activeDrinkId: 0
        }
    }
    onListClick = async (id, idDrink) => {
        const resp = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`);
        const activeDrink = resp.data.drinks[0];
        this.setState({ 
            activeDrink,
            activeDrinkId: id
        })
    }

    render() {
        return(
            <div className='allDrinkContainer'>
                <BySpiritList 
                    drinks={this.props.drinks} 
                    activeDrinkId={this.props.activeDrinkId}
                    onListClick={this.onListClick}
                />
                {this.state.activeDrink.strDrink ? <BySpiritShow  drink={this.state.activeDrink} /> : <p>Click drink to see more</p>}
            </div>
        )
    }

}

export default BySpiritContainer;