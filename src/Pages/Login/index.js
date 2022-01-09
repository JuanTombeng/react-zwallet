import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import './login.css'
import leftBackground from '../../images/bg-app.svg'
import Input from './../../Components/Input/Input'
import Button from '../../Components/Button/index'

const Login = () => {
    const [form, setForm] = useState({
        email : '',
        password : ''
    })
    // const [userId, setUserId] = useState('')
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
        axios.post('https://zwallet-app.herokuapp.com/users/login', {
            email: form.email,
            password : form.password
        }).then((res) => {
            setLoading(false)
            const result = res.data
            const userId =  result.data[0].id
            const accountId = result.data[0].id_account
            console.log(result.data)
            localStorage.setItem('auth', "1")
            localStorage.setItem('accountId', JSON.stringify(accountId))
            localStorage.setItem('userId', JSON.stringify(userId))
            navigate('/')
        }).catch((err) => {
            setLoading(false)
            console.log(err.message)
            if(err.response.status === 500){
                setErrorMessage(err.response.data.message)
            }else{
                setErrorMessage('maaf ganguan')
            }
        })

    }
    return (
        <div className="container d-flex flex-fill">
            <section className="left-container d-flex flex-column">
                <div className="top-left-title">Zwallet</div>
                <img className='bg-app' src={leftBackground} alt="" width="500" />
                <h2 className="bottom-left-title mb-3">App that Covering Banking Needs.</h2>
                <p className="bottom-left-parag">Zwallet is an application that focussing in banking needs for all users
                in the world. Always updated and always following world trends.
                5000+ users registered in Zwallet everyday with worldwide
                users coverage.</p>
            </section>
            <section className="right-container d-flex flex-column">
                <h2 className="top-right-title mb-4">
                    Start Accessing Banking Needs
                    With All Devices and All Platforms
                    With 30.000+ Users
                </h2>
                <p className="top-right-parag mb-4">
                    Transfering money is eassier than ever, you can access Zwallet wherever you are. 
                    Desktop, laptop, mobile phone? we cover all of that for you!
                </p>
                <Input
                    onChange={handleChangeForm}
                    name="email"
                    value={form.email}
                    type="email"
                    placeholder="Enter Your e-mail"
                />
                <Input
                    onChange={handleChangeForm}
                    name="password"
                    value={form.password}
                    type="password"
                    placeholder="Enter Your password"
                />
                {errorMessage && <h1 className="text-error">{errorMessage}</h1>}
                <Button isLoading={loading} onClick={handleClick} className='form-button d-flex align-items-center justify-content-center'>Login</Button>
                <div className="sign-up-parag">
                    <p class="auth-form-label">Don’t have an account? <Link to="/signup"> Sign Up </Link></p>
                </div>
            </section>
        </div>  
    )
}

export default Login