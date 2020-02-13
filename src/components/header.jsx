import React from 'react'
import Search from './search'

const Header = props => {
    return (
        <div className="header">
            <h3 id="pagename">Serfslist</h3>
            <Search />
        </div>
    )
}

export default Header