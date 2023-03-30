import React from "react";
import { Row, Form } from 'react-bootstrap';
import { IoMdArrowDropdown } from "react-icons/io";
const Contact_Cutomer_Inner = () => {
    return (
        <Row className="mt-3">
            <div className="col-md-12">
                <div className=" bg_col p-3">
                    <h6 className="fw-bold">Contact Customer</h6>
                    <div className="mb-3">
                        <Form.Check inline label="Email" name="group1" type="radio" />
                        <Form.Check inline label="SMS Message" name="group1" type="radio" />
                    </div>
                    <Row className='g-3'>
                        <div className="col-sm-6">
                            <div className="form-group cus-select-group">
                                <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                    <option>Select Template</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Control>
                                <label className='float-label' htmlFor="require_shipping"></label>
                                <IoMdArrowDropdown className='inputIcon' />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group cus-form-group">
                                <Form.Control placeholder="Form Email" className='fill-input' />
                                <label htmlFor="ticket" className='float-label'>Form Email</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group cus-form-group">
                                <Form.Control placeholder="To Email" className='fill-input' />
                                <label htmlFor="ticket" className='float-label'>To Email</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group cus-form-group">
                                <Form.Control placeholder="Subject" className='fill-input' />
                                <label htmlFor="ticket" className='float-label'>Subject</label>
                            </div>
                        </div>
                        <div className='col-md-12 mt-3'>
                            <div className="form-group cus-form-group">
                                <Form.Control placeholder="Message" as="textarea" rows={6} className='fill-input' />
                                <label htmlFor="shipping" className='float-label'>Message</label>
                            </div>
                        </div>
                        
                        <div className="col-sm-6">
                        <Form.Check inline label="Save as template" name="group1" className="mb-3"/>
                            <div className="form-group cus-form-group">
                                <Form.Control placeholder="Enter title" className='fill-input' />
                                <label htmlFor="ticket" className='float-label'>Enter title</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <button className="btn-hover color-3 float-end">Send Email</button>
                        </div>
                    </Row>
                </div>
            </div>
        </Row>
    );
}
export default Contact_Cutomer_Inner;
