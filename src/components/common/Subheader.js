import * as React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Navbar, Container } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom';
import './subheader.scss';

const Subheader = () => {
  return (
    <>
      <Navbar bg="light" expand="xl" className='subheader'>
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav bg-light" className='margin_auto my-1' />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav variant="pills" defaultActiveKey="/" className=''>
              <Nav.Item>
                <NavLink to="/" eventKey="link-0"><Icon icon="clarity:dashboard-line" width="24" className='me-1 submenuIcon'/>Dashbord</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/Auth_Capture" eventKey="link-1"><Icon icon="material-symbols:format-list-bulleted-rounded" width="24" className='me-1 submenuIcon'/>Order</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/Attachment" eventKey="link-3"><Icon icon="ci:paperclip-attechment-tilt" width="24" className='me-1 submenuIcon'/>Attachment</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/Subscription" eventKey="link-3"><Icon icon="icomoon-free:infinite" width="24" className='me-1 submenuIcon'/>Subscription</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/Customer_Pickup" eventKey="link-6"><Icon icon="game-icons:card-pickup" width="24" className='me-1 submenuIcon'/>Customer Pickup</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/Note" eventKey="link-4"><Icon icon="mdi-light:note-text" width="24" className='me-1 submenuIcon'/>Note</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/Workflow" eventKey="link-5"><Icon icon="entypo:flow-tree" width="24" className='me-1 submenuIcon'/>Workflow</NavLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default Subheader;