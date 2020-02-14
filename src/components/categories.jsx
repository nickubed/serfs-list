import React, { useEffect, useState } from 'react'
import { GET_LISTINGS } from '../Constants'
import PostPreview from './subcomponents/PostPreview';

const Categories = (props) => {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        fetch(GET_LISTINGS)
        .then((response) => {
            return response.json()
        })
        .then((listings) => {
            setListings(listings)
        })
    });
    const listingElements = listings.map((listing, key) => <PostPreview listing={listing} key={key}/>)

    return (
        <div>
            {listingElements}
        </div>
    )
}

export default Categories