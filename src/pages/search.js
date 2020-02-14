import React, { useEffect, useState } from 'react';
import PostTitle from '../components/PostTitle';
import SearchParams from '../components/SearchParams';
import { useParams } from 'react-router-dom';

const SearchPage = () => {
    const [posts, setPosts] = useState([])
    let { category, subCategory } = useParams();

    const getPosts = () => {
        if (subCategory) {
            fetch(`http://serfsver.herokuapp.com/listing/${category}/${subCategory}`, {
                method: 'GET',
            })
                .then(response => {
                    return response.json()
                })
                .then(result => {

                    setPosts(result)
                })
        } else {
            fetch(`http://serfsver.herokuapp.com/listing/${category}`, {
                method: 'GET',
            })
                .then(response => {
                    return response.json()
                })
                .then(result => {

                    setPosts(result)
                })
        }
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