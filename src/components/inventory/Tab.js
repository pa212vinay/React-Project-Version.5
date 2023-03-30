import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { BsArrowLeftSquare } from "react-icons/bs";
import { Link } from 'react-router-dom';



const Customer_nav = () => {

  return (
    <>
      <div className="inventory_tab">
        <Nav className="">
          <Nav.Item className="mt-3">
            <NavLink to="/Product_Details" className='custom_tab'>Product Details</NavLink>
          </Nav.Item>
          <Nav.Item className="mt-3">
            <NavLink to="/Advanced" className='custom_tab'>Advanced</NavLink>
          </Nav.Item>
          <Nav.Item className="mt-3">
            <NavLink to="/Shipping" className='custom_tab'>Shipping</NavLink>
          </Nav.Item>
          <Nav.Item className="mt-3">
            <NavLink to="/Supplier" className='custom_tab'>Supplier</NavLink>
          </Nav.Item>
          <Nav.Item className="mt-3">
            <NavLink to="/Log" className='custom_tab'>Log</NavLink>
          </Nav.Item>
          <Nav.Item className="mt-3">
            <NavLink to="/Trail" className='custom_tab'>Trial</NavLink>
          </Nav.Item>
          <Nav.Item className="mt-3">
            <NavLink to="/Bundle_Product" className='custom_tab'>Bundle Product</NavLink>
          </Nav.Item>
          <Link to="/Inventory" className='ms-auto'>
          <span ><BsArrowLeftSquare className='back-btn'/></span>
          </Link>
        
        </Nav>
      </div>
    </>
  );
}

export default Customer_nav;
