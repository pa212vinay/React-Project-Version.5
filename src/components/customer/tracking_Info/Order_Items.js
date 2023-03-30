import Row from 'react-bootstrap/Row';
import { Table } from 'react-bootstrap';
import { MdOutlineImageNotSupported } from "react-icons/md";


const Order_Items = () => {
  return (
    <>
      <div className='bg_row mt-3 p-4'>
            <Row>
              <h6 className='fw-bold'>Order Items</h6>
              <div>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Items</th>
                      <th></th>
                      <th>QTY</th>
                      <th>Price</th>
                      <th>Total</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><MdOutlineImageNotSupported className='font-20' /></td>
                      <td>menual testing</td>
                      <td>1</td>
                      <td>$399.00</td>
                      <td>$399.00</td>
                      <td>$399.00</td>
                    </tr>
                    <tr>
                      <td><MdOutlineImageNotSupported className='font-20' /></td>
                      <td>menual testing</td>
                      <td>1</td>
                      <td>$399.00</td>
                      <td>$399.00</td>
                      <td>$399.00</td>
                    </tr>
                    <tr>
                      <td><MdOutlineImageNotSupported className='font-20' /></td>
                      <td>menual testing</td>
                      <td>1</td>
                      <td>$399.00</td>
                      <td>$399.00</td>
                      <td>$399.00</td>
                    </tr>
                    <tr>
                      <td><MdOutlineImageNotSupported className='font-20' /></td>
                      <td>menual testing</td>
                      <td>1</td>
                      <td>$399.00</td>
                      <td>$399.00</td>
                      <td>$399.00</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Row>
          </div>
    </>
  );
}
export default Order_Items;