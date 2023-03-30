import Row from 'react-bootstrap/Row';
import React from 'react';
import { Form } from 'react-bootstrap';
import Tab from "./Tab";
import { FiDollarSign } from "react-icons/fi";



const Bundle_Product_Inner = () => {

    return (
        <>
            <div className='row'>
                <div className='col-md-12'>
                    <div className="p-3 bg_col pt-0">
                        <Tab />
                        <Row className='g-3 mt-1'>
                            <div className='col-md-9'>
                                <div className='bg_col p-3'>
                                    <h6 className='fw-bold mb-3'>Bundle Product</h6>
                                    <Row className='g-3'>
                                        <div className="col-md-12 col-sm-12">
                                            <div className='bg_col p-3'>
                                                <h6 className='fw-bold mb-3'>Product</h6>
                                                <div className="form-group cus-form-group">
                                                    <Form.Control placeholder="Wholesale Price" className='fill-input' />
                                                    <label htmlFor="shipping" className='float-label'>Search Product</label>
                                                    <FiDollarSign className='inputIcon' />
                                                </div>
                                            </div>
                                        </div>
                                    </Row>
                                </div>
                            </div>

                            <div className='col-md-9 col-sm-12'>
                                <div className='float-end'>
                                    <button class="btn-hover color-3 py-2 px-4 r_mt-2">Back</button>
                                </div>
                            </div>
                        </Row>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Bundle_Product_Inner;