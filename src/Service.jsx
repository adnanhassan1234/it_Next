import React from 'react';
import Box from './Box';
import Sdata from './Sdata';

const Service = () => {
    return (

        <>
            {/* ====================   work-section  ========================== */}

            <div className="service-section">
                <div className="container">
                    <div className="title text-center" style={{marginTop:'110px'}}>
                        <h2>How does it Work</h2>
                    </div>
                    <div className="row mt-5">

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

        </>
    )
}

export default Service;
