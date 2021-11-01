import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css";

import { Link } from "react-router-dom";
import { useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const Login = () => {
    const {
        setUser,
        error,
        setError,
        handleUserSignInWithEmail,
    } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/home";

    //   Get and Set User Email
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    //   Get and Set User Password
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    //   Handle User Login With Email and Password
    const handleLoginWithEmail = (e) => {
        e.preventDefault();
        handleUserSignInWithEmail(email, password)
            .then((result) => {
                setUser(result.user);
                history.push(redirect_uri);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            });
    };
    window.scroll(0, 0);
    return (
        <div className="login-main-Container">
            <Form
                onSubmit={handleLoginWithEmail}
                className="form-container mx-auto mt-5"
            >
                <Form.Group className="mb-3" controlId="formBasicEmail">
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
                <div className="mb-3 mt-4 text-danger">{error}</div>
                <Button
                    className="loginBtn mt-4 text-white border-0"
                    variant="warning"
                    type="submit"
                >
                    Log in
                </Button>
                <hr />
                <p>
                    New here?
                    <Link to="/signup" className="ms-2">
                        {" "}
                        Sign up
                    </Link>
                </p>
            </Form>

        </div>
    );
};

export default Login;
