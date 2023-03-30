import * as React from 'react';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Report_Inner from "./Report_Inner";

const Report = () => {
    
    return(
      <>
        <Container fluid className='p-3'>
        
              <Row className="g-3">              
                <div className=" col-lg-12 col-md-12">
                  <div className=''>
                  <Report_Inner />
                  </div>
                </div>
              </Row>
        </Container>
      </>
    );
}
export default Report;