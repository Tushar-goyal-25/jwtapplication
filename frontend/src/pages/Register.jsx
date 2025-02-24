import React from "react";
import { useState } from "react";
import axios from 'axios';
import {toast} from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';
import '../components/navbar.css'; // Import the CSS file


export default function Register(){
    const navigate = useNavigate()
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    })

    
    const registerUser  = async (e) => {
        e.preventDefault()
        //destructure data for post endpoint
        const {name, email, password} = data
        //checks and connect to the endpoint 
        try{
            const {data} = await  axios.post('/register', {name, email, password})
            if(data.error){
                toast.error(data.error); //error message
            }
            else{
                setData({})
                toast.success('Login Successful')
                navigate('/login') //navigate to login page
            }
        }
        catch (error){
            console.log(error)

        }
    }
    return(
        <div className="container">
            <div className="form-container">
                <h2>Register</h2>
                <form onSubmit={registerUser}>
                    <label>Name</label>
                    <input
                        type="text"
                        placeholder="Enter Name"
                        value={data.name}
                        onChange={(e) => setData({ ...data, name: e.target.value })}
                    />
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
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>

        // <div>
        //     <form onSubmit={registerUser}>
        //         <label>Name</label>
        //         <input type="text" placeholder="Enter Name" value={data.name} onChange={(e) => setData({...data,name: e.target.value})}/>
        //         <label>Email</label>
        //         <input type="email" placeholder="Enter Email" value={data.email} onChange={(e) => setData({...data,email: e.target.value})}/>
        //         <label>Password</label>
        //         <input type="password" placeholder="Enter Password"  value={data.password} onChange={(e) => setData({...data,password: e.target.value})}/>
        //         <button type="submit">Submit</button>
        //     </form>
        // </div>
    )
}