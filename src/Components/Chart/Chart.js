import React from 'react'
import './chart.css'
import graphic from '../../images/graphic.svg'

function Chart() {
    return (
        <div className='Chart'>
            <div className="chart d-none d-sm-block col p-5 me-2">
                <div className="row g-0">
                    <div className="col col-lg-8 d-flex flex-column">
                        <i className="icon green up fas fa-arrow-down"></i>
                        <p className="chart-income-text font-14">Income</p>
                        <h3 className="chart-income-title font-18">Rp2.120.000</h3>
                    </div>
                    <div className="col col-lg-4">
                        <i className="icon red up fas fa-arrow-up"></i>
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
        </div>
    )
}

export default Chart
