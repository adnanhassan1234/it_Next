import React from 'react';
import img1 from './img/cmptr.png';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const Hero = (props) => {

    return (
        <>
            {/* ====================   hero-section  ========================== */}
            <div className="hero-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-12">
                            <div className="full m-auto">
                                <div className="title">
                                    <h2> {props.title} <br /> Easy For You </h2>
                                </div>
                                <div className="para">
                                    <p> {props.para} </p>
                                </div>
                                <div className="content">
                                    <h4> {props.content} </h4>
                                </div>
                                <div className="search">
                                    <form action="">
                                        <div className="row">
                                            <div className="col">
                                                <input type="email" className="form-control" placeholder="Enter Your Email" required />
                                            </div>
                                            <div className="col">
                                                <Button type="submit"
                                                    variant="contained"
                                                    color="primary"
                                                >  {props.get}</Button>
                                                {/* <Button type="submit" className="btn btn-primary"> {props.get} </Button> */}
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;
