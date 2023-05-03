import React from 'react';
import { Container } from 'react-bootstrap';
import Email_Inner from './Email_Inner';



const Email = () =>{

return(
    <>
      <Container fluid className='p-3'>
        <Email_Inner />
      </Container>
    </>
  );
}

export default Email;