import React from "react";
import "./About.css";
import aboutUs from '../../images/aboutUs.jpg';

const About = () => {
    window.scroll(0, 0);
    return (

        <div className="container">
            <div className="row mt-3 align-items-center">
                <div className="text-center mt-3 mb-3">
                    <h1 style={{ color: 'mediumseagreen' }}>About Us</h1>
                    <p className="fst-italic text-center ps-3 text-secondary mb-3">Best tourism website for booking resorts</p>
                </div>
                <div className="col-md-6 mt-3">
                    <img src={aboutUs} alt=""
                        style={{ height: '350px', width: '450px' }} className="img-fluid" />
                </div>
                <div className="col-md-6 mt-3">

                    <p className="fs-5">
                        Tourist Center is serving tourists from different countries over the world for last few years. Our customers are very satisfied with us. If you have any query about our service please email us. I hope you will enjoy our dedicated services offerings for you. You can also view others trips booked recently in ADMIN PANEL. Thank You.
                    </p>
                    <p className="fs-5">
                        In the competitive arena of tourism, it is paramount for visitor information centres to continuously strive to deliver quality information that is effective and economical. Our case studies are designed to help guide and inform tourist information providers on identifying and implementing alternative information delivery models that are relevant, contemporary and cost-effective.

                        Whether you wish to run a face-to-face service, a telephone helpline you can follow the contact section.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default About;
