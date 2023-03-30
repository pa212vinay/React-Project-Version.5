import * as React from 'react';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Pending_Inner from "../orders/Pending_Inner";
import OrdersTab from "./OrdersTab";
import Subheader from '../../common/Subheader';
import Customer_Nav from '../../customer/Customer_Nav';

const Customer = () => {
    

    return(
      <>
        <Container fluid className='p-3'>
          <Subheader />
              <Row className="g-3">
                <div className="col-lg-12 col-md-12 col-xl-3 col-xxl-3 col-sm-12">
                <OrdersTab />
                </div>
                <div className="col-lg-12 col-md-12 col-xl-9 col-xxl-9 col-sm-12">
                <div className='bg_col px-3 pb-3 pt-0 mt-3'>
                  <Customer_Nav />
                  <Pending_Inner />
                  </div>
                </div>
              </Row>
        </Container>
      </>
    );
}
export default Customer;