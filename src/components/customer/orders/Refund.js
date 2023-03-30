import * as React from 'react';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Refund_Inner from "../orders/Refund_Inner";
import OrdersTab from "./OrdersTab";
import Subheader from '../../common/Subheader';
import Customer_Nav from '../Customer_Nav';

const Refund = () => {
    

    return(
      <>
        <Container fluid className='p-3'>
          <Subheader />
              <Row className="g-3">
                <div className="col-lg-12 col-md-12 col-xl-3 col-xxl-3 col-sm-12">
                <OrdersTab />
                </div>
                <div className=" col-lg-12 col-md-12 col-xl-9 col-xxl-9 col-sm-12">
                <div className='bg_col px-3 pb-3 pt-0 mt-3'>
                  <Customer_Nav />
                  <Refund_Inner />
                  </div>
                </div>
              </Row>
        </Container>
      </>
    );
}
export default Refund;