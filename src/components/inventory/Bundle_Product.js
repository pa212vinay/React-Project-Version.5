import * as React from 'react';
import { Container } from 'react-bootstrap';
import Bundle_Product_Inner from "./Bundle_Product_Inner";



const Bundle_Product = () => {

  return (
    <>
      <Container fluid className='p-3'>
        <Bundle_Product_Inner />
      </Container>
    </>
  );
}
export default Bundle_Product;