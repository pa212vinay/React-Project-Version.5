import * as React from 'react';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Trail_Inner from "./Trail_Inner";

const Trail = () => {
    
    return(
      <>
        <Container fluid className='p-3'>
              <Row className="g-3">              
                <div className=" col-lg-12 col-md-12">
                  <div className='mt-3'>
                  <Trail_Inner />
                  </div>
                </div>
              </Row>
        </Container>
      </>
    );
}
export default Trail;
