// import React
import React from 'react';

// import Link
import { Link } from 'react-router-dom';

// displaying app name and links to pages throughout app
//      changes the color of the tab based on the page link the user clicked on
const Header = (props) => {
    return (
        <header>
            <Link className='title' to={props.ageVerified ? '/homepage' : '/'} onClick={() => props.highlightLink(0)}><h1>Drink Mixer</h1></Link>
            {props.ageVerified  && <nav>
                <Link 
                    className={props.activePage === 1 ? 'active-page' : 'Link'}
                    to='/random-drink' 
                    onClick={() => props.highlightLink(1)}
                >Random Drink</Link>
                <Link 
                    className={props.activePage === 2 ? 'active-page' : 'Link'} 
                    to='/by-spirit' 
                    onClick={() => props.highlightLink(2)}
                >Drink By Spirit</Link>
                <Link 
                    className={props.activePage === 3 ? 'active-page' : 'Link'} 
                    to='/all-drinks' 
                    onClick={() => props.highlightLink(3)}
                >Added Drinks</Link>
                <Link 
                    className={props.activePage === 4 ? 'active-page' : 'Link'} 
                    to='/create-drink' 
                    onClick={() => props.highlightLink(4)}
                >Create Drink</Link>
            </nav>}
        </header>
    )
}

// export Header
export default Header;