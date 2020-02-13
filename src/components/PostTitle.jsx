import React from 'react';
import FavIcon from './subcomponents/FavIcon';
import Price from './subcomponents/Price';

const PostTitle = (props) => {
    return(
        <a href={props.link}>
            <span>
                <FavIcon />
                <span>{props.date}</span>
                <h4>{props.title}</h4>
                <Price>{props.price}</Price>
                <h5>({props.location})</h5>
            </span>
        </a>
    );
}

export default PostTitle;