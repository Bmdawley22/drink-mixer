import './App.css';
import { Route } from 'react-router-dom';

import Header from './components/Header';
import AllDrinks from './components/AllDrinks/AllDrinks';

function App() {
  return (
    <div className='App'>
      <Header />
      <AllDrinks />
    </div>
  )
}

export default App;
