import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import defaultProfile from '../../images/default.jpg'
import vector from '../../images/Vector.svg'
import './profile.css'

import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Main from '../../Components/Main/Main'
import Navbar from '../../Components/Navbar/Navbar'
import Card from '../../Components/Card/Card'

const Profile = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const [userId, setUserId] = useState(() => {
        const data = localStorage.getItem('userId')
        const initialValue = JSON.parse(data)
        return initialValue || ""
    })
    const [accountId, setAccountId] = useState(() => {
        const data = localStorage.getItem('accountId')
        const initialValue = JSON.parse(data)
        return initialValue || ""
    })
    const [headerProfile, setHeaderProfile] = useState({
        displayName : '',
        phoneNumber : '',
    })
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const profileData = await axios.get(`https://zwallet-app.herokuapp.com/users/${userId}`)
                .then((res) => {
                    setLoading(false)
                    const result = res.data
                    setHeaderProfile({
                        displayName : `${result.data[0].first_name} ${result.data[0].last_name}`,
                        phoneNumber : result.data[0].phone_number,
                        balance : result.data[0].balance
                    })
                })
                .catch((err) => {
                    setLoading(false)
                    console.log(err.message)
                    setErrorMessage(err.response.data.message)
                })
            }
            fetchData()
    }, [])

    const handleLogOut = () => {
        localStorage.removeItem("auth");
        localStorage.removeItem("accountId");
        localStorage.removeItem("userId");
        navigate("/login");
    }
    return (
        <div className='Profile'>
                <Header display_name={headerProfile.displayName} phone_number={headerProfile.phoneNumber} />
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
                                <p className="profile-user-name">{headerProfile.displayName}</p>
                                <p className="profile-user-phone">{headerProfile.phoneNumber}</p>
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
