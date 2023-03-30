import * as React from 'react';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Bundle_Product_Inner from "./Bundle_Product_Inner";
import Subheader from '../common/Subheader';


const Bundle_Product = () => {
    
    return(
      <>
        <Container fluid className='p-3'>
          
          <Subheader />
              <Row className="g-3">              
                <div className=" col-lg-12 col-md-12">
                  <div className='mt-3'>
                  <Bundle_Product_Inner />
                  </div>
                </div>
              </Row>
        </Container>
      </>
    );
}
export default Bundle_Product;