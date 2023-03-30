
// import '../Stylesheet/Update_invoice.scss';
import { Row, Form } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
// import { MdOutlineImageNotSupported } from "react-icons/md";
import * as React from 'react';

const Transaction_inner = () => {

  return (

      <div className='bg_row mt-3 p-3'>
        <Row>
          <div>
            <Table responsive>
              <thead>
                <tr>
                <th><Form.Check inline name="group1" /></th>
                  <th>Txn ID</th>
                  <th>Order ID</th>
                  <th>Approval</th>
                  <th>Pyment Type</th>
                  <th>Amount</th>
                  <th>Card Type</th>
                  <th>Merchant Txn ID</th>
                  <th>Date</th>
                  <th>Auth Code</th>
                  <th>Acthion</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><Form.Check inline name="group1" /></td>
                  <td>menual testing</td>
                  <td>1</td>
                  <td>$399.00</td>
                  <td>$399.00</td>
                  <td>$399.00</td>
                  <td>$399.00</td>
                  <td>$399.00</td>
                  <td>$399.00</td>
                  <td>$399.00</td>
                  <td>$399.00</td>
                </tr>
                <tr>
                  <td><Form.Check inline name="group1" /></td>
                  <td>menual testing</td>
                  <td>1</td>
                  <td>$399.00</td>
                  <td>$399.00</td>
                  <td>$399.00</td>
                  <td>$399.00</td>
                  <td>$399.00</td>
                  <td>$399.00</td>
                  <td>$399.00</td>
                  <td>$399.00</td>
                </tr>
                <tr>
                  <td><Form.Check inline name="group1" /></td>
                  <td>menual testing</td>
                  <td>1</td>
                  <td>$399.00</td>
                  <td>$399.00</td>
                  <td>$399.00</td>
                  <td>$399.00</td>
                  <td>$399.00</td>
                  <td>$399.00</td>
                  <td>$399.00</td>
                  <td>$399.00</td>
                </tr>
                <tr>
                  <td><Form.Check inline name="group1" /></td>
                  <td>menual testing</td>
                  <td>1</td>
                  <td>$399.00</td>
                  <td>$399.00</td>
                  <td>$399.00</td>
                  <td>$399.00</td>
                  <td>$399.00</td>
                  <td>$399.00</td>
                  <td>$399.00</td>
                  <td>$399.00</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Row>
      </div>
  );
}

export default Transaction_inner;