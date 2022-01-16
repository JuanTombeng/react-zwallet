import React from 'react'
import { Link } from 'react-router-dom'
import './balance.css'

function Balance(props) {
    return (
        <div className='Balance d-flex'>
            <div className="col d-flex flex-column justify-content-center">
                <h2 className="balance-title">
                    Balance
                </h2>
                    <h2 className="balance-amount">
                        Rp. {props.balance}
                    </h2>
                <p className="phone-number">
                    +62 {props.phone_number}
                </p>
            </div>
            <div className="col d-flex flex-column justify-content-center align-items-end">
                <Link to='/transfer' style={{textDecoration : 'none'}} >
                    <button type="button" className="balance-btn btn btn-primary d-flex justify-content-center align-items-center">
                        <i className="icon-balance fas fa-arrow-up"></i>
                        <h2 className="balance-title px-3 m-0">
                            Transfer
                        </h2>
                    </button>
                </Link>
                <Link to='/' style={{textDecoration : 'none'}} >
                    <button type="button" className="balance-btn btn btn-primary d-flex justify-content-center align-items-center">
                        <i className="icon-balance fas fa-plus"></i>
                        <h2 className="balance-title px-3 m-0">
                            Top Up
                        </h2>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Balance
