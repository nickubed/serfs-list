import React from 'react'

const Categories = props => {
    return (
        <div>
            <div className="topDiv">
                <div className="categoryContainer">
                    <div className="category" id="community">
                        <p className="catName">community</p>
                    </div>
                        <ul className="subCats">
                            <li>fief life</li>
                            <li>merry bands</li>
                            <li>rituals</li>
                            <li>soapbox</li>
                            <li>missed connections</li>
                        </ul>
                </div>
                <div className="categoryContainer">
                    <div className="category" id="services">
                        <p className="catName">services</p>
                    </div>
                    <ul className="subCats">
                            <li>minstrels</li>
                            <li>apothecaries</li>
                            <li>clergy</li>
                            <li>heresy</li>
                            <li>war</li>
                        </ul>
                </div>
                <div className="categoryContainer">
                    <div className="category" id="jobs">
                        <p className="catName">jobs</p>
                    </div>
                    <ul className="subCats">
                        <li>plaguework</li>
                        <li>smith</li>
                        <li>education</li>
                        <li>food</li>
                        <li>mason</li>
                    </ul>
                </div>
            </div>
            <div className="bottomDiv">
            <div className="categoryContainer">
                <div className="category" id="housing">
                    <p className="catName">housing</p>
                </div>
                <ul className="subCats">
                        <li>manors</li>
                        <li>hovels</li>
                        <li>barns</li>
                        <li>farms</li>
                        <li>castles</li>
                        <li>fiefs</li>
                    </ul>
            </div>
            <div className="categoryContainer">
                <div className="category" id="for_sale">
                    <p className="catName">for sale</p>
                </div>
                <ul className="subCats">
                        <li>livestock</li>
                        <li>rocks</li>
                        <li>tools</li>
                        <li>clothing</li>
                        <li>relics</li>
                        <li>peasants</li>
                    </ul>
            </div>
            <div className="categoryContainer">
                <div className="category" id="events">
                    <p className="catName">events</p>
                </div>
                <ul className="subCats">
                        <li>tournaments</li>
                        <li>feasts</li>
                        <li>mobs</li>
                        <li>wars</li>
                        <li>pilgrimages</li>
                        <li>rats</li>
                    </ul>
            </div>
            </div>
        </div>
    )
}

export default Categories