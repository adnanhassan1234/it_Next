import React from 'react';
import img2 from './img/3.jpg';
import img3 from './img/computer1.jpg';
import Para from './Para';
import {NavLink } from 'react-router-dom';

const About = () => {
    return (
        <>
            {/* ====================   APP-section  ========================== */}

            <div className="app-section py-5">
                <div className="container"  style={{marginTop:'110px'}}>
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="full">
                                <div className="img-section mt-5">
                                    <img src={img2} width="100%" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="full">
                                <div className="title py-3">
                                    <h2>How to use the App</h2>
                                </div>
                                <div className="app d-flex">
                                    <h4 className="first">1</h4>
                                    <div className="content">
                                        <h4>Sign in</h4>
                                        <p> <Para /> </p>
                                    </div>
                                </div>
                                <div className="app d-flex">
                                    <h4 className="first">2</h4>
                                    <div className="content">
                                        <h4>Add your bank Account</h4>
                                        <p> <Para /> </p>
                                    </div>
                                </div>
                                <div className="app d-flex">
                                    <h4 className="first">3</h4>
                                    <div className="content">
                                        <h4>Send payment Request</h4>
                                        <p> <Para /> </p>
                                    </div>
                                </div>
                                <div className="btn1">
                                    <NavLink to="/about"> <button type="button" className="btn btn-outline-primary ml-3">Learn More</button></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ====================   APP-section  ========================== */}

            <div className="app-section py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="full">
                                <div className="title py-3">
                                    <h2> Worls class support is <br /> available 24/7</h2>
                                </div>
                                <div className="app d-flex">
                                    <h4 className="first">1</h4>
                                    <div className="content">
                                        <h4>Sign in</h4>
                                        <p> <Para /> </p>
                                    </div>
                                </div>
                                <div className="app d-flex">
                                    <h4 className="first">2</h4>
                                    <div className="content">
                                        <h4>Add your bank Account</h4>
                                        <p> <Para /> </p>
                                    </div>
                                </div>
                                <div className="app d-flex">
                                    <h4 className="first">3</h4>
                                    <div className="content">
                                        <h4>Send payment Request</h4>
                                        <p> <Para /> </p>
                                    </div>
                                </div>
                                <div className="btn1">
                                    <NavLink to="/about"> <button type="button" className="btn btn-outline-primary ml-3">Learn More</button></NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="full">
                                <div className="img-section mt-5">
                                    <img src={img3} width="100%" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About;
