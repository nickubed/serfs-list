// Who Controls Rome?
import React from 'react'

const ControlsJerusalem = () => {

    const countryNames = ['Brittany', 'Burgundy', 'England', 'France', 'Roman Empire', 'Lotharingia', 'Normandy', 'Pomerania', 'Gavin Callander', 'Saxons', 'Mads', 'Rats']
    const content = countryNames[Math.floor(Math.random() * countryNames.length)]
    return (
        <div className="jerusalemContainer">
            <div className="controlsJerusalem">
                <h4>Who controls Jerusalem?:<br /> {content}</h4>
            </div>
        </div>
    )
}

export default ControlsJerusalem