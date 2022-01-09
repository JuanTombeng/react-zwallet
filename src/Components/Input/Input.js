import React, {Fragment} from 'react'
import './input.css'

const Input = (props) => {
    return (
       <Fragment>
            <i className={props.icon}></i>
            <input className='input' {...props}  placeholder={props.placeholder}/>
       </Fragment>
    )
}

export default Input