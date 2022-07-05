import React from 'react'

export default function Header(){
    return(
        <nav className='nav'>
            <img src={process.env.PUBLIC_URL+"/Images/TrollFace.png"} className='nav--trollface'/>
            <h2 className='nav--title'>Meme Generator</h2>
            <h4 className='nav--project'>React Course Project-3</h4>
        </nav>
    )
}