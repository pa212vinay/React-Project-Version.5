import * as React from 'react';
import { Container } from 'react-bootstrap';
import Shipping_Inner from "./Shipping_Inner";


const Shipping = () => {
    
    return(
      <>
        <Container fluid className='p-3'>
                  <Shipping_Inner />
        </Container>
      </>
    );
}
export default Shipping;
