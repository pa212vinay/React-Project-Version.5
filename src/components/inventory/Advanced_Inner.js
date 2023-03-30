import Row from 'react-bootstrap/Row';
import React, { useState } from "react";
import { Form } from 'react-bootstrap';
import Tab from "./Tab";
import { BsPlusLg } from "react-icons/bs";
import { FiDollarSign } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { TagsInput } from "react-tag-input-component";



const Advanced_Inner = () => {
    const [selected, setSelected] = useState(["papaya"]);
    return (
        <>
            <div className='row'>
                <div className='col-md-12'>
                    <div className="p-3 bg_col pt-0">
                        <Tab />
                        <Row className='g-3 mt-1'>
                            <div className='col-md-12 col-lg-12 col-xl-9 col-xxl-9 col-sm-12'>
                                <div className='bg_col p-3'>
                                    <div className='row'>
                                        <div className='col-md-12 mb-3'>
                                            <span className='fw-bold'>Attributes</span>
                                            <span className='float-end'>Add new <button className='btn-icon color-3'><BsPlusLg /></button></span>
                                        </div>
                                    </div>
                                    <Row className='g-3'>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="form-group cus-select-group">
                                                <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                                    <option>Checkbox</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </Form.Control>
                                                <label className='float-label' htmlFor="require_shipping">Attribute Type</label>
                                                <IoMdArrowDropdown className='inputIcon' />
                                            </div>
                                        </div>

                                        <div className="col-md-6 col-sm-6">
                                            <Form.Check inline label="Hide" />
                                            <Form.Check inline label="Required" />
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="form-group cus-form-group">
                                                <Form.Control placeholder="csd" className='fill-input' />
                                                <label htmlFor="shipping" className='float-label'>Name*</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <div className='position-relative'>
                                                <TagsInput value={selected} onChange={setSelected} name="fruits" placeHolder="Value(s)" classNames="tag_input fill-input" />
                                                <label htmlFor="shipping" className='tag_label'>Cost</label>
                                            </div>
                                        </div>
                                        
                                        <div className='col-mt-12'>
                                            <div className='float-end'>
                                                <button class="btn-hover color-1 py-2 px-4 me-2 ">Cancel</button>
                                                <button class="btn-hover color-3 py-2 px-3 r_mt-2 ">Save Attribute</button>
                                            </div>
                                        </div>
                                    </Row>
                                </div>
                            </div>
                            <div className='col-md-12 col-lg-12 col-xl-9 col-xxl-9 col-sm-12'>
                                <div className='bg_col p-3'>
                                    <h6 className='fw-bold mb-3'>Additional Pricing</h6>
                                    <Row className='g-3'>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="form-group cus-form-group">
                                                <Form.Control placeholder="Wholesale Price" className='fill-input' />
                                                <label htmlFor="shipping" className='float-label'>Wholesale Price*</label>
                                                <FiDollarSign className='inputIcon' />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="form-group cus-form-group">
                                                <Form.Control placeholder="Wholesale Price" className='fill-input' />
                                                <label htmlFor="shipping" className='float-label'>MSRP</label>
                                                <FiDollarSign className='inputIcon' />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="form-group cus-form-group">
                                                <Form.Control placeholder="Cost" className='fill-input' />
                                                <label htmlFor="shipping" className='float-label'>Special Price</label>
                                                <FiDollarSign className='inputIcon' />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="form-group cus-form-group">
                                                <Form.Control className='fill-input form-control' name="datepic" placeholder="DateRange" type="date" />
                                                <label htmlFor="shipping" className='float-label'>Special Price Start</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="form-group cus-form-group">
                                                <Form.Control className='fill-input form-control' name="datepic" placeholder="DateRange" type="date" />
                                                <label htmlFor="shipping" className='float-label'>Special Price End</label>
                                            </div>
                                        </div>

                                    </Row>
                                </div>
                            </div>
                            <div className='col-md-12 col-lg-12 col-xl-9 col-xxl-9 col-sm-12'>
                                <div className='bg_col p-3'>
                                    <h6 className='fw-bold mb-3'>Additional Pricing</h6>
                                    <Row className='g-3'>
                                        <div className="col-md-12 col-sm-6">
                                            <div className="form-group cus-select-group">
                                                <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                                    <option>Checkbox</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </Form.Control>
                                                <label className='float-label' htmlFor="require_shipping">Attribute Type</label>
                                                <IoMdArrowDropdown className='inputIcon' />
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
export default Advanced_Inner;