// import React
import React, {Component} from 'react';

import './App.css';
import { Route } from 'react-router-dom';

import Header from './components/Header';

// importing Random Drink
import RandomDrink from './components/RandomDrink';

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
        <Route path="/random-drink" render={() => {
          return <RandomDrink randomDrink={this.state.randomDrink}/>
        }} />
      </div>
    )
  }
}

export default App;
