import * as React from 'react';
import { Container } from 'react-bootstrap';
import Supplier_Inner from "./Supplier_Inner";


const Supplier = () => {
    
    return(
      <>
        <Container fluid className='p-3'>
                  <Supplier_Inner />
        </Container>
      </>
    );
}
export default Supplier;
