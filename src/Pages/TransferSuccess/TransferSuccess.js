import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import defaultProfile from '../../images/default.jpg'
import {userContext} from '../../Context/UserContext'
import './transferSuccess.css'

import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Main from '../../Components/Main/Main'
import Navbar from '../../Components/Navbar/Navbar'
import Card from '../../Components/Card/Card'
import PlainCard from '../../Components/Card/PlainCard'
import Button from '../../Components/Button/index'

const TransferSuccess = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const {user, setUser} = useContext(userContext)
    const {id} = useParams()
    const [transactionDetails, setTransactionDetails] =useState({})
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        axios({
            baseURL : process.env.REACT_APP_URL_BACKEND,
            method : 'GET',
            url : `/transactions/${user.id}`
        })
        .then((res) => {
            const result = res.data.data
            setTransactionDetails(result)
        })
        .catch((err) => {
            setErrorMessage(err.response.data.message)
            console.log(err)
        })
    }, [])
    
    return (
        <div className='transfer-success'>
            <Header display_name={user ? `${user.first_name} ${user.last_name}` : `Profile Name`} phone_number={user ? user.phone_number : `Phone Number`} />
            <Main>
                <Navbar />
                <div className="transaction-section">
                    <div className="content-wrapper d-flex flex-column">
                        <h2 className="content-title mb-3">
                            Transfer To
                        </h2>
                        {/* <Card image={defaultProfile} first_name={transactionDetails ? transactionDetails.first_name : `Loading`} last_name={state ? state.last_name : `Loading`} 
                            transaction_type={state ? state.phone_number : `Loading`}
                        /> */}
                        <h2 className="content-title mb-3">
                            Details
                        </h2>
                        <PlainCard title='Amount' details={`Rp. ${transactionDetails ? transactionDetails.amount : `Loading`}`}/>
                        <PlainCard title='Balance Left' details={`Rp. ${transactionDetails ? transactionDetails.balance : `Calculating`}`}/>
                        <PlainCard title='Date & Time' details={transactionDetails ? transactionDetails.create_at : `Loading`}/>
                        <PlainCard title='Notes' details={transactionDetails ? transactionDetails.notes : `Loading`}/>
                    </div>
                </div>
            </Main>
            <Footer />
        </div>
    )
}

export default TransferSuccess
