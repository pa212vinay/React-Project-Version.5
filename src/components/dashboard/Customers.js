import * as React from 'react';
import './Dashboard.scss';
import { Container } from 'react-bootstrap';
import Customers_Inner from './Customers_Inner.js';
import Dashboard_Tab from './Dashboard_Tab.js';

const Customers = () => {

  return (
    <>
      <Container fluid className='p-3'>
        <Dashboard_Tab />
        <Customers_Inner />
      </Container>
    </>
  );
}

export default Customers;