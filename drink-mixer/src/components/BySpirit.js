import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class BySpirit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: [
                {
                    name: 'Gin',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYLi2eIBD4c2fr_uEhJ_vNndEBgWSEqzoTXw&usqp=CAU'
                },
                {
                    name: 'Vodka',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYM-fLI2WqcTHd7H_htWhGdlguw6ZmFisUV4s4bM5pDVjmFSxKBsuOySAFaTMkq6KdhFu6bF4p&usqp=CAc'
                }
            ]
        }
    }

    handleClick = (id) => {
        const category = this.state.categories[id].name;
        this.APIcall(category);
    }
    APIcall = async (cat) => {
        console.log(cat);
        const drinks = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${cat}`);
        console.log(drinks.data);
    }

    render() {
        return (
            <div id='categories-wrapper' >
                {this.state.categories.map((category, id) => (
                    <div onClick={() => this.handleClick(id)} key={id}>
                         <img
                            className='category-img'
                            src={category.img} 
                            alt={category.name}
                            key={id}
                        />
                         <h3>{category.name}</h3>
                    </div>
                ))}
            </div> 
        )
    }
}

export default BySpirit;

//https://www.thecocktaildb.com/api/json/v1/1/random.php
//https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin