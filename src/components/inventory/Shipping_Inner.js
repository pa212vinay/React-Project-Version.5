import Row from 'react-bootstrap/Row';
import React from 'react';
import { Form } from 'react-bootstrap';
import Tab from "./Tab";
import { Icon } from '@iconify/react';



const Shipping_Inner = () => {

    return (
        <>
           
                    <div className="p-3 bg_col pt-0 shipping">
                        <Tab />
                        <Row className='g-3 mt-1'>
                            <div className='col-xxl-9 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                <div className='bg_col p-3'>
                                <h6 className='fw-bold mb-3'>Shipping</h6>
                                    <Row className='g-3'>
                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group cus-form-group">
                                                <Form.Control placeholder="Wholesale Price" className='fill-input' />
                                                <label htmlFor="shipping" className='float-label'>Shipping Surcharge</label>
                                                <Icon icon="ph:currency-dollar" className='inputIcon'/>
                                            </div>
                                        </div>

                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group cus-select-group">
                                                <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                                    <option>Never</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </Form.Control>
                                                <label className='float-label' htmlFor="require_shipping">Requires Shipping</label>
                                                <Icon icon="mdi:arrow-down-drop" className='inputIcon'/>
                                            </div>
                                        </div>

                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group cus-form-group">
                                                <Form.Control placeholder="" className='fill-input' />
                                                <label htmlFor="shipping" className='float-label'>Length (inches)</label>
                                            </div>
                                        </div>

                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group cus-form-group">
                                                <Form.Control placeholder="" className='fill-input' />
                                                <label htmlFor="shipping" className='float-label'>Width (inches)</label>
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group cus-form-group">
                                                <Form.Control placeholder="" className='fill-input' />
                                                <label htmlFor="shipping" className='float-label'>Height (inches)</label>
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group cus-form-group">
                                                <Form.Control placeholder="" className='fill-input' />
                                                <label htmlFor="shipping" className='float-label'>Weight (lbs)</label>
                                            </div>
                                        </div>
                                    </Row>
                                </div>
                            </div>
                            <div className='col-xxl-9 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                <div className='bg_col p-3'>
                                <h6 className='fw-bold mb-3'>Other</h6>
                                    <Row className='g-3'>
                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group cus-form-group">
                                                <Form.Control placeholder="" className='fill-input' />
                                                <label htmlFor="shipping" className='float-label'>Sort Order Override</label>
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group cus-form-group">
                                                <Form.Control placeholder="" className='fill-input' />
                                                <label htmlFor="shipping" className='float-label'>Unit of Measure</label>
                                            </div>
                                        </div>
                                    </Row>
                                </div>
                            </div>


                            <div className='col-xxl-9 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                <div className='float-end'>
                                    <button class="btn-hover color-1 py-2 px-4 me-2">Cancel</button>
                                    <button class="btn-hover color-2 py-2 px-4 r_mt-2">Save</button>
                                </div>
                            </div>
                        </Row>
                    </div>
                
        </>
    );
}
export default Shipping_Inner;