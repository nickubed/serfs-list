import React from 'react'
import Search from './search'
import fleurdelis from '../images/fleur_de_lis_yellow.svg'
import './style.scss'
import FleurDeLis from './FleurDeLis'

const Nav = props => {
    return (
        <div className="nav">
            <nav>
                <ul className="left">
                    <li>
                        <h3>
                        <a href="/" id="pagename">Serfslist</a>
                        </h3>
                    </li>
                </ul>
                <ul className="right">
                    <li id="postlink">
                        <h3>
                        <a href="#">post</a>
                        </h3>
                    </li>
                    <li id="favorites">
                        <h3>
                        <a href="#">
                            <FleurDeLis/>
                            <span> Favorites</span>
                        </a>
                        </h3>
                    </li>
                </ul>
            </nav>
            <Search />
        </div>
    )
}

export default Nav