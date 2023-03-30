import React from 'react';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Inventory_Inner from './Inventory_Inner';



const Inventory = () =>{

return(
    <>
      <Container fluid className='p-3'>
            <Row className="">
                <Inventory_Inner />
            </Row>
      </Container>
    </>
  );
}

export default Inventory;