import React, {Component} from 'react';

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
    addIngredient = () => {
        let ingredientsNum = this.state.ingredientsNum;
        if (ingredientsNum.length < 15) {
            ingredientsNum.push(`strIngredient${ingredientsNum.length + 1}`)

            this.setState({
                ingredientsNum
            })
        }
    }

    render() {
        return(
            <div>
                <h2>Create Drink</h2>
                <form onSubmit={(e) => this.props.createDrink(e, this.state)}>
                    <input type='submit' />
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
                    <span>Ingredients (Ingredient, amount)</span>
                    {this.state.ingredientsNum.map((ingredient, id) => {
                        return (
                            <div>
                                <input type='text' name={`strMeasure${id+1}`} placeholder='ingredient'  onChange={this.onChange}/>
                                <input type='text' name={`strIngredient${id+1}`} placeholder='amount' onChange={this.onChange}/>
                                <br /> 
                            </div>
                        )
                    })}  
                </form>
                <button onClick={() => this.addIngredient()}>Add another ingredient</button> 
            </div>
        )
    }
}

export default CreateDrink;