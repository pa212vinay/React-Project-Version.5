import * as React from 'react';
import { Container } from 'react-bootstrap';
import Log_Inner from "./Log_Inner";


const Log = () => {

  return (
    <>
      <Container fluid className='p-3'>
        <Log_Inner />
      </Container>
    </>
  );
}
export default Log;
