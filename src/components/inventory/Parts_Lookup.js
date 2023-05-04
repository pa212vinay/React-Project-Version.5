import * as React from 'react';
import { Container } from 'react-bootstrap';
import Parts_Lookup_Inner from "./Parts_Lookup_Inner";


const Parts_Lookup = () => {

  return (
    <>
      <Container fluid className='p-3'>
        <Parts_Lookup_Inner />
      </Container>
    </>
  );
}
export default Parts_Lookup;
