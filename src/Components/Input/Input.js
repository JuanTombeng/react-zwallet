import React, {Fragment} from 'react'
import './input.css'

const Input = (props) => {
    return (
       <Fragment>
            <input className='input' {...props} />
       </Fragment>
    )
}

export default Input