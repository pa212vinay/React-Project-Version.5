import { MdOutlineFileCopy } from "react-icons/md";
import { Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import * as React from 'react';



const Customer = () => {
  return (
    <>
      <div className="">
      <Row className='g-3'>
              <div className='col-md-12 col-lg-12 col-xl-9 col-xxl-9 col-sm-12'>
                <div className='p-3 bg_col mt-3'>
                  <Row>
                    <div className='col-md-12 col-lg-6'>
                      <div className='position-relative '>
                        <div className='font-16'><span className='fw-bold'>Order ID</span> <span className='gray'>22879</span></div>
                        <div className='font-16'><span className='fw-bold'>Order Status:</span> <span className='gray'>Received</span></div>
                        <div className='font-16'><span className='fw-bold'>Payment Status:</span> <span className='gray'>Declined</span></div>
                        <div className='font-16'><span className='fw-bold'>Date:</span> <span className='gray'>08/12/2022 00:00:02</span></div>
                      </div>
                    </div>
                    <div className='col-md-12 col-lg-6'>
                      <div className='position-relative '>
                        <div className='font-16'><span className='fw-bold'>Sale Location:</span> <span className='gray'>INVOICE</span> </div>
                        <div className='font-16'><span className='fw-bold'>Encrypted Order ID:</span> <span className='gray text-break'>SkvjbFc3In20DNoNmFjUGc3WUtUDz09</span><MdOutlineFileCopy className='txt_color' /></div>
                        <div className='font-16'><span className='fw-bold'>Representative:</span> <span className='gray'>Hello  test</span></div>
                      </div>
                    </div>
                  </Row>
                </div>
                <div className='p-3 bg_col mt-3'>
                  <Row>
                    <div>
                      <Table responsive>
                        <thead>
                          <tr>
                            <th>Items</th>
                            <th>QTY</th>
                            <th>Price</th>
                            <th>Total</th>
                            <th>Action</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <p className='mb-0'></p>
                            </td>
                            <td>0</td>
                            <td>$399.00</td>
                            <td>$399.00</td>
                            <td colSpan={2}>
                              <div className='d-flex'>
                                
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className='mb-0'></p>
                            </td>
                            <td>0</td>
                            <td>$399.00</td>
                            <td>$399.00</td>
                            <td colSpan={2}>
                              <div className='d-flex'>
                                
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className=''>Subtotal</td>
                            <td colSpan={2}></td>
                            <td colSpan={3}>$123.00</td>
                          </tr>
                         
                          <tr>
                            <td className='fw-bold'>Total</td>
                            <td colSpan={2}></td>
                            <td className='fw-bold' colSpan={3}>$12.30</td>
                          </tr>
                          <tr>
                            <td>Remaining Balance</td>
                            <td colSpan={2}></td>
                            <td className='fw-bold'colSpan={3}><p>$12.30</p> <button className="btn-hover color-2">Pay Now</button></td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Row>
                </div>
              </div>

              <div className='col-md-12 col-lg-12 col-xl-3 col-xxl-3 col-sm-12'>
                <div className='bg_col mt-3 p-3'>
                  <div className='position-relative '>
                    <h6 className='mb-3 fw-bold'>Corcrm User</h6>
                    <div className='font-16'><span className='fw-bold'>Company:</span> <span className='gray'>Hiecor</span></div>
                    <div className='font-16'><span className='fw-bold'>Address:</span> <span className='gray'>385 Frogtown Rd</span></div>
                    <div className='font-16'><span className='fw-bold'>City:</span> <span className='gray'>Pequea</span></div>
                    <div className='font-16'><span className='fw-bold'>Region:</span> <span className='gray'>PA</span></div>
                    <div className='font-16'><span className='fw-bold'>Postal Code:</span> <span className='gray'>17565</span></div>
                    <div className='font-16'><span className='fw-bold'>Country:</span> <span className='gray'>US</span></div>
                  </div>
                </div>
              </div>
            </Row>
        </div>
    </>
  );
}

export default Customer;