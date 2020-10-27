import React, { Component } from 'react';

import BySpiritList from './BySpiritList';
import BySpiritShow from './BySpiritShow';

import axios from 'axios';


import '../AllDrinks/AllDrinkContainer.css';

class BySpiritContainer extends Component {
    constructor(props) {
        super(props)
      
    }
    onListClick = () => {

    }
  
    render() {
        return(
            <div className='allDrinkContainer'>
                <BySpiritList 
                    drinks={this.props.drinks} 
                    setActive={this.props.setActive} 
                    bySpiritActiveDrink={this.props.bySpiritActiveDrink}
                    onListClick={this.onListClick}
                />
                <BySpiritShow  drink={this.props.bySpiritActiveDrink} />
            </div>
        )
    }

}

export default BySpiritContainer;