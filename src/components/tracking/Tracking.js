import * as React from 'react';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Tracking_Ad from './Tracking_Ad';



const Tracking = () => {

  return (
    <>
      <Container fluid className='p-3'>

        <Row className="g-3">
          <div className=" col-lg-12 col-md-12">
            <div className='bg_col p-3'>
              <Tracking_Ad />
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}
export default Tracking;