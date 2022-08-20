import React from "react";
import { Link, useHistory } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import { logOutAction } from "../action/user-action";
export default function Navbar() {
  const dispatch = useDispatch()
  const { userloginRedux } = useSelector(state => state.userLogin)
  const history =useHistory()
  console.log(userloginRedux);
    return (
        <nav className="navbar navbar-expand-lg navbar-warning bg-warning py-0 px-5 sticky-top" style={{backgroundColor:"red"}}>
         <a href="" className="navbar-brand text-white"><h4>Task</h4></a>
        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" >
          <span className="navbar-toggler-icon">
          <i class="bi bi-justify h2"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/signUp">Sign-up </Link>
            </li>
            <li className="nav-item">
              {
                userloginRedux
                ?<div class="dropdown show">
                  <a class="btn btn-light dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown">
                    <strong>{userloginRedux.info.name}</strong>
                  </a>
                  <div class="dropdown-menu dropdown-menu-start start-0" aria-labelledby="dropdownMenuLink">
                    <Link className="nav-link text-dark" to="/">Home</Link>
                    <Link class="dropdown-item" to="indexpage">Profile</Link>
                    <Link class="dropdown-item" to="/profile">Account</Link>
                    <a class="dropdown-item" onClick={e => {
                      dispatch(logOutAction())
                      history.push("/login")
                  }}>Logout</a>
                  </div>
                </div>
                  
                  : <Link className="nav-link text-white" to="/login">Login
                     
                  </Link>
              }
            </li>
          </ul>
        </div>
      </nav>
    )
}