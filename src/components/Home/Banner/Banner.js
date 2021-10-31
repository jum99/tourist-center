import { Carousel } from "react-bootstrap";
import React from "react";
import "./Banner.css";


const Banner = () => {


    return (
        <div className="w-100">
            <Carousel className="carouselStyle " interval={2500} indicators={false}>
                <Carousel.Item>
                    <img
                        className="d-block carousel-img"
                        src="https://blog.flyticket.com.bd/wp-content/uploads/2020/05/image007.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className="carouselCaption">
                        <h3 className="carouselHeading">
                            We have many places to offer you
                        </h3>
                        <p className="carouselDescription">Nature refreshes mind</p>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block carousel-img"
                        src="https://i.ytimg.com/vi/fmYRlHM7Z7g/maxresdefault.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption className="carouselCaption">
                        <h3 className="carouselHeading">
                            Natural beauty recreates our soul
                        </h3>
                        <p className="carouselDescription">Nature is very important for our health</p>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block carousel-img"
                        src="https://toib.b-cdn.net/wp-content/uploads/2017/04/munnar.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption className="carouselCaption">
                        <h3 className="carouselHeading">
                            You can travel and work from any destination.
                        </h3>
                        <p className="carouselDescription">Choose a healthy environment.</p>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
