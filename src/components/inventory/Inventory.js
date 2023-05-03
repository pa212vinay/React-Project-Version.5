import React from 'react';
import { Container } from 'react-bootstrap';
import Inventory_Inner from './Inventory_Inner';
import './inventory.scss'

const Inventory = () => {

  return (
    <>
      <Container fluid className='p-3'>
        <Inventory_Inner />
      </Container>
    </>
  );
}

export default Inventory;