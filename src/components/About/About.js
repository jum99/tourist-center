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
        </div>
    );
};

export default About;
