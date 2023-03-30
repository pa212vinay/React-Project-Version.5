import * as React from 'react';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Subscription_Inner from "./Subscription_Inner";
import Subheader from '../../common/Subheader';


const Subscription = () => {
    

    return(
      <>
        <Container fluid className='p-3'>
          <Subheader />
              <Row className="">              
                <div className=" col-lg-12 col-md-12">
                  <Subscription_Inner />
                </div>
              </Row>
        </Container>
      </>
    );
}
export default Subscription;