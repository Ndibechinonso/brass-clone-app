import React from "react";
import NavBar from "../NavBar";
import Body from "../Body";
import "./Home.css";

export default function Home(props) {
  return (
    <div>
      <NavBar text="noText" className="nav" />
      <Body />
    </div>
  );
}
