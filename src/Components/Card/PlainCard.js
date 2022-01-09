import React from 'react'
import './card.css'

function PlainCard(props) {
    return (
        <div className='Card'>
            <div className="row box p-3 m-md-2 p-md-3 d-flex align-items-center">
                <div className="col col-3 col-md-4 col-lg-5 g-0 d-flex flex-column px-2">
                    <h2 className="font-14 m-0 d-flex">
                        {props.title}
                    </h2>
                    <p className="font-18 m-0 d-flex">
                        {props.details}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PlainCard
