
import img4 from './img/1.jpg';
import React , {useState} from 'react';



const Contact = () => {

   const [data, setData] = useState({
       fname: "",
       lname: "",
       email: "",
      password: "",
   });

   const inputEvent = (event) =>{
      const {name , value}= event.target;
      setData((preValue) => {
          return {
              ... preValue,
              [name]: value,
          };
      })
   };

   const formSubmit = (e) =>{
        e.preventDefault();
        alert(
                `My fname is ${data.fname}. My lname is ${data.lname}. My Email is ${data.email}.  My password  is ${data.password}.
             `);
   };

    return (
        <>
            {/* ====================  Contact-section  ========================== */}

            <div className="contact-section py-5">
                <div className="container"  style={{marginTop:'110px'}}>
                    <div className="row mt-5">
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
                                <form onSubmit={formSubmit}>
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label">First Name</label>
                                        <input type="text"  name="fname" value={data.fname} onChange={inputEvent} className="form-control" id="exampleInputEmail1" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label">Last Name</label>
                                        <input type="text" name="lname" value={data.lname} onChange={inputEvent} className="form-control" id="exampleInputEmail1" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                                        <input type="email" name="email" value={data.email} onChange={inputEvent} placeholder="name@example.com" className="form-control" id="exampleInputEmail1" />
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" name="password" value={data.password} onChange={inputEvent} className="form-control" id="exampleInputPassword1" />
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

export default Contact;
