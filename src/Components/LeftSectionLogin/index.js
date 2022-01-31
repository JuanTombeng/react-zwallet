import React from 'react'
import './leftSectionLogin.css'
import leftBackground from '../../images/bg-app.svg'

function LeftSectionLogin () {
    return (
        <div className='left-section-page'>
            <div className="top-left-title ms-5">Zwallet</div>
                <img className='bg-app ms-5' src={leftBackground} alt="" width="500" />
                <h2 className="bottom-left-title ms-5 mb-3">App that Covering Banking Needs.</h2>
                <p className="bottom-left-parag ms-5">Zwallet is an application that focussing in banking needs for all users
                in the world. Always updated and always following world trends.
                5000+ users registered in Zwallet everyday with worldwide
                users coverage.</p>
        </div>
    )
}

export default LeftSectionLogin
