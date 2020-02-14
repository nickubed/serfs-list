import React from 'react'

const Categories = props => {
    return (
        <div>
            <div>
                <div className="category" id="community">
                    <p className="catName">community</p>
                </div>
                <div className="category" id="services">
                    <p className="catName">services</p>
                </div>
                <div className="category" id="jobs">
                    <p className="catName">jobs</p>
                </div>
            </div>
            <div>
                <div className="category" id="housing">
                    <p className="catName">housing</p>
                </div>
                <div className="category" id="for_sale">
                    <p className="catName">for sale</p>
                </div>
                <div className="category" id="events">
                    <p className="catName">events</p>
                </div>
            </div>
        </div>
    )
}

export default Categories