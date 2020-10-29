// import React
import React, { Component } from 'react';

// import Google Maps
import GoogleMapReact from 'google-map-react';

// import Icon for map-marker
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

// defing the location and text for the map
const Location = ({ text }) => (
    <div>
        <Icon icon={locationIcon} className="pin-icon" />
        <h3 className="pin-text">{text}</h3>
    </div>
)

// Displaying information about the location and displaying the map
//      Map is showing information based on the latitude and longitude 
//      with a pin location and name of place
class Map extends Component {
    static defaultProps = {
        center: {
            lat: 41.4971,
            lng: -90.5155
        },
        zoom: 15
    };
    render() {
        return (
            <div className='homepageCardMap'>
                <div>
                    <h2>Casey's Tavern</h2>
                    <p>Come try this week's tavern spotlight!</p>
                    <p>Are there better looking places out there? Sure!</p>
                    <p>Is the food good? Not really.... but its edible.</p>
                    <p>But where else would you go at 3am? Its an experience.</p>
                    <br />
                    <h4>Address: <br />1512 15th St, Moline, Ill. 61265</h4>
                </div>
                <div style={{ height: '50vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: process.env.API_KEY}}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                    >
                        <Location
                            lat={41.4971}
                            lng={-90.5155}
                            text="Casey's Tavern"
                        />
                    </GoogleMapReact>
                </div>
            </div>
        );
    }
}

// export Map
export default Map;