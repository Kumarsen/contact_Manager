import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Help from './Components/Help_Page';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Nav from "./Components/Nav";
import Api from "./api/contact_mngr";
import Dashboard from './Pages/Dashboard';
import Addcontact from './Pages/Addcontact';
import UpdateContact from './Pages/UpdateContact';
import ContactDetails from './Pages/ContactDetails';


function App() {
  const [users, setUsers] = useState("");
  const [loggedUser, setloggedUser] = useState("");

  useEffect(() => {

    const data = JSON.parse(localStorage.getItem("loggedUser"));
    if (data) setloggedUser(data);

    const fetchUsers = async () => {
      const resp = await Api.get("/users");
      setUsers(resp.data);
    }

    fetchUsers();
  }, []);
  const signupController = async (values) => {
    const req = {
      ...values
    }
    const resp = await Api.post("/users", req);
    return resp.data;
  }

  return (
    <>
      <Router>
        <Nav loggedUser={loggedUser} />
        <div style={{ paddingTop: "75px" }} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/needhelp' element={<Help />} />
          <Route path='/login' element={<Login users={users} />} />
          <Route path='/signup' element={<Signup signupController={signupController} />} />
          <Route path='/dashboard/:lid' element={<Dashboard />} />
          <Route path='/addcontact/:lid' element={<Addcontact />} />
          {/* <Route path='/updatecontact/:cid' element={<UpdateContact/>}/> */}
          <Route path='/updatecontact' element={<UpdateContact />} />
          <Route path='/contactdetails' element={<ContactDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
