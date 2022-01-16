import React, { useState, useEffect } from 'react'
import Button from '../../Components/Button/index'

const Pin = (props) => {
    const [pin, setPin] = useState(new Array(6).fill(''))
    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false
        const pinInt = [...pin.map((d, idx) => (idx === index ? element.value : d))]
        setPin(pinInt)
        if (element.nextSibling) {
            element.nextSibling.focus()
        }
    }
    // useEffect(() => {
    //     pin ? props.retreivePin(pin) : setPin(pin)
    // })
    // props.func(pin)
    return (
        <div className='d-flex flex-column'>
            <div className="upper">
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
            {/* <div className="sign-up-parag d-flex flex-column align-items-center">
                <Button onClick={() => props.retreivePin(pin)} children='Confirm'
                className='form-button d-flex align-items-center justify-content-center'>Confirm</Button>
            </div> */}
        </div>
    )
}

export default Pin
