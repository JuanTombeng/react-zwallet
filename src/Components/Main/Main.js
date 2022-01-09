import React from 'react'
import './main.css'

import Navbar from '../../Components/Navbar/Navbar'
import Balance from '../../Components/Balance/Balance'

function Main({children}) {
    return (
        <div className='Main d-flex'>
            <div className="main-wrapper d-flex align-items-center">
                {children}
            </div>
        </div>
    )
}

export default Main
