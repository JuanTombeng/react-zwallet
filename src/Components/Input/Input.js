import React, {Fragment} from 'react'
import './input.css'

const Input = (props) => {
    return (
       <Fragment>
            <i className={props.icon}></i>
            <input className='input' {...props}  placeholder={props.placeholder}/>
            <i className={props.closeIcon} onClick={props.onClick} onChange={props.onChange}></i>
       </Fragment>
    )
}

export default Input