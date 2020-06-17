import React from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';
import Toolbar from '../../containers/Toolbar/Toolbar';
import classes from './Layout.css';

const layout = () => {
    return (
        <Auxiliary>
            <div className={classes.Layout}>
                <div className={classes.PageWrapper}> 
                    <Toolbar />
                    <div>Images Grid</div>
                    <div>Saved Queries</div>
                </div>
            </div>
        </Auxiliary>
    )
}

export default layout;