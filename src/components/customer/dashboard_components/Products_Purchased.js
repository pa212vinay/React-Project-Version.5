import * as React from 'react';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Products_Purchased_Inner from "./Products_Purchased_Inner";
import Subheader from '../../common/Subheader';


const Products_Purchased = () => {
    
    return(
      <>
        <Container fluid className='p-3'>
          <Subheader />
              <Row className="g-3">              
                <div className=" col-lg-12 col-md-12">
                  <div className='mt-3'>
                  <Products_Purchased_Inner />
                  </div>
                </div>
              </Row>
        </Container>
      </>
    );
}
export default Products_Purchased;