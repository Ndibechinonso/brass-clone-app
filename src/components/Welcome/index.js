import React from "react";
import NavBar from "../NavBar";
import "./Welcome.css";

export default function Welcome(props) {
    return (
        <div>
            <NavBar text="noDisplay" button="noDisplay" />
            <h2 className="welcome">Welcome</h2>
        </div>
    );
}
