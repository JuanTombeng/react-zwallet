import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Home = () => {
    const [loading, setLoading] = useState(false)
    const [headerProfile, setHeaderProfile] = useState({
        displayName : '',
        phoneNumber : ''
    })
    const [accountBalance, setAccountBalance] = useState(0)
    const [expenses, setExpenses] = useState({
        income : 0,
        outcome : 0
    })
    const [transactionHistory, setTransactionHistory] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    axios.get('https://zwallet-app.herokuapp.com/users')
    .then((res) => {
        setLoading(false)
        const result = res.data
        console.log(result)
    }).catch((err) => {
        setLoading(false)
        console.log(err.message)
        if(err.response.status === 500){
            setErrorMessage(err.response.data.message)
        }else{
            setErrorMessage('maaf ganguan')
        }
    })
    return (
        <div className='Home'>
            <div className="container">
                
            </div>
        </div>
    )
}

export default Home
