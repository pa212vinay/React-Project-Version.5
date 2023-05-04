import * as React from 'react';
import { Container } from 'react-bootstrap';
import Trail_Inner from "./Trail_Inner";

const Trail = () => {

  return (
    <>
      <Container fluid className='p-3'>
        <Trail_Inner />
      </Container>
    </>
  );
}
export default Trail;