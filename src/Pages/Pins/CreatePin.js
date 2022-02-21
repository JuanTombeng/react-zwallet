import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import LeftSectionLogin from '../../Components/LeftSectionLogin/index'
import Button from '../../Components/Button/index'
import './pin.css'

const CreatePin = () => {
    const [loading, setLoading] = useState(false)
    const [afterMessage, setAfterMessage] = useState('')
    const {state} = useLocation()
    const [user, setUser] = useState(null)
    const [pin, setPin] = useState(new Array(6).fill(''))

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false
        const pinInt = [...pin.map((d, idx) => (idx === index ? element.value : d))]
        setPin(pinInt)
        if (element.nextSibling) {
            element.nextSibling.focus()
        }
    }

    useEffect(() => {
        pin ? setUser({...state, pin : parseInt(pin.join(''))}) : setUser(...user)
    }, [pin])

    const handleConfirmClick = () => {
        if (user) {
            pin.forEach((item) => {
                if (item === '') {
                    setAfterMessage('Please Input your PIN')
                } else {
                    axios({
                        baseURL : `${process.env.REACT_APP_URL_BACKEND}`,
                        data : {
                            username : user.username,
                            email : user.email,
                            password : user.password,
                            pin : user.pin
                        },
                        method : 'POST',
                        url : '/v2/users/signup'
                    })
                    .then((res) => {
                        setLoading(false)
                        const result = res.data.data
                        console.log(result)
                        setAfterMessage(`We have send you a verification email. Please verify your account.`)
                    })
                    .catch((err) => {
                        setLoading(false)
                        console.log(err.message);
                        setAfterMessage(err.response.message)
                    })
                }
            })
        }
    }
    return (
        <div className='Create-Pin d-flex'>
            <LeftSectionLogin />
            <div className="right-section-pin-page">
                <h2 className="top-right-title mb-4">
                    Start Accessing Banking Needs
                    With All Devices and All Platforms
                    With 30.000+ Users
                </h2>
                <p className="top-right-parag mb-4">
                    Transfering money is eassier than ever, you can access Zwallet wherever you are. 
                    Desktop, laptop, mobile phone? we cover all of that for you!
                </p>
                <div className='d-flex flex-column'>
                    <div className="pin-upper-section">
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
                    <i className="far fa-times-circle" style={{fontSize : 30, cursor : 'pointer'}}></i>
                    </div>
                    <div className="sign-up-parag d-flex flex-column align-items-center">
                        <Button onClick={handleConfirmClick} children='Confirm'
                        className='form-button d-flex align-items-center justify-content-center'>Confirm</Button>
                    </div>
                    {afterMessage && <h1 className="text-error">{afterMessage}</h1>}
                </div>
            </div>
        </div>
    )
}

export default CreatePin
