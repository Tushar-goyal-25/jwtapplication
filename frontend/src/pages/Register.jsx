import React from "react";

export default function Register(){

    
    const registerUser  = (e) => {
        e.preventDefault()
    }
    return(

        <div>
            <form onSubmit={registerUser}>
                <label>Name</label>
                <input type="text" placeholder="Enter Name" />
                <label>Email</label>
                <input type="email" placeholder="Enter Email" />
                <label>Password</label>
                <input type="password" placeholder="Enter Password" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}