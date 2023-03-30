import React from 'react';
import hicore_icon from '../../assets/hicore_icon.png';
import LogoImg from '../../assets/hiecor_logo.png';
import { CDBSidebar, CDBSidebarContent, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem } from 'cdbreact';
import { NavLink, Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <CDBSidebar textColor="#fff" backgroundColor="#0B76C9">
        <Link to="/" className="text-decoration-none d-flex" style={{ color: 'inherit' }} >
          <img src={hicore_icon} alt="logo" className='sideLogo sideIcon' />
          <img src={LogoImg} alt="logo" className='sideLogo hideLogo' />
          </Link>
         <CDBSidebarHeader prefix={<><i className="fa fa-arrow-left fa-large sideToggle"></i><i className="fa fa-arrow-right fa-large sideToggle1"></i></>}> 
        </CDBSidebarHeader>
        
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu defaultActiveKey="/">
            <Nav.Item>
            <NavLink exact to="/no" activeClassName="activeClicked" eventKey="link-3.0">
              <CDBSidebarMenuItem icon="home">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            </Nav.Item>
            <Nav.Item>
            <NavLink exact to="/Customer_Service" activeClassName="activeClicked" eventKey="link-3.1">
              <CDBSidebarMenuItem icon="table">Customer Service</CDBSidebarMenuItem>
            </NavLink>
            </Nav.Item>
            <Nav.Item>
            <NavLink exact to="/Contact" activeClassName="activeClicked" eventKey="link-3.2">
              <CDBSidebarMenuItem icon="user">Contact</CDBSidebarMenuItem>
            </NavLink>
            </Nav.Item>
            <Nav.Item>
            <NavLink exact to="/Email" activeClassName="activeClicked" eventKey="link-3.3">
              <CDBSidebarMenuItem icon="chart-line">Email</CDBSidebarMenuItem>
            </NavLink>
            </Nav.Item>
            <Nav.Item>
            <NavLink exact to="/Ecommerce" activeClassName="activeClicked" eventKey="link-3.4">
              <CDBSidebarMenuItem icon="shopping-cart">Ecommerce</CDBSidebarMenuItem>
            </NavLink>
            </Nav.Item>
            <Nav.Item>
            <NavLink exact to="/Social" activeClassName="activeClicked" eventKey="link-3.5">
              <CDBSidebarMenuItem icon="globe">Social</CDBSidebarMenuItem>
            </NavLink>
            </Nav.Item>
            <Nav.Item>
            <NavLink exact to="/Inventory" activeClassName="activeClicked" eventKey="link-3.6">
              <CDBSidebarMenuItem icon="file">Inventory</CDBSidebarMenuItem>
            </NavLink>
            </Nav.Item>
            <Nav.Item>
            <NavLink exact to="/Fulfillment" activeClassName="activeClicked" eventKey="link-3.7">
              <CDBSidebarMenuItem icon="truck">Fulfillment</CDBSidebarMenuItem>
            </NavLink>
            </Nav.Item>
            <Nav.Item>
            <NavLink exact to="/Routing" activeClassName="activeClicked" eventKey="link-3.8">
              <CDBSidebarMenuItem icon="compass">Routing</CDBSidebarMenuItem>
            </NavLink>
            </Nav.Item>
            <Nav.Item>
            <NavLink exact to="/Tracking" activeClassName="activeClicked" eventKey="link-3.9">
              <CDBSidebarMenuItem icon="map-marker">Tracking</CDBSidebarMenuItem>
            </NavLink>
            </Nav.Item>
            <Nav.Item>
            <NavLink exact to="/Report" activeClassName="activeClicked" eventKey="link-3.10">
              <CDBSidebarMenuItem icon="book">Report</CDBSidebarMenuItem>
            </NavLink>
            </Nav.Item>
            <Nav.Item>
            <NavLink exact to="/404" activeClassName="activeClicked" eventKey="link-3.11">
              <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
            </NavLink>
            </Nav.Item>
            <Nav.Item>
            <NavLink exact to="/Help" activeClassName="activeClicked" eventKey="link-3.12">
              <CDBSidebarMenuItem icon="home">Help</CDBSidebarMenuItem>
            </NavLink>
            </Nav.Item>
            <Nav.Item>
            <NavLink exact to="/Setting" activeClassName="activeClicked" eventKey="link-3.13">
              <CDBSidebarMenuItem icon="cog">Setting</CDBSidebarMenuItem>
            </NavLink>
            </Nav.Item>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>

  )
};

export default Sidebar;