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
            <Nav variant="pills" defaultActiveKey="/Revenue_Products" className=''>
              <Nav.Item>
                <NavLink to="/Revenue_Products" eventKey="link-00"><Icon icon="uil:chart-growth" width="24" className='me-1 submenuIcon'/>Revenue by products</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/Revenue_Category" eventKey="link-11"><Icon icon="fluent:arrow-growth-20-filled" width="24" className='me-1 submenuIcon'/>Revenue by category</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/Revenue_Channels" eventKey="link-22"><Icon icon="uil:arrow-growth" width="24" className='me-1 submenuIcon'/>Revenue by channels</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/Products" eventKey="link-33"><Icon icon="fluent-mdl2:product-variant" width="24" className='me-1 submenuIcon'/>Products</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/Sales" eventKey="link-44"><Icon icon="icon-park-outline:sales-report" width="24" className='me-1 submenuIcon'/>Sales</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/Customers" eventKey="link-55"><Icon icon="mdi:user-group" width="24" className='me-1 submenuIcon'/>Customers</NavLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default Dashboard_Tab;