import Form from 'react-bootstrap/Form';
import { Container, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import "react-datepicker/dist/react-datepicker.css";
import { ImAttachment } from "react-icons/im";
import SignatureCanvas from 'react-signature-canvas';
import { IoMdRefreshCircle } from "react-icons/io";
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import { IoIosPricetags } from "react-icons/io";
import { BsUpcScan } from "react-icons/bs";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { IoMdArrowDropdown } from "react-icons/io";


const Create_order = () => {
    const [date, setDate] = useState(new Date());
    const [status, setStatus] = useState(true);
    const [pay, setpay] = useState(false);

    let sigPad = React.useRef({});
    function clear() {
        sigPad.current.clear();
    }

    const [show, setshow] = useState(false);
    const target = useRef(null);

    const [key, setKey] = useState('home');
    return (

        <div className='container create_invoice'>
            <div className='bg_col p-3'>
                <div className='bg_color_blue p-2'>
                    <Container>
                        <Form.Group as={Row} className="" controlId="formPlaintextupdate">
                            <Form.Label column sm="2">
                                <span className='text-white'>CREATE INVOICE</span>
                            </Form.Label>
                            <div className='col-md-3 col-sm-12' >
                                <div className="form-group cus-select-group">
                                    <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                        <option>Select State</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Control>
                                    <label className='float-label' htmlFor="require_shipping"></label>
                                    <IoMdArrowDropdown className='inputIcon' />
                                </div>
                            </div>
                        </Form.Group>
                    </Container>

                </div>
                <Container >
                    <div className='mt-4'>
                        <Row className='g-3'>
                            <div className="col-sm-6">
                                <div className="form-group cus-form-group">
                                    <Form.Control placeholder="Address" className='fill-input' />
                                    <label htmlFor="shipping" className='float-label'>Address</label>
                                </div>
                            </div>
                            <div className="col-sm-6">
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
                            <div className="col-sm-6">
                                <div className="form-group cus-form-group">
                                    <Form.Control className='fill-input' type="date" name="datepic" placeholder="DateRange" value={date} onChange={(e) => setDate(e.target.value)} />
                                    <label htmlFor="shipping" className='float-label'>DateRange</label>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group cus-form-group">
                                    <Form.Control className='fill-input' type="date" name="datepic" placeholder="DateRange" value={date} onChange={(e) => setDate(e.target.value)} />
                                    <label htmlFor="shipping" className='float-label'>DateRange</label>
                                </div>
                            </div>
                            <div className="col-sm-6">

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
                        </Row>

                        <hr className='my-4'></hr>
                        <div className='bg_color_lightblue p-2'>
                            <Form.Group as={Row} className="" controlId="formPlaintextPassword">
                                <Form.Label column sm="2">
                                    <span className='fw-bold'>INVOICE TITLE</span>
                                </Form.Label>
                                <div className='col-md-3 col-sm-12' >
                                    <Form.Control placeholder="Serarch Product" />
                                </div>
                            </Form.Group>
                        </div>

                        <Row className='g-3'>
                            <h6 className='fw-bold pt-4'>Customer Details</h6>
                            <div className="col-sm-4">
                                <div className="form-group cus-form-group">
                                    <Form.Control placeholder="Email" className='fill-input' />
                                    <label htmlFor="shipping" className='float-label'>Email</label>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group cus-form-group">
                                    <Form.Control placeholder="First Name" className='fill-input' />
                                    <label htmlFor="shipping" className='float-label'>First Name</label>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group cus-form-group">
                                    <Form.Control placeholder="Last Name" className='fill-input' />
                                    <label htmlFor="shipping" className='float-label'>Last Name</label>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group cus-form-group">
                                    <Form.Control placeholder="BCC Email" className='fill-input' />
                                    <label htmlFor="shipping" className='float-label'>BCC Email</label>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group cus-form-group">
                                    <Form.Control placeholder="Phone" className='fill-input' />
                                    <label htmlFor="shipping" className='float-label'>Phone</label>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group cus-form-group">
                                    <Form.Control placeholder="Campany" className='fill-input' />
                                    <label htmlFor="shipping" className='float-label'>Campany</label>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group cus-form-group">
                                    <Form.Control placeholder="AVB ID" className='fill-input' />
                                    <label htmlFor="shipping" className='float-label'>AVB ID</label>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group cus-form-group">
                                    <Form.Control placeholder="Additional Phone" className='fill-input' />
                                    <label htmlFor="shipping" className='float-label'>Additional Phone</label>
                                </div>
                            </div>
                        </Row>

                        <hr className='my-4'></hr>

                        <Row className='g-3'>
                            <h6 className='fw-bold'>Billing Address</h6>

                            <Form.Check className='ms-3 mt-3' inline label="Shipping same as billing" name="check" onClick={() => setStatus(!status)} />

                            <div className="col-sm-4">
                                <div className="form-group cus-form-group">
                                    <Form.Control placeholder="Address" className='fill-input' />
                                    <label htmlFor="shipping" className='float-label'>Address</label>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group cus-form-group">
                                    <Form.Control placeholder="Address 2" className='fill-input' />
                                    <label htmlFor="shipping" className='float-label'>Address 2</label>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group cus-form-group">
                                    <Form.Control placeholder="City" className='fill-input' />
                                    <label htmlFor="shipping" className='float-label'>City</label>
                                </div>
                            </div>
                            <div className="col-sm-4">
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
                            <div className="col-sm-4">
                                <div className="form-group cus-form-group">
                                    <Form.Control placeholder="Zip" className='fill-input' />
                                    <label htmlFor="shipping" className='float-label'>Zip</label>
                                </div>
                            </div>
                            <div className="col-sm-4">
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
                        </Row>

                        {
                            status ?
                                <div>
                                    <Row className='g-3'>
                                        <h6 className='fw-bold pt-3'>Shipping Address</h6>
                                        <div className="col-sm-4">
                                            <div className="form-group cus-form-group">
                                                <Form.Control placeholder="Frist Name" className='fill-input' />
                                                <label htmlFor="shipping" className='float-label'>Frist Name</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group cus-form-group">
                                                <Form.Control placeholder="Last Name" className='fill-input' />
                                                <label htmlFor="shipping" className='float-label'>Last Name</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group cus-form-group">
                                                <Form.Control placeholder="Address" className='fill-input' />
                                                <label htmlFor="shipping" className='float-label'>Address</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group cus-form-group">
                                                <Form.Control placeholder="Address 2" className='fill-input' />
                                                <label htmlFor="shipping" className='float-label'>Address 2</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group cus-form-group">
                                                <Form.Control placeholder="City" className='fill-input' />
                                                <label htmlFor="shipping" className='float-label'>City</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group cus-select-group">
                                                <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                                    <option>Select State</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </Form.Control>
                                                <label className='float-label' htmlFor="require_shipping">Select State</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group cus-form-group">
                                                <Form.Control placeholder="Zip" className='fill-input' />
                                                <label htmlFor="shipping" className='float-label'>Zip</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group cus-select-group">
                                                <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                                    <option>United State</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </Form.Control>
                                                <label className='float-label' htmlFor="require_shipping">United State</label>
                                            </div>
                                        </div>
                                    </Row>
                                </div>
                                : null
                        }

                        <hr className='my-4'></hr>
                        <div className='bg_color_lightblue p-2'>
                            <Form.Group as={Row} className="" controlId="formPlaintextPassword">
                                <div className='d-flex' >
                                    <Form.Control placeholder="Serarch Product" />
                                    <a><BsUpcScan className='txt_color ms-2' /></a>
                                </div>
                            </Form.Group>
                        </div>

                        <Row>
                            <div>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th>Description</th>
                                            <th>Product Code</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                            <th>Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td colSpan={5}></td>
                                            <td className=''>Subtotal</td>
                                            <td className='fw-bold'>$219.00</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={5}></td>
                                            <td className='fw-bold'>
                                                <Button ref={target} onClick={() => setshow(!show)} className='btn-hover color-3'>
                                                    <IoIosPricetags /> Add discount
                                                </Button>
                                                <Overlay target={target.current} show={show} placement="top">
                                                    {(props) => (
                                                        <Tooltip id="overlay-example" {...props} className="tooltip_Tab">
                                                            <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)} className="mb-2" >
                                                                <Tab eventKey="Apply" title="Apply Coupon">
                                                                    <div className="p-2">
                                                                        <div className="form-group cus-form-group mb-3">
                                                                            <Form.Control placeholder="Coupon Code" className='fill-input' />
                                                                            <label htmlFor="shipping" className='float-label'>Coupon Code</label>
                                                                        </div>
                                                                        <button className='btn-hover color-1 me-2'>Cancel</button>
                                                                        <button className='btn-hover color-2 r_mt-2'>Apply</button>
                                                                    </div>
                                                                </Tab>
                                                                <Tab eventKey="Manual" title="Manual">
                                                                    <div className="p-2">
                                                                        <div className="form-group cus-form-group mb-3">
                                                                            <Form.Control placeholder="Manual Discount" className='fill-input' />
                                                                            <label htmlFor="shipping" className='float-label'>Manual Discount</label>
                                                                        </div>
                                                                        <button className='btn-hover color-1 me-2'>Cancel</button>
                                                                        <button className='btn-hover color-2 r_mt-2'>Apply</button>
                                                                    </div>
                                                                </Tab>
                                                                <Tab eventKey="Manual-1" title="Manual">
                                                                    <div className="p-2">
                                                                        <div className="form-group cus-form-group mb-3">
                                                                            <Form.Control placeholder="Manual Discount Percentage" className='fill-input' />
                                                                            <label htmlFor="shipping" className='float-label'>Manual Discount Percentage</label>
                                                                        </div>
                                                                        <button className='btn-hover color-1 me-2'>Cancel</button>
                                                                        <button className='btn-hover color-2 r_mt-2'>Apply</button>
                                                                    </div>
                                                                </Tab>
                                                            </Tabs>
                                                        </Tooltip>
                                                    )}
                                                </Overlay>
                                            </td>
                                            <td className='fw-bold'>$$0.00</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={5}></td>
                                            <td className=''>Shipping & Handling</td>
                                            <td className='fw-bold'>$110.00</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={4}></td>
                                            <td >Deposit Required</td>
                                            <td >
                                                <div className="form-group cus-form-group">
                                                    <Form.Control placeholder="Quantity" className='fill-input' />
                                                    <label htmlFor="shipping" className='float-label'>Quantity</label>
                                                </div>
                                            </td>
                                            <td className='fw-bold'>$110.00</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={4}></td>
                                            <td >Apply Custom Tax</td>
                                            <td >
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
                                            </td>
                                            <td className='fw-bold'>$01.00</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={5}></td>
                                            <td className=''>Total</td>
                                            <td className='fw-bold'>$330.00</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={5}></td>
                                            <td className='fw-bold '>Balance Due</td>
                                            <td className='fw-bold '>$209.00</td>
                                        </tr>

                                    </tbody>
                                </Table>
                            </div>
                        </Row>

                        <Row>
                            <div className='col-md-12'>
                                <div className="form-group cus-form-group mb-3">
                                    <Form.Control placeholder="User Comments" className='fill-input' as="textarea" rows={6} />
                                    <label htmlFor="shipping" className='float-label'>User Comments</label>
                                </div>

                                <Form.Check className='' inline label="Show Payment Options" name="check" onClick={() => setpay(!pay)}/>

                                {pay ?
                                    <div>
                                        <h6 className='mt-4 mb-3 fw-bold'>Payment Detail</h6>
                                        <Form className=''>
                                            <div className="">
                                                {['radio'].map((type) => (
                                                    <div key={`inline-${type}`} className="mb-3">
                                                        <Form.Check inline label="Credit, Debit, or ATM Card" name="group1" type={type} />
                                                        <Form.Check inline label="Cash" name="group1" type={type} />
                                                        <Form.Check inline label="External Payment" name="group1" type={type} />
                                                        <Form.Check inline label="Check" name="group1" type={type} />
                                                        <Form.Check inline label="Checking Account" name="group1" type={type} />
                                                        <Form.Check inline label="Internal Gift Card" name="group1" type={type} />
                                                    </div>
                                                ))}
                                            </div>
                                            <Row className='g-3'>
                                                <div className="col-sm-4">
                                                    <div className="form-group cus-form-group">
                                                        <Form.Control placeholder="Amount" className='fill-input' />
                                                        <label htmlFor="shipping" className='float-label'>Amount</label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group cus-form-group">
                                                        <Form.Control placeholder="Card" className='fill-input' />
                                                        <label htmlFor="shipping" className='float-label'>Card</label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group cus-select-group">
                                                        <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                                            <option>01</option>
                                                            <option value="1">02</option>
                                                            <option value="2">03</option>
                                                            <option value="3">04</option>
                                                        </Form.Control>
                                                        <label className='float-label' htmlFor="require_shipping"></label>
                                                        <IoMdArrowDropdown className='inputIcon' />
                                                    </div>
                                                </div>

                                                <div className="col-sm-4">
                                                    <div className="form-group cus-select-group">
                                                        <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                                            <option>2034</option>
                                                            <option value="1">02</option>
                                                            <option value="2">03</option>
                                                            <option value="3">04</option>
                                                        </Form.Control>
                                                        <label className='float-label' htmlFor="require_shipping"></label>
                                                        <IoMdArrowDropdown className='inputIcon' />
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group cus-form-group">
                                                        <Form.Control placeholder="CVV" className='fill-input' />
                                                        <label htmlFor="shipping" className='float-label'>CVV</label>
                                                    </div>
                                                </div>
                                            </Row>
                                        </Form>
                                    </div> : null
                                }
                                <div className='my-5'>
                                    <Form.Group as={Row} className="">
                                        <Form.Label column md="1">
                                            Attachments
                                        </Form.Label>
                                        <div className='upload-btn-wrapper col-md-3 col-sm-12'>
                                            <button className="btn-hover color-3 px-3">Select files<ImAttachment className='ms-2' /></button>
                                            <input type="file" name="myfile" />
                                        </div>
                                    </Form.Group>
                                </div>
                                <div className='mt-4'>
                                    <div className='d-flex'>
                                        <label className='me-2 ms-1'>
                                            <Form.Check className='mb-3 checkbox' name="check" />
                                        </label>
                                        <p className='paddingTRB'>Terms and Conditions: Customer agrees to pay the installment payments as set forth above. This agreement shall remain in effect for a period of up to 12 months, as noted. The parties agree that this agreement has no "opt-outs" and the customer shall be charged the full monthly fee even if he or she does not attend the services provided. If the customer fails to pay for the services when due, COACH has the option to treat such failure to pay as a material breach of the agreement and may cancel this agreement and/or seek legal remedies.</p>
                                    </div>
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
                    </div>
                </Container>
                <div className='bg_color_lightblue p-2 mt-4'>
                    <Container>
                        <div className='row'>
                            <div className='col-md-4'>
                                <div className="form-group cus-select-group">
                                    <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                        <option>105- Fake Marchant</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Control>
                                    <label className='float-label' htmlFor="require_shipping"></label>
                                    <IoMdArrowDropdown className='inputIcon' />
                                </div>
                            </div>
                            <div className='col-md-8'>
                                <div className='float-end'>
                                    <button class="btn-hover color-3 py-2 px-4 me-2 r_mt-2">Process Paymant</button>
                                    <button class="btn-hover color-2 py-2 px-4  r_mt-2">Save Invoice</button>
                                </div>
                            </div>

                        </div>
                    </Container>
                </div>
            </div>
        </div>
    );
}

export default Create_order;