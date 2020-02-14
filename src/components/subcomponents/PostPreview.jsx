import React from 'react';
import { Link } from 'react-router-dom';

const PostPreview = (props) => {
    return (
        <Link to={
                { pathname: `/post/${props.listing._id}`,
                  state: props.listing
                }
            }>
            <div className="category">
                <h5>{props.listing.title}</h5>
                <h5>{props.listing.img}</h5>
                <h5>{props.listing.price}</h5>
                <h5>{props.listing.replyTo}</h5>
            </div>
        </Link>
    )
}

export default PostPreview;