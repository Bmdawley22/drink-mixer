import React, { Component} from 'react';
import axios from 'axios';

class AllDrinks extends Component {
    constructor(props){
        super(props);

        this.state={
            drinks: ''
        }
    }

    async componentDidMount() {
        const drinks = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
        console.log(drinks.data);
    }

    render(){
        return(
            <div>
                <p>....getting drink data</p>
            </div>
        )    
    }
}

export default AllDrinks;