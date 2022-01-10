import React from 'react'
import './card.css'

function Card(props) {
    return (
        <div className='Card' onClick={props.onClick}>
            <div className="row box p-3 m-md-2 p-md-3 d-flex align-items-center">
                <div className="col col-3 col-md-2 col-lg-1 g-0 d-flex justify-content-center">
                    <img src={props.image} className="user-picture" alt="" />
                </div>
                <div className="col col-3 col-md-4 col-lg-5 g-0 d-flex flex-column px-2">
                    <h2 className="font-18 m-0 d-flex">
                        {props.first_name} {props.last_name}
                    </h2>
                    <p className="font-14 m-0 d-flex">
                        {props.transaction_type}
                    </p>
                </div>
                <div className="col col-6 col-md-6 flex-grow-0 g-0 d-flex justify-content-end">
                    <h2 className="font-18 m-0 d-flex green">
                        {props.amount}
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Card
