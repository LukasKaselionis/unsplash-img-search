import React from 'react';
import classes from './Input.css';

const input = (props) => {

    return (
        <input
            className={classes.Input}
            type="search"
            value={props.query}
            placeholder="Enter images title"
            onChange={props.changed} />
    )
}

export default input;