import * as React from 'react';
import './Dashboard.scss';
import { Container } from 'react-bootstrap';
import Revenue_Channels_Inner from './Revenue_Channels_Inner.js';
import Dashboard_Tab from './Dashboard_Tab.js';

const Revenue_Channels = () => {

  return (
    <>
      <Container fluid className='p-3'>
        <Dashboard_Tab />
        <Revenue_Channels_Inner />
      </Container>
    </>
  );
}
export default Revenue_Channels;