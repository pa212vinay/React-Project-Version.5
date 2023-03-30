import React from "react";
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Product_Details_Inner from "./Product_Details_Inner";
import Subheader from '../common/Subheader';


const Product_Details = () => {
    
    return(
      <>
        <Container fluid className='p-3'>
          <Subheader />
              <Row className="g-3">              
                <div className=" col-lg-12 col-md-12">
                  <div className='mt-3'>
                  <Product_Details_Inner />
                  </div>
                </div>
              </Row>
        </Container>
      </>
    );
}
export default Product_Details;