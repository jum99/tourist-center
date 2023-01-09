import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./Booking.css";
import useAuth from "../../hooks/useAuth";

const Booking = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const [resorts, setResorts] = useState([]);
    const [matchedData, setMatchedData] = useState({});
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();
    useEffect(() => {
        axios

            .get("https://tourist-center-server.up.railway.app/allResorts")
            .then((result) => {
                setResorts(result.data);
            });
    }, []);

    useEffect(() => {
        const matched = resorts.find((d) => d._id === id);
        setMatchedData(matched);
        console.log(matched);
    }, [id, resorts]);

    console.log(user.email);
    const onSubmit = (data) => {
        data.email = user.email;
        axios
            .post("https://tourist-center-server.up.railway.app/addBookings", data)
            .then((result) => {
                if (result.data.insertedId) {
                    alert("Successfully Booked");
                    reset();
                }
            });
    };
    return (
        <Container>
            <Row className="w-100 py-5">
                <Col md={6} className=" ">
                    <div className="booking-image-div">
                        <img className="img-fluid" src={matchedData?.image} alt="" />
                    </div>
                    <div>
                        <h2 style={{ color: 'mediumseagreen' }} className="my-3">{matchedData?.name}</h2>
                        <h4>
                            Booking Code : {matchedData?._id}
                        </h4>
                        <p className="text-secondary booking-desc mt-3">
                            {matchedData?.description}
                        </p>
                    </div>
                </Col>
                <Col md={6} className="border-start border-2 ">
                    <div className="add-booking-container">
                        <h2
                            style={{ color: 'mediumseagreen' }} className="text-center">Book Resort</h2>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="mt-3 form-wrapper"
                        >
                            <input
                                {...register("name", { required: true })}
                                placeholder="Your Name"
                                className="border-0 field"
                            />

                            <input
                                {...register("number", { required: true })}
                                placeholder="Your Phone Number"
                                className="border-0 field"
                            />
                            <input
                                type="date"
                                className="border-0 field"
                                {...register("date", { required: true })}
                            />

                            <input defaultValue={matchedData?.name}
                                {...register("resort", { required: true })}
                                placeholder="Add Resort Name"
                                className="border-0 field"
                            />
                            <input defaultValue={matchedData?._id}
                                {...register("BookingCode", { required: true })}
                                placeholder="Add Booking Code"
                                className="border-0 field"
                            />
                            {errors.exampleRequired && <span>This field is required</span>}

                            <input
                                className="border-0 field"
                                type="submit"
                                value="Add Booking"
                            />
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Booking;
