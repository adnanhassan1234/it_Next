import React from 'react';
import Hero from './Hero';
import img1 from './img/2.jpg';
import img2 from './img/3.jpg';
import img3 from './img/computer1.jpg';
import img4 from './img/1.jpg';
import Box from './Box';
import Sdata from './Sdata';
import Para from './Para';
import { NavLink } from 'react-router-dom';



const Home = () => {

    return (
        <>
            {/* ====================   hero-section  ========================== */}

            <Hero
                title="Online Payment  Madde "
                para="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel commodi sequi, id, velit expedita veritatis maiores possimus
                   quae soluta delectus dolorem, tenetur aspernatur reprehenderit odio laudantium. At nesciunt aut hic!"
                content="Get Early access for you"
                get="Get Now"
                imgsrc={img1}
            />

            {/* ====================   work-section  ========================== */}

            <div className="work-section py-5">
                <div className="container">
                    <div className="title text-center">
                        <h2>How does it Work</h2>
                    </div>
                    <div className="row" style={{ marginTop: "55px" }}>

                        {
                            Sdata.map((val, index) => {
                                return (
                                    <Box
                                        key={index}
                                        icons={val.icons}
                                        title={val.title}
                                        para={val.para}
                                    />
                                )
                            })
                        }

                    </div>
                </div>
            </div>

            {/* ====================   APP-section  ========================== */}

            <div className="app-section py-5">
                <div className="container">
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
                                        <Para />
                                    </div>
                                </div>
                                <div className="app d-flex">
                                    <h4 className="first">2</h4>
                                    <div className="content">
                                        <h4>Add your bank Account</h4>
                                        <Para />
                                    </div>
                                </div>
                                <div className="app d-flex">
                                    <h4 className="first">3</h4>
                                    <div className="content">
                                        <h4>Send payment Request</h4>
                                        <Para />
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
                                        <Para />
                                    </div>
                                </div>
                                <div className="app d-flex">
                                    <h4 className="first">2</h4>
                                    <div className="content">
                                        <h4>Add your bank Account</h4>
                                        <Para />
                                    </div>
                                </div>
                                <div className="app d-flex">
                                    <h4 className="first">3</h4>
                                    <div className="content">
                                        <h4>Send payment Request</h4>
                                        <Para />
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


            {/* ====================  Contact-section  ========================== */}

            <div className="contact-section py-5" id='contact'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="full p-2">
                                <h3>Connect with our <br /> Sales Team</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel commodi sequi, id, velit expedita veritatis maiores possimus
                                </p>
                                <img src={img4} width="100%" alt="" />

                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="full bg-white p-4">
                                <form>
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label">First Name</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label">Last Name</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" />
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          
        </>
    )
}

export default Home;
