import React from 'react';
import { Link } from 'react-router-dom'
import FleurDeLis from './FleurDeLis';
import Price from './subcomponents/Price';

const PostTitle = (props) => {
    return(
        <div className="postTitle">
            <a href={props.link}>
                <span>
                    <FleurDeLis />
                    <span><small>  févr 14  </small></span>
                    <Link to={{
                        pathname: 'post/'+props['_id'],
                        state: { props }
                    }}
                    >
                        <span><strong>  {props.title}  </strong></span>
                    </Link>
                    <Price>{props.price || ''}</Price>
                    <small><span> ({props.location}) </span></small>                    
                </span>
            </a>
        </div>
    );
}

export default PostTitle;