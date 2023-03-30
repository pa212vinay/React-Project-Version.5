import React from 'react';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Fulfillment_Inner from './Fulfillment_inner';



const Fulfillment = () =>{

return(
    <>
      <Container fluid className='p-3'>
            <Row className="">
                <Fulfillment_Inner />
            </Row>
      </Container>
    </>
  );
}

export default Fulfillment;