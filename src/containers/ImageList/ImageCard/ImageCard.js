import React from 'react';

const imageCard = (props) => (
        <img 
            style={{ width: '100%' }}
            src={props.img.urls.regular}
            alt={props.img.description}
        />
);

export default imageCard;