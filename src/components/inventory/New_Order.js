import * as React from 'react';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import New_order_Inner from "./New_order_Inner";


const New_Order = () => {
    
    return(
      <>
        <Container fluid className='p-3'>
              <Row className="g-3">              
                <div className=" col-lg-12 col-md-12">
                  <div className=''>
                  <New_order_Inner />
                  </div>
                </div>
              </Row>
        </Container>
      </>
    );
}
export default New_Order;
