import React from "react";
import { Link } from "react-router-dom";    
import './navbar.css'; // Import the CSS file

export default function Navbar(){
    return(

        <div className="navbar">
            <Link to="/" className="active">Home</Link>
            {/* Add more links here */}
            {/* <Link to="/about">About</Link> */}
            {/* <Link to="/contact">Contact</Link> */}
            <div className="navbar-right">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </div>
    )
}