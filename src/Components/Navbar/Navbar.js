import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar(props) {
    return (
        <div className='Navbar d-flex flex-column'>
            <div className="row d-flex">
                <Link to='/' style={{textDecoration : 'none'}} >
                    <div className="col mt-4 mb-4 d-flex">
                        <i className="icon-list fas fa-th-large"></i>
                        <li className="menu-list d-none d-lg-block">Dashboard</li>
                    </div>
                </Link>
                <Link to='/transfer' style={{textDecoration : 'none'}}>
                    <div className="col mt-4 mb-4 d-flex">
                        <i className="icon-list fas fa-arrow-up"></i>
                        <li className="menu-list d-none d-lg-block">Transfer</li>
                    </div>
                </Link>
                <Link to='/' style={{textDecoration : 'none'}}>
                    <div className="col mt-4 mb-4 d-flex">
                        <i className="icon-list fas fa-plus"></i>
                        <li className="menu-list d-none d-lg-block">Top Up</li>
                    </div>
                </Link>
                <Link to='/profile' style={{textDecoration : 'none'}} >
                <div className="col mt-4 mb-4 d-flex">
                    <i className="icon-list far fa-user"></i>
                    <li className="menu-list d-none d-lg-block">Profile</li>
                </div>
                </Link>
            </div>
            <div className="row d-flex">
                <Link to='/login' onClick={props.onClick} style={{textDecoration : 'none'}} >
                    <div className="col mt-4 mb-4 d-flex">
                        <i className="icon-list fas fa-sign-out-alt"></i>
                        <li className="menu-list d-none d-lg-block">Log Out</li>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
