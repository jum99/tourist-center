import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
const ManageAllBookings = () => {
    const [bookedResort, setBookedResort] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        axios
            .get("http://localhost:5000/manageAllBookings")
            .then((result) => {
                console.log(result.data);
                setBookedResort(result.data);
            });
    }, [isLoading]);

    // Handle Booking Remove
    const handleRemove = (id) => {
        setIsLoading(false);
        const proceed = window.confirm("Do you want to delete this Booking?");
        if (proceed) {
            axios
                .delete(
                    `http://localhost:5000/deleteBooking/${id}`
                )
                .then((result) => {
                    console.log(result);
                    if (result.data.deletedCount) {
                        setIsLoading(!false);
                    }
                });
        }
    };
    window.scroll(0, 0);
    return (
        <div>
            <Table responsive>
                <thead>
                    <tr>
                        <th>S/N</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>Booking Code</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {bookedResort.map((BR, index) => (
                        <tr key={BR._id}>
                            <td>{index + 1} </td>
                            <td>{BR?.name}</td>
                            <td>{BR?.email}</td>
                            <td>{BR?.date}</td>
                            <td>{BR?.BookingCode}</td>
                            <td>
                                <Button
                                    variant="warning"
                                    className="text-white"
                                    onClick={() => handleRemove(BR._id)}
                                >
                                    {" "}
                                    Remove{" "}
                                    <span>
                                        {" "}
                                        <MdDelete />{" "}
                                    </span>
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ManageAllBookings;