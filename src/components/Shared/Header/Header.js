import React from "react";
import "./Header.css";
import { Nav, Navbar, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import useAuth from "../../../hooks/useAuth";
import { FaTripadvisor } from "react-icons/fa";
const Header = () => {
    const { user, handleUserLogOut } = useAuth();
    return (
        <div className=" nav-container container-fluid ">
            <Navbar className="  container" expand="lg">
                <Navbar.Brand>
                    <h2 className="d-inline-block logo-color mt-1 fw-bold text-warning">
                        <span>
                            {" "}
                            <FaTripadvisor />{" "}
                        </span>{" "}
                        Tourist Center{" "}
                    </h2>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0 d-flex align-items-center pt-2 "
                        style={{ maxHeight: "240px" }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="/home" className="mt-1 text-dark menuText">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/about" className="mt-1 text-dark menuText">
                            About Us
                        </Nav.Link>
                        {user.email && (
                            <Nav.Link
                                as={Link}
                                to="/myBookings"
                                className="mt-1 text-dark menuText"
                            >
                                My Bookings
                            </Nav.Link>
                        )}
                        <Nav.Link
                            as={Link}
                            to="/contact"
                            className=" mt-1 text-dark menuText me-2"
                        >
                            Contact
                        </Nav.Link>
                        {user?.email && (
                            <span className="d-flex align-items-center">
                                <span className="fs-4 text-warning">
                                    <BiUserCircle />
                                </span>
                                <span className="ms-1">
                                    <em>{user.displayName || <b> Name unavailable</b>}</em>
                                </span>
                            </span>
                        )}
                        <Button className="btn-style loginStyle  bg-transparent  border-warning ms-3 mt-1">
                            {user.email ? (
                                <Nav.Link
                                    as={Link}
                                    to="/login"
                                    onClick={handleUserLogOut}
                                    className=" p-0 text-dark loginText "
                                >
                                    {" "}
                                    Logout
                                </Nav.Link>
                            ) : (
                                <Nav.Link
                                    as={Link}
                                    to="/login"
                                    className=" p-0 text-dark loginText "
                                >
                                    {" "}
                                    Log in
                                </Nav.Link>
                            )}
                        </Button>
                        {!user.email && (
                            <Button className="btn-style  sign-btn  ms-3 mt-1  border-0">
                                <Nav.Link as={Link} to="/signup" className=" text-white p-0">
                                    {" "}
                                    Sign up
                                </Nav.Link>
                            </Button>
                        )}
                        {user.email && (
                            <NavLink to="/admin">
                                <Button className="btn-style border-warning text-white bg-warning mx-2">
                                    Admin
                                </Button>
                            </NavLink>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
