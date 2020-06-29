import React from 'react';
import classes from './Backdrop.css';
import Spinner from '../Spinner/Spinner';

const backdrop = (props) => (
    <div className={classes.Backdrop}>
        <Spinner/>
    </div>
);

export default backdrop;