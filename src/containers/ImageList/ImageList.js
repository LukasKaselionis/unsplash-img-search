import React from 'react';
import ImageCard from './ImageCard/ImageCard';
import classes from './ImageList.css';

const imageList = (props) => {

    const imgs = props.foundImages.map(img => {
        return <ImageCard key={img.id} img={img} />
    })

    return (
        <div className={classes.ImageList}>
            {(props.foundImages.length === 0 && props.query !== '') && (
                <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'inherit' }}>
                    Couldn't find any images. Try searching for another image
                </p>
            )}
            {imgs}
        </div>
    );
}

export default imageList;