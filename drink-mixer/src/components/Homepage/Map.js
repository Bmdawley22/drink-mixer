// import React
import React, { Component } from 'react';

// import Google Maps
import GoogleMapReact from 'google-map-react';

import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

const Location = ({ text }) => (
    <div>
        <Icon icon={locationIcon} className="pin-icon" />
        <h3 className="pin-text">{text}</h3>
    </div>
)

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

            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyBvIEDKHg9mF_Bs6JokbkWKDJG55STtuBQ' }}
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
        );
    }
}

// export Map
export default Map;