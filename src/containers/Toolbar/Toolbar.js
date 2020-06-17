import React, { Component } from 'react';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

class Toolbar extends Component {
    state = {
        query: ''
    }

    onInputChanged = (event) =>  {
        console.log(event.target.value);
        this.setState({query: event.target.value})
    }

    render() {
        const btnType = this.state.query ? "Success" : "Error";


        return (
            <div style={{ marginBottom: "40px"}}>
                <Input changed={this.onInputChanged} />
                <Button title="SEARCH" btnType={btnType} />
                <Button title="SAVE"  btnType={btnType} />
            </div>
        )
    }
}

export default Toolbar;