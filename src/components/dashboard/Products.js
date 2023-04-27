import * as React from 'react';
import './Dashboard.scss';
import { Container } from 'react-bootstrap';
import Products_Inner from './Products_Inner.js';
import Dashboard_Tab from './Dashboard_Tab.js';

const Products = () => {

  return (
    <>
      <Container fluid className='p-3'>
        <Dashboard_Tab />
        <Products_Inner />
      </Container>
    </>
  );
}

export default Products;