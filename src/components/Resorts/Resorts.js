import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button, Card } from "react-bootstrap";
import { BsFillBookmarkFill } from "react-icons/bs";

import "./Resorts.css";
import { Link } from "react-router-dom";
const Resorts = () => {
    const [resorts, setResorts] = useState([]);

    useEffect(() => {
        axios
            .get("https://tourist-center-server.up.railway.app/allResorts")
            .then((result) => {
                const data = result.data;
                setResorts(data);
            });
    }, []);

    return (
        <div className="events-container mt-5 mb-5">
            <Container className="w-100">
                <h1 className="text-center text-uppercase fw-bold ps-3 mb-2">
                    Popular <span style={{ color: 'mediumseagreen' }}>Resorts</span>
                </h1>
                <h6 className="text-center fst-italic ps-3 text-secondary mb-5">
                    Find your favourite resorts here
                </h6>

                <Row className="g-5 w-100 ps-4">
                    {resorts.map((resort) => (
                        <Col md={12} key={resort._id} className="pt-3">
                            <Row className="   border inside-row ">
                                <Col md={6} className="px-0">
                                    <div className="h-100 overflow-hidden ser-image-div">
                                        <img
                                            className="rounded rounded-3 resort-image"
                                            src={resort.image}
                                            alt=""
                                        />
                                    </div>
                                </Col>
                                <Col md={6} className="pt-3">
                                    <Card className="bg-transparent py-0  border-0">
                                        <Card.Body className="py-0">
                                            <Card.Title>
                                                <h2>{resort.name}</h2>
                                            </Card.Title>
                                            <Card.Text>
                                                <div>
                                                    <h5 className="fw-normal text-primary mt-3">
                                                        {resort.area}
                                                    </h5>
                                                    <p>
                                                        {" "}
                                                        <small className=" border-bottom">
                                                            <em> {resort.booked} </em>
                                                        </small>{" "}
                                                    </p>
                                                    <p className="text-secondary">
                                                        {resort.description.slice(0, 300)}
                                                    </p>
                                                </div>
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer className="bg-transparent border-0">
                                            <Button
                                                className="book-btn-style border-0"
                                            >
                                                <Link
                                                    className="text-decoration-none text-white"
                                                    to={`/booking/${resort._id}`}
                                                >
                                                    {" "}
                                                    Book Resort
                                                    <span className="ms-2">
                                                        <BsFillBookmarkFill />
                                                    </span>{" "}
                                                </Link>
                                            </Button>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Resorts;
