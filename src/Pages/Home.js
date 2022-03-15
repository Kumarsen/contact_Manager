import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Components/Nav";

const Welcome = () => {
    var welcomeMsgStyle = {
        fontSize: "60px",
        marginTop: "110px",
        color: "whitesmoke",
        backgroundColor: "rgba(241, 241, 241, 0.103)",
        height: "fit-content",
        borderRadius: "10px"
    }
    return <>
        <Nav />
        <div className="container" >

            <div className='container-fluid landing-page bg-image'>
                <span style={welcomeMsgStyle}>Manager your contacts here</span>
                <br />
                <Link to="/signup" className='get-strt btn btn-primary'>Get started</Link>
                <br />
                <Link to="/login" className='have-acc btn btn-primary'>Already have account</Link>
            </div>
        </div>
    </>
}
export default Welcome;