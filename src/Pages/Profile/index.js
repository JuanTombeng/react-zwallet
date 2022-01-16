import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import defaultProfile from '../../images/default.jpg'
import vector from '../../images/Vector.svg'
import { userContext } from '../../Context/UserContext'
import './profile.css'

import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Main from '../../Components/Main/Main'
import Navbar from '../../Components/Navbar/Navbar'
import Card from '../../Components/Card/Card'

const Profile = () => {
    const navigate = useNavigate();
    const {user, setUser} = useContext(userContext)
    const [errorMessage, setErrorMessage] = useState('')
    const handleLogOut = () => {
        localStorage.removeItem("auth");
        localStorage.removeItem("accountId");
        localStorage.removeItem("userId");
        navigate("/login");
    }
    return (
        <div className='Profile'>
                <Header display_name={user ? `${user.first_name} ${user.last_name}` : `Profile Name`} phone_number={user ? user.phone_number : `Phone Number`} />
                <Main>
                    <Navbar />
                    <div className="profile-section profile-content d-flex flex-column justify-content-center align-items-center">
                        <section className="content-wrapper d-flex flex-column align-items-center justify-content-center">
                            <div className="profile-img d-flex justify-content-center">
                                <img
                                src={defaultProfile}
                                className="user-pic mt-3"
                                height="76px"
                                alt="Users"
                                />
                            </div>
                            <div className="profile-edit d-flex flex-row justify-content-center align-items-center ">
                                <i className="pen-edit fas fa-pen"></i>
                                <p className="text-edit text-grey ms-1 mt-3">Edit</p>
                            </div>

                            <div className="profile-name d-flex flex-column align-items-center">
                                <p className="profile-user-name">{user ? `${user.first_name} ${user.last_name}` : `Display Name`}</p>
                                <p className="profile-user-phone">{user ? user.phone_number : `Phone Number`}</p>
                            </div>

                            <div className="profile-manager d-flex flex-row justify-content-between">
                                <p className="profile-manager-option">
                                Personal Information
                                </p>
                                <i className="profile-arrow-icon fas fa-arrow-right"></i>
                            </div>
                            <div className="profile-manager d-flex flex-row justify-content-between">
                                <p className="profile-manager-option">Change Password</p>
                                <i className="profile-arrow-icon fas fa-arrow-right"></i>
                            </div>
                            <div className="profile-manager d-flex flex-row justify-content-between">
                                <p className="profile-manager-option">Change PIN</p>
                                <i className="profile-arrow-icon fas fa-arrow-right"></i>
                            </div>
                            <div
                                onClick={handleLogOut}
                                className="profile-manager d-flex flex-row justify-content-between">
                                <p className="profile-manager-option">Log Out</p>
                            </div>
                        </section>
                    </div>
                </Main>
            <Footer />
        </div>
    )
}

export default Profile
