// import React
import React, { Component } from 'react';

// import Map, Drink of the Week, and Article for slideshow
import Map from './Map';
import DrinkOfTheWeek from './DrinkOfTheWeek';
import Article from './Article';

// displays three cards that the user can click through to show spotlight information
class Homepage extends Component {
    constructor(props){
        super(props);

        this.state = {
            renderComponent: 2,
            minRender: 1,
            maxRender: 3
        }
    }

    // changing the card based on what card is displayed and which button is clicked
    changeCard = (direction) => {
        let renderComponent = this.state.renderComponent;
        if( renderComponent === this.state.maxRender && direction === 1) {
            renderComponent = 1;
            this.setState({
                renderComponent: renderComponent
            })
        } else if (renderComponent === this.state.minRender && direction === -1) {
            renderComponent = 3;
            this.setState({
                renderComponent: renderComponent
            })
        } else if (renderComponent === this.state.minRender && direction === -1) {
            renderComponent = 3;
            this.setState({
                renderComponent: renderComponent
            })
        } else {
            this.setState({
                renderComponent: renderComponent + direction
            })
        }
    }
    
    render(){
        return (
            <div className='homepage'>
                <h1 className='homepageTitle'>This Weeks Spotlight</h1>
                <div className='homepageIndicator'>
                    {this.state.renderComponent===1 ? <div>&#9899;</div>:<div>&#9898;</div>}
                    {this.state.renderComponent===2 ? <div>&#9899;</div>:<div>&#9898;</div>}
                    {this.state.renderComponent===3 ? <div>&#9899;</div>:<div>&#9898;</div>}
                </div>
                <div className='homepageContainer'>
                    <button onClick={()=> this.changeCard(-1)}>&#10094;</button>
                    {this.state.renderComponent === 1 && <Map />}
                    {this.state.renderComponent === 2 && <DrinkOfTheWeek drink={this.props.drink} />}
                    {this.state.renderComponent === 3 && <Article />}
                    <button onClick={()=> this.changeCard(1)}>&#10095;</button>
                </div>
            </div>
        )
    }
}

// export Homepage
export default Homepage;