import React, { useState } from 'react';
import { MdOutlineFileCopy } from "react-icons/md";
import { Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const Customer = () => {
  const [Add_tip, set7Show] = useState(false);
  const [show, setShow]=useState(false)
  

  return (
    <>
      <Modal size="md" show={Add_tip} onHide={() => set7Show(false)} aria-labelledby="example-modal-5">
        <div className="px-4">
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-5">
            <h6 className="fw-bold">Tip</h6>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalAmount">
              <Form.Label column sm={6}>
                Tip Amount:
              </Form.Label>
              <Col sm={6}>
                <div className="form-group cus-form-group">
                  <Form.Control placeholder="Amount" className='fill-input my-3' type="numner" />
                  <label htmlFor="shipping" className='float-label'>Amount</label>
                </div>
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalTotal">
              <Form.Label column sm={6}>
                Transaction Total:
              </Form.Label>
              <Col sm={6}><p>$150.00</p></Col>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <div className="float-end mb-2 mt-4">
              <button className="btn-hover color-1 me-2">Close</button>
              <button className="btn-hover color-2 r_mt-2">Process Tip</button>
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
                  <div className='position-relative '>
                    <div className='font-16'><span className='fw-bold'>Order ID</span> <span className='gray'>22879</span></div>
                    <div className='font-16'><span className='fw-bold'>Order Status:</span> <span className='gray'>Received</span></div>
                    <div className='font-16'><span className='fw-bold'>Payment Status:</span> <span className='gray'>AUTH_CAPTURE</span></div>
                    <div className='font-16'><span className='fw-bold'>Date:</span> <span className='gray'>08/12/2022 00:00:02</span></div>
                    <div className='font-16'><span className='fw-bold'>Company:</span> <span className='gray'>a13</span></div>
                  </div>
                </div>
                <div className='col-md-12 col-lg-6'>
                  <div className='position-relative '>
                    <div className='font-16'><span className='fw-bold'>Sale Location:</span> <span className='gray'>INVOICE</span> </div>
                    <div className='font-16'><span className='fw-bold'>Encrypted Order ID:</span> <span className='gray text-break'>SkvjbFc3In20DNoNmFjUGc3WUtUDz09</span><MdOutlineFileCopy className='txt_color' /></div>
                    <div className='font-16'><span className='fw-bold'>Company:</span> <span className='gray'>furniture Gallery</span></div>
                    <div className='font-16'><span className='fw-bold'>PO Number:</span> <span className='gray'>555363662</span></div>
                    <div className='font-16'><span className='fw-bold'>Invoice Tital:</span> <span className='gray'>AH0189</span></div>
                    <div className='font-16'><span className='fw-bold'>Representative:</span> <span className='gray'>Hello  test</span></div>
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
                        <th>Action</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <p className='mb-0'>menual testing</p>
                          <p className='mb-0'>menual testing</p>
                        </td>
                        <td>1</td>
                        <td>$399.00</td>
                        <td>$399.00</td>
                        <td colSpan={2}>
                          <div className='d-flex'>
                            <label className='me-2 ms-1'>
                              <Form.Check className='mb-3 checkbox' name="check" onClick={() => setShow(!show)}/>
                            </label>
                            <p>Refund</p>
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
                        <td className='fw-bold' >$12.30</td>
                        <td className='fw-bold' colSpan={2}>
                          <div>
                            {
                            show?<button class="btn-hover color-2 refund_btn">Refund / Exchange</button>:null
                          }
                            </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Total</td>
                        <td colSpan={2}></td>
                        <td className='fw-bold'>$12.30</td>
                        <td className=''>08/10/2022 00:00:10 </td>
                        <td className='txt_color'><a onClick={() => set7Show(true)} className="cursor text-decoration-none">Add Tip</a></td>
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
                        <td>sourabh</td>
                        <td>Full refund for order 161184 processed successfully.</td>
                      </tr>
                      <tr>
                        <td>08/23/2022 06:42:57</td>
                        <td>sourabh</td>
                        <td>Full refund for order 161184 processed successfully.</td>
                      </tr>
                      <tr>
                        <td>08/23/2022 06:42:57</td>
                        <td>sourabh</td>
                        <td>Full refund for order 161184 processed successfully.</td>
                      </tr>
                      <tr>
                        <td>08/23/2022 06:42:57</td>
                        <td>sourabh</td>
                        <td>Full refund for order 161184 processed successfully.</td>
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

export default Customer;