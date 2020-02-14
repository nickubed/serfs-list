import React from 'react';
import FleurDeLis from './FleurDeLis';
import Price from './subcomponents/Price';

const PostTitle = (props) => {
    return(
        <div className="postTitle">
            <a href={props.link}>
                <span>
                    <FleurDeLis />
                    {/* <span>{props.category}</span> */}
                    <small><span> {props.location} </span></small>
                    <span><strong>{props.title} </strong></span>
                    <Price>{props.price || ''}</Price>
                    <span> {props.category} </span>
                </span>
            </a>
        </div>
    );
}

export default PostTitle;