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
    return (
        <div className='Profile d-flex'>
            <div className="container-profile d-flex flex-column">
                <Header display_name={headerProfile.displayName} phone_number={headerProfile.phoneNumber} />
                <Main>
                    <Navbar />
                    <div className="profile-section d-flex justify-items-center">
                        <div className="content-wrapper d-flex">
                            <div className="middle-content d-flex justify-content-center flex-column">
                                <div className="upper-section d-flex justify-content-center flex-column">
                                    <img src={defaultProfile} className="user-picture d-flex justify-content-center" alt="" />
                                    <div className="edit-section d-flex d-flex justify-content-center">
                                        <img src={vector} className="icon" alt="" />
                                        <p className="edit-title">Edit</p>
                                    </div>
                                </div>
                                <div className="lower-section d-flex">

                                </div>
                            </div>
                        </div>
                    </div>
                    
                </Main>
                <Footer />
            </div>
        </div>
    )
}

export default Profile
