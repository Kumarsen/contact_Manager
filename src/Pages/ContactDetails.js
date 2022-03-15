import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import InnerNav from "../Components/InnerNav";

const ContactDetails = () => {
    const location = useLocation();
    const [cdetails, setCdetails] = useState("");
    useEffect(() => {
        setCdetails(location.state.cont);
    }, []);
    return <>
        <InnerNav />
        <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

            <div className="card p-4 m-4" style={{ width: "25rem", textAlign: "center", borderRadius: "15px" }}>
                <h4 className="card-header" style={{ borderRadius: "15px", fontWeight: "bolder" }}>Selected contact details</h4>
                <img
                    src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
                    className="card-img-top"
                    alt="..."
                    style={{ borderRadius: "15px" }}
                ></img>
                <div className="card-body" style={{ fontWeight: "bolder" }}>
                    <h5 className="card-title">Name: {cdetails.contactName}</h5>
                    <p className="card-text">Email: {cdetails.email}</p>
                    <p className="card-text">Phone: {cdetails.phone}</p>
                    <Link to={`/dashboard/${cdetails.userId}`} className="btn btn-primary" style={{ borderRadius: "15px" }}>Goback</Link>
                </div>
            </div>

        </div>
    </>
}
export default ContactDetails;