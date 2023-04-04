import React from 'react';
import Container from 'react-bootstrap/Container';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import globe from '../../assets/globe.svg';
import Form from 'react-bootstrap/Form';
import { AiOutlineSearch } from "react-icons/ai";
import { ImSwitch } from "react-icons/im";
import { TbShoppingCartPlus, TbFreeRights } from "react-icons/tb";
import { BsFileEarmarkFont } from "react-icons/bs";
import { BiCalendar } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import sidebarIcon from '../../assets/hiecoricon.png';
import hiecorLogo from '../../assets/white_logo.png';
import { useState } from 'react';
import { Icon } from '@iconify/react';


// function head() {
//   return (
//     <>
//       <Navbar expand="lg" className='header_navbar mainHeader'>
//         <Container fluid className=''>
//           <div className='getstart'>
//             <div className='mobileSideBar' >
//               <a className='sideBarIcon'>
//                 <img src={sidebarIcon} alt="globe" />
//               </a>
//             </div>
//             <a className='btn-hover getStartBtn'>
//               Getting started
//             </a>
//             <a className='globe'>
//               <img src={globe} alt="globe" />
//             </a>
//           </div>
//           <Nav className='cus-search-bar'>
//             <Nav.Item className='searchInput r_mt-1'>
//               <div className='userInput'>
//                 <Form.Control placeholder="User Id" className='rounded-pill find_input' />
//                 <AiOutlineSearch className='search_head' />
//               </div>
//               <div className='userInput'>
//                 <Form.Control placeholder="Order Id" className='rounded-pill mx-1 find_input ' />
//                 <AiOutlineSearch className='search_head' />
//               </div>
//             </Nav.Item>
//           </Nav>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" className='ms-auto my-2 header_toggle' />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav variant="pills" defaultActiveKey="/" className="ms-auto align custom_nav">
//               <Nav.Item className='navMenu'>
//                 <NavLink to="/" eventKey="link-1.2" className='fw-bold cus-menu-text'>
//                   <TbShoppingCartPlus className='mx-1 menuIcon' />
//                   <span>New Order</span>
//                 </NavLink>
//                 <NavLink to="/Create_Invoice" target="_blank" eventKey="link-1.3" className='fw-bold cus-menu-text'><BsFileEarmarkFont className='mx-1 menuIcon' /><span>Create Invoice</span></NavLink>
//                 <NavLink to="/PosLayout" eventKey="link-1.4" className='fw-bold cus-menu-text'><TbFreeRights className='mx-1 menuIcon' /> <span>POS</span></NavLink>
//                 <NavLink to="/" eventKey="link-1.5" className='fw-bold cus-menu-text'><BiCalendar className='mx-1 menuIcon' /><span>Calender</span></NavLink>
//               </Nav.Item>
//               <Nav.Item className='userLogin'>
//                 <NavLink to="/Create_Invoice" eventKey="link-1.6">
//                   <div className='d-flex imguser mx-3'>
//                     <div className='fw-bold userName'>Robert Hawkins</div>
//                   </div>
//                 </NavLink>
//                 <div className='switchImg'>
//                   <Nav.Link >
//                     <ImSwitch className='switch' />
//                   </Nav.Link>
//                 </div>
//               </Nav.Item>
//               <Nav.Item >
//               </Nav.Item>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//     </>
//   );
// }

// export default head;


export default function Header() {

  const cssadd = { left: '-100%' };
  const cssNadd = { left: '0px' };
  const [showSidebar, setShowSidebar] = useState(cssadd);

  const ShowMenu = () => {
    console.log('Run');
    document.body.style.overflow = "hidden";
    setShowSidebar(cssNadd);
    document.getElementById('layoutContentId').classList.add("layoutContentScroll");
    
  }

  const hideSidebar = () => {
    setShowSidebar(cssadd);
    document.body.style.overflow = "scroll";
    document.getElementById('layoutContentId').classList.remove("layoutContentScroll");
  }

  return (
    <>
      <Navbar expand="lg" className='header_navbar mainHeader'>
        <Container fluid className=''>
          <div className='getstart'>
            <div className='mobileSideBar' >
              <a className='sideBarIcon' onClick={ShowMenu}>
                <img src={sidebarIcon} alt="globe" /> <Icon className='mSBArrow' icon="material-symbols:arrow-right-alt-rounded" />
              </a>
              <div className='mobileSideBarMenu' style={showSidebar}>
                <div className='mSBcloseIcon'><Icon icon="mingcute:close-fill" onClick={hideSidebar} /></div>
                <div className='mSBMenu'>
                <div className='mSBLogo'><img src={hiecorLogo} alt="" /></div>
                  <ul>    
                    <li><a href="#"><Icon icon="fa-solid:home" /> <span>Dashboard</span></a></li>
                    <li><a href="#"><Icon icon="mdi:table" /> <span>Customer Service</span> </a></li>
                    <li><a href="#"><Icon icon="carbon:user-filled" /> <span>Contact</span> </a></li>
                    <li><a href="#"><Icon icon="carbon:user-filled" /> <span>Email</span> </a></li>
                    <li><a href="#"><Icon icon="carbon:user-filled" /> <span>Ecommerce</span> </a></li>
                    <li><a href="#"><Icon icon="carbon:user-filled" /> <span>Social</span> </a></li>
                    <li><a href="#"><Icon icon="carbon:user-filled" /> <span>Inventory</span> </a></li>
                    <li><a href="#"><Icon icon="carbon:user-filled" /> <span>Fulfillment</span> </a></li>
                    <li><a href="#"><Icon icon="carbon:user-filled" /> <span>Routing</span> </a></li>
                    <li><a href="#"><Icon icon="carbon:user-filled" /> <span>Tracking</span> </a></li>
                    <li><a href="#"><Icon icon="carbon:user-filled" /> <span>Report</span> </a></li>
                    <li><a href="#"><Icon icon="carbon:user-filled" /> <span>Routing</span> </a></li>
                    <li><a href="#"><Icon icon="carbon:user-filled" /> <span>Tracking</span> </a></li>
                    <li><a href="#"><Icon icon="carbon:user-filled" /> <span>Report</span> </a></li>
                    <li><a href="#"><Icon icon="carbon:user-filled" /> <span>404 page</span> </a></li>
                    <li><a href="#"><Icon icon="carbon:user-filled" /> <span>Help</span> </a></li>
                    <li><a href="#"><Icon icon="carbon:user-filled" /> <span>Setting</span> </a></li>
                    
                  </ul>
                </div>
              </div>
            </div>
            <a className='btn-hover getStartBtn'>
              Getting started
            </a>
            <a className='globe'>
              <img src={globe} alt="globe" />
            </a>
          </div>
          <Nav className='cus-search-bar'>
            <Nav.Item className='searchInput r_mt-1'>
              <div className='userInput'>
                <Form.Control placeholder="User Id" className='rounded-pill find_input' />
                <AiOutlineSearch className='search_head' />
              </div>
              <div className='userInput'>
                <Form.Control placeholder="Order Id" className='rounded-pill mx-1 find_input ' />
                <AiOutlineSearch className='search_head' />
              </div>
            </Nav.Item>
          </Nav>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='ms-auto my-2 header_toggle' />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav variant="pills" defaultActiveKey="/" className="ms-auto align custom_nav">
              <Nav.Item className='navMenu'>
                <NavLink to="/" eventKey="link-1.2" className='fw-bold cus-menu-text'>
                  <TbShoppingCartPlus className='mx-1 menuIcon' />
                  <span>New Order</span>
                </NavLink>
                <NavLink to="/Create_Invoice" target="_blank" eventKey="link-1.3" className='fw-bold cus-menu-text'><BsFileEarmarkFont className='mx-1 menuIcon' /><span>Create Invoice</span></NavLink>
                <NavLink to="/PosLayout" eventKey="link-1.4" className='fw-bold cus-menu-text'><TbFreeRights className='mx-1 menuIcon' /> <span>POS</span></NavLink>
                <NavLink to="/" eventKey="link-1.5" className='fw-bold cus-menu-text'><BiCalendar className='mx-1 menuIcon' /><span>Calender</span></NavLink>
              </Nav.Item>
              <Nav.Item className='userLogin'>
                <NavLink to="/Create_Invoice" eventKey="link-1.6">
                  <div className='d-flex imguser mx-3'>
                    <div className='fw-bold userName'>Robert Hawkins</div>
                  </div>
                </NavLink>
                <div className='switchImg'>
                  <Nav.Link >
                    <ImSwitch className='switch' />
                  </Nav.Link>
                </div>
              </Nav.Item>
              <Nav.Item >
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}


