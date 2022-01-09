import React from 'react'
import { Link } from 'react-router-dom'
import './history.css'

function History({children}) {
    return (
        <div className='History'>
            <div className="upper d-flex justify-content-between">
                <h2 className="transaction-history-title">
                    Transaction History
                </h2>
                <Link to='/history' style={{textDecoration : 'none'}}>
                    <h2 className="see-all-title pe-3">
                        See All
                    </h2>
                </Link>
            </div>
            {children}
        </div>
    )
}

export default History
