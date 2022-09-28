import React from "react";
import "./Management.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";

const Management = () => {
    const chefs = [
        {
            id: 201,
            name: "Jonathan Sinha",
            post: "CEO",
            image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/productimage/2020/1/17/d71045b2-4300-4395-b110-f652fa00e9e51579211471795-1.jpg",
        },
        {
            id: 202,

            name: "Rukshi Ara",
            post: "Director",
            image: " https://www.freecodecamp.org/news/content/images/2021/08/nicole-wolf--xTBn1YBrTE-unsplash.jpg",
        },
        {
            id: 203,
            name: "Hasin Mirja",
            post: " Manager",
            image: "https://dpbnri2zg3lc2.cloudfront.net/en/wp-content/uploads/2021/01/what-is-the-difference-web-developer-web-designer.jpg",
        },
        {
            id: 204,
            name: "Jovan Roy",
            post: "Asst. Manager ",
            image: " https://www.simplilearn.com/ice9/free_resources_article_thumb/How-to-become-a-complete-Web-Development-Professional.jpg ",
        },
    ];
    window.scrollTo(0, 0);

    return (
        <div id="chefs" className="container chefs-main-Container">
            <h1 className="text-center" style={{ color: 'mediumseagreen' }}>Our Management</h1>
            <p className="text-center mt-4 fst-italic ps-3 text-secondary mb-3">
                Our management team is dedicated to give you support
            </p>
            <Row className="w-100">
                {chefs.map((chef) => (
                    <Col md={3} className="chefDiv  mt-5" key={chef.id} chef={chef}>
                        <div className="chefImgDiv">
                            <img className="chefImage" src={chef.image} alt="" />

                            <div className="chefCardMiddle text-center text-light pt-2">
                                <h4 className="">{chef.name}</h4>
                                <h6>{chef.post}</h6>
                            </div>
                        </div>

                        <div className="chefCardBottom text-center d-flex justify-content-center mt-2">
                            <div className="iconDiv fs-5">
                                <FaFacebook />
                            </div>
                            <div className="iconDiv fs-5">
                                <FaTwitter />
                            </div>{" "}
                            <div className="iconDiv fs-5">
                                <FaInstagram />
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Management;
