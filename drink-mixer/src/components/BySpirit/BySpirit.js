import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BySpirit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: [
                {
                    name: 'Gin',
                    img: 'https://www.thecocktaildb.com/images/ingredients/gin-Medium.png'
                },
                {
                    name: 'Vodka',
                    img: 'https://www.thecocktaildb.com/images/ingredients/vodka-Medium.png'
                },
                {
                    name: 'Tequila',
                    img: 'https://www.thecocktaildb.com/images/ingredients/tequila-Medium.png'
                },
                {
                    name: 'Whiskey',
                    img: 'https://www.thecocktaildb.com/images/ingredients/whiskey-Medium.png'
                },
                {
                    name: 'Bourbon',
                    img: 'https://www.thecocktaildb.com/images/ingredients/bourbon-Medium.png'
                },
                {
                    name: 'Wine',
                    img: 'https://www.thecocktaildb.com/images/ingredients/wine-Medium.png'
                },
                {
                    name: 'Rum',
                    img: 'https://www.thecocktaildb.com/images/ingredients/rum-Medium.png'
                },
                {
                    name: 'Brandy',
                    img: 'https://www.thecocktaildb.com/images/ingredients/brandy-Medium.png'
                },
                {
                    name: 'Beer',
                    img: 'https://www.thecocktaildb.com/images/ingredients/beer-Medium.png'
                }
            ]
        }
    }
    
    handleClick = (id) => {
        const category = this.state.categories[id].name;
        this.props.BySpiritCall(category); 
    }
    
    componentDidMount = () => {
        this.props.resetBySpiritDrinks();
    } 

    render() {
        return (
            <div className='drinkBoardWrapper'>
                <h2>Drink By Spirit</h2>
                <div className='drinkBoard' >
                    
                    {this.state.categories.map((category, id) => (
                        <Link 
                            onClick={() => this.handleClick(id)} 
                            key={id}
                            to='/by-spirit/show-drink/0'
                            className='drinkLink'
                        >
                            <img
                                src={category.img} 
                                alt={category.name}
                            />
                            <h3 className='drinkName'>{category.name}</h3>
                        </Link>
                    ))}
                </div> 
            </div>   
        )
    }
}

export default BySpirit;

