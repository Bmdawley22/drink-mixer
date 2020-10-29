// import React
import React, {Component} from 'react';

// import withRouter
import {withRouter} from 'react-router-dom';

// creating date dropdown
let day = [];
for (let i = 1; i < 32; i++) {
    day.push(i);
}

// creating year dropdown
let year = [];
for (let i = 2020; i > 1900; i--) {
    year.push(i);
}

// class base
class AppEntry extends Component {
    constructor(props) {
        super(props)

        this.state = {
            month: '',
            day: '',
            year: '',
            message: ''
        }
    }

    // change the state to check birthday
    dataEntry = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // date entry check
    dateEntryCheck = (e) => {
        // prevent page refresh
        e.preventDefault();

        // finding today's date
        //  defining day, month, year
        const today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let yy = today.getFullYear();

        if ((yy - this.state.year) > 20) {
            // rendering to homepage after submitting
            this.props.history.push('/homepage');
        } else if(yy - this.state.year === 21) {
            if (mm > this.state.month) {
                // rendering to homepage after submitting
                this.props.history.push('/homepage');

            } else if (mm === this.state.month) {
                if (dd > this.state.date) {

                    // rendering to homepage after submitting
                    this.props.history.push('/homepage');
                } else {
                    this.setState({
                        message: 'You are not old enough to enter!; Please try again when you are 21.'
                    })
                }
            } else {
                this.setState({
                    message: 'You are not old enough to enter! Please try again when you are 21.'
                })
            }
        } else {
            this.setState({
                message: 'You are not old enough to enter! Please try again when you are 21.'
            })
        }
    }

    render() {
        return (
            <div>
                <h1>Welcome to Drink Mixer!</h1>
                <h2>Please enter your birthday to enter website:</h2>
                <h3>Note: 21 and older ONLY!</h3>
                <form onSubmit={(e) => this.dateEntryCheck(e)}>
                    <select name='month' onChange={this.dataEntry}>
                        <option selected disabled>Month</option>
                        <option value='1'>January</option>
                        <option value='2'>February</option>
                        <option value='3'>March</option>
                        <option value='4'>April</option>
                        <option value='5'>May</option>
                        <option value='6'>June</option>
                        <option value='7'>July</option>
                        <option value='8'>August</option>
                        <option value='9'>September</option>
                        <option value='10'>October</option>
                        <option value='11'>November</option>
                        <option value='12'>December</option>
                    </select>
                    <select name='day' onChange={this.dataEntry}>
                        <option selected disabled>Day</option>
                        {day.map((date, id) => {
                            return <option key={id} value={date}>{date}</option>
                        })}
                    </select>
                    <select name='year' onChange={this.dataEntry}>
                        <option selected disabled>Year</option>
                        {year.map((year,id) => {
                            return <option key={id} value={year}>{year}</option>
                        })}

                    </select>
                    <input type="submit" value="Enter Drink Mixer" />
                </form>
                {this.state.message.length > 0 && <h3>{this.state.message}</h3>}
            </div>
        )
    }
}

// export App Entry
export default withRouter(AppEntry);