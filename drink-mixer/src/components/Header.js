import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <header>
            <Link className='title' to={props.ageVerified ? '/homepage' : '/'}><h1>Drink Mixer</h1></Link>
            {props.ageVerified   && <nav>
                <Link className='Link' to='/random-drink'>Random Drink</Link>
                <Link className='Link' to='/by-spirit'>Drink By Spirit</Link>
                <Link className='Link' to='/all-drinks'>Added Drinks</Link>
                <Link className='Link' to='/create-drink'>Create Drink</Link>
            </nav>}
        </header>
    )
}

export default Header;