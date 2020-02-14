import React, { useState } from 'react'

const FleurDeLis = () => {
    const [clicked, setClicked] = useState(false)

    const onClick = () => {
        if (clicked) {
            setClicked(false)
        } else {
            setClicked(true)
        }
    }

    let fleur
    if (clicked) {
        fleur = (
            <svg xmlns="http://www.w3.org/2000/svg" width="50.691" height="56.133" viewBox="0 0 50.691 56.133">
                <path id="mdi-fleur-de-lis" d="M27.345,2S19.23,7.275,19.23,15.187s5.41,13.187,5.41,23.737H21.935a25.732,25.732,0,0,0-2.705-10.55C13.82,17.825,3,23.1,3,31.012s5.41,7.912,5.41,7.912c0-7.912,9.468-7.912,9.468,0H13.82V44.2h9.468L19.23,49.474s2.705,2.637,5.41,0l2.705,5.275,2.705-5.275c2.705,2.637,5.41,0,5.41,0L31.4,44.2h9.468V38.924H36.813c0-7.912,9.468-7.912,9.468,0,0,0,5.41,0,5.41-7.912s-10.82-13.187-16.23-2.637a25.732,25.732,0,0,0-2.705,10.55H30.051c0-10.55,5.41-15.825,5.41-23.737S27.345,2,27.345,2Z" transform="translate(-2 -0.807)" fill="#ffe600" stroke="#e0ca03" stroke-width="2" />
            </svg>
        )
    }
    else {
        fleur = (
            <svg xmlns="http://www.w3.org/2000/svg" width="50.691" height="56.133" viewBox="0 0 50.691 56.133">
                <path id="mdi-fleur-de-lis" d="M27.345,2S19.23,7.275,19.23,15.187s5.41,13.187,5.41,23.737H21.935a25.732,25.732,0,0,0-2.705-10.55C13.82,17.825,3,23.1,3,31.012s5.41,7.912,5.41,7.912c0-7.912,9.468-7.912,9.468,0H13.82V44.2h9.468L19.23,49.474s2.705,2.637,5.41,0l2.705,5.275,2.705-5.275c2.705,2.637,5.41,0,5.41,0L31.4,44.2h9.468V38.924H36.813c0-7.912,9.468-7.912,9.468,0,0,0,5.41,0,5.41-7.912s-10.82-13.187-16.23-2.637a25.732,25.732,0,0,0-2.705,10.55H30.051c0-10.55,5.41-15.825,5.41-23.737S27.345,2,27.345,2Z" transform="translate(-2 -0.807)" fill="#fff" stroke="#121212" stroke-width="2" />
            </svg>
        )
    }
    return (
        <div className="fleur" onClick={onClick}>
            {fleur}
        </div>
    )
}

export default FleurDeLis