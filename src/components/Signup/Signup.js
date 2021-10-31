import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useLocation, useHistory } from "react-router-dom";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/home";
    const {
        handleUserRegisterWithEmail,
        error,
        setUser,
        setError,
        auth,
        userName,
        setUserName,
        updateProfile,
    } = useAuth();

    // setUserName
    setUserName(name);

    // Get and Set User Name
    const handleName = (e) => {
        setName(e.target.value);
    };

    // Get and Set User Email

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    // Get and Set User password

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleRegistration = (e) => {
        e.preventDefault();
        handleUserRegisterWithEmail(email, password)
            .then((result) => {
                updateProfile(auth.currentUser, {
                    displayName: userName,
                });
                setUser({
                    ...result.user,
                    displayName: userName,
                });
                history.push(redirect_uri);
            })
            .catch((error) => {
                setError(error.message);
            });
    };
    window.scroll(0, 0);
    return (
        <div className="login-main-Container">
            <Form
                onSubmit={handleRegistration}
                className="form-container mx-auto mt-5"
            >
                <Form.Group className="mb-3 mt-4" controlId="formBasicName">
                    <Form.Control
                        onBlur={handleName}
                        className="loginInput border-top-0 border-end-0 border-start-0 rounded-0"
                        type="text"
                        placeholder="Enter name"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                    <Form.Control
                        onBlur={handleEmail}
                        className="loginInput border-top-0 border-end-0 border-start-0 rounded-0"
                        type="email"
                        placeholder="Enter email"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3 mt-4" controlId="formBasicPassword">
                    <Form.Control
                        onBlur={handlePassword}
                        className="loginInput border-top-0  border-end-0 border-start-0 rounded-0"
                        type="password"
                        placeholder="Password"
                        required
                    />
                </Form.Group>
                <Button className="loginBtn  mt-4 mb-4" variant="info" type="submit">
                    Sign up
                </Button>
                <hr />
                <p>
                    Already have an account?
                    <Link to="/login" className="ms-2">
                        {" "}
                        Log in
                    </Link>
                </p>
                <p className="text-danger my-2"> {error}</p>
            </Form>
        </div>
    );
};

export default Signup;
