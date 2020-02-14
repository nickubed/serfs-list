import React from 'react'
import FleurDeLis from '../components/FleurDeLis'
import ShareIcon from '../components/subcomponents/ShareIcon'
import ReplyIcon from '../components/subcomponents/ReplyIcon'



const Post = (props) => {
    let price
    if (props.location.state.price) {
        price =
            (
                <div>
                    <h1>Price</h1>
                    <span>{props.location.state.price}</span>
                </div>
            )
    } else {
        price = ''
    }
    console.log(props)
    return (
        <div>
            <div>
                <div className="post-header">
                    <span className="post-info">
                        <span className="post-title">
                            <span className="post-title-title">{props.location.state.props.title}</span>                           <button className="button">
                                <FleurDeLis />
                                Favorite
                            </button>
                        </span>
                        <h3>Posted {Math.floor(Math.random() * 10)} days ago</h3>
                    </span>
                    <div>
                        <h3>{props.location.state.props.replyTo}</h3>
                    </div>
                </div>
                <p>{props.location.state.props.desc}</p>
                <img src={props.location.state.props.img} />
                <span className="">
                    <button className="button">
                        <ReplyIcon />
                        Reply
                    </button>
                    <button className="button">
                        <ShareIcon />
                        Share
                    </button>
                </span>
                <div>
                    <h3>Category</h3>
                    <span>Overall > {props.location.state.props.category} > {props.location.state.props.subCategory}</span>
                </div>
                {price}
            </div>
            <div>

            </div>
        </div>
    )
}

export default Post;