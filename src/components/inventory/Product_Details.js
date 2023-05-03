import React from "react";
import { Container } from 'react-bootstrap';
import Product_Details_Inner from "./Product_Details_Inner";


const Product_Details = () => {

  return (
    <>
      <Container fluid className='p-3'>
        <Product_Details_Inner />
      </Container>
    </>
  );
}
export default Product_Details;