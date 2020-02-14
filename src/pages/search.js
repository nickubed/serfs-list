import React, { useEffect, useState } from 'react';
import PostTitle from '../components/PostTitle';
import SearchParams from '../components/SearchParams';

const SearchPage = () => {
    const [posts, setPosts] = useState([])

    const getPosts = () => {
        fetch(`http://serfsver.herokuapp.com/listing`, {
            method: 'GET',
            })
            .then(response => {
                return response.json()
            })
            .then(result => {
                setPosts(result)
            })
    }

    useEffect(getPosts, [])

    const postList = posts.map((post) => {
        return (
            <PostTitle
                _id={post._id}
                subCategory={post.subCategory}
                category={post.category}
                title={post.title}
                price={post.price}
                location='Montbrun Castle'
                desc={post.desc}
                img={post.img}
            />
        )
    })
    
    return (
        <div className="search-page">
            <SearchParams />
            <div className="post-browse">
                {postList}
            </div>
        </div>
    );
}

export default SearchPage;