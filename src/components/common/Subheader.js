import * as React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Navbar, Container } from 'react-bootstrap';
import { AiOutlineDashboard, AiOutlineUnorderedList } from "react-icons/ai";
import { TiAttachment } from "react-icons/ti";
import { CgFileDocument } from "react-icons/cg";
import { FaNetworkWired } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { IoInfiniteOutline } from "react-icons/io5";

const Subheader = () => {
  return (
    <>
      <Navbar bg="light" expand="xl" className='subheader'>
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav bg-light" className='margin_auto my-1' />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav variant="pills" defaultActiveKey="/" className=''>
              <Nav.Item>
                <NavLink to="/" eventKey="link-0"><AiOutlineDashboard className='me-1 submenuIcon' />Dashbord</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/Auth_Capture" eventKey="link-1"><AiOutlineUnorderedList className='me-1 submenuIcon' />Order</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/Attachment" eventKey="link-3"><TiAttachment className='me-1 submenuIcon' />Attachment</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/Subscription" eventKey="link-3"><IoInfiniteOutline className='me-1 submenuIcon' />Subscription</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/Customer_Pickup" eventKey="link-6"><IoInfiniteOutline className='me-1 submenuIcon' />Customer Pickup</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/Note" eventKey="link-4"><CgFileDocument className='me-1 submenuIcon' />Note</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/Workflow" eventKey="link-5"><FaNetworkWired className='me-1 submenuIcon' />Workflow</NavLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default Subheader;