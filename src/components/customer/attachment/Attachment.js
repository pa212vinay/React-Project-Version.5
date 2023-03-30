import * as React from 'react';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Attachment_Inner from "./Attachment_Inner";
import Subheader from '../../common/Subheader';


const Attachment = () => {
    

    return(
      <>
        <Container fluid className='p-3'>
          <Subheader />
              <Row className="g-3">              
                <div className=" col-lg-12 col-md-12">
                  <Attachment_Inner />
                </div>
              </Row>
        </Container>
      </>
    );
}
export default Attachment;