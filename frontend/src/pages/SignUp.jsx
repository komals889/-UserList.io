import React, { useState } from "react";
import { signupAction } from "../action/user-action";
import {useDispatch} from 'react-redux'
import swal from 'sweetalert'
import { Link } from "react-router-dom";
import './signUp.css'
export default function SignUp({history}) {
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [password, setpassword] = useState("")
    const dispatch = useDispatch()
    let x = true;
    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(signupAction({name, email, password }))
        e.target.reset()
        swal({
            title:"Register Successfully...🥰🥰🥰",
            icon: "success"     
        })
        history.push("/login")
    }

    return <div className="backimg">
        <br /> <br /><br /><br />
        <div className="container">
      <div className="row ">
        <div className="col-sm-6 offset-sm-3 alert alert-info rounded-3">
            <div className="card rounded-3">
                <div className="card-header">
                    <h5>Sign-Up</h5>
                </div>
                <div className="card-body bg-dark">
                    <form action="" onSubmit={handleLogin}>
                    <label htmlFor="" className="text-white">Name</label><br />
                    <input type="text" className="form-control" placeholder="Please Enter Name" required name="" id="" onChange={e=>{
                        setname(e.target.value)
                    }}/>
                    <label htmlFor="" className="text-white">Email</label><br />
                    <input type="email" className="form-control" placeholder="Please Enter Email" required name="" id="" onChange={e=>{
                        setemail(e.target.value)
                    }}/>
                    <label htmlFor="" className="text-white">Password</label><br />
                        <div className="input-group">
                        <input type="password" className="form-control" placeholder="Please Enter Password" required name="" id="password" onChange={e=>{
                        setpassword(e.target.value)
                            }} />
                            <span className="input-group-text"><i id="btn" className="bi bi-eye-fill"  onClick={(e) => {
                              
                                if (x) {
                                    document.getElementById("password").setAttribute("type", "text")
                                    document.getElementById("btn").classList.add("bi-eye-slash-fill")
                                    document.getElementById("btn").classList.remove("bi-eye-fill")
                                    x = false;
                                }else {
                                    document.getElementById("password").setAttribute("type","password")
                                    document.getElementById("btn").classList.add("bi-eye-fill") 
                                    document.getElementById("btn").classList.remove("bi-eye-slash-fill")
                                    x = true;
                                }
                            }}></i></span>
                        </div> <br />
                        <button className="btn btn-info btn-sm w-100 text-white">Create an Account</button>
                        <div className="text-center mt-2">
                        <Link to="/login" className="text-white">or,Login</Link>
                        </div>
                   </form>
                </div>
            </div>
       </div>
        </div>
       </div>
</div>
}