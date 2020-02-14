import React from 'react'
import Nav from '../components/nav'
import Header from '../components/header'
import Categories from '../components/categories'
import ControlsJerusalem from '../components/WhoControlsRome'

const Home = props => {
    return (
        <div>
            <Categories />
            <ControlsJerusalem />
        </div>
    )
}

export default Home