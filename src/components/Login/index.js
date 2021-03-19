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

    // state to monitor email validation warning
    const [error, setError] = useState('')

    // state to monitor first time email input is changed
    const [press, setPress] = useState(false)


    // monitors the email input to give a corresponding error message
    useEffect(() => {
        if (press) {
            !values.email ? setError('Please enter your email address') :
                !emailRegex.test(values.email) ? setError('Please enter a valid email') : setError('');
        }
    }, [values.email, press])


    const handleEmailInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            email: event.target.value,
        }));
        setPress(true)
    };

    const handlePasswordInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            password: event.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? true : false);
    };
   
    // regex for password validation
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
                            <p id="emailError">{error}</p>

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

                        {  values.password.length >= 8 && emailRegex.test(values.email) ? (
                            <Link to="/home">
                                {" "}
                                <Button className="login-button" primary inputPadding="15px 137px">
                                    Log me in
                </Button>
                            </Link>
                        ) : (
                            <Button
                                primary inputPadding="15px 137px"
                                disabled={!emailRegex.test(values.email) || values.password.length < 8}
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
