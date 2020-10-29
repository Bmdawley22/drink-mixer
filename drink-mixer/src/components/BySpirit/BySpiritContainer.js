import React, { Component } from 'react';

import List from '../List';
import Show from '../Show';

import axios from 'axios';

class BySpiritContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeDrink: {},
            activeDrinkId: null
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
            <div className='drinkContainer'>
                <List 
                    drinks={this.props.drinks} 
                    activeDrinkId={this.state.activeDrinkId}
                    onListClick={this.onListClick}
                />
                {this.state.activeDrink.strDrink ? 
                    <Show  
                        drink={this.state.activeDrink} 
                        addDrink={this.props.addDrink} 
                        message={this.props.message}
                    /> : <div className='spiritMessageContainer'> 
                            <p className='spiritDisplayMessage'>Select Drink to Learn More</p> 
                        </div> }
            </div>
        )
    }

}

export default BySpiritContainer;