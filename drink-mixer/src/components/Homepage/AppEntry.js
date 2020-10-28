// import React
import React, {Component} from 'react';

// class base
class AppEntry extends Component {
    constructor(props) {
        super(props)

        this.state = {
            month: '',
            date: '',
            year: ''
        }
    }

    // change the state to check birthday
    dataEntry = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Welcome to Drink Mixer!</h1>
                <h2>Please enter your birthday to enter website:</h2>
                <h3>Note: 21 and older ONLY!</h3>
                <form onSubmit={(e) => this.props.dateEntryCheck(e, this.state)}>
                    <select>
                        <option selected disabled>Month</option>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                    <select>
                        <option selected disabled>Day</option>
                    </select>
                    <select>
                        <option selected disabled>Year</option>
                    </select>
                    <input type="submit" value="Enter Drink Mixer" />
                </form>
            </div>
        )
    }
}

// export App Entry
export default AppEntry;