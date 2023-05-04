import * as React from 'react';
import { Container } from 'react-bootstrap';
import New_order_Inner from "./New_order_Inner";

const New_Order = () => {

  return (
    <>
      <Container fluid className='p-3'>
        <New_order_Inner />
      </Container>
    </>
  );
}
export default New_Order;
