import * as React from 'react';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import CustomerPickup_Inner from "./CustomerPickup_Inner";
import Subheader from '../../common/Subheader';


const Customer_Pickup = () => {
    
    return(
      <>
        <Container fluid className='p-3'>
          <Subheader />
              <Row className="g-3">              
                <div className=" col-lg-12 col-md-12">
                  <CustomerPickup_Inner />
                </div>
              </Row>
        </Container>
      </>
    );
} 
export default Customer_Pickup;