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
      allDrinksActiveDrink:null,
      bySpiritActiveDrink:0,
      bySpiritDrinks: []
    }
  }

  setActive = (id) => {
    const allDrinksActiveDrink=id;
    const bySpiritActiveDrink=id;
    this.setState({
      allDrinksActiveDrink: allDrinksActiveDrink,
      bySpiritActiveDrink: bySpiritActiveDrink
    })
  }
  BySpiritCall = async (cat) => {
    const resp = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${cat}`);
    console.log(resp.data.drinks)
    this.setState({ 
      bySpiritDrinks: resp.data.drinks,
      bySpiritActiveDrink: 0
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
          return <RandomDrink randomDrink={this.state.randomDrink} onClick={() => this.componentDidMount()}/>
        }} />
        <Route path='/by-spirit/show-drink/:index' render={(props) => {
          return <BySpiritContainer drinks={this.state.bySpiritDrinks} setActive={this.setActive} bySpiritActiveDrink={this.state.bySpiritActiveDrink}/>
        }} />
        <Route exact path='/by-spirit' render={() => {
          return <BySpirit BySpiritCall={this.BySpiritCall}/>
        }} />
      </div>
    )
  }
}

export default App;

