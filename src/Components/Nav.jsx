import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {

    return <>
        <nav className="navbar navbar-expand navbar-light bg-light fixed-top">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1 contact-brand">Contact Manager</span>
            </div>
            <div className='collapse navbar-collapse'>
                <ul className='navbar-nav ml-auto'>
                    <li className='nav-item'>
                        <Link to="/" className='nav-link'>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/needhelp" className='nav-link'>Help!</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/login" className='nav-link'>Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
}
export default Nav;