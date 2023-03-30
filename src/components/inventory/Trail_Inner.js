import Row from 'react-bootstrap/Row';
import React from 'react';
import { Form } from 'react-bootstrap';
import Tab from "./Tab";
import { FiDollarSign } from "react-icons/fi";



const Trail_Inner = () => {

    return (
        <>
            <div className='row'>
                <div className='col-md-12'>
                    <div className="p-3 bg_col pt-0">
                        <Tab />
                        <Row className='g-3 mt-1'>
                            <div className='col-md-9'>
                                <div className='bg_col p-3'>
                                    <h6 className='fw-bold mb-3'>Tital</h6>
                                    <Row className='g-3'>
                                        <div className="col-md-6 col-sm-6">
                                            <div className='bg_col p-3'>
                                                <h6 className='fw-bold mb-3'>Product Triggers</h6>
                                                <div className="form-group cus-form-group">
                                                    <Form.Control placeholder="Wholesale Price" className='fill-input' />
                                                    <label htmlFor="shipping" className='float-label'>Search Product</label>
                                                    <FiDollarSign className='inputIcon' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <div className='row g-3'>
                                                <div className="col-md-12 col-sm-12">
                                                    <div className="form-group cus-form-group">
                                                        <Form.Control placeholder="" className='fill-input' />
                                                        <label htmlFor="shipping" className='float-label'>First Payment Delay (Days)</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 col-sm-12">
                                                    <div className="form-group cus-form-group">
                                                        <Form.Control placeholder="" className='fill-input' />
                                                        <label htmlFor="shipping" className='float-label'>First Payment Transaction Type</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Row>
                                </div>
                            </div>
                            

                            {/* <div className='col-md-9 col-sm-12'>
                                <div className='float-end'>
                                    <button class="btn-hover color-1 py-2 px-4 me-2">Cancel</button>
                                    <button class="btn-hover color-2 py-2 px-4 r_mt-2">Save</button>
                                </div>
                            </div> */}
                        </Row>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Trail_Inner;