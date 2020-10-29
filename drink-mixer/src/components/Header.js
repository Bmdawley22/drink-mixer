// import React
import React from 'react';

// import Link
import { Link } from 'react-router-dom';

// displaying app name and links to pages throughout app
const Header = () => {
    return (
        <header>
            <Link className='title' to='/'><h1>Drink Mixer</h1></Link>
            <nav>
                <Link className='Link' to='/random-drink'>Random Drink</Link>
                <Link className='Link' to='/by-spirit'>Drink By Spirit</Link>
                <Link className='Link' to='/all-drinks'>All Drinks</Link>
                <Link className='Link' to='/create-drink'>Create Drink</Link>
            </nav>
        </header>
    )
}

// export Header
export default Header;