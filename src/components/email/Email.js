import React from 'react';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Email_Inner from './Email_Inner';



const Email = () =>{

return(
    <>
      <Container fluid className='p-3'>
            <Row className="">
                <Email_Inner />
            </Row>
      </Container>
    </>
  );
}

export default Email;