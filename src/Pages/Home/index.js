import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { userContext } from '../../Context/UserContext'
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
    const { user, setUser } = useContext(userContext)
    const navigate = useNavigate();
    const [userId, setUserId] = useState(() => {
        const data = localStorage.getItem('userId')
        const initialValue = JSON.parse(data)
        return initialValue || ""
    })
    const [headerProfile, setHeaderProfile] = useState({
        displayName : '',
        phoneNumber : '',
        balance : 0
    })
    const [transactionHistory, setTransactionHistory] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    // useEffect(() => {
    //     axios({
    //         baseURL : `${process.env.REACT_APP_URL_BACKEND}`,
    //         method : 'GET',
    //         url : `/transactions/history/${userId}`
    //     }).then((res) => {
    //         setLoading(false)
    //         const result = res.data.data
    //         setTransactionHistory(result)
    //     }).catch((err) => {
    //         setLoading(false)
    //         setErrorMessage(err.response.data.message)
    //     })
    // }, [])
    
    const handleLogout = () => {
        localStorage.removeItem("auth");
        localStorage.removeItem("token");
        navigate("/login");
    };
    return (
        <div className='Home d-flex'>
            <div className="container-home d-flex flex-column">
                <Header display_name={user ? `${user.first_name} ${user.last_name}` : `Profile Name`} phone_number={user ? user.phone_number : `Phone Number`} />
                <Main>
                    <Navbar onClick={handleLogout} />
                    <div className="main-section d-flex flex-column">
                        <Balance balance={user ? user.balance : 0} phone_number={user ? user.phone_number : `Phone Number`} />
                        <div className="lower-section d-flex">
                            <Chart />
                            <History>
                                {transactionHistory.map((card) => {
                                    if (card.to_user_id !== userId) {
                                        return (
                                            <Card key={card.id} first_name={card.first_name} last_name={card.last_name} transaction_type={card.transaction_type}
                                            amount={card.amount} image={defaultProfile} color="green"/>
                                        )
                                    } else {
                                        return <Card key={card.id} first_name={card.first_name} last_name={card.last_name} transaction_type={card.transaction_type}
                                            amount={card.amount} image={defaultProfile} color="red"/>
                                    }
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
