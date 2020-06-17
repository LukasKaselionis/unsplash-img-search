import React from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';
import Toolbar from '../../containers/Toolbar/Toolbar';
import ImageList from '../../containers/ImageList/ImageList';
import QueryList from '../../containers/QueryList/QueryList';
import classes from './Layout.css';

const layout = () => {
    return (
        <Auxiliary>
            <div className={classes.Layout}>
                <div className={classes.PageWrapper}> 
                    <Toolbar />
                    <ImageList />
                    <QueryList />
                </div>
            </div>
        </Auxiliary>
    )
}

export default layout;