// import React
import React, {Component} from 'react';

import './App.css';
import { Route } from 'react-router-dom';

import Header from './components/Header';
import BySpirit from './components/BySpirit';
import AllDrinks from './components/AllDrinks/AllDrinks';

// importing Random Drink
import RandomDrink from './components/RandomDrink/RandomDrink';

// import for API
import axios from 'axios';

// class base
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      randomDrink: "",
      apiDataError: false
    }
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
        <Route path='/all-drinks' render={() => {
          return <AllDrinks />
        }} />
        <Route path="/random-drink" render={() => {
          return <RandomDrink randomDrink={this.state.randomDrink} />
        }} />
        <Route path='/by-spirit' render={() => {
          return <BySpirit />
        }} />
      </div>
    )
  }
}

export default App;

