import * as React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Navbar, Container } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom';
const Dashboard_Tab = () => {
  return (
    <>
      <Navbar bg="light" expand="xl" className='subheader'>
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav bg-light" className='margin_auto my-1' />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav variant="pills" defaultActiveKey="/" className=''>
              <Nav.Item>
                <NavLink to="" eventKey="link-00"><Icon icon="clarity:dashboard-line" width="24" className='me-1 submenuIcon'/>Revenue by products</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="" eventKey="link-11"><Icon icon="material-symbols:format-list-bulleted-rounded" width="24" className='me-1 submenuIcon'/>Revenue by category</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="" eventKey="link-22"><Icon icon="ci:paperclip-attechment-tilt" width="24" className='me-1 submenuIcon'/>Revenue by channels</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="" eventKey="link-33"><Icon icon="icomoon-free:infinite" width="24" className='me-1 submenuIcon'/>Products</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="" eventKey="link-44"><Icon icon="game-icons:card-pickup" width="24" className='me-1 submenuIcon'/>Sales</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="" eventKey="link-55"><Icon icon="mdi-light:note-text" width="24" className='me-1 submenuIcon'/>Customers</NavLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default Dashboard_Tab;