import React from "react";

export default function Login(){
    const loginUser = (e) => {
        e.preventDefault()
    }
    return(
        <div>
            <form onSubmit={loginUser}>
            <label>Email</label>
                <input type="email" placeholder="Enter Email" />
                <label>Password</label>
                <input type="password" placeholder="Enter Password" />
                <button type="submit">Login</button>

            </form>
        </div>
    )
}