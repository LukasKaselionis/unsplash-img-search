import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

const form = (props) => {
    const btnType = props.query ? "Success" : "Error";

    return (
        <form onSubmit={props.onFormSubmit}>
            <Input changed={props.onChange} query={props.query} />
            <Button title="SEARCH" btnType={btnType} userSubmit={props.onFormSubmit} />
            <Button title="SAVE" btnType={btnType} />
        </form>
    );
};

export default form;