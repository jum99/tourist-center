import React from "react";
import { FaBuilding, FaMapMarker, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
    return (

        <div className="p-5 m-5">

            <div className="row row-cols-md-4 row-cols-lg-4 row-cols-sm-2 d-flex justify-content-around">
                <div className="col-6">


                    <h2 style={{ color: 'mediumseagreen' }} className='fw-bold mt-1'>
                        <span>
                            {" "}
                            <FaBuilding />{" "}
                        </span>{" "}
                        Tourist Center{" "}
                    </h2>

                    <p>Copyright &copy; 2021 | All Rigts Reserved. </p>
                </div>

                <div className="col-6">

                    <h3 style={{ color: 'mediumseagreen' }}>Contact And Location</h3> <br />

                    <h6><span style={{ color: 'mediumseagreen', marginRight: '3px' }}>< FaPhoneAlt /> </span> +880-888-88888</h6>
                    <p> <span style={{ color: 'mediumseagreen', marginRight: '5px' }}> <FaMapMarker /> </span>City Complex 3rd floor, Zindabazar, Sylhet.</p>

                </div>
                <div className="col-6">

                    <h3 style={{ color: 'mediumseagreen' }}>Support</h3> <br />
                    <h6>Tour Guides</h6>
                    <h6>Customer Support</h6>
                    <h6>Terms And Conditions</h6>


                </div>
                <div className="col-6">

                    <h3 style={{ color: 'mediumseagreen' }}>About Us</h3> <br />
                    <h6>Travel Blogs</h6>
                    <h6>Our Clients</h6>
                    <h6>Legal Notice</h6>

                </div>

            </div>

        </div>
    );
};

export default Footer;
