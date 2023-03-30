import Row from 'react-bootstrap/Row';
import React from 'react';
import { Form } from 'react-bootstrap';
import Tab from "./Tab";
// import { BsPlusLg } from "react-icons/bs";
import { FiDollarSign } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";



const Shipping_Inner = () => {

    return (
        <>
            <div className='row'>
                <div className='col-md-12'>
                    <div className="p-3 bg_col pt-0">
                        <Tab />
                        <Row className='g-3 mt-1'>
                            <div className='col-md-12 col-lg-12 col-xl-9 col-xxl-9 col-sm-12'>
                                <div className='bg_col p-3'>
                                <h6 className='fw-bold mb-3'>Shipping</h6>
                                    <Row className='g-3'>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="form-group cus-form-group">
                                                <Form.Control placeholder="Wholesale Price" className='fill-input' />
                                                <label htmlFor="shipping" className='float-label'>Shipping Surcharge</label>
                                                <FiDollarSign className='inputIcon' />
                                            </div>
                                        </div>

                                        <div className="col-md-6 col-sm-6">
                                            <div className="form-group cus-select-group">
                                                <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                                    <option>Never</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </Form.Control>
                                                <label className='float-label' htmlFor="require_shipping">Requires Shipping</label>
                                                <IoMdArrowDropdown className='inputIcon' />
                                            </div>
                                        </div>

                                        <div className="col-md-6 col-sm-6">
                                            <div className="form-group cus-form-group">
                                                <Form.Control placeholder="" className='fill-input' />
                                                <label htmlFor="shipping" className='float-label'>Length (inches)</label>
                                            </div>
                                        </div>

                                        <div className="col-md-6 col-sm-6">
                                            <div className="form-group cus-form-group">
                                                <Form.Control placeholder="" className='fill-input' />
                                                <label htmlFor="shipping" className='float-label'>Width (inches)</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="form-group cus-form-group">
                                                <Form.Control placeholder="" className='fill-input' />
                                                <label htmlFor="shipping" className='float-label'>Height (inches)</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="form-group cus-form-group">
                                                <Form.Control placeholder="" className='fill-input' />
                                                <label htmlFor="shipping" className='float-label'>Weight (lbs)</label>
                                            </div>
                                        </div>
                                    </Row>
                                </div>
                            </div>
                            <div className='col-md-12 col-lg-12 col-xl-9 col-xxl-9 col-sm-12'>
                                <div className='bg_col p-3'>
                                <h6 className='fw-bold mb-3'>Other</h6>
                                    <Row className='g-3'>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="form-group cus-form-group">
                                                <Form.Control placeholder="" className='fill-input' />
                                                <label htmlFor="shipping" className='float-label'>Sort Order Override</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="form-group cus-form-group">
                                                <Form.Control placeholder="" className='fill-input' />
                                                <label htmlFor="shipping" className='float-label'>Unit of Measure</label>
                                            </div>
                                        </div>
                                    </Row>
                                </div>
                            </div>


                            <div className='col-md-9 col-sm-12'>
                                <div className='float-end'>
                                    <button class="btn-hover color-1 py-2 px-4 me-2">Cancel</button>
                                    <button class="btn-hover color-2 py-2 px-4 r_mt-2">Save</button>
                                </div>
                            </div>
                        </Row>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Shipping_Inner;