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
                        <div className='font-16'><span className='fw-bold'>Order ID</span> <span className='gray'>6773</span></div>
                        <div className='font-16'><span className='fw-bold'>Order Status:</span> <span className='gray'>COMPLETED</span></div>
                        <div className='font-16'><span className='fw-bold'>Payment Status:</span> <span className='gray'>COMPLETED</span></div>
                        <div className='font-16'><span className='fw-bold'>Date:</span> <span className='gray'>08/12/2022 00:00:02</span></div>
                      </div>
                    </div>
                    <div className='col-md-12 col-lg-6'>
                      <div className='position-relative '>
                        <div className='font-16'><span className='fw-bold'>Sale Location:</span> <span className='gray'>PURCHASE ORDER</span> </div>
                        <div className='font-16'><span className='fw-bold'>Encrypted Order ID:</span> <span className='gray text-break'>SkvjbFc3In20DNoNmFjUGc3WUtUDz09</span><MdOutlineFileCopy className='txt_color' /></div>
                        <div className='font-16'><span className='fw-bold'>Company:</span> <span className='gray'>hiecor</span></div>
                        <div className='font-16'><span className='fw-bold'>PO Number:</span> <span className='gray'>6773</span></div>
                        <div className='font-16'><span className='fw-bold'>Representative:</span> <span className='gray'>Hello test</span></div>
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
                              <p className='mb-0'>
                              DINING TABLE 7 PC SET 
                              <br/>PL275
                              PL-275PL<br/>
                              Location : Warehouse</p>
                            </td>
                            <td>1</td>
                            <td>$30.00</td>
                            <td>$30.00</td>
                            <td> Accepted 1</td>
                            <td>08/23/2022 06:42:57</td>
                          </tr>
                          <tr>
                            <td>
                              <p className='mb-0'>
                              DINING TABLE 7 PC SET 
                              <br/>PL275
                              PL-275PL<br/>
                              Location : Warehouse</p>
                            </td>
                            <td>1</td>
                            <td>$30.00</td>
                            <td>$30.00</td>
                            <td> Accepted 1</td>
                            <td>08/23/2022 06:42:57</td>
                          </tr>
                          <tr>
                            <td>
                              <p className='mb-0'>
                              DINING TABLE 7 PC SET 
                              <br/>PL275
                              PL-275PL<br/>
                              Location : Warehouse</p>
                            </td>
                            <td>1</td>
                            <td>$30.00</td>
                            <td>$30.00</td>
                            <td> Accepted 1</td>
                            <td>08/23/2022 06:42:57</td>
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
                        </tbody>
                      </Table>
                    </div>
                  </Row>
                </div>
                <div className='bg_col p-3 mt-3'>
                  <h6 class="fw-bold">Note</h6>
                  <Row>
                    <div>
                      <Table responsive>
                        <thead>
                          <tr>
                            <th>Date/Time</th>
                            <th>Logged By</th>
                            <th>Note</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>08/23/2022 06:42:57</td>
                            <td>Hello test</td>
                            <td>New purchase order 6773 processed successfully.</td>
                          </tr>
                         
                        </tbody>
                      </Table>
                    </div>
                  </Row>
                </div>
              </div>

             

              <div className='col-md-12 col-lg-12 col-xl-3 col-xxl-3 col-sm-12'>
              <button className="btn-hover color-2 w-100 mt-3">Edit</button>
              <button className="btn-hover color-2 w-100 mt-3">Print Labels</button>
              <button className="btn-hover color-2 w-100 mt-3">Print Full Receipt</button>
                <div className='bg_col mt-3 p-3'>
                  <div className=''>
                  
                    <div className='font-16'><span className='fw-bold'>Company:</span> <span className='gray'>Hiecor</span></div>
                  </div>
                </div>
              </div>
            </Row>
        </div>
    </>
  );
}

export default Customer;