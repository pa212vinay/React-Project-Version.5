import * as React from 'react';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Log_Inner from "./Log_Inner";
import Subheader from '../common/Subheader';


const Log = () => {
    
    return(
      <>
        <Container fluid className='p-3'>
          
          <Subheader />
              <Row className="g-3">              
                <div className=" col-lg-12 col-md-12">
                  <div className='mt-3'>
                  <Log_Inner />
                  </div>
                </div>
              </Row>
        </Container>
      </>
    );
}
export default Log;
