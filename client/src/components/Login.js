import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // Import useNavigate
import "./mix.css";

const Login = () => {
    const navigate = useNavigate(); // Initialize navigate
    const [passShow, setPassShow] = useState(false);
    const [inpval, setInpval] = useState({
        email: "",
        password: "",
    });

    const setVal = (e) => {
        const { name, value } = e.target;
        setInpval((prevVal) => ({
            ...prevVal,
            [name]: value
        }));
    };

    const loginuser = (e) => {
        e.preventDefault();
        const { email, password } = inpval;

        if (email === "") {
            alert("Please enter your email.");
        } else if (!email.includes("@")) {
            alert("Please enter a valid email.");
        } else if (password === "") {
            alert("Enter your password.");
        } else if (password.length < 6) {
            alert("Password must be at least 6 characters.");
        } else {
            console.log("Login successfully");
            navigate("/dashboard"); // Navigate to dashboard
        }
    };

    return (
        <section>
            <div className='form_data'>
                <div className='form_heading'>
                    <h1>Welcome to Login</h1>
                    <p>Hi, Please login</p>
                </div>
                <form>
                    <div className='form_input'>
                        <label htmlFor="email">Email</label>
                        <input
                            type='email'
                            onChange={setVal}
                            value={inpval.email}
                            name='email'
                            id='email'
                            placeholder='Enter Your Email Address'
                        />
                    </div>
                    <div className='form_input'>
                        <label htmlFor="password">Password</label>
                        <div className='two'>
                            <input
                                type={!passShow ? "password" : "text"}
                                name='password'
                                onChange={setVal}
                                value={inpval.password}
                                id='password'
                                placeholder='Enter Your Password'
                            />
                            <div className='showpass' onClick={() => setPassShow(!passShow)}>
                                {!passShow ? "Show" : "Hide"}
                            </div>
                        </div>
                    </div>
                    <button className='btn' onClick={loginuser}>Login</button>
                    <p>Don't have an Account? <NavLink to="/register">Sign Up</NavLink></p>
                </form>
            </div>
        </section>
    );
}

export default Login;
