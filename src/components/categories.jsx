import React from 'react'
import {Link} from 'react-router-dom'

const Categories = () => {
    return (
        <div>
            <div className="topDiv">
                <div className="categoryContainer">
                    <div className="category" id="community">
                        <Link to={'/listing/community'}><p className="catName">community</p></Link>
                    </div>
                    <ul className="subCats">
                        <Link to={'/listing/fief_life'}><li>fief life</li></Link>
                        <Link to={'/listing/merry_bands'}><li>merry bands</li></Link>
                        <Link to={'/listing/rituals'}><li>rituals</li></Link>
                        <Link to={'/listing/soapbox'}><li>soapbox</li></Link>
                        <Link to={'/listing/missed_connections'}><li>missed connections</li></Link>
                    </ul>
                    </div>
                <div className="categoryContainer">
                    <div className="category" id="services">
                        <Link to={'/listing/services'}><p className="catName">services</p></Link>
                    </div>
                    <ul className="subCats">
                        <Link to={'/listing/minstrels'}><li>minstrels</li></Link>
                        <Link to={'/listing/apothecaries'}><li>apothecaries</li></Link>
                        <Link to={'/listing/clergy'}><li>clergy</li></Link>
                        <Link to={'/listing/heresy'}><li>heresy</li></Link>
                        <Link to={'/listing/war'}><li>war</li></Link>
                    </ul>
                </div>
                <div className="categoryContainer">
                    <div className="category" id="jobs">
                        <Link to={'/listing/jobs'}><p className="catName">jobs</p></Link>
                    </div>
                    <ul className="subCats">
                        <Link to={'/listing/plaguework'}><li>plaguework</li></Link>
                        <Link to={'/listing/smith'}><li>smith</li></Link>
                        <Link to={'/listing/education'}><li>education</li></Link>
                        <Link to={'/listing/food'}><li>food</li></Link>
                        <Link to={'/listing/mason'}><li>mason</li></Link>
                    </ul>
                </div>
            </div>
            <div className="bottomDiv">
            <div className="categoryContainer">
                <div className="category" id="housing">
                    <Link to={'/listing/housing'}><p className="catName">housing</p></Link>
                </div>
                <ul className="subCats">
                        <Link to={'/listing/manors'}><li>manors</li></Link>
                        <Link to={'/listing/hovels'}><li>hovels</li></Link>
                        <Link to={'/listing/barns'}><li>barns</li></Link>
                        <Link to={'/listing/farms'}><li>farms</li></Link>
                        <Link to={'/listing/castles'}><li>castles</li></Link>
                        <Link to={'/listing/fiefs'}><li>fiefs</li></Link>
                    </ul>
            </div>
            <div className="categoryContainer">
                <div className="category" id="for_sale">
                    <Link to={'/listing/for_sale'}><p className="catName">for sale</p></Link>
                </div>
                <ul className="subCats">
                        <Link to={'/listing/livestock'}><li>livestock</li></Link>
                        <Link to={'/listing/rocks'}><li>rocks</li></Link>
                        <Link to={'/listing/tools'}><li>tools</li></Link>
                        <Link to={'/listing/clothing'}><li>clothing</li></Link>
                        <Link to={'/listing/relics'}><li>relics</li></Link>
                        <Link to={'/listing/peasants'}><li>peasants</li></Link>
                    </ul>
            </div>
            <div className="categoryContainer">
                <div className="category" id="events">
                    <Link to={'/listing/events'}><p className="catName">events</p></Link>
                </div>
                <ul className="subCats">
                        <Link to={'/listing/minstrels'}><li>tournaments</li></Link>
                        <Link to={'/listing/feasts'}><li>feasts</li></Link>
                        <Link to={'/listing/mobs'}><li>mobs</li></Link>
                        <Link to={'/listing/war'}><li>war</li></Link>
                        <Link to={'/listing/pilgrimages'}><li>pilgrimages</li></Link>
                        <Link to={'/listing/rats'}><li>rats</li></Link>
                    </ul>
            </div>
            </div>
        </div>
    )
}

export default Categories