import React from 'react'
import './balance.css'

function Balance(props) {
    return (
        <div className='Balance d-flex'>
            <div className="col d-flex flex-column justify-content-center">
                <h2 className="balance-title">
                    Balance
                </h2>
                <a href="./transaction-detail.html">
                    <h2 className="balance-amount">
                        {props.balance}
                    </h2>
                </a>
                <p className="phone-number">
                    {props.phone_number}
                </p>
            </div>
        </div>
    )
}

export default Balance
