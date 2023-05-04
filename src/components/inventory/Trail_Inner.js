import Row from 'react-bootstrap/Row';
import React from 'react';
import { Form } from 'react-bootstrap';
import Tab from "./Tab";
import { Icon } from '@iconify/react';



const Trail_Inner = () => {

    return (
        <>
            <div className="p-3 bg_col pt-0">
                <Tab />
                <Row className='g-3 mt-1'>
                    <div className='col-md-9'>
                        <div className='bg_col p-3'>
                            <h6 className='fw-bold mb-3'>Tital</h6>
                            <Row className='g-3'>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <div className='bg_col p-3'>
                                        <h6 className='fw-bold mb-3'>Product Triggers</h6>
                                        <div className="form-group cus-form-group">
                                            <Form.Control placeholder="Wholesale Price" className='fill-input' />
                                            <label htmlFor="shipping" className='float-label'>Search Product</label>
                                            <Icon icon="ph:currency-dollar" className='inputIcon'/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <div className='row g-3'>
                                        <div className="col-md-12 col-sm-12">
                                            <div className="form-group cus-form-group">
                                                <Form.Control placeholder="" className='fill-input' />
                                                <label htmlFor="shipping" className='float-label'>First Payment Delay (Days)</label>
                                            </div>
                                        </div>
                                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
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
                </Row>
            </div>
        </>
    );
}
export default Trail_Inner;