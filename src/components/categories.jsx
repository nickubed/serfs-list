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
                        <Link to={'/listing/community/fief_life'}><li>fief life</li></Link>
                        <Link to={'/listing/community/merry_bands'}><li>merry bands</li></Link>
                        <Link to={'/listing/community/rituals'}><li>rituals</li></Link>
                        <Link to={'/listing/community/soapbox'}><li>soapbox</li></Link>
                        <Link to={'/listing/community/missed_connections'}><li>missed connections</li></Link>
                    </ul>
                    </div>
                <div className="categoryContainer">
                    <div className="category" id="services">
                        <Link to={'/listing/services'}><p className="catName">services</p></Link>
                    </div>
                    <ul className="subCats">
                        <Link to={'/listing/services/minstrels'}><li>minstrels</li></Link>
                        <Link to={'/listing/services/apothecaries'}><li>apothecaries</li></Link>
                        <Link to={'/listing/services/clergy'}><li>clergy</li></Link>
                        <Link to={'/listing/services/heresy'}><li>heresy</li></Link>
                        <Link to={'/listing/services/war'}><li>war</li></Link>
                    </ul>
                </div>
                <div className="categoryContainer">
                    <div className="category" id="jobs">
                        <Link to={'/listing/jobs'}><p className="catName">jobs</p></Link>
                    </div>
                    <ul className="subCats">
                        <Link to={'/listing/jobs/plaguework'}><li>plaguework</li></Link>
                        <Link to={'/listing/jobs/smith'}><li>smith</li></Link>
                        <Link to={'/listing/jobs/education'}><li>education</li></Link>
                        <Link to={'/listing/jobs/food'}><li>food</li></Link>
                        <Link to={'/listing/jobs/mason'}><li>mason</li></Link>
                    </ul>
                </div>
            </div>
            <div className="bottomDiv">
            <div className="categoryContainer">
                <div className="category" id="housing">
                    <Link to={'/listing/housing'}><p className="catName">housing</p></Link>
                </div>
                <ul className="subCats">
                        <Link to={'/listing/housing/manors'}><li>manors</li></Link>
                        <Link to={'/listing/housing/hovels'}><li>hovels</li></Link>
                        <Link to={'/listing/housing/barns'}><li>barns</li></Link>
                        <Link to={'/listing/housing/farms'}><li>farms</li></Link>
                        <Link to={'/listing/housing/castles'}><li>castles</li></Link>
                        <Link to={'/listing/housing/fiefs'}><li>fiefs</li></Link>
                    </ul>
            </div>
            <div className="categoryContainer">
                <div className="category" id="for_sale">
                    <Link to={'/listing/for_sale'}><p className="catName">for sale</p></Link>
                </div>
                <ul className="subCats">
                        <Link to={'/listingfor_sale/livestock'}><li>livestock</li></Link>
                        <Link to={'/listingfor_sale/rocks'}><li>rocks</li></Link>
                        <Link to={'/listingfor_sale/tools'}><li>tools</li></Link>
                        <Link to={'/listingfor_sale/clothing'}><li>clothing</li></Link>
                        <Link to={'/listingfor_sale/relics'}><li>relics</li></Link>
                        <Link to={'/listingfor_sale/peasants'}><li>peasants</li></Link>
                    </ul>
            </div>
            <div className="categoryContainer">
                <div className="category" id="events">
                    <Link to={'/listing/events'}><p className="catName">events</p></Link>
                </div>
                <ul className="subCats">
                        <Link to={'/listing/events/minstrels'}><li>tournaments</li></Link>
                        <Link to={'/listing/events/feasts'}><li>feasts</li></Link>
                        <Link to={'/listing/events/mobs'}><li>mobs</li></Link>
                        <Link to={'/listing/events/war'}><li>war</li></Link>
                        <Link to={'/listing/events/pilgrimages'}><li>pilgrimages</li></Link>
                        <Link to={'/listing/events/rats'}><li>rats</li></Link>
                    </ul>
            </div>
            </div>
        </div>
    )
}

export default Categories