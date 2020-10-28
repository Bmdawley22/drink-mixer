// import React
import React from 'react';

// import Map
import Map from './Map';
import DrinkOfTheWeek from './DrinkOfTheWeek';




// function base
const Homepage = (props) => {
    return (
        <div>
            {/* <Map /> */}
            <DrinkOfTheWeek drink={props.drink} />
        </div>
    )
}

// export Homepage
export default Homepage;