import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import defaultProfile from '../../images/default.jpg'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Main from '../../Components/Main/Main'
import Navbar from '../../Components/Navbar/Navbar'
import Card from '../../Components/Card/Card'
import Button from '../../Components/Button/index'

import './transferInput.css'

function TransferInput() {

    const navigate = useNavigate()
    const {id} = useParams()
    const profileuserId = JSON.parse(localStorage.getItem('userId'))
    const [loading, setLoading] = useState(false)
    const [headerProfile, setHeaderProfile] = useState({
        displayName : '',
        phoneNumber : ''
    })
    const [balance, setBalance] = useState(0)
    const [usersDetails, setUserDetails] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    

    useEffect(() => {
        const fetchData = async () => {
            const profileData = await axios.get(`https://zwallet-app.herokuapp.com/users/${profileuserId}`)
            .then((res) => {
                setLoading(false)
                const result = res.data.data
                setHeaderProfile({
                    displayName : `${result[0].first_name} ${result[0].last_name}`,
                    phoneNumber : result[0].phone_number
                })
                setBalance(result[0].balance)
            })
            .catch((err) => {
                setLoading(false)
                console.log(err.message)
                setErrorMessage(err.response.data.message)
            })
            const transferTarget = await axios.get(`https://zwallet-app.herokuapp.com/users/${id}`)
            .then((res) => {
                setLoading(false)
                const result = res.data.data[0]
                setUserDetails(result)
            })
            .catch((err) => {
                setLoading(false)
                console.log(err.message)
                setErrorMessage(err.response.data.message)
            })
        }
        fetchData()
    }, [])
    console.log(usersDetails)
    return (
        <div className='transfer-input'>
            <Header display_name={headerProfile.displayName} phone_number={headerProfile.phoneNumber} />
                <Main>
                    <Navbar />
                    <div className="input-section">
                        <div className="content-wrapper">
                            <Card image={defaultProfile} first_name={usersDetails.first_name} last_name={usersDetails.last_name}
                            transaction_type={usersDetails.phone_number} />
                            <div className="details-section">
                                <div className="row p-3 d-none d-md-flex">
                                    <div className="col col-lg-6 col-xl-4">
                                        <p className="user-phone m-0 d-flex">
                                            Type the amount you want to transfer and then
                                            press continue to the next steps.
                                        </p>
                                    </div>
                                </div>

                                <div className="row py-3 d-flex flex-fill justify-content-center d-none d-md-block">
                                    <div className="col py-3 d-flex flex-column align-items-center">
                                        <input type="number" className="input-nominal d-flex justify-content-center" placeholder="0.00" step="0.01" min="0.00"/>
                                    </div>
                                    <div className="col py-3 d-flex flex-column align-items-center">
                                        <h2 className="input-amount-status d-flex justify-content-center">
                                            Rp. {balance} Available
                                        </h2>
                                    </div>  
                                </div>

                                <div className="row py-3 d-flex justify-content-center">
                                    <div className="col col-lg-8 col-xl-6 d-flex">
                                        <i className="note-icon fas fa-pen"></i>
                                        <input type="text" class="input-form-note" placeholder="Add some notes" />
                                    </div>
                                </div>

                                <div class="row d-flex pt-5 pb-2 d-flex justify-content-end">
                                    <div class="col col-md-4 col-xl-3 d-flex">
                                        <Button className='form-button white d-flex align-items-center justify-content-center' 
                                            onClick={() => navigate(`/transfer/transfer-confirm`)} >Continue
                                        </Button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </Main>
            <Footer />
        </div>
    )
}

export default TransferInput
