import * as React from 'react';
import './Dashboard.scss';
import { Container } from 'react-bootstrap';
import Revenue_Category_Inner from './Revenue_Category_Inner.js';
import Dashboard_Tab from './Dashboard_Tab.js';

const Revenue_Category = () => {

  return (
    <>
      <Container fluid className='p-3'>
        <Dashboard_Tab />
        <Revenue_Category_Inner />
      </Container>
    </>
  );
}
export default Revenue_Category;