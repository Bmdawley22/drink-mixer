// import React
import React, { Component } from 'react';

// import List and Show
import List from '../List';
import Show from '../Show';

// import axios
import axios from 'axios';

// displaying all drinks based on spirit clicked
//     when a drink is clicked will render a show page to show more information
class BySpiritContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeDrink: {},
            activeDrinkId: null
        }
    }

    // calls the API to display the drink information
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
                    /> : <p>Click drink to see more</p>}
            </div>
        )
    }

}

export default BySpiritContainer;