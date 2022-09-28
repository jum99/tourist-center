import { Carousel } from "react-bootstrap";
import React from "react";
import "./Banner.css";
import banner1 from "../../../images/banner1.jpg";
import banner2 from "../../../images/banner2.jpg";
import banner3 from "../../../images/banner3.jpg";

const Banner = () => {

    return (
        <div className="w-100">
            <Carousel className="carouselStyle " interval={2500} indicators={false}>
                <Carousel.Item>
                    <img
                        className="d-block carousel-img"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="carouselCaption">
                        <h3 className="carouselHeading">
                            We have many places to offer you
                        </h3>
                        <p className="carouselDescription">We provide tourism services all over the world. You can book your favourite resorts via us. We have information and connection with thousands of resorts which you can book and see details in our website. </p>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block carousel-img"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="carouselCaption">
                        <h3 className="carouselHeading">
                            Natural beauty refreshes our soul
                        </h3>
                        <p className="carouselDescription">Nature is very important for our health. Nature has the power to renew and refresh our minds. Human beings depend on nature to stay alive. Nature helps us breathe. We find many colors in nature which make the Earth beautiful.</p>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block carousel-img"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="carouselCaption">
                        <h3 className="carouselHeading">
                            You can book resorts from any destination
                        </h3>
                        <p className="carouselDescription">We are both online and offline based tourism agency. If you want you can come and visit us in our office to book your desired tourist destination. You can also book resorts online with this website.</p>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
