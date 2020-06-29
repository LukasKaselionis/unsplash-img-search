import React from 'react';
import classes from './Spinner.css';

const spinner = () => (
    <div style={{ height: 'inherit', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div className={classes.Loader}>Loading...</div>
    </div>
);

export default spinner;