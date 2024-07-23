import React from "react";
import { Link } from "react-router-dom";    

export default function Navbar(){
    return(

        <nav>
            <Link to= '/'>Home</Link>
            <Link to= '/register'>Register</Link>
            <Link to= '/login'>Login</Link>
            {/* Add more links in the navbar here */}
        </nav>
    )
}