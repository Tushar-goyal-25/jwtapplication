import React from "react";
import axios from 'axios';
import { useState } from "react";
import {toast} from 'react-hot-toast';
import {useNavigate} from 'react-router-dom'
import '../components/navbar.css'; // Import the CSS file


export default function Login(){
    const navigate = useNavigate()
    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const loginUser = async (e) => {
        e.preventDefault()
        const {email, password} = data
        try {
            const {data} = await axios.post('/login', {email, password});
            if (data.error){
                toast.error(data.error)
            } else{
                setData({});
                navigate('/dashboard')


            }
        } catch (error) {
            
        }
    }
    return(
        <div className="container">
            <div className="form-container">
                <h2>Login</h2>
                <form onSubmit={loginUser}>
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={data.email}
                        onChange={(e) => setData({ ...data, email: e.target.value })}
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={data.password}
                        onChange={(e) => setData({ ...data, password: e.target.value })}
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
        // <div>
        //     <form onSubmit={loginUser}>
        //     <label>Email</label>
        //         <input type="email" placeholder="Enter Email" value={data.email} onChange={(e) => setData({...data,email: e.target.value})}/>
        //         <label>Password</label>
        //         <input type="password" placeholder="Enter Password" value={data.password} onChange={(e) => setData({...data,password: e.target.value})}/>
        //         <button type="submit">Login</button>

        //     </form>
        // </div>
    )
}