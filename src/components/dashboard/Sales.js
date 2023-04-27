import * as React from 'react';
import './Dashboard.scss';
import { Container } from 'react-bootstrap';
import Sales_Inner from './Sales_Inner.js';
import Dashboard_Tab from './Dashboard_Tab.js';

const Sales = () => {

  return (
    <>
      <Container fluid className='p-3'>
        <Dashboard_Tab />
        <Sales_Inner />
      </Container>
    </>
  );
}
export default Sales;