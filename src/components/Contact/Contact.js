import React from "react";
import "./Contact.css";
import { Col, Row } from "react-bootstrap";

const Contact = () => {
    window.scroll(0, 0);
    return (
        <div className="container contact-container">
            <Row md={2} xs={1} lg={3} className="g-5 contact-wrapper">
                <Col className="">
                    <div className=" p-3 rounded-3  contact-div">
                        <h4>POSTAL ADDRESS</h4>
                        <p>Zindabazar 3107, Sylhet</p>
                    </div>
                </Col>
                <Col>
                    <div className=" p-3 rounded-3  contact-div">
                        <h4>Weekly Trip</h4>
                        <p>Support Number:</p>
                        <h6>+880 0876 964</h6>
                    </div>
                </Col>
                <Col>
                    <div className=" p-3 rounded-3  contact-div">
                        <h4>NAVIGATORS</h4>
                        <p>
                            For help with support or getting in touch with our team, contact
                            our tour navigators.
                        </p>
                        <h6>Phone: (036) 7121 5548</h6>
                    </div>
                </Col>
                <Col>
                    <div className=" p-3 rounded-3  contact-div">
                        <h4>URGENT BOOKING</h4>
                        <p>Call here:</p>
                        <h6>+880 8865 6670</h6>
                    </div>
                </Col>
                <Col>
                    <div className=" p-3 rounded-3 contact-div">
                        <h4>REFERRALS</h4>
                        <p>Business hours: Mon-Fri</p>
                        <h6>tourist.center@info.org</h6>
                        <h6>Phone:+880 0098 1187</h6>
                    </div>
                </Col>

                <Col>
                    <div className=" p-3 rounded-3  contact-div">
                        <h4>SUPPORT OUR WORK</h4>
                        <p>Children Care Foundation</p>
                        <h6>Childrenfoundation@care.org</h6>
                        <h6>Phone: +880 334 5106</h6>
                        <h6>Toll Free: +880 608 9730</h6>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Contact;
