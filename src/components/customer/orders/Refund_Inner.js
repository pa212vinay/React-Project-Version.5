import React, { useState } from 'react';
import { MdOutlineFileCopy } from "react-icons/md";
import { Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';




const Refund_inner = () => {
  const [Add_tip, set7Show] = useState(false);
  const [show, setShow] = useState(false)
  return (
    <>
      <Modal size="md" show={Add_tip} onHide={() => set7Show(false)} aria-labelledby="example-modal-5">
        <div className="px-4">
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-5">
              Tip
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalAmount">
              <Form.Label column sm={6}>
                Tip Amount:
              </Form.Label>
              <Col sm={6}>
                <Form.Control type="numner" placeholder="Amount" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalTotal">
              <Form.Label column sm={6}>
                Transaction Total:
              </Form.Label>
              <Col sm={6}><p>$150.00</p></Col>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>

            <div className="float-end mb-2 mt-4">
              <button className="btn-hover color-1 ">Close</button>
              <button className="btn-hover color-2  W_auto ms-2 r_mt-2">Process Tip</button>
            </div>
          </Modal.Footer>
        </div>
      </Modal>

      <div className="container-fluid px-0">
        <Row className='g-3'>
          <div className='col-md-12 col-lg-12 col-xl-9 col-xxl-9 col-sm-12'>
            <div className='bg_col p-3 mt-3'>
              <Row>
                <div className='col-md-12 col-lg-6'>
                  <div className='position-relative p-2'>
                    <div className='font-16'><span className='fw-bold'>Order ID</span> <span className='gray'>22879</span></div>
                    <div className='font-16'><span className='fw-bold'>Order Status:</span> <span className='gray'>REFUND</span></div>
                    <div className='font-16'><span className='fw-bold'>Payment Status:</span> <span className='gray'>REFUND_PARTIAL</span></div>
                    <div className='font-16'><span className='fw-bold'>Date:</span> <span className='gray'>12/07/2022 21:23:28</span></div>
                  </div>
                </div>
                <div className='col-md-12 col-lg-6'>
                  <div className='position-relative p-2'>
                    <div className='font-16'><span className='fw-bold'>Sale Location:</span> <span className='gray'>POS</span> </div>
                    <div className='font-16'><span className='fw-bold'>Encrypted Order ID:</span> <span className='gray text-break'>cXdCWVZwTGkxYjFnd3doejAzelB6UT09</span><MdOutlineFileCopy className='txt_color' /></div>
                    <div className='font-16'><span className='fw-bold'>Representative:</span> <span className='gray'>Hello test</span></div>
                  </div>
                </div>
              </Row>
            </div>
            <div className='bg_col p-3 mt-3'>
              <Row>
                <div>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Items</th>
                        <th>QTY</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th>Date</th>
                        <th>Action</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          Amana® 24" Stainless Steel<br /> Dishwasher <br />ADB1500ADSadsf9999<br />
                          Model Number: ADB1500ADSadsf9999
                        </td>
                        <td>1</td>
                        <td>$$649.00</td>
                        <td>$$649.00</td>
                        <td>12/07/2022 21:23:01</td>

                        <td colSpan={2}>
                          <div className='d-flex'>
                            <label className='me-2 ms-1'>
                              <Form.Check className='mb-3 checkbox' name="check" onClick={() => setShow(!show)} />
                            </label>
                            <p>Refund</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className=''>Amana® 24" Stainless Steel<br /> Dishwasher <br />ADB1500ADSadsf9999</td>
                        <td >0</td>
                        <td >$0.00</td>
                        <td >-$9.09</td>
                        <td colSpan={3}></td>
                      </tr>
                      <tr>
                        <td className=''>Subtotal</td>
                        <td colSpan={2}></td>
                        <td >$639.91</td>
                        <td colSpan={3}></td>
                      </tr>
                      <tr>
                        <td className=''>Tax</td>
                        <td colSpan={2}></td>
                        <td >$63.99	</td>
                        <td colSpan={3}></td>
                      </tr>
                      <tr>
                        <td className='fw-bold'>Total</td>
                        <td colSpan={2}></td>
                        <td className='fw-bold' >$12.30</td>
                        <td className='fw-bold'>
                          <div>
                            {
                              show ? <button class="btn-hover color-2 refund_btn" >Refund / Exchange</button> : null
                            }
                          </div>
                        </td>
                        <td className='fw-bold' colSpan={3}>
                        </td>
                      </tr>
                      <tr>
                        <td>Paid by Mast-7851</td>
                        <td colSpan={2}></td>
                        <td className='fw-bold'>$713.90</td>
                        <td className='' colSpan={3}>08/10/2022 00:00:10 </td>
                      </tr>
                      <tr>
                        <td>Refunded by Cash</td>
                        <td colSpan={2}></td>
                        <td className='fw-bold'>$10.00</td>
                        <td className='' colSpan={3}>08/10/2022 00:00:10 </td>
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
                        <td>12/07/2022 21:25:24</td>
                        <td>sourabh</td>
                        <td>Partial refund processed successfully.</td>
                      </tr>
                      <tr>
                        <td>12/07/2022 21:25:14</td>
                        <td>sourabh</td>
                        <td>Partial refund failed. Error: ERROR: Can not refund funds for order 6846. Valid "AUTH"/"AUTH_CAPTURE"/"CHECK_VERIFY" transaction was not found.</td>
                      </tr>
                      <tr>
                        <td>12/07/2022 21:23:28</td>
                        <td>sourabh</td>
                        <td>New order processed successfully.</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Row>
            </div>
          </div>
          <div className='col-md-12 col-lg-12 col-xl-3 col-xxl-3 col-sm-12'>
            <div className='bg_col p-3 mt-3'>
              <div className='position-relative ps-2'>
                <h6 className='mb-3 fw-bold'>Moses S & Arianna K Glick</h6>
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

export default Refund_inner;