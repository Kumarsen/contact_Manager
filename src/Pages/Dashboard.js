import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Api from "../api/contact_mngr";
import InnerNav from "../Components/InnerNav";
import "../Components/Sidenav.css";
const Dashboard = () => {
    const { lid } = useParams();
    const navigate = useNavigate();
    const [contacts, setContacts] = useState([]);

    let msg = () => {
        return <>
            <div>No contacts found</div>
        </>
    }
    useEffect(() => {
        if (!lid) {
            alert("login first");
        } else {

            const fetchUcontact = async () => {
                const url = `/users/${lid}?_embed=contacts`
                const resp = await Api.get(url);
                setContacts(resp.data.contacts);
            }
            fetchUcontact();
        }
    }, [lid]);
    const deleteClick = async (id) => {
        const resp = await Api.delete(`/contacts/${id}`);
        console.log(resp);
        window.location.reload();
    }
    const detailClick = (contact) => {
        navigate("/contactdetails", { state: { cont: contact } })

    }
    const editClick = (contact) => {
        navigate("/updatecontact", { state: { cont: contact } })

    }
    const openNav = () => {
        document.getElementById("mySidenav").style.width = "250px";
    }
    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
    }
    const yourContacts = () => {
        return <>
            {contacts.map(contact => {
                return <>
                    <div className="card p-4 m-4" style={{ width: "18rem", color: "white", textAlign: "center", fontWeight: "bolder", backgroundImage: 'url("https://smsi.ie/wp-content/uploads/2020/06/profile-2.png")', backgroundPosition: "center", borderRadius: "15px", backgroundColor: "rgba(0,0,0,0.6)" }} key={contact.id}>
                        <div className="card-img-top">
                            <h5 className="card-title" style={{ background: "rgba(131, 180, 226, 0.479)", borderRadius: "15px" }}>{contact.contactName}</h5>
                        </div>
                        <div className="card-body">
                            <p className="card-text" style={{ background: "rgba(131, 180, 226, 0.479)", borderRadius: "15px" }}>{contact.email}</p>
                            <span className="btn btn-primary mx-1 my-2" onClick={() => { editClick(contact) }} style={{ borderRadius: "15px", width: "77px" }}>Edit</span>
                            <span className="btn btn-primary mx-1" onClick={() => { deleteClick(contact.id) }} style={{ borderRadius: "15px", width: "77px" }}>Delete</span>
                            <span className="btn btn-primary mx-1" onClick={() => { detailClick(contact) }} style={{ borderRadius: "15px", width: "77px" }}>Details</span>
                        </div>
                    </div>
                </>
            })}
        </>
    }
    return <>
        <InnerNav />

        <div className="card-header" style={{ fontSize: "25px", fontWeight: "bolder", display: "flex", justifyContent: "center", alignItems: "center" }}>Your Contacts</div>
        <div id="mySidenav" className="sidenav" style={{ marginTop: "130px" }}>
            <span className="closebtn" onClick={closeNav} style={{ cursor: "pointer" }}>&times;</span>
            <Link to={`/addcontact/${lid}`} className='btn al' style={{ cursor: "pointer" }}>Add new contact</Link>
            <span className='btn al'>Help!</span>
            <span className='btn al'>About us</span>
        </div>
        <span style={{ fontSize: "30px", cursor: "pointer" }} onClick={openNav}>&#9776; Menu</span>

        <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

            <div className="card text-center mt-5" style={{ width: "70rem", height: "30rem", overflowY: "auto", overflowX: "hidden" }}>

                <div className="card-body">

                    <div className="container m-3 d-inline-flex flex-wrap " style={{ justifyContent: "space-evenly" }}>
                        {contacts.length !== 0 ? yourContacts() : msg()}
                    </div>
                </div>
            </div>
        </div>
    </>

}
export default Dashboard;