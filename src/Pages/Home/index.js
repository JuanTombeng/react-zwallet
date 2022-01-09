import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import defaultProfile from '../../images/default.jpg'
import './home.css'

import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Main from '../../Components/Main/Main'
import Navbar from '../../Components/Navbar/Navbar'
import Balance from '../../Components/Balance/Balance'
import Chart from '../../Components/Chart/Chart'
import History from '../../Components/History/History'
import Card from '../../Components/Card/Card'

const Home = () => {
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
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [headerProfile, setHeaderProfile] = useState({
        displayName : '',
        phoneNumber : '',
        balance : 0
    })
    const [accountBalance, setAccountBalance] = useState(0)
    const [expenses, setExpenses] = useState({
        income : 0,
        outcome : 0
    })
    const [transactionHistory, setTransactionHistory] = useState([])
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
                    // if(err.response.status === 500){
                    //     setErrorMessage(err.response.data.message)
                    // }else{
                    //     setErrorMessage('maaf ganguan')
                    // }`
                })
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
            }
            fetchData()
    
    }, [])

    const handleLogout = () => {
        localStorage.removeItem("auth");
        localStorage.removeItem("accountId");
        localStorage.removeItem("userId");
        navigate("/login");
      };
    return (
        <div className='Home d-flex'>
            <div className="container-home d-flex flex-column">
                <Header display_name={headerProfile.displayName} phone_number={headerProfile.phoneNumber} />
                <Main>
                    <Navbar onClick={handleLogout} />
                    <div className="main-section d-flex flex-column">
                        <Balance balance={headerProfile.balance} phone_number={headerProfile.phoneNumber} />
                        <div className="lower-section d-flex">
                            <Chart />
                            <History>
                                {transactionHistory.map((card) => {
                                    return (
                                        <Card first_name={card.first_name} last_name={card.last_name} transaction_type={card.transaction_type}
                                        amount={card.amount} image={defaultProfile} />
                                    )
                                })}
                            </History>
                        </div>
                    </div>
                </Main>
                <Footer />
            </div>
        </div>
    )
}

export default Home
