// import React
import React, {Component} from 'react';

// import App Styling
import './App.css';

// import Router 
import {Route, Switch, withRouter} from 'react-router-dom';

// import Header
import Header from './components/Header';

// import Homepage
import Homepage from './components/Homepage/Homepage';

// import Footer
import Footer from './components/Footer';

// import Create Drink
import CreateDrink from './components/CreateDrink/CreateDrink';

// import By Spirit
import BySpirit from './components/BySpirit/BySpirit';
import BySpiritContainer from './components/BySpirit/BySpiritContainer';

// import All Drinks
import AllDrinks from './components/AllDrinks/AllDrinks';
import AllDrinkContainer from './components/AllDrinks/AllDrinkContainer';

// import Random Drink
import RandomDrink from './components/RandomDrink/RandomDrink';

// import App Entry
import AppEntry from './components/Homepage/AppEntry';

// import for API
import axios from 'axios';

// import data for all drinks
import drinks from './data';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

// class base
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      randomDrink: '',
      apiDataError: false,
      drinks: drinks,
      activeDrinkId: null,
      message: '',
      bySpiritActiveDrink: {},
      bySpiritDrinks: [],
      ageVerified: false
    }
  }

  verifyAge = () => {
    this.setState({
      ageVerified:true
    })
  }

  // setting the active tab for the list page
  setActive = (id) => {
    const activeDrinkId = id;

    this.setState({
      activeDrinkId : activeDrinkId,
    })
  }
  
  // calling the API by spirit category
  BySpiritCall = async (cat) => {
    const resp = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${cat}`);
    this.setState({ 
      bySpiritDrinks: resp.data.drinks,
      //bySpiritActiveDrink
    })
  }

  // setting the spirit drinks array to empty
  resetBySpiritDrinks = () => {
    this.setState({ 
      bySpiritDrinks: []
    })
  }

  // adding Drink to All Drinks list
  addDrink = (bySpiritDrink) => {
    let message;
    let drinks;
    let drinkId;
    let drink;

    // creating a new array of drink ids in the current data list
    let idArray = this.state.drinks.map((drink, id) => {
      return drink.idDrink
    })

    // if bySpiritDrink exists, then set the variables
    //    else if the random drink exists, then set the variables
    
    if (bySpiritDrink) {
      drinkId = bySpiritDrink.idDrink;
      drink = bySpiritDrink;
    } else {
      drinkId = this.state.randomDrink.idDrink;
      drink = this.state.randomDrink;
    }

    // if the current list of drink id's include the drink id, will not add that drink to the list
    //    else add the drink to the all drinks list
    if (idArray.includes(drinkId)) {
      message = 'Drink is already in All Drinks List'
      drinks = this.state.drinks
    } else {
      drinks = this.state.drinks
      message = 'Drink is added to All Drinks List'
      drinks.push(drink)
    }

    this.setState({
      drinks,
      message
    }) 

    // call the reset message function to timeout after 3 seconds of being displayed to the user
    setTimeout(this.resetMessage, 2000);
  }

  // reset message after 3 seconds of message being displayed
  resetMessage = () => {
    const message = ''
    
    this.setState({
      message
    })
  }

  // creating a new drink and adding to state to be displayed in All Drinks
  createDrink = (e, newDrink) => {
    e.preventDefault();
    const drinks = this.state.drinks;
    drinks.push(newDrink);

    this.setState({
      drinks
    })

    // rendering to All Drinks page after submitting
    this.props.history.push('/all-drinks');
  }

  // Random Drink API call
   randonDrinkCall= async (e) => {
    this.resetMessage()
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

  async componentDidMount() {
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
        <Header ageVerified={this.state.ageVerified}/>
          <Switch>
            <Route exact path='/' render={() => {
              return <AppEntry
                verifyAge={this.verifyAge}
              />
            }} />
            <Route exact path='/homepage' render={() => {
              return <Homepage
                drink={this.state.drinks[5]}
                ageVerified={this.state.ageVerified}
              />
            }} />
            <Route path='/all-drinks/show-drink/:index' render={(props) => {
              return <AllDrinkContainer 
                {...props} 
                drinks={this.state.drinks} 
                setActive={this.setActive} 
                activeDrinkId={this.state.activeDrinkId}
              />
            }} />
            <Route exact path='/all-drinks' render={() => {
              return <AllDrinks 
                drinks={this.state.drinks} 
                setActive={this.setActive}
              />
            }} />
            <Route path='/random-drink' render={() => {
              return <RandomDrink 
                randomDrink={this.state.randomDrink} 
                randomDrinkCall={this.randonDrinkCall} 
                addRandomDrink={this.addDrink} 
                message={this.state.message}
              />
            }} />
            <Route path='/by-spirit/show-drink/:index' render={(props) => {
              return <BySpiritContainer 
                {...props} 
                drinks={this.state.bySpiritDrinks} 
                bySpiritActiveDrink={this.state.bySpiritActiveDrink}
                addDrink={this.addDrink} 
                message={this.state.message}
              />
            }} />
            <Route exact path='/by-spirit' render={() => {
              return <BySpirit 
                BySpiritCall={this.BySpiritCall}
                resetBySpiritDrinks={this.resetBySpiritDrinks}
              />
            }} />
            <Route path='/create-drink' render={() => {
              return <CreateDrink createDrink={this.createDrink}/>
            }} />
          </Switch>
        <Footer />
      </div>
    )
  }
}

export default withRouter(App);

