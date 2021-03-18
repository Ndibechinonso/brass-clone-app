import React, { useState, useEffect } from "react";
import NavBar from "../NavBar";
import Button from "../Button";
import "./Login.css";
import { Link } from "react-router-dom";

export default function Login(props) {
    const [values, setValues] = useState({
        email: "",
        password: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const handleEmailInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            email: event.target.value,
        }));
    };
    // const [email, setEmail] = useState('')
    // useEffect(() => {
    // const handleEmailChange = () => setEmail(handleEmailInputChange)
    // })
    const handlePasswordInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            password: event.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? true : false);
    };

    const emailRegex = RegExp(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{&}~-]+@[a-zA-Z0-9-]+.(?:\.[a-zA-Z0-9-]+)*$/
    );
    return (
        <div>
            <NavBar button="button" />
            <div className="login-container">
                <div>
                    <h3>Log in to your account</h3>
                </div>
                <div>
                    {" "}
                    <form onSubmit={handleSubmit} className="form">
                        <div className="form-details">
                            {!emailRegex.test(values.email) && values.email.length > 0 && (
                                <p id="emailError">Please enter a valid email address</p>
                            )}
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="inputs"
                                placeholder=" Email address"
                                value={values.email}
                                onChange={handleEmailInputChange}
                            />
                        </div>

                        <div className="form-details password-div">
                            <input
                                type={passwordShown ? "text" : "password"}
                                name="password"
                                id="password"
                                className="inputs"
                                placeholder="Enter Password"
                                value={values.password}
                                onChange={handlePasswordInputChange}
                            />
                            <p
                                className="password-toggle"
                                onClick={() =>
                                    setPasswordShown((passwordShown) => !passwordShown)
                                }
                            >
                                {passwordShown ? "Hide" : "Show"}
                            </p>
                        </div>

                        {submitted && values.password && values.email ? (
                            <Link to="/home">
                                {" "}
                                <Button primary inputPadding="15px 137px">
                                    Log me in
                </Button>
                            </Link>
                        ) : (
                            <Button
                                primary inputPadding="15px 137px"
                                disabled={!values.email || values.password.length < 8}
                                className="login-button notAllowed"
                            >
                                Log me in
                            </Button>
                        )}
                        <p className="passwordReset">
                            Forgot your password?<a className="reset">Reset it here</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
