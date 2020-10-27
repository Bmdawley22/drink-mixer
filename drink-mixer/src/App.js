// import React
import React, {Component} from 'react';

import './App.css';
import { Route } from 'react-router-dom';

import Header from './components/Header';

import BySpirit from './components/BySpirit/BySpirit';
import BySpiritContainer from './components/BySpirit/BySpiritContainer';

import AllDrinks from './components/AllDrinks/AllDrinks';
import AllDrinkContainer from './components/AllDrinks/AllDrinkContainer';

// importing Random Drink
import RandomDrink from './components/RandomDrink/RandomDrink';

// import for API
import axios from 'axios';

import drinks from './data';
// class base
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      randomDrink: "",
      apiDataError: false,
      drinks: drinks,
      allDrinksActiveDrink: null,
      message: "",
      bySpiritActiveDrink: {},
      bySpiritDrinks: []
    }
  }

  setActive = (id) => {
    const allDrinksActiveDrink=id;
    this.setState({
      allDrinksActiveDrink: allDrinksActiveDrink,
    })
  }
  
  BySpiritCall = async (cat) => {
    const resp = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${cat}`);
    //const firstDrinkId = resp.data.drinks[0].idDrink;
    //const resp2 = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${firstDrinkId}`);
    //const bySpiritActiveDrink = resp2.data.drinks[0];
    this.setState({ 
      bySpiritDrinks: resp.data.drinks,
      //bySpiritActiveDrink
    })
  }

  // adding Random Drink to All Drinks list
  addRandomDrink = () => {
    let message;
    let drinks;

    // creating a new array of drink ids in the current data list
    let idArray = this.state.drinks.map((drink, id) => {
      return drink.idDrink
    })

    // if the current list of drink id's include the random drink id, will not add that drink to the list
    //    else add the random drink to the all drinks list
    if (idArray.includes(this.state.randomDrink.idDrink)) {
      message = "Drink is already in All Drinks List"
      drinks = this.state.drinks
    } else {
      drinks = this.state.drinks
      message = "Random Drink is added to All Drinks List"
      drinks.push(this.state.randomDrink)
    }

    this.setState({
      drinks,
      message
    }) 

    // call the reset message function to timeout after 3 seconds of being displayed to the user
    setTimeout(this.resetMessage, 3000);
  }

  // reset message after 3 seconds of message being displayed
  resetMessage = () => {
    const message = ""
    
    this.setState({
      message
    })
  }

  // Random Drink API call
  async componentDidMount() {
    const URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

    try {
      const response = await axios(URL);

      this.setState({
        randomDrink: response.data.drinks[0]
      })
    } catch (e) {
      this.setState({
        apiDataError: true
      })
    }
  }
  resetBySpiritDrinks = () => {
    this.setState({ bySpiritDrinks: []})
  }

  render () {
    return (
      <div className='App'>
        <Header />
        <Route path='/all-drinks/show-drink/:index' render={(props) => {
          return <AllDrinkContainer 
                  {...props} 
                  drinks={this.state.drinks} 
                  setActive={this.setActive} 
                  allDrinksActiveDrink={this.state.allDrinksActiveDrink}
                />
        }} />
        <Route exact path='/all-drinks' render={() => {
          return <AllDrinks drinks={this.state.drinks} setActive={this.setActive}/>
        }} />
        <Route path="/random-drink" render={() => {
          return <RandomDrink 
            randomDrink={this.state.randomDrink} 
            onClick={() => this.componentDidMount()} 
            addRandomDrink={this.addRandomDrink} 
            message={this.state.message}
          />
        }} />
        <Route path='/by-spirit/show-drink/:index' render={(props) => {
          return <BySpiritContainer 
                  {...props} 
                  drinks={this.state.bySpiritDrinks} 
                  bySpiritActiveDrink={this.state.bySpiritActiveDrink}
                />
        }} />
        <Route exact path='/by-spirit' render={() => {
          return <BySpirit 
            BySpiritCall={this.BySpiritCall}
            resetBySpiritDrinks={this.resetBySpiritDrinks}
          />
        }} />
      </div>
    )
  }
}

export default App;

