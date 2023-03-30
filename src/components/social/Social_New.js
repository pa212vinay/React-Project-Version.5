import { Form, Row } from 'react-bootstrap';
import Social_Tab from './Social_Tab';
import { BiRepost } from "react-icons/bi";
import React, { useState } from 'react';
import { GoGlobe } from "react-icons/go";
import { MdEmojiFlags, MdOutlineBrokenImage } from "react-icons/md";
import { TbUpload } from "react-icons/tb";
import { FiUploadCloud } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
// import "react-datepicker/dist/react-datepicker.css";


const Social_newBTN = () => {
    const [date, setDate] = useState(new Date());
    return (
        <>
            <div className="p-3">
                <div className="bg_col p-3">
                    
                    <Row className=''>
                        <Social_Tab />
                        <hr className="mb-4 mt-3"></hr>
                        <h6 className='fw-bold'>Platform</h6>
                                {/* <div className="row mt-4"> */}
                                    <div className="col-md-4">
                                        <div className="d-flex">
                                            <BiRepost className="icon-size me-2" />
                                            <div className="">
                                                <div className="d-flex">
                                                    <h6 className='me-3 fw-bold'>Post Immediately</h6><Form.Check type="radio" name="group2" id="radio1" />
                                                </div>
                                                <p>Post Immediately</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="d-flex">
                                            <BiRepost className="icon-size me-2" />
                                            <div className="">
                                                <div className="d-flex">
                                                    <h6 className='me-3 fw-bold'>Schedule</h6><Form.Check type="radio" name="group2" id="radio2" />
                                                </div>
                                                <p>Schedule Post</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div>
                                            <h6>Schedule first post for</h6>
                                            <div className="form-group cus-form-group">
                                                <Form.Control className='fill-input' type="date" name="datepic" placeholder="DateRange" value={date} onChange={(e) => setDate(e.target.value)} />
                                                <label htmlFor="shipping" className='float-label'>DateRange</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-12'>
                                        <h6 className='mt-4 fw-bold'>Title *</h6>
                                        <div className="form-group cus-form-group">
                                            <Form.Control className='fill-input' placeholder="Address" />
                                            <label htmlFor="shipping" className='float-label'>Address</label>
                                        </div>
                                        <h6 className='mt-4 fw-bold'>Description *</h6>
                                        <div className="form-group cus-form-group">
                                            <Form.Control as="textarea" rows={6} className='fill-input' placeholder="User Comments" />
                                            <label htmlFor="shipping" className='float-label'>User Comments</label>
                                        </div>
                                    </div>
                               
                                        <h4 className='mb-3 fw-bold'>Destination</h4>
                                        <div className="col-md-4">
                                            <div className="d-flex">
                                                <GoGlobe className="icon-size me-2" />
                                                <div className="">
                                                    <div className="d-flex">
                                                        <h6 className='me-3 fw-bold'>Website</h6><Form.Check type="radio" name="group2" id="radio3" />
                                                    </div>
                                                    <div className="form-group cus-select-group mt-2">
                                                        <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                                            <option>Select Country</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </Form.Control>
                                                        <label className='float-label' htmlFor="require_shipping">Select Country</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="d-flex">
                                                <MdEmojiFlags className="icon-size me-2" />
                                                <div className="">
                                                    <div className="d-flex">
                                                        <h6 className='me-3 fw-bold'>Other</h6><Form.Check type="radio" name="group2" id="radio4" />
                                                    </div>
                                                    <div className="form-group cus-form-group">
                                                        <Form.Control className='fill-input' placeholder="Zip" />
                                                        <label htmlFor="shipping" className='float-label'>Zip</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="d-flex">
                                                <GrLocation className="icon-size me-2" />
                                                <div className="">
                                                    <div className="d-flex">
                                                        <h6 className='me-3 fw-bold'>No Destination</h6><Form.Check type="radio" name="group2" id="radio5" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                

                                    <hr className="mb-4 mt-5"></hr>

                                   
                                        <h4 className='mb-3 fw-bold'>Image</h4>
                                        <div className="col-md-4">
                                            <div className="d-flex">
                                                <TbUpload className="icon-size me-2" />
                                                <div className="">
                                                    <div className="d-flex">
                                                        <h6 className='me-3 fw-bold'>Upload Image</h6><Form.Check type="radio" name="group2" id="radio3" />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="d-flex">
                                                <FiUploadCloud className="icon-size me-2" />
                                                <div className="">
                                                    <div className="d-flex">
                                                        <h6 className='me-3 fw-bold'>No Image</h6><Form.Check type="radio" name="group2" id="radio4" />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="d-flex">
                                                <MdOutlineBrokenImage className="icon-size me-2" />
                                                <div className="">
                                                    <div className="d-flex">
                                                        <h6 className='me-3 fw-bold'>Landing Page Thumbnail</h6><Form.Check type="radio" name="group2" id="radio5" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    
                                   
                                        <div className='col-md-4'>
                                            <div className='dropFile mt-3'>
                                                <label for="images" class="drop-container">
                                                    <span class="drop-title">Drop files here</span>
                                                    or
                                                    <input type="file" id="images" accept="image/*" required />
                                                </label>
                                            </div>
                                        </div>
                                        <div className='col-md-12'>
                                            <div class="float-end mb-2">
                                                <button class="btn-hover color-1 me-2">Cancel</button>
                                                <button class="btn-hover color-2 r_mt-2">Save</button>
                                            </div>
                                        </div>
                                  
                                {/* </div> */}
                        {/* <div className="col-md-12">
                            <div className='container'>
                               
                            </div>
                        </div> */}
                    </Row>
                   
                </div>
            </div>
        </>
    );
}
export default Social_newBTN;
