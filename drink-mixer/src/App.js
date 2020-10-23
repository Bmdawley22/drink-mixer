import './App.css';
import { Route } from 'react-router-dom';

import Header from './components/Header';

// importing Random Drink
import RandomDrink from './components/RandomDrink';

function App() {
  return (
    <div className='App'>
      <Header />
      <Route path="/random-drink" render={() => {
        return <RandomDrink />
      }} />
    </div>
  )
}

export default App;
