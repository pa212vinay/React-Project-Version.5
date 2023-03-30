import * as React from 'react';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Contact_Cutomer_Inner from "../customer_contact/Contact_Cutomer_Inner";
import Subheader from '../../common/Subheader';


const Contact_Cutomer = () => {
    return(
      <>
        <Container fluid className='p-3'>
          <Subheader />
              <Row className="g-3">              
                <div className=" col-lg-12 col-md-12">
                  <Contact_Cutomer_Inner />
                </div>
              </Row>
        </Container>
      </>
    );
}
export default Contact_Cutomer;