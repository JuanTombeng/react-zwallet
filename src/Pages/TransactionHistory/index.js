import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import defaultProfile from '../../images/default.jpg'
import pic0 from '../../images/tf-0.svg'
import pic1 from '../../images/tf-1.svg'
import pic2 from '../../images/tf-2.svg'
import pic3 from '../../images/tf-3.svg'
import './transactionHistory.css'

import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Main from '../../Components/Main/Main'
import Navbar from '../../Components/Navbar/Navbar'
import Card from '../../Components/Card/Card'

function TransactionHistory() {
    const userId = JSON.parse(localStorage.getItem('userId'))
    const [loading, setLoading] = useState(false)
    const [headerProfile, setHeaderProfile] = useState({
        displayName : '',
        phoneNumber : ''
    })
    const [transactionHistory, setTransactionHistory] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    

    useEffect(() => {
        const fetchData = async () => {
            const historyData = await axios.get(`https://zwallet-app.herokuapp.com/transactions/history/${userId}`)
            .then((res) => {
                setLoading(false)
                const result = res.data.data
                setTransactionHistory(result)
            })
            .catch((err) => {
                setErrorMessage(err.response.data.message)
                console.log(err)
            })
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
        <div className='transaction-history'>
            <Header display_name={headerProfile.displayName} phone_number={headerProfile.phoneNumber} />
            <Main>
                <Navbar />
                <div className="transaction-section">
                    <div className="content-wrapper">
                        <h2 className="content-title mb-3">
                            Transaction History
                        </h2>
                        <h2 className="sub-content-title mt-3 mb-3">
                            This Week
                        </h2>
                        {transactionHistory.map((card) => {
                            return (
                                <Card first_name={card.first_name} last_name={card.last_name} transaction_type={card.transaction_type}
                                 amount={card.amount} image={pic1} />
                            )
                        })}
                        <Card image={pic2} first_name='Jessica' last_name='Keen' transaction_type='+62 813-8492-9994' amount='30000'/>
                    </div>
                </div>
            </Main>
            <Footer />
        </div>
    )
}

export default TransactionHistory
