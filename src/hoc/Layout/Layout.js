import React from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';
import ImageData from '../../containers/ImageData/ImageData';
import classes from './Layout.css';

const layout = () => {
    return (
        <Auxiliary>
            <div className={classes.Layout}>
                <div className={classes.PageWrapper}> 
                    <ImageData />
                    <div>Buttons</div>
                    <div>Images Grid</div>
                    <div>Saved Queries</div>
                </div>
            </div>
        </Auxiliary>
    )
}

export default layout;