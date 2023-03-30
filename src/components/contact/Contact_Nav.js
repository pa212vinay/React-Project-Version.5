// import React from "react";
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';



const Customer_nav = () => {


  return (

    <>
      <div className="TabNav ">
        <Nav className="">
          <Nav.Item className="mt-3">
            <NavLink to="/Contact_Email">Email</NavLink>
          </Nav.Item>
          <Nav.Item className="mt-3">
            <NavLink to="/Contact_Phone">Phone</NavLink>
          </Nav.Item>
          <Nav.Item className="mt-3">
            <NavLink to="/Contact_Company">Company</NavLink>
          </Nav.Item>
          <Nav.Item className="mt-3">
            <NavLink to="/Contact_Name">Name</NavLink>
          </Nav.Item>
        </Nav>
      </div>
    </>
    
  );
}

export default Customer_nav;
