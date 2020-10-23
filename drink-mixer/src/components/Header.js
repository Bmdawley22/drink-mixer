import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Drink Mixer</h1>
            <nav>
                <Link to='/random-drink'>Random Drink</Link>
                <Link to='/by-spirit'>Drink By Spirit</Link>
                <Link to='all-drinks'>All Drinks</Link>
                <Link to='create-drink'>Create Drink</Link>
            </nav>
        </header>
    )
}

export default Header;