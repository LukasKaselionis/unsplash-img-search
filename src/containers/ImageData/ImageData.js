import React, { Component } from 'react';
import Input from '../../components/UI/Input/Input';

class ImageData extends Component {

    onInputChanged = (event) =>  {
        console.log(event.target.value)
    }
    
    render() {
        return (
            <div>
                <Input changed={this.onInputChanged} />
            </div>
        )
    }
}

export default ImageData;