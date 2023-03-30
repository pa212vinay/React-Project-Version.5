import Row from 'react-bootstrap/Row';
import React, { useState } from "react";
import { Form, Table } from 'react-bootstrap';
import { BsSearch } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import "react-datepicker/dist/react-datepicker.css";



const New_order_Inner = () => {
    const [date, setDate] = useState(new Date());
    return (
        <>
            <div className='row'>
                <div className='col-md-12'>
                    <div className="p-3 bg_col pt-0">
                        <Row className='g-3 mt-1'>
                        <h6 className='mt-4 mb-3 fw-bold'>Purchase Order</h6>
                            <div className='col-md'>
                                <div className="form-group cus-form-group">
                                    <Form.Control className='fill-input' placeholder='P.O. Number' />
                                    <label htmlFor="P.O. Number" className='float-label'>P.O. Number</label>
                                </div>
                            </div>
                            <div className='col-md'>
                                <div className="form-group cus-select-group">
                                    <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                        <option>Select Vendor</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Control>
                                    <label className='float-label' htmlFor="require_shipping">Vendor</label>
                                    <IoMdArrowDropdown className='inputIcon' />
                                </div>
                            </div>
                            <div className='col-md'>
                                <div className="form-group cus-form-group">
                                    <Form.Control className='fill-input' placeholder='Terms' />
                                    <label htmlFor="Terms" className='float-label'>Terms</label>
                                </div>
                            </div>
                            <div className='col-md'>
                                <div className="form-group cus-form-group">
                                    <Form.Control className='fill-input' type="date" name="datepic" placeholder="DateRange" value={date} onChange={(e) => setDate(e.target.value)} />
                                    <label htmlFor="shipping" className='float-label'>DateRange</label>
                                </div>
                            </div>
                            <div className='col-md'>
                                <div className="form-group cus-select-group">
                                    <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                        <option>Recent Product</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Control>
                                    <label className='float-label' htmlFor="require_shipping">Select</label>
                                    <IoMdArrowDropdown className='inputIcon' />
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div className='float-end'>
                                    <button class="btn-hover color-2 py-2 px-4 me-2 r_mt-2">Upload CSV</button>
                                    <button class="btn-hover color-2 py-2 px-4 r_mt-2">Quick Product Add</button>
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div className='bg_color_lightblue p-3'>
                                    <div className="form-group position-relative d-inline-block w-100">
                                        <Form.Control placeholder="Search" className='fill-input' />
                                        <BsSearch className='inputIcon' />
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div className="mt-3 contact">
                                    <Table responsive>
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th></th>
                                                <th>Product Code</th>
                                                <th>Description</th>
                                                <th>Serial Number</th>
                                                <th>Model Number</th>
                                                <th>Quantity</th>
                                                <th>Bin Location</th>
                                                <th>Custom Field</th>
                                                <th>Committed</th>
                                                <th>Cost</th>
                                                <th>Amount</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td colSpan={7} className='text-center'>Please select product</td>
                                                <td colSpan={5}></td>
                                            </tr>
                                            <tr>
                                                <td colSpan={7}></td>
                                                <td colSpan={3}>0</td>
                                                <td>Subtotal</td>
                                                <td>$0.00</td>

                                            </tr>
                                            <tr>
                                                <td colSpan={9}></td>
                                                <td>Shipping & Handling</td>
                                                <td>Apply Shipping</td>
                                                <td>$0.00</td>

                                            </tr>
                                            <tr>
                                                <td colSpan={10}></td>

                                                <td>Total</td>
                                                <td>00</td>
                                            </tr>

                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <h6 className='mt-4 mb-3 fw-bold'>Note</h6>
                                <div className="form-group cus-form-group">
                                    <Form.Control as="textarea" rows={6} placeholder='User Comments' className='fill-input mb-3' />
                                    <label htmlFor="shipping" className='float-label'>Note</label>
                                </div>
                                <div className='float-end'>
                                    <button class="btn-hover color-3 py-2 px-4 me-2 r_mt-2">Accept All</button>
                                    <button class="btn-hover color-3 py-2 px-4 r_mt-2">Save Purchase Order</button>
                                </div>
                            </div>
                        </Row>
                    </div>
                </div>
            </div>
        </>
    );
}
export default New_order_Inner;