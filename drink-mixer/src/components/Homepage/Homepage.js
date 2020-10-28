// import React
import React, { Component } from 'react';

// import Map
import Map from './Map';
import DrinkOfTheWeek from './DrinkOfTheWeek';




// function base
class Homepage extends Component {
    constructor(props){
        super(props);

        this.state={
            renderComponent : 2,
            minRender: 1,
            maxRender: 2
        }
    }

    changeCard=(direction)=> {
        let renderComponent=this.state.renderComponent;
        if( renderComponent === this.state.maxRender && direction === 1) {
            renderComponent =1;
            this.setState({
                renderComponent:renderComponent
            })
        } else if (renderComponent === this.state.minRender && direction === -1) {
            renderComponent = 2;
            this.setState({
                renderComponent:renderComponent
            })
        } else {
            this.setState({
                renderComponent:renderComponent+direction
            })
        }
    }
    render(){
        return (
            <div>
                <div className='homepageContainer'>
                    <button onClick={()=> this.changeCard(-1)}>&#10094;</button>
                    {this.state.renderComponent === 1 && <Map />}
                    {this.state.renderComponent === 2 && <DrinkOfTheWeek drink={this.props.drink} />}
                    <button onClick={()=> this.changeCard(1)}>&#10095;</button>
                </div>
                <div className='homepageIndicator'>
                    {this.state.renderComponent===1 ? <div>&#9899;</div>:<div>&#9898;</div>}
                    {this.state.renderComponent===2 ? <div>&#9899;</div>:<div>&#9898;</div>}
                </div>
            </div>
        )
    }
}

// export Homepage
export default Homepage;