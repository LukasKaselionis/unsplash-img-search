import React, { Component } from 'react';
import Form from '../../components/UI/Form/Form';
import classes from './Toolbar.css';

class Toolbar extends Component {
    state = {
        query: ''
    }

    onInputChange = (event) => {
        console.log(event.target.value);
        this.setState({ query: event.target.value })
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.userSubmit(this.state.query);
    }

    render() {
        return (
            <div className={classes.Toolbar}>
                <Form
                    query={this.state.query}
                    onChange={this.onInputChange}
                    onFormSubmit={this.onFormSubmit}
                />
            </div>
        )
    }
}

export default Toolbar;