// import React
import React, {Component} from 'react';

// class base
class CreateDrink extends Component {
    constructor(props) {
        super(props);

        this.state= {
            strDrink: '',
            strDrinkThumb: '',
            strInstructions: '',
            ingredientsNum: ['strIngredient1', 'strIngredient2', 'strIngredient3']
        }
    }

    // changing the state based on the user's input values
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // adding additional input boxes for the ingredients if needed on button click
    changeIngredient = (change) => {
        let ingredientsNum = this.state.ingredientsNum;
        if (ingredientsNum.length < 15 && change > 0) {
            ingredientsNum.push(`strIngredient${ingredientsNum.length + change}`)

            this.setState({
                ingredientsNum
            })
        } else if (ingredientsNum.length > 1 && change < 0) {
            ingredientsNum.pop()

            this.setState({
                ingredientsNum
            })
        }
    }

    render() {
        return(
            <div className='createDrinkWrapper'>
                <h1>Create Drink</h1>
                <div className='createDrink'>
                <form onSubmit={(e) => this.props.createDrink(e, this.state)}>
                    <div className='submitDiv'>
                        <input type='submit' value='Create New Drink!' className='createButton'/>
                    </div>
                    <br/>
                    <span>Drink Name</span>
                    <input type='text' name='strDrink' onChange={this.onChange}/>  
                    <br/>
                    <span>Drink Picture Link</span>
                    <input type='text' name='strDrinkThumb' onChange={this.onChange}/>
                    <br/>
                    
                    <span>Instructions</span>
                    <input type='textarea' name='strInstructions' onChange={this.onChange}/>
                    <br/>
                    <span>Ingredients (Ingredient, amount)</span><br/>
                    <div className='addIngredient'>
                        {this.state.ingredientsNum.map((ingredient, id) => {
                            return (
                                <div>
                                    <input type='text' name={`strMeasure${id+1}`} placeholder='ingredient'  onChange={this.onChange}/>
                                    <input type='text' name={`strIngredient${id+1}`} placeholder='amount' onChange={this.onChange}/>
                                    <br /> 
                                </div>
                            )
                        })}  
                    </div>
                </form>
                
                </div>
                <div className='ingredientButtons'>
                    <button onClick={() => this.changeIngredient(+1)}>Add ingredient line</button> 
                    <button onClick={() => this.changeIngredient(-1)}>Remove ingredient line</button> 
                </div>
            </div>
        )
    }
}

// export Create Drink
export default CreateDrink;