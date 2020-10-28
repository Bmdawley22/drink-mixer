// import React
import React from 'react';

// import Map
import Map from './Map';

const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
}

// function base
const Homepage = () => {
    return (
        <div>
            <h1>HELLO</h1>
            <h1>This Weeks Spotlight Tavern</h1>
            <h2>Casey's Tavern</h2>
            <Map location={location} zoomLevel={17}/>
        
        </div>
    )
}

// export Homepage
export default Homepage;