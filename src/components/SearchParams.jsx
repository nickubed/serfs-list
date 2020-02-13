import React from 'react';

const SearchParams = () => {
    return (
        <div className="search-area">
            <div className="search-filter">
                <h3>Filter</h3>
                <form>
                    <span className="search-form">
                        <input type="checkbox" />
                        <label >search titles only</label>
                    </span>

                    <span className="search-form">
                        <input type="checkbox" />
                        <label >has image</label>
                    </span>

                    <span className="search-form">
                        <input type="checkbox" />
                        <label >posted today</label>
                    </span>

                    <span className="search-form">
                        <input type="checkbox" />
                        <label >bundle duplicates</label>
                    </span>

                    <span className="search-form">
                        <input type="checkbox" />
                        <label >include nearby villages</label>
                    </span>
                </form>
                <form className="search-params">
                    <label>Arpents from Village</label>
                    <span className="search-form">
                        <input type="text" placeholder="arpents" />
                        <input type="text" placeholder="from village" />
                    </span>
                </form>
            </div>
            <div className="search-params">
                <h3>Sort Results</h3>
                <span className="search-form">
                    <input type="checkbox" />
                    <label>sort param</label>
                </span>
                <span className="search-form">
                    <input type="checkbox" />
                    <label>sort param</label>
                </span>
                <span className="search-form">
                    <input type="checkbox" />
                    <label>sort param</label>
                </span>
                <span className="search-form">
                    <input type="checkbox" />
                    <label>sort param</label>
                </span>
                <span className="search-form">
                    <input type="checkbox" />
                    <label>sort param</label>
                </span>
                <span className="search-form">
                    <input type="checkbox" />
                    <label>sort param</label>
                </span>
            </div>
            <div className="search-params">
                <h3>Categories</h3>
                <span className="search-form">
                    <input type="checkbox" />
                    <label>category</label>
                </span>
                <span className="search-form">
                    <input type="checkbox" />
                    <label>category</label>
                </span>
                <span className="search-form">
                    <input type="checkbox" />
                    <label>category</label>
                </span>
                <span className="search-form">
                    <input type="checkbox" />
                    <label>category</label>
                </span>
                <span className="search-form">
                    <input type="checkbox" />
                    <label>category</label>
                </span>
                <span className="search-form">
                    <input type="checkbox" />
                    <label>category</label>
                </span>
            </div>
        </div>
    )
}

export default SearchParams;