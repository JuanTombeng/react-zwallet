import React, { useState, useEffect, useContext } from 'react'
import { useNavigate, Link, useSearchParams, Navigate  } from 'react-router-dom'
import axios from 'axios'
import defaultProfile from '../../images/default.jpg'
import { userContext } from '../../Context/UserContext'

import './transfer.css'

import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Main from '../../Components/Main/Main'
import Navbar from '../../Components/Navbar/Navbar'
import Input from '../../Components/Input/Input'
import Card from '../../Components/Card/Card'

const Transfer = () => {
    const userId = JSON.parse(localStorage.getItem('userId'))
    const { user, setUser } = useContext(userContext)
    const [loading, setLoading] = useState(false)
    const [headerProfile, setHeaderProfile] = useState({
        displayName : '',
        phoneNumber : ''
    })
    const [contactList, setContactList] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams();
    const querySearch = searchParams.get("search");

    useEffect(() => {
        if (querySearch) {
            setLoading(false)
            axios({
                baseURL : process.env.REACT_APP_URL_BACKEND,
                method : 'GET',
                'url' : `users/?name=${querySearch}&limit=3`
            })
            .then((res) => {
                setLoading(false)
                const result = res.data.data
                setContactList(result)
            })
            .catch((err) => {
                setLoading(false)
                console.log(err.message)
                setErrorMessage(err.response.data.message)
            })
            // const fetchData = async () => {
            //     const profileData = await axios.get(`https://zwallet-app.herokuapp.com/users/${userId}`)
            //     .then((res) => {
            //         setLoading(false)
            //         const result = res.data
            //         setHeaderProfile({
            //             displayName : `${result.data[0].first_name} ${result.data[0].last_name}`,
            //             phoneNumber : result.data[0].phone_number
            //         })
            //     })
            //     .catch((err) => {
            //         setLoading(false)
            //         console.log(err.message)
            //         setErrorMessage(err.response.data.message)
            //     })
            //     const contactListData = await axios.get(`https://zwallet-app.herokuapp.com/users/?name=${querySearch}&limit=3`)
            //     .then((res) => {
            //         setLoading(false)
            //         const result = res.data.data
            //         setContactList(result)
            //     })
            //     .catch((err) => {
            //         setLoading(false)
            //         console.log(err.message)
            //         setErrorMessage(err.response.data.message)
            //     })
            // }
            // fetchData()
        } else {
            setLoading(false)
            axios({
                baseURL : process.env.REACT_APP_URL_BACKEND,
                method : 'GET',
                'url' : `users/?limit=3`
            })
            .then((res) => {
                setLoading(false)
                const result = res.data.data
                setContactList(result)
            })
            .catch((err) => {
                setLoading(false)
                console.log(err.message)
                setErrorMessage(err.response.data.message)
            })
            // const fetchData = async () => {
            //     const profileData = await axios.get(`https://zwallet-app.herokuapp.com/users/${userId}`)
            //     .then((res) => {
            //         setLoading(false)
            //         const result = res.data
            //         setHeaderProfile({
            //             displayName : `${result.data[0].first_name} ${result.data[0].last_name}`,
            //             phoneNumber : result.data[0].phone_number
            //         })
            //     })
            //     .catch((err) => {
            //         setLoading(false)
            //         console.log(err.message)
            //         setErrorMessage(err.response.data.message)
            //     })
            //     const contactListData = await axios.get(`https://zwallet-app.herokuapp.com/users/?limit=3`)
            //     .then((res) => {
            //         setLoading(false)
            //         const result = res.data.data
            //         setContactList(result)
            //     })
            //     .catch((err) => {
            //         setLoading(false)
            //         console.log(err.message)
            //         setErrorMessage(err.response.data.message)
            //     })
            // }
            // fetchData()
        }
    }, [querySearch])
    
    const handleSearch = (e) => {
        if (e.key === 'Enter' )
        setSearchParams({
            search : e.target.value
        })
    }

    const handleClearSearchBar = () => {
        setSearchParams()

    }
    return (
        <div className='Transfer'>
            <Header display_name={user ? `${user.first_name} ${user.last_name}` : `Profile Name`} phone_number={user ? user.phone_number : `Phone Number`} />
            <Main>
                <Navbar />
                <div className="transaction-section">
                    <div className="content-wrapper">
                        <h2 className="content-title mb-3">
                            Search Receiver
                        </h2>
                        <Input name="search" className='form-search' 
                        icon='search-icon fas fa-search' 
                        close='close-icon far fa-times-circle'
                        placeholder='Search receiver here'
                        onClick={handleClearSearchBar} 
                        onKeyUp={handleSearch} />
                        {contactList.map((contact) => {
                            return <Card key={contact.id} image={defaultProfile} first_name={contact.first_name} last_name={contact.last_name}
                            transaction_type={contact.phone_number} onClick={() => navigate(`/transfer/transfer-input/${contact.id}`)}/>
                        })}
                    </div>
                </div>
            </Main>
            <Footer />
        </div>
    )
}

export default Transfer
