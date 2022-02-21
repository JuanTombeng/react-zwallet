import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Input from '../../Components/Input/Input'
import Button from '../../Components/Button/index'
import LeftSectionLogin from '../../Components/LeftSectionLogin/index'

import {useDispatch} from 'react-redux'
import { PostLogin } from '../../Redux/actions/auth'
import './loginPage.css'

const LoginPage = () => {
    const [form, setForm] = useState({
        email : '',
        password : ''
    })
    const dispacth = useDispatch()
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()
    const handleChangeForm = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }
    const handleClick = () => {
        setLoading(false)
        if (form.email === '' || form.password === '') {
            setErrorMessage('Please Fill in the Login Form')
        } else {
            // axios({
            //     baseURL : `${process.env.REACT_APP_URL_BACKEND}`,
            //     data : {
            //         email : form.email,
            //         password : form.password
            //     },
            //     method : 'POST',
            //     url : `/v2/users/login`
            // })
            // .then((res) => {
            //     setLoading(false)
            //     const result = res.data.data[0]
            //     localStorage.setItem('auth', '0')
            //     localStorage.setItem('token', JSON.stringify(result.token))
            //     navigate('/')
            // })
            // .catch((err) => {
            //     setLoading(false)
            //     console.log(err.message);
            //     setErrorMessage(err.response.message)
            // })
            dispacth(PostLogin(form))
        }
    }
    return (
        <div className="Login-Page d-flex">
            <LeftSectionLogin />
            <div className="right-section-page">
                <h2 className="top-right-title mb-4">
                    Start Accessing Banking Needs
                    With All Devices and All Platforms
                    With 30.000+ Users
                </h2>
                <p className="top-right-parag mb-4">
                    Transfering money is eassier than ever, you can access Zwallet wherever you are. 
                    Desktop, laptop, mobile phone? we cover all of that for you!
                </p>
                <Input className='form-search' icon='icon far fa-envelope'
                    onChange={handleChangeForm}
                    name="email"
                    value={form.email}
                    type="email"
                    placeholder="Enter Your e-mail"
                />
                <Input className='form-search' icon='icon-email fas fa-lock'
                    onChange={handleChangeForm}
                    name="password"
                    value={form.password}
                    type="password"
                    placeholder="Enter Your password"
                />
                
                <div className="sign-up-parag d-flex flex-column align-items-center">
                    {errorMessage && <h1 className="text-error">{errorMessage}</h1>}
                    <Button isLoading={loading} onClick={handleClick} className='form-button d-flex align-items-center justify-content-center'>Login</Button>
                    <p className="auth-form-label">Don’t have an account? <Link to="/signup"> Sign Up </Link></p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage