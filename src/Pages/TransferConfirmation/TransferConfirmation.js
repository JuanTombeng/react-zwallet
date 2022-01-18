import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import defaultProfile from '../../images/default.jpg'
import {userContext} from '../../Context/UserContext'
import './transferConfirmation.css'

import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Main from '../../Components/Main/Main'
import Navbar from '../../Components/Navbar/Navbar'
import Card from '../../Components/Card/Card'
import PlainCard from '../../Components/Card/PlainCard'
import Button from '../../Components/Button/index'
import Modal from '../../Components/Modals/PinModal'

function TransferConfirmation() {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const {user, setUser} = useContext(userContext)
    const {id} = useParams()
    const [transferDetails, setTransferDetails] =useState({})
    const [balanceLeft, setBalanceLeft] = useState(0)
    const [errorMessage, setErrorMessage] = useState('')
    const { state } = useLocation();

    const [modal, setModal] = useState(false)

    //pin states
    const [pin, setPin] = useState(new Array(6).fill(''))
    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false
        const pinInt = [...pin.map((d, idx) => (idx === index ? element.value : d))]
        setPin(pinInt)
        if (element.nextSibling) {
            element.nextSibling.focus()
        }
    }
    //pin states

    useEffect(() => {
        const result = state.current_balance - state.amount
        setBalanceLeft(result)
    }, [])

    const showModal = () => {
        setModal(true)
    }

    const hideModal = () => {
        setModal(false)
    }

    const matchingPin = () => {
        if (user) {
            if (user.pin === parseInt(pin.join(''))) {
                console.log(user.id)
                console.log(id)
                console.log(state.amount)
                console.log(state.transaction_type)
                console.log(state.notes)
                axios({
                    baseURL : process.env.REACT_APP_URL_BACKEND,
                    data : {
                        from_user_id : user.id,
                        to_user_id : id,
                        amount : state.amount,
                        transaction_type : state.transaction_type,
                        notes : state.notes,
                    },
                    method : 'POST',
                    url : `/transactions/`
                })
                .then((res) => {
                const result = res.data.data
                alert('Pin is confirmed!')
                navigate(`/transfer/transfer-success/${id}`)
                })
                .catch((err) => {
                    console.log(err.message)
                })
            } else {
                alert('Pin is Incorrect!')
            }
        } else {
            alert('Loading, please wait a moment')
        }
    }
    console.log(user.pin)
    console.log(pin)
    return (
        <div className='transfer-confirmation'>
            <Header display_name={user ? `${user.first_name} ${user.last_name}` : `Profile Name`} phone_number={user ? user.phone_number : `Phone Number`} />
            <Main>
                <Navbar />
                <div className="transaction-section">
                    <div className="content-wrapper d-flex flex-column">
                        <h2 className="content-title mb-3">
                            Transfer To
                        </h2>
                        <Card image={defaultProfile} first_name={state ? state.first_name : `Loading`} last_name={state ? state.last_name : `Loading`} 
                            transaction_type={state ? state.phone_number : `Loading`}
                        />
                        <h2 className="content-title mb-3">
                            Details
                        </h2>
                        <PlainCard title='Amount' details={`Rp. ${state ? state.amount : `Loading`}`}/>
                        <PlainCard title='Balance Left' details={`Rp. ${balanceLeft ? balanceLeft : `Calculating`}`}/>
                        <PlainCard title='Date & Time' details={state.dateTime}/>
                        <PlainCard title='Notes' details={state ? state.notes : `Loading`}/>
                        <div className="modal-area">
                            <Modal show={modal} handleClose={hideModal} handleClick={matchingPin} isLoading={loading}>
                                <div className="pin-confirmation-wrapper">
                                {
                                    pin.map((data, index) => {
                                        return (
                                                <input
                                                    className="pin-input"
                                                    type="text"
                                                    name="otp"
                                                    maxLength="1"
                                                    key={index}
                                                    value={data}
                                                    onChange={e => handleChange(e.target, index)}
                                                    onFocus={e => e.target.select()}
                                                />
                                        )
                                    })
                                }
                                </div>
                            </Modal>
                        </div>
                        <div className="col col-md-4 col-xl-3 d-flex flex-fill flex-column">
                            <div className="button-wrapper d-flex flex-fill align-items-center justify-content-end">
                                <Button className='form-button white d-flex align-items-center justify-content-center' 
                                    onClick={showModal}
                                    >Continue
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Main>
            <Footer />
        </div>
    )
}

export default TransferConfirmation
