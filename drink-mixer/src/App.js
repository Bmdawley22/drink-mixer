// import React
import React, {Component} from 'react';

import './App.css';
import { Route } from 'react-router-dom';

import Header from './components/Header';
import BySpirit from './components/BySpirit';
import AllDrinks from './components/AllDrinks/AllDrinks';

import drinks from './data';

// importing Random Drink
import RandomDrink from './components/RandomDrink/RandomDrink';

// import for API
import axios from 'axios';
import AllDrinkContainer from './components/AllDrinks/AllDrinkContainer';

// class base
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      randomDrink: "",
      apiDataError: false,
      drinks: drinks,
      allDrinksActiveDrink: null
    }
  }

  setActive = (id) => {
    const allDrinksActiveDrink = id;
    this.setState({
      allDrinksActiveDrink: allDrinksActiveDrink
    })
  }

  // adding Random Drink to All Drinks list
  addRandomDrink = () => {
    const drinks = this.state.drinks
    drinks.push(this.state.randomDrink)

    this.setState({
      drinks
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

  render () {
    return (
      <div className='App'>
        <Header />
        <Route path='/all-drinks/show-drink/:index' render={(props) => {
          return <AllDrinkContainer {...props} drinks={this.state.drinks} setActive={this.setActive} allDrinksActiveDrink={this.state.allDrinksActiveDrink}/>
        }} />
        <Route exact path='/all-drinks' render={() => {
          return <AllDrinks drinks={this.state.drinks} setActive={this.setActive}/>
        }} />
        <Route path="/random-drink" render={() => {
          return <RandomDrink randomDrink={this.state.randomDrink} onClick={() => this.componentDidMount()} addRandomDrink={this.addRandomDrink}/>
        }} />
        <Route path='/by-spirit' render={() => {
          return <BySpirit />
        }} />
      </div>
    )
  }
}

export default App;

