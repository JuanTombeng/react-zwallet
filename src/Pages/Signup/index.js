import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import leftBackground from '../../images/bg-app.svg'
import Input from '../../Components/Input/Input'
import Button from '../../Components/Button/index'
import LeftSectionLogin from '../../Components/LeftSectionLogin/index'
import '../Login/loginPage.css'

const Signup = () => {
    const [form, setForm] = useState({
        username : '',
        email : '',
        password : ''
    })
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
        setLoading(true)
        axios.post('https://zwallet-app.herokuapp.com/users/signup', {
            username : form.username,
            email: form.email,
            password : form.password
        }).then((res) => {
            setLoading(false)
            const result = res.data
            console.log(result)
            navigate('/')
        }).catch((err) => {
            setLoading(false)
            console.log(err.message)
            setErrorMessage(err.response.data.message)
        })

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
                <Input className='form-search' icon='icon fas fa-user'
                    onChange={handleChangeForm}
                    name="username"
                    value={form.username}
                    type="text"
                    placeholder="Enter Your username"
                />
                <Input className='form-search' icon='icon-email far fa-envelope'
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
                    <Button isLoading={loading} onClick={handleClick} className='form-button d-flex align-items-center justify-content-center'>Sign Up</Button>
                    <p class="auth-form-label">Already have an account? <Link to="/login"> Login </Link></p>
                </div>
            </div>
        </div>
    )
}

export default Signup