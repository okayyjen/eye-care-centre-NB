import React from 'react';
import Image from 'next/image'

const ContentBlockD = () => {
    return (
        <div className="content-block-d">
            <h2 className="block-title">A NETWORK OF EXPERIENCED DOCTORS</h2>
            <h1>OUR DOCTORS</h1>
            <div id="doctors-block">
                <div className="doctor-card">
                    <Image className="doctor-image"
                        src={require("../images/doctor.png")}
                        alt="logo"
                        layout="responsive"
                    />
                    <h1 className="block-title">Dr. Smith</h1>
                    <p>Lorem ipsum door sit amet & Nunc tempus fringilla</p>
                </div>

                <div className="doctor-card">
                    <Image className="doctor-image"
                        src={require("../images/doctor.png")}
                        alt="logo"
                        layout="responsive"
                    />
                    <h1 className="block-title">Dr. Smith</h1>
                    <p>Lorem ipsum door sit amet & Nunc tempus fringilla</p>
                </div>

            </div>
            <button className="button-style-2">MEET OUR TEAM</button>


        </div>
    );
};

export default ContentBlockD;