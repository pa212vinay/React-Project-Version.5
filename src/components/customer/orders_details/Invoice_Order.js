import { Row, Table, Form, Accordion} from 'react-bootstrap';
import { useState, useRef } from 'react';
import * as React from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { IoMdRefreshCircle } from "react-icons/io";
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import { Link } from 'react-router-dom';
import { MdOutlineFileCopy } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

const Ordersection = () => {
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState(true);

  const [show, setShow] = useState(false);

  let sigPad = React.useRef({});
  function clear() {
    sigPad.current.clear();
  }

  const target = useRef(null);

  return (
    <>
      <div className=''>
        <div className='bg_row mt-3 p-3'>
          <Row>
            <div><h6 className='txt_color fw-bold'>INVOICE DETAILS</h6></div>
            <div className='col-lg-4 col-md-6 col-xl-4 '>
              <div className='position-relative'>
                <h6 className='mt-3 mb-0 fw-bold'>Address</h6>
                <span className='gray '>Shceme No. 54</span>
                <h6 className='my-3 fw-bold'>Customer information</h6>
                <div className=''><span className='fw-bold gray'>First Name:</span> <span className='gray'>Johne</span></div>
                <div className=''><span className='fw-bold gray'>Last Name:</span> <span className='gray'>Duo</span></div>
                <div className=''><span className='fw-bold gray'>Email:</span> <span className='gray'>Johneduo@gmail.com</span></div>
                <div className=''><span className='fw-bold gray'>Phone:</span> <span className='gray'>55755424423</span></div>
                <div className=''><span className='fw-bold gray'>Company:</span> <span className='gray'>a13</span></div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-xl-4 '>
              <div className='position-relative'>
                <h6 className='my-3 fw-bold'>Invoice</h6>
                <div className=''><span className='fw-bold gray'>Invoice Number:</span> <span className='gray'>19263</span> <MdOutlineFileCopy className='txt_color' /></div>
                <div className=''><span className='fw-bold gray'>Invoice Date:</span> <span className='gray'>08/12/2022</span></div>
                <div className=''><span className='fw-bold gray'>Payment Terms:</span> <span className='gray'>Accept Terms</span></div>
                <div className=''><span className='fw-bold gray'>Due Date:</span> <span className='gray'>08/12/2022</span></div>
                <div className=''><span className='fw-bold gray'>Invoice Status:</span> <span className='gray'>Open</span></div>
                <div className=''><span className='fw-bold gray'>Order Status:</span> <span className='gray'>Received</span></div>
                <div className=''><span className='fw-bold gray'>Rep:</span> <span className='gray'>Ishwer devloper</span></div>
              </div>
            </div>
            <div className='col-lg-4 col-md-12 col-xl-4 my-auto'>
              <div className='position-relative  '>
                <div className='txt_balence'>
                Balance Due <br /> $135.30
                </div>
              </div>
            </div>
          </Row>
        </div>

        <div className='bg_row mt-3 p-3'>
          <Row>
            <div className=' mb-3'><span className='txt_color font-16 fw-bold'>Bill to:</span> <span className='gray'>james@gmail.com</span></div>
            <div>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Discription</th>
                    <th>Product code</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p className='mb-0'>ADFRTYE31</p>
                      <p className='mb-0'>testttt</p>
                      <p className='mb-0'><span className='txt_color'>Location:</span> <span className='gray'>ankit_testing</span></p>
                    </td>
                    <td>ADFRTYE31</td>
                    <td>1</td>
                    <td>$123.00</td>
                    <td>$123.00</td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <Link to="/Adjust_product" target='_blank'>
                        <button className='btn-hover color-3 w_auto'>
                          Adjust Product
                        </button>
                      </Link>
                    </td>
                    <td className='fw-bold'>Subtotal</td>
                    <td className='fw-bold'>$123.00</td>
                  </tr>
                  <tr>
                    <td colSpan={2}></td>
                    <td className='txt_color'>
                      <span className='cursor' ref={target} onClick={() => setShow(!show)}>Apply Coupon</span>
                      <Overlay target={target.current} show={show} placement="top">
                        {(props) => (
                          <Tooltip id="overlay-example" {...props} className="tooltip_Tab " >
                            <div className='p-3'>
                              <h5 className='text-start text-black'>Please Enter Coupan</h5>
                              <div className="form-group cus-form-group">
                                <Form.Control placeholder="Enter Coupan" className='fill-input' />
                                <label htmlFor="shipping" className='float-label'>Enter Coupan</label>
                              </div>
                              <div className="mt-3">
                                <button className="btn-hover color-1 me-2">Close</button>
                                <button className="btn-hover color-2 r_mt-1">Apply</button>
                              </div>
                            </div>
                          </Tooltip>
                        )}
                      </Overlay>

                    </td>
                    <td>Tax</td>
                    <td>$12.30</td>
                  </tr>
                  <tr>
                    <td colSpan={3}></td>

                    <td>Total</td>
                    <td>$135.30</td>
                  </tr>
                  <tr>
                    <td colSpan={3}></td>
                    <td className='fw-bold'>Balance Due</td>
                    <td className='fw-bold'>$135.30</td>
                  </tr>
                </tbody>
              </Table>
              <div >
                <Form className=''>

                  <div className="float-end">
                    {['radio'].map((type) => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check inline label="Pay Full Amount" name="group1" type={type} id={`inline-${type}-1`} onClick={() => setVisible(false)} />
                        <Form.Check inline label="Pay Partial" name="group1" type={type} id={`inline-${type}-2`} onClick={() => setVisible(true)} />
                        {visible &&
                          <input type="text" placeholder='Enter Code' className='input_code' />
                        }
                      </div>
                    ))}
                  </div>
                </Form>
              </div>
            </div>
          </Row>
        </div>


        <Row className='g-3'>
          <div className='col-md-12 col-lg-6'>
            <div className='bg_row mt-3 p-3'>
              <h6 className='txt_color fw-bold mb-3'>BILLING ADDRESS</h6>
              <Row className='g-3'>
                <div className="col-sm-12">
                  <div className="form-group cus-form-group">
                    <Form.Control placeholder="Address" className='fill-input' />
                    <label htmlFor="shipping" className='float-label'>Address</label>
                  </div>
                </div>

                <div className="col-sm-12">
                  <div className="form-group cus-form-group">
                    <Form.Control placeholder="Address 2" className='fill-input' />
                    <label htmlFor="shipping" className='float-label'>Address 2</label>
                  </div>
                </div>

                <div className="col-md-6 col-sm-12">
                  <div className="form-group cus-form-group">
                    <Form.Control placeholder="City" className='fill-input' />
                    <label htmlFor="shipping" className='float-label'>City</label>
                  </div>
                </div>

                <div className="col-md-6 col-sm-12">
                  <div className="form-group cus-select-group">
                    <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                      <option>Select State</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Control>
                    <label className='float-label' htmlFor="require_shipping">Select State</label>
                    <IoMdArrowDropdown className='inputIcon' />
                  </div>
                </div>

                <div className="col-md-6 col-sm-12">
                  <div className="form-group cus-form-group">
                    <Form.Control placeholder="Zip" className='fill-input' />
                    <label htmlFor="shipping" className='float-label'>Zip</label>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="form-group cus-select-group">
                    <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                      <option>Select Country</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Control>
                    <label className='float-label' htmlFor="require_shipping">Select Country</label>
                    <IoMdArrowDropdown className='inputIcon' />
                  </div>
                </div>
              </Row>
              <div className="mt-3">
                <Form.Check className='mb-3' inline label="Shipping same as billing" name="check" onClick={() => setStatus(!status)} />
                {
                  status ? <div>
                    <Row className="g-3">
                      <div className="col-sm-12">
                        <div className="form-group cus-form-group">
                          <Form.Control placeholder="First name" className='fill-input' />
                          <label htmlFor="shipping" className='float-label'>First name</label>
                        </div>
                      </div>

                      <div className="col-sm-12">
                        <div className="form-group cus-form-group">
                          <Form.Control placeholder="Last name" className='fill-input' />
                          <label htmlFor="shipping" className='float-label'>Last name</label>
                        </div>
                      </div>

                      <div className="col-sm-12">
                        <div className="form-group cus-form-group">
                          <Form.Control placeholder="Shiping Address" className='fill-input' />
                          <label htmlFor="shipping" className='float-label'>Shiping Address</label>
                        </div>
                      </div>

                      <div className="col-sm-12">
                        <div className="form-group cus-form-group">
                          <Form.Control placeholder="Shiping Address 2" className='fill-input' />
                          <label htmlFor="shipping" className='float-label'>Shiping Address 2</label>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <div className="form-group cus-form-group">
                          <Form.Control placeholder="City" className='fill-input' />
                          <label htmlFor="shipping" className='float-label'>City</label>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Select State</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Select State</label>
                          <IoMdArrowDropdown className='inputIcon' />
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-12">
                        <div className="form-group cus-form-group">
                          <Form.Control placeholder="Zip" className='fill-input' />
                          <label htmlFor="shipping" className='float-label'>Zip</label>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Select Country</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Select Country</label>
                          <IoMdArrowDropdown className='inputIcon' />
                        </div>
                      </div>
                    </Row>
                  </div> : null
                }
              </div>
            </div>
          </div>
          
          <div className='col-md-12 col-lg-6'>
            <div className='bg_row mt-3 p-3'>
              <h6 className='txt_color fw-bold mb-3'>PAYMENT DETAIL</h6>
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="font-14">Credit, Debit, or ATM Card</Accordion.Header>
                  <Accordion.Body>
                    <Row className="g-3">
                      <div className="col-md-12 col-sm-12">
                        <div className="form-group cus-form-group">
                          <Form.Control placeholder="Card Number" className='fill-input' />
                          <label htmlFor="shipping" className='float-label'>Card Number</label>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-12 ">
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Year</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Year</label>
                          <IoMdArrowDropdown className='inputIcon' />
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-12 ">
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Month</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Month</label>
                          <IoMdArrowDropdown className='inputIcon' />
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-12 ">
                        <div className="form-group cus-form-group">
                          <Form.Control placeholder="CVV" className='fill-input' />
                          <label htmlFor="shipping" className='float-label'>CVV</label>
                        </div>
                      </div>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Checking Account</Accordion.Header>
                  <Accordion.Body>
                    <Row className="g-3">
                      <div className="col-md-12">
                        <div className="form-group cus-form-group">
                          <Form.Control placeholder="Account Number" className='fill-input' />
                          <label htmlFor="shipping" className='float-label'>Account Number</label>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group cus-form-group">
                          <Form.Control placeholder="Routing Number" className='fill-input' />
                          <label htmlFor="shipping" className='float-label'>Routing Number</label>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Select Check Type</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Select Check Type</label>
                          <IoMdArrowDropdown className='inputIcon' />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Select SEC Code</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Select SEC Code</label>
                          <IoMdArrowDropdown className='inputIcon' />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Select Account Type</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Select Account Type</label>
                          <IoMdArrowDropdown className='inputIcon' />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group cus-form-group">
                          <Form.Control placeholder="DL Number" className='fill-input' />
                          <label htmlFor="shipping" className='float-label'>DL Number</label>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Select DL State</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Select DL State</label>
                          <IoMdArrowDropdown className='inputIcon' />
                        </div>
                      </div>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>External Payment</Accordion.Header>
                  <Accordion.Body>
                    <Row className="g-3">
                      <div className="col-md-12">
                        <div className="form-group cus-form-group">
                          <Form.Control placeholder="Amount" className='fill-input' />
                          <label htmlFor="shipping" className='float-label'>Amount</label>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group cus-form-group">
                          <Form.Control placeholder="Approval Number" className='fill-input' />
                          <label htmlFor="shipping" className='float-label'>Approval Number</label>
                        </div>
                      </div>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header> Heartland Gift Card</Accordion.Header>
                  <Accordion.Body>
                    <Row className="g-3">
                      <div className="col-md-12">
                        <div className="form-group cus-form-group">
                          <Form.Control placeholder="Amount" className='fill-input' />
                          <label htmlFor="shipping" className='float-label'>Amount</label>
                        </div>
                      </div>
                      <div className="col-md-12">
                      <div className="form-group cus-form-group">
                          <Form.Control placeholder="Approval Number" className='fill-input' />
                          <label htmlFor="shipping" className='float-label'>Approval Number</label>
                        </div>
                        <button className="btn-hover color-2 w-auto py-2 px-4 text-center mt-3">Get Balance</button>
                      </div>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>Cash</Accordion.Header>
                  <Accordion.Body>
                    <div className="form-group cus-form-group">
                      <Form.Control placeholder="Amount" className='fill-input' />
                      <label htmlFor="shipping" className='float-label'>Amount</label>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>Check</Accordion.Header>
                  <Accordion.Body>
                    <Row className="g-3">
                      <div className="col-md-12">
                        <div className="form-group cus-form-group">
                          <Form.Control placeholder="Amount" className='fill-input' />
                          <label htmlFor="shipping" className='float-label'>Amount</label>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group cus-form-group">
                          <Form.Control placeholder="Card Number" className='fill-input' />
                          <label htmlFor="shipping" className='float-label'>Card Number</label>
                        </div>
                      </div>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header> Gift Card</Accordion.Header>
                  <Accordion.Body>
                    <div className="form-group cus-form-group">
                      <Form.Control placeholder="Gift Card Number" className='fill-input' />
                      <label htmlFor="shipping" className='float-label'>Gift Card Number</label>
                    </div>
                    <button className="btn-hover color-2 w-auto py-2 px-4 text-center mt-3">Get Balance</button>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Row className='g-3  mt-2'>
                <h6 className='txt_color fw-bold mb-0'>SHIPPING METHOD</h6>
                <div className='col-md-12 col-lg-12'>
                  <div className="form-group cus-select-group">
                    <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                      <option>Active</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Control>
                    <label className='float-label' htmlFor="require_shipping">Active</label>
                    <IoMdArrowDropdown className='inputIcon' />
                  </div>
                </div>
                <div className='col-md-12 col-lg-12'>
                  <div className="form-group cus-select-group">
                    <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                      <option>Select Service</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Control>
                    <label className='float-label' htmlFor="require_shipping">Select Service</label>
                    <IoMdArrowDropdown className='inputIcon' />
                  </div>
                </div>
              </Row>
            </div>
          </div>
        </Row>

        <Row>
          <div className='col-md-12'>
            <div className='d-flex mt-3'>
              <label className='me-2 ms-1'>
                <Form.Check className='mb-4 checkbox' name="check" />
              </label>
              <p className='paddingTRB'>Terms and Conditions: Customer agrees to pay the installment payments as set forth above. This agreement shall remain in effect for a period of up to 12 months, as noted. The parties agree that this agreement has no "opt-outs" and the customer shall be charged the full monthly fee even if he or she does not attend the services provided. If the customer fails to pay for the services when due, COACH has the option to treat such failure to pay as a material breach of the agreement and may cancel this agreement and/or seek legal remedies.</p>
            </div>
          </div>
        </Row>
        <Row>
          <div className='col-md-12'>
            <div className='signCan mx-2'>
              <SignatureCanvas penColor='green'
                canvasProps={{ className: 'sigCanvas' }} ref={sigPad} />
              <span>Please sign on above box</span>
              <IoMdRefreshCircle className='clearsig float-end cursor fw-bold text-color font-30' onClick={clear} />
            </div>
          </div>
        </Row>
        <Row>
          <div className='col-md-12'>
            <div className='usercoment mx-2 rounded mt-5'>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <div className="form-group cus-form-group">
                  <Form.Control placeholder="User Comments" className='fill-input' as="textarea" rows={6} />
                  <label htmlFor="shipping" className='float-label'>User Comments</label>
                </div>
                <Form.Label className='mt-2'>Check the Invoice Properly</Form.Label>
                <div className='float-end mt-5'>
                  <button className="btn-hover color-3 mt-2 me-2 r_w-100 r_ms-0">Copy link</button>
                  <button className="btn-hover color-3 me-2 mt-2 r_w-100 r_ms-0">Send Invoice</button>
                  <button className="btn-hover color-2 me-2 mt-2 r_w-100 r_ms-0">Validate Address</button>
                  <button className="btn-hover color-2 me-2 mt-2 r_w-100 r_ms-0">Save invoice</button>
                  <button className="btn-hover color-2  mt-2 r_w-100 r_ms-0">Process payment</button>
                </div>
              </Form.Group>
            </div>
          </div>
        </Row>
      </div>
    </>
  );
}
export default Ordersection;