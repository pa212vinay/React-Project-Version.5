import * as React from 'react';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Parts_Lookup_Inner from "./Parts_Lookup_Inner";


const Parts_Lookup = () => {
    
    return(
      <>
        <Container fluid className='p-3'>
              <Row className="g-3">              
                <div className=" col-lg-12 col-md-12">
                  <div className='mt-3'>
                  <Parts_Lookup_Inner />
                  </div>
                </div>
              </Row>
        </Container>
      </>
    );
}
export default Parts_Lookup;
