import { Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import { ImAttachment } from "react-icons/im";
import { IoMdArrowDropdown } from "react-icons/io";

const Attechment_inner = () => {
    const [date, setDate] = useState(new Date());

    return (
        <>
            <div className='mt-3'>
                <div className='bg_col p-3 '>
                    <Row>
                        <h6 className='my-3 fw-bold'>Chargeback/Fraud</h6>
                        <div className='col-md-12'>
                            <h6 className='my-3 fw-bold'>Step 1: Select an order</h6>
                            <div className="form-group cus-select-group">
                                <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                    <option>Select an order</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Control>
                                <label className='float-label' htmlFor="require_shipping">Select an order</label>
                                <IoMdArrowDropdown className='inputIcon' />
                            </div>
                        </div>
                    </Row>
                    <div className='mt-5'>
                        <Row>
                            <div>
                                <Table responsive bordered >
                                    <thead>
                                        <tr>
                                            <th colSpan={2}>Order #6840 Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='fw-bold'>Payment Status</td>
                                            <td>INVOICE</td>
                                        </tr>
                                        <tr>
                                            <td className='fw-bold'>Recurring</td>
                                            <td>No</td>
                                        </tr>
                                        <tr>
                                            <td className='fw-bold'>Total</td>
                                            <td>$2,005.41</td>
                                        </tr>
                                        <tr>
                                            <td className='fw-bold'>Contents</td>
                                            <td>
                                                <div>
                                                    <Table responsive bordered >
                                                        <thead>
                                                            <tr>
                                                                <th>Product</th>
                                                                <th>Quantity</th>
                                                                <th>Price</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>ADB1500ADSadsf9999</td>
                                                                <td>3</td>
                                                                <td>$649.00</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Row>
                    </div>

                    <Row className='mb-4 g-3'>
                        <h6 className='my-3 fw-bold'>Step 2: Select Type</h6>
                        <div className="col-md-6 col-sm-12">
                            <Form.Check label="Fraud" name="group1" type='radio' id='fraud' />
                            <div className="form-group cus-select-group">
                                <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                    <option>Select an order</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Control>
                                <label className='float-label' htmlFor="require_shipping">Select an order</label>
                                <IoMdArrowDropdown className='inputIcon' />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <Form.Check label="Chargeback" name="group1" type='radio' id='Chargeback' />
                            <div className="form-group cus-form-group">
                                <Form.Control placeholder="" className='fill-input' />
                                <label htmlFor="shipping" className='float-label'></label>
                            </div>
                        </div>
                    </Row>

                    <Row className='mb-4 g-3'>
                        <h6 className='my-3 fw-bold'>Step 3:  Additional Information</h6>
                        <div className="col-md-4 col-sm-12">
                            <div className="form-group cus-form-group">
                                <Form.Control className='fill-input' type="date" name="datepic" placeholder="Date Logged" value={date} onChange={(e) => setDate(e.target.value)} />
                                <label htmlFor="shipping" className='float-label'>Date Logged</label>
                            </div>

                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="form-group cus-form-group">
                                <Form.Control className='fill-input' type="date" name="datepic" placeholder="Respond By" value={date} onChange={(e) => setDate(e.target.value)} />
                                <label htmlFor="shipping" className='float-label'>Respond By</label>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="form-group cus-form-group">
                                <Form.Control placeholder="Vendor ID" className='fill-input' />
                                <label htmlFor="shipping" className='float-label'>Vendor ID</label>
                            </div>
                        </div>
                    </Row>

                    <Row className='mb-4'>
                        <h6 className='my-3 fw-bold'>Step 4: Next Steps</h6>
                        <div className="col-md-6 col-sm-12">
                            <Form.Check label="Log Comments Only" name="group1" type='radio' id='log' />
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <Form.Check label="Create Ticket" name="group1" type='radio' id='ticket' />
                        </div>
                    </Row>
                    <Row className='mb-4'>
                        <div>
                            <h6 className='my-3 fw-bold'>Step 5: Enter Notes</h6>
                            <div className="form-group cus-form-group">
                                <Form.Control placeholder="Enter Notes" className='fill-input' as="textarea" rows={6} />
                                <label htmlFor="shipping" className='float-label'>Enter Notes</label>
                            </div>
                            <div className='mt-3'>
                            <div className='upload-btn-wrapper'>
                                <button className="btn-hover color-3 ">Select files<ImAttachment className='ms-2' /></button>
                                <input type="file" name="myfile" />
                            </div>
                            <button class="btn-hover color-3 float-end">Save Changes</button>
                            </div>
                        </div>
                    </Row>
                </div>
            </div>
        </>
    );
}

export default Attechment_inner;