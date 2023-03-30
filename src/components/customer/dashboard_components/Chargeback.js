import * as React from 'react';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Chargeback_Inner from "./Chargeback_Inner";
import Subheader from '../../common/Subheader';


const Chargeback = () => {


  return (
    <>
      <Container fluid className='p-3'>
        <Subheader />
        <Row className="g-3">
          <div className=" col-lg-12 col-md-12">
            <Chargeback_Inner />
          </div>
        </Row>
      </Container>
    </>
  );
}
export default Chargeback;