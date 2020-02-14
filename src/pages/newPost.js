import {React, useEffect, useState, FormEvent} from 'react'

const NewPost = props => {

    let [title, setTitle] = useState('')
    let [img, setImg] = useState('')
    let [desc, setDesc] = useState('')
    let [price, setPrice] = useState(0)
    let [replyTo, setReplyTo] = useState('')
    let [category, setCategory] = useState('')
    let [subCategory, setSubCategory] = useState('')

    useEffect()

    const createPost = (e) => {
        e.preventDefault()

        let data = {
            title,
            img,
            desc,
            price,
            replyTo,
            category,
            subCategory
        }
    

        fetch(`${process.env.REACT_APP_SERVER_URL}/listing/new`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    return (
        <div>
            <form onSubmit={createPost}>
                <div>
                    <label for="title"><h5>Title:</h5></label>
                    <input id="title" type="text" name="title" placeholder="Whatdya want" onChange={(e) => setTitle(e.currentValue.value)} />
                </div>
                <div>
                    <label for="img"><h5>Image:</h5></label>
                    <input id="img" type="url" name="title" placeholder="Photo if Applicable" onChange={(e) => setImg(e.currentValue.value)} />
                </div>
                <div>
                    <label for="desc"><h5>Description:</h5></label>
                    <input id="desc" type="textarea" name="desc" placeholder="More Info..." onChange={(e) => setDesc(e.currentValue.value)} />
                </div>
                <div>
                    <label for="price"><h5>Price:</h5></label>
                    <input id="price" type="number" name="price" placeholder="Price if Applicable" onChange={(e) => setPrice(e.currentValue.value)} />
                </div>
                <div>
                    <label for="replyTo"><h5>Contact Name:</h5></label>
                    <input id="replyTo" type="text" name="replyTo" placeholder="Name:" onChange={(e) => setReplyTo(e.currentValue.value)} />
                </div>
                <div>
                    <label for="category"><h5>Category:</h5></label>
                    <input id="category" type="text" name="category" placeholder="Categorize" onChange={(e) => setCategory(e.currentValue.value)} />
                </div>
                <div>
                    <label for="subCategory"><h5>subCategory:</h5></label>
                    <input id="subCategory" type="text" name="subCategory" placeholder="Further Categorize" onChange={(e) => setSubCategory(e.currentValue.value)} />
                </div>
                <hr />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NewPost