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
                <div className=" col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <Subscription_Inner />
                </div>
              </Row>
        </Container>
      </>
    );
}
export default Subscription;