import React from 'react'
import Search from './search'
import image from '../headerbackground.png'

const Home = props => {
    return (
        <div className="header">
            <h3 id="pagename">Serfslist</h3>
            <Search />
        </div>
    )
}

export default Home