import './App.css';
import { Route } from 'react-router-dom';

import Header from './components/Header';
import BySpirit from './components/BySpirit';


function App() {
  return (
    <div className='App'>
      <Header />
      <Route path='/by-spirit' render={() => {
        return <BySpirit />
      }}
      />
    </div>
  )
}

export default App;

