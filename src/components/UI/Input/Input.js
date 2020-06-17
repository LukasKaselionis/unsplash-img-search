import React from 'react';
import classes from './Input.css';

const input = (props) => {

    return (
        <div>
            <input
                className={classes.Input}
                type="search"
                placeholder="Enter images title"
                onChange={props.changed} />
        </div>
    )
}

export default input;