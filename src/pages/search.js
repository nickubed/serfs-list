import React, { useEffect, useState } from 'react';
import PostTitle from '../components/PostTitle';
import SearchParams from '../components/SearchParams';

const SearchPage = () => {
    const [posts, setPosts] = useState([])
    const postList = posts.map((post) => {
        return (
            <PostTitle
                link={post.link}
                date={post.date}
                title={post.title}
                price={post.price}
                location={post.location}
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