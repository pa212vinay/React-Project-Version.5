import React from 'react';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Social_Comment from './Social_Comment';



const Social = () =>{

return(
    <>
      <Container fluid className='p-3'>
            <Row className="">
                <Social_Comment />
            </Row>
      </Container>
    </>
  );
}

export default Social;