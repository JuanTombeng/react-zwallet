import React from 'react'
import './button.css'

const Button = ({children, isLoading, ...props}) => {
    return (
        <button disabled={isLoading ? true : false} {...props}>{isLoading ? 'Loading...': children}</button>
    )
}

export default Button