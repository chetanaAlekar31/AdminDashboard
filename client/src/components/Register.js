import React, { useState } from 'react'
import "./mix.css"
import { NavLink } from 'react-router-dom';
const Register = () => {
    const [passShow, setPassShow] = useState(false);
    const [cpassShow, setcPassShow] = useState(false);
    //get the value using state 
    //inpval:input,
    const [inpval, setInpval] = useState({
        fname: "",
        email: "",
        password: "",
        cpassword: ""
    });
    // console.log(inpval)
    //using onchange event set the val
    const setVal = (e) => {
        // console.log(e.target.value);
        const { name, value } = e.target;
        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    }

    const addUserdata = async(e) => {
        e.preventDefault();
        const { fname, email, password, cpassword } = inpval;//used object destructuring
        if (fname === "") {
            alert("please enter your name");
        } else if (email === "") {
            alert("please enter your email ")

        }
        else if (!email.includes("@")) {
            alert("please enter Valid Email")
        } else if (password === "") {
            alert("enter your password")
        }
        else if (password.length < 6) {
            alert("password must 6 char")
        } else if (cpassword === "") {
            alert("enter your cpassword")
        }
        else if (cpassword.length < 6) {
            alert("password must be 6 char")
        } else if (password !== cpassword) {
            alert("password and confirmpassword not match")
        } else {
            // console.log("user register sucessfully")
            const data = await fetch("/register", {
            method : "POST",
           headers:{ 
            "Content-Type": "application/json" 
        },


            
            body:JSON.stringify({
                fname,email,password,cpassword
            })

            });
            const res = await data.json();
             console.log(res);
        }
    }
    return (
        <>
            <section>
                <div className='form_data'>
                    <div className='form_heading'>
                        <h1>Sign Up</h1>
                        <p>Register Your Data</p>

                    </div>
                    <form>
                        <div className='form_input'>
                            <label for="fname">Name</label>
                            <input type='text' onChange={setVal} value={inpval.fname} name='fname' id='fname' placeholder='Enter Your Name' />
                        </div>
                        <div className='form_input'>
                            <label for="email">Email</label>

                            <input type='email' onChange={setVal} value={inpval.email} name='email' id='email' placeholder='Enter Your Email Address' />
                        </div>
                        <div className='form_input'>
                            <label for="password">Password</label>
                            <div className='two'>

                                <input type={!passShow ? "password" : "text"} name='password' onChange={setVal} value={inpval.password} id='password' placeholder='Enter Your password' />
                                <div className='showpass' onClick={() => setPassShow(!passShow)}>
                                    {!passShow ? "Show" : "Hide"}
                                </div>
                            </div>

                        </div>
                        <div className='form_input'>
                            <label for="password"> Confirm Password</label>
                            <div className='two'>
                                <input type={!cpassShow ? "password" : "text"} name='cpassword' onChange={setVal} value={inpval.cpassword} id='cpassword' placeholder='Enter Your Confirm password' />
                                <div className='showpass' onClick={() => setcPassShow(!cpassShow)}>
                                    {!cpassShow ? "Show" : "Hide"}
                                </div>
                            </div>

                        </div>
                        <button className='btn' onClick={addUserdata}>Sign Up</button>
                        <p>Already have an account?<NavLink to="/">LogIn</NavLink></p>
                    </form>

                </div>
            </section>
        </>
    )
}

export default Register