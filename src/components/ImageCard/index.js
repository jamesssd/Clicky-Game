import React from 'react';

function card(props){
    return(
        <div classname='img-container'>
            <img alt={props.name} src={props.image} />
        </div>
    )
}

export default ImageCard;