import React from 'react';
import "./Cards.css";
import CountUp from 'react-countup';

const Cards = ({ totalConfirmed, totalRecovered, totalDeaths, lastUpdate }) => {
    return (
        <>
            <div className="container" style={{
                textAlign: 'center'
            }}>
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                    <div className="col">
                        <div className="card confirmed">
                            <div className="card-body">
                                <div className="card-title">
                                    <h5>Total Confirmed</h5>
                                </div>
                                <div className="card-text">
                                    <CountUp
                                        start={0}
                                        end={totalConfirmed}
                                        duration={2}
                                        separator=','
                                    />
                                    <br />
                                    <b>Last Update</b>: {new Date(lastUpdate).toDateString()}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card recovered">
                            <div className="card-body">
                                <div className="card-title">
                                    <h5>Total Recovered</h5>
                                </div>
                                <div className="card-text">
                                    <CountUp
                                        start={0}
                                        end={totalRecovered}
                                        duration={2}
                                        separator=','
                                    />
                                    <br />
                                    <b>Last Update</b>: {new Date(lastUpdate).toDateString()}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card deaths">
                            <div className="card-body">
                                <div className="card-title">
                                    <h5>Total Deaths</h5>
                                </div>
                                <div className="card-text">
                                    <CountUp
                                        start={0}
                                        end={totalDeaths}
                                        duration={2}
                                        separator=','
                                    />
                                    <br />
                                    <b>Last Update</b>: {new Date(lastUpdate).toDateString()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;