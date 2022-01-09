import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import defaultProfile from '../../images/default.jpg'
import pic0 from '../../images/tf-0.svg'
import pic1 from '../../images/tf-1.svg'
import pic2 from '../../images/tf-2.svg'
import pic3 from '../../images/tf-3.svg'

import './transfer.css'

import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Main from '../../Components/Main/Main'
import Navbar from '../../Components/Navbar/Navbar'
import Input from '../../Components/Input/Input'
import Card from '../../Components/Card/Card'

const Transfer = () => {
    const userId = JSON.parse(localStorage.getItem('userId'))
    const [loading, setLoading] = useState(false)
    const [headerProfile, setHeaderProfile] = useState({
        displayName : '',
        phoneNumber : ''
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
                    phoneNumber : result.data[0].phone_number
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
        <div className='Transfer'>
            <Header display_name={headerProfile.displayName} phone_number={headerProfile.phoneNumber} />
            <Main>
                <Navbar />
                <div className="transaction-section">
                    <div className="content-wrapper">
                        <h2 className="content-title mb-3">
                            Search Receiver
                        </h2>
                        <Input className='form-search' icon='search-icon fas fa-search' placeholder='Search receiver here'/>
                        <Link to='transfer-confirm' style={{textDecoration : 'none'}}>
                            <Card image={pic1} first_name='Samuel Suhi' transaction_type='+62 813-8492-9994'/>
                        </Link>
                        <Card image={pic2} first_name='Momo Taro' transaction_type='+62 813-8492-9994'/>
                        <Card image={pic3} first_name='Jessica Keen' transaction_type='+62 813-8492-9994'/>
                    </div>
                </div>
            </Main>
            <Footer />
        </div>
    )
}

export default Transfer
