import React, { useState, useEffect, useContext } from 'react'
import { useNavigate, Link, useSearchParams, Navigate  } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Main from '../../Components/Main/Main'
import Navbar from '../../Components/Navbar/Navbar'
import Card from '../../Components/Card/Card'
import './phoneNumber.css'
import { userContext } from '../../Context/UserContext'

const ManagePhoneNumber = () => {
    const { user, setUser } = useContext(userContext)
    console.log(user)
    return (
        <div className='manage-phone-number'>
            <Header display_name={user ? `${user.first_name} ${user.last_name}` : `Profile Name`} phone_number={user ? user.phone_number : `Phone Number`} />
            <Main>
                <Navbar />
                <div className="phone-number-section">
                    <div className="content-wrapper">
                        <h2 className="content-title mb-3">
                            Manage Phone Number
                        </h2>
                        <p className="sub-content-title">
                            You can only delete the phone number and then you must add another phone number.
                        </p>
                        <Card first_name='Primary' transaction_type={user ? user.phone_number : `Phone Number`} iconName='icon-trash fas fa-trash d-flex justify-content-end' />
                    </div>
                </div>
            </Main>
            <Footer />
        </div>
    )
}

export default ManagePhoneNumber
