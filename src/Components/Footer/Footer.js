import React from 'react'
import './footer.css'

function Footer() {
    return (
        <div className='Footer d-flex flex-column justify-content-center'>
            <div className="row d-flex justify-content-center">
                <div className="col col-xl-8 col-lg-4 d-flex align-items-lg-center">
                    <p className="font-16 my-0">2020 Zwallet. All right reserved.</p>
                </div>
                <div className="col col-xl-2 col-lg-4 d-flex align-items-center justify-content-lg-end">
                    <p className="font-16 m-0">+62 5637 8882 9901</p>
                </div>
                <div className="col col-xl-2 col-lg-4 d-flex align-items-center">
                    <p className="font-16 m-0">contact@zwallet.com</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
