import React from "react";
import "./Footer.css";
import { Col, Row } from "react-bootstrap";
import { FaTripadvisor } from "react-icons/fa";
import { CgFacebook, CgInstagram, CgTwitter, CgYoutube } from "react-icons/cg";
// import { HashLink } from "react-router-hash-link";

const Footer = () => {
    return (
        <div className="pt-5  mt-5">
            <Row xs={1} md={2} lg={4} className="upperFooterDiv px-5 ">
                <Col className="mt-3">
                    <div>
                        <h2 className="text-warning">
                            <span>
                                {" "}
                                <FaTripadvisor />{" "}
                            </span>{" "}
                            Tourist Center{" "}
                        </h2>
                    </div>

                </Col>
                <Col>
                    <ul className="footer-list ul-p">
                        <li>+01888888888888</li>
                        <li>+0199999999999</li>
                        <li>info@tourcenter.com</li>
                        <li>hello@tourcenter.com</li>
                        <li>Hamton Road, UK</li>
                    </ul>
                </Col>
            </Row>
            <div className="text-center my-5">
                <div className="d-inline-block">
                    {" "}
                    <div className="d-flex">
                        <div className="iconDiv">
                            <h2 className="footerIcon">
                                <CgFacebook />
                            </h2>
                        </div>
                        <div className="iconDiv">
                            <h2 className="footerIcon">
                                <CgTwitter />
                            </h2>
                        </div>
                        <div className="iconDiv">
                            <h2 className="footerIcon">
                                <CgYoutube />
                            </h2>
                        </div>
                        <div className="iconDiv">
                            <h2 className="footerIcon">
                                <CgInstagram />
                            </h2>
                        </div>{" "}
                    </div>
                </div>
            </div>
            <div className="lowerFooterDiv mt-4">
                <p className="text-center text-white">
                    <small>Copyright @2021. All Rights Reserved By Tourist Center</small>
                </p>
            </div>
        </div>
    );
};

export default Footer;
