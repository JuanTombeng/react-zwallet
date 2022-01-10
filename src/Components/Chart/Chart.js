import React from 'react'
import './chart.css'
import graphic from '../../images/graphic.svg'

function Chart() {
    return (
        <div className='Chartd-none d-sm-block col pt-3 ps-5 pe-5 me-2 box'>
            <div className="row g-0">
                <div className="col col-lg-8 d-flex flex-column align-items-start">
                    <i className="icon-arrow green up fas fa-arrow-down"></i>
                    <p className="chart-income-text font-14">Income</p>
                    <h3 className="chart-income-title font-18">Rp2.120.000</h3>
                </div>
                <div className="col col-lg-4 d-flex flex-column align-items-start">
                    <i className="icon-arrow red up fas fa-arrow-up"></i>
                    <p className="chart-income-text font-14">Outcome</p>
                    <h3 className="chart-income-title font-18">Rp2.120.000</h3>
                </div>
            </div>
            <div className="row g-0">
                <div className="col d-flex justify-content-center">
                    <a href="./transaction-detail.html">
                        <img className="balance-grah" src={graphic} alt="" width="250" height="250" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Chart
