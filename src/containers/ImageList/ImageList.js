import React from 'react';
import ImageCard from './ImageCard/ImageCard';
import classes from './ImageList.css';

const imageList = (props) => {

    const imgs = props.foundImages.map(img => {
        console.log(img);
        return <ImageCard key={img.id} img={img} />
    })

    if (props.foundImages.length > 0 && props.query !== '') {

    }

    return (
        <div className={classes.ImageList}>
            {imgs}
        </div>
    );
}

export default imageList;