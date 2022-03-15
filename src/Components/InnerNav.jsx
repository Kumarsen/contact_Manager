import React from "react";
import { useNavigate } from "react-router-dom";

const InnerNav = () => {
    const navigate = useNavigate();
    const logoutClick = () => {
        localStorage.clear();
        alert("Successfully Loggedout");
        navigate("/login");
        window.location.reload();
    }

    return <>
        <nav className="navbar navbar-expand navbar-light bg-light fixed-top">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1 contact-brand">Contact Manager</span>
            </div>
            <div className='collapse navbar-collapse'>
                <ul className='navbar-nav ml-auto'>
                    <li className='nav-item'>
                        <span className='nav-link' onClick={logoutClick} style={{ cursor: "pointer" }}>Logout</span>
                    </li>
                </ul>
            </div>
        </nav>
    </>

}
export default InnerNav;