import React from "react";
import "./Header.css";
import { Nav, Navbar, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import useAuth from "../../../hooks/useAuth";
import { FaBuilding } from "react-icons/fa";

const Header = () => {

    const { user, handleUserLogOut } = useAuth();

    return (
        <div className="header-bg">
            <Navbar expand="lg">
                <Navbar.Brand>
                    <h2 style={{ color: 'mediumseagreen' }} className="d-inline-block mt-1 fw-bold ">
                        <span>
                            {" "}
                            <FaBuilding />{" "}
                        </span>{" "}
                        Tourist Center{" "}
                    </h2>
                </Navbar.Brand>

                <Navbar.Toggle style={{ backgroundColor: "mediumseagreen" }} aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0 d-flex align-items-center pt-1"
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="/home" className="menuText">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/about" className="menuText">
                            About Us
                        </Nav.Link>
                        {user.email && (
                            <Nav.Link
                                as={Link}
                                to="/myBookings"
                                className="menuText"
                            >
                                My Bookings
                            </Nav.Link>
                        )}
                        <Nav.Link
                            as={Link}
                            to="/contact"
                            className="menuText me-2"
                        >
                            Contact
                        </Nav.Link>
                        {user?.email && (
                            <span>
                                <span className="menuText">
                                    <BiUserCircle />
                                </span>
                                <span className="ms-1 menuText">
                                    <em>{user.displayName || <b> Name unavailable</b>}</em>
                                </span>
                            </span>
                        )}

                        {user.email && (
                            <NavLink as={Link} to="/admin" style={{ textDecoration: 'none' }} className="ms-2 menuText">
                                Dashboard
                            </NavLink>
                        )}

                        {user.email ? (
                            <Nav.Link
                                as={Link}
                                to="/login"
                                onClick={handleUserLogOut}
                            >
                                <Button className="sign-btn">
                                    Log out
                                </Button>

                            </Nav.Link>
                        ) : (

                            <Nav.Link as={Link} to="/login">
                                <Button className="sign-btn">
                                    Log in
                                </Button>
                            </Nav.Link>
                        )}

                        {!user.email && (

                            <Nav.Link as={Link} to="/signup">
                                <Button className="sign-btn">
                                    Sign up
                                </Button>
                            </Nav.Link>

                        )}

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
