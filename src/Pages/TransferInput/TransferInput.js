import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import defaultProfile from '../../images/default.jpg'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Main from '../../Components/Main/Main'
import Navbar from '../../Components/Navbar/Navbar'
import Card from '../../Components/Card/Card'
import Input from '../../Components/Input/Input'
import Button from '../../Components/Button/index'
import {userContext} from '../../Context/UserContext'
import './transferInput.css'

function TransferInput() {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const {user, setUser} = useContext(userContext)
    const {id} = useParams()
    const [balance, setBalance] = useState(0)
    const [userTarget, setUserTarget] = useState([])
    const [inputValue, setInputValue] =useState(0)
    const [inputNote, setInputNote] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [currentDateTime, setCurrentDateTime] = useState(new Date())
    

    useEffect(() => {
        axios({
            baseURL : process.env.REACT_APP_URL_BACKEND,
            method : 'GET',
            url : `users/${id}`
        })
        .then((res) => {
            setLoading(false)
            const result = res.data.data[0]
            setUserTarget(result)
        })
        .catch((err) => {
            setLoading(false)
            console.log(err.message)
            setErrorMessage(err.response.data.message)
        })

        const timer = setInterval(() => {
            setCurrentDateTime(new Date());
          }, 60 * 1000)
          return () => {
            clearInterval(timer)
          }

    }, [])

    const handleInputOnChange = (e) => {
        setInputValue(parseInt(e.target.value))
    }

    const handleInputNoteOnChange = (e) => {
        setInputNote(e.target.value)
    }

    const handleOnClick = () => {
        if (user.balance < inputValue) {
            alert(`Jumlah Balance tidak cukup`)
            setInputValue(0)
        } else {
            navigate(`/transfer/transfer-confirm/${id}`, { state : {
                from_user_id : user.id,
                to_user_id : id,
                first_name : userTarget.first_name,
                last_name : userTarget.last_name,
                phone_number : userTarget.phone_number,
                current_balance : user.balance,
                amount : inputValue,
                transaction_type : `transfer`,
                dateTime : `${currentDateTime.toDateString()} ${currentDateTime.toLocaleTimeString()}`,
                notes : inputNote ? inputNote : `Empty Note`
            }})
        }
    }
    return (
        <div className='transfer-input'>
            <Header display_name={user ? `${user.first_name} ${user.last_name}` : `Profile Name`} phone_number={user ? user.phone_number : `Phone Number`} />
                <Main>
                    <Navbar />
                    <div className="input-section">
                        <div className="content-wrapper">
                            <Card image={defaultProfile} first_name={userTarget.first_name} last_name={userTarget.last_name}
                            transaction_type={userTarget.phone_number} />
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
                                    <Input className='form-search'
                                        onChange={handleInputOnChange}
                                        name="inputNominal"
                                        value={inputValue}
                                        type="number"
                                        className="input-nominal d-flex justify-content-center"
                                        placeholder="0" step="0.01" min="0.00"
                                    />
                                        {/* <input type="number" className="input-nominal d-flex justify-content-center" placeholder="0.00" step="0.01" min="0.00"/> */}
                                    </div>
                                    <div className="col py-3 d-flex flex-column align-items-center">
                                        <h2 className="input-amount-status d-flex justify-content-center">
                                            Rp. {user ? user.balance : `Balance Loading`} Available
                                        </h2>
                                    </div>  
                                </div>

                                <div className="row py-3 d-flex justify-content-center">
                                    <div className="col col-lg-8 col-xl-6 d-flex">
                                        <i className="note-icon fas fa-pen"></i>
                                        <Input className='input-form-note'
                                            onChange={handleInputNoteOnChange}
                                            name="inputNote"
                                            value={inputNote}
                                            type="text"
                                            placeholder="Add some notes"
                                        />
                                        {/* <input type="text" className="input-form-note" placeholder="Add some notes" /> */}
                                    </div>
                                </div>

                                <div className="row d-flex pt-5 pb-2 d-flex justify-content-end">
                                    <div className="col col-md-4 col-xl-3 d-flex">
                                        <Button className='form-button white d-flex align-items-center justify-content-center' 
                                            onClick={handleOnClick} >Continue
                                        </Button>
                                    </div>
                                </div>
                                {errorMessage && <h1 className="text-error">{errorMessage}</h1>}
                            </div>
                        </div>
                    </div>
                </Main>
            <Footer />
        </div>
    )
}

export default TransferInput
