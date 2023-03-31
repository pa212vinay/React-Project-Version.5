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


function head() {
  return (
    <>
      <Navbar expand="lg" className='header_navbar mainHeader'>
        <Container fluid className=''>
          <div className='getstart'>
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
  );
}

export default head;