// import React
import React, {Component} from 'react';

import './App.css';
import { Route,Switch } from 'react-router-dom';

import Header from './components/Header';
import BySpirit from './components/BySpirit';
import AllDrinks from './components/AllDrinks/AllDrinks';
import CreateDrink from './components/CreateDrink/CreateDrink';

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
      allDrinksActiveDrink:null
    }
  }

  setActive = (id) => {
    const allDrinksActiveDrink=id;
    this.setState({
      allDrinksActiveDrink:allDrinksActiveDrink
    })
  }


  // Random Drink API call
  async componentDidMount() {
    const URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

    try {
      const response = await axios(URL);
      console.log(response);

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
        <Switch>
          <Route path='/all-drinks/show-drink/:index' render={(props) => {
            return <AllDrinkContainer {...props} drinks={this.state.drinks} setActive={this.setActive} allDrinksActiveDrink={this.state.allDrinksActiveDrink}/>
          }} />
          <Route exact path='/all-drinks' render={() => {
            return <AllDrinks drinks={this.state.drinks} setActive={this.setActive}/>
          }} />
          <Route path="/random-drink" render={() => {
            return <RandomDrink randomDrink={this.state.randomDrink} onClick={() => this.componentDidMount()}/>
          }} />
          <Route path='/by-spirit' render={() => {
            return <BySpirit />
          }} />
          <Route path='/create-drink' component={CreateDrink}/>
        </Switch>
      </div>
    )
  }
}

export default App;

