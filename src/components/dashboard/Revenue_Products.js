import * as React from 'react';
import './Dashboard.scss';
import { Container } from 'react-bootstrap';
import Revenue_Products_Inner from './Revenue_Products_Inner.js';
import Dashboard_Tab from './Dashboard_Tab.js';

const Revenue_Products = () => {

  return (
    <>
      <Container fluid className='p-3'>
        <Dashboard_Tab />
        <Revenue_Products_Inner />
      </Container>
    </>
  );
}
export default Revenue_Products;