// import React
import React, { Component } from 'react';

// import Google Maps
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

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
                    <AnyReactComponent
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