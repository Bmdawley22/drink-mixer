import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

    render() {
        return (
            <div id='categories-wrapper' >
                {this.state.categories.map((category, id) => (
                    <Link to='/show'>
                         <img
                            className='category-img'
                            src={category.img} 
                            alt={category.name}
                            key={id}
                        />
                         <h3>{category.name}</h3>
                    </Link>
                ))}
            </div>
            
        )
    }
}

export default BySpirit;

//https://www.thecocktaildb.com/api/json/v1/1/random.php
//https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin