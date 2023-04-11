import * as React from 'react';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Ad_Tracking_Inner from './Ad_Tracking_Inner';


const Tracking = () => {

  return (
    <>
      <Container fluid className='p-3'>

        <Row className="g-3">
          <div className=" col-lg-12 col-md-12">
            <div className=''>
              <Ad_Tracking_Inner />
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}
export default Tracking;