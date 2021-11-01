import React from "react";
import "./About.css";
const About = () => {
    window.scroll(0, 0);
    return (
        <div className="container about-container">
            <h1 className="text-center fw-light ">ABOUT US</h1>
            <p className="text-center mt-5">
                Tourist Center is serving tourists from different countries over the world for last few years. Our customers are very satisfied with us. If you have any query about our service please email us. I hope you will enjoy our dedicated services offerings for you. You can also view others trips booked recently in ADMIN PANEL. Thank You.
            </p>
            <p>
                We have compiled a range of relevant case studies to inform tourist information providers of alternative delivery models to deliver visitor information.

                In the competitive arena of tourism, it is paramount for visitor information centres to continuously strive to deliver quality information that is effective and economical. Our case studies are designed to help guide and inform tourist information providers on identifying and implementing alternative information delivery models that are relevant, contemporary and cost-effective.

                Whether you wish to run a face-to-face service, a telephone helpline or provide support via the web, our case studies provide useful information and insights to help you make the best of your resources.
            </p>
        </div>
    );
};

export default About;
