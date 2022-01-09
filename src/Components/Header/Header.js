import React from 'react'
import './header.css'
import defaultProfile from '../../images/default.jpg'

const Header = (props) => {
    return (
        <div className="Header d-flex">
            <div className="title-menu d-flex flex-fill justify-content-center align-items-center">
                <h1 className="main-title d-flex align-content-center">Zwallet</h1>
            </div>
            <div className="user-menu d-flex flex-fill justify-content-center align-items-center">
                <img src={defaultProfile} className="profile-picture d-flex" alt="" />
                <div className="d-flex flex-column justify-content-center px-2">
                    <h2 className="user-name m-0 d-flex justify-content-center">
                        {props.display_name}
                    </h2>
                    <p className="user-phone m-0 d-flex justify-content-center">
                        {props.phone_number}
                    </p>
                </div>
                <i className="icon-notif far fa-bell d-flex align-items-center"></i>
            </div>
        </div>
    )
}

export default Header