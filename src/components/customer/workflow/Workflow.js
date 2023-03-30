import * as React from 'react';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Workflow_Inner from "./Workflow_Inner";
import Subheader from '../common/Subheader';


const Workflow = () => {
    
    return(
      <>
        <Container fluid className='p-3'>
          <Subheader />
              <Row className="g-3">              
                <div className=" col-lg-12 col-md-12">
                  <div className='mt-3'>
                  <Workflow_Inner />
                  </div>
                </div>
              </Row>
        </Container>
      </>
    );
}
export default Workflow;