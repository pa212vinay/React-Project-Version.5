import * as React from 'react';
import Row from 'react-bootstrap/Row';
import OrdersTab from "../orders/OrdersTab";
import Subheader from '../../common/Subheader';
import Customer_Nav from '../Customer_Nav';
import Transaction_Inner from '../orders_details/Transaction_Inner';

const Transaction = () => {
    

    return( 
      <>
        <div className='contianer-fluid p-3'>
        <Subheader />
            <Row className="g-3">
              <div className="col-lg-12 col-xl-3 col-md-12">
              <OrdersTab />
              </div>
              <div className=" col-lg-12 col-xl-9 col-md-12">
                <div className='bg_col mt-3 p-3 pt-0'>
                <Customer_Nav />
                <Transaction_Inner/>
                </div>
              </div>
            </Row>
        </div>
      </>
    );
}
export default Transaction;