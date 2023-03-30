import React, { useState, useRef } from 'react';
import { Row, Form, Accordion, Table, Col, Overlay, Tooltip } from "react-bootstrap";
import { MdOutlineGeneratingTokens, MdOutlineDisabledByDefault } from "react-icons/md";
import { BiCommentEdit } from "react-icons/bi";
import { RiDeleteBin2Line } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import '../../../css/utility/_utility-dir.scss';
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Icon } from '@iconify/react';


const Customer_Details = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
      <div className="p-3 bg_col mt-3">
        <div class="timeline block mb-4">
          <div className="row align-items-center">
            <div className='col-md-12 col-lg-5'>
              <h6 className='fw-bold txt_color'>CUSTOMER DETAILS</h6>
            </div>
            <div className='col-md-12 col-lg-7'>
              <div className="float-end mb-2">
                <button className="btn-hover color-1 me-2" >Cancel</button>
                <button className="btn-hover color-2 r_mt-2">Save</button>
              </div>
            </div>
          </div>

          <div className="mt-2">
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Demographics </Accordion.Header>
                <Accordion.Body>
                  <Form>
                    <Row className=" g-3">
                      <div className="col-md-6 col-sm-12">
                        <div className="form-group cus-form-group">
                          <Form.Control className='fill-input' placeholder="First name" />
                          <label htmlFor="shipping" className='float-label'>First name</label>
                        </div>

                      </div>
                      <div className="col-md-6 col-sm-12">
                        <div className="form-group cus-form-group">
                          <Form.Control placeholder="Last name" className='fill-input' />
                          <label htmlFor="shipping" className='float-label'>Last name</label>
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-12">
                        <div className="form-group cus-form-group">
                          <Form.Control placeholder="Phone No." className='fill-input' />
                          <label htmlFor="shipping" className='float-label'>Phone No.</label>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <div className="form-group cus-form-group">
                          <Form.Control placeholder="Fax No." className='fill-input' />
                          <label htmlFor="shipping" className='float-label'>Fax No.</label>
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-12">
                        <div className="form-group cus-form-group">
                          <Form.Control placeholder="Email Id" className='fill-input' />
                          <label htmlFor="shipping" className='float-label'>Email Id</label>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <div className="form-group cus-form-group">
                          <Form.Control placeholder="Company" className='fill-input' />
                          <label htmlFor="shipping" className='float-label'>Company</label>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <div className="form-group cus-form-group">
                          <Form.Control placeholder="Title" className='fill-input' />
                          <label htmlFor="shipping" className='float-label'>Title</label>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <div className="form-group cus-form-group">
                          <Form.Control placeholder="Contact Source" className='fill-input' />
                          <label htmlFor="shipping" className='float-label'>Contact Source</label>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Contact List</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Contact List</label>
                          <IoMdArrowDropdown className='inputIcon' />
                        </div>
                      </div>
                    </Row>
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Shiping & Billing Address</Accordion.Header>
                <Accordion.Body>
                  <Form>
                    <Row className="g-3">
                      <div className="col-md-6 col-sm-12">
                        <div className="form-group cus-form-group">
                          <Form.Control placeholder="Billing Address" className='fill-input' />
                          <label htmlFor="shipping" className='float-label'>Billing Address</label>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <div className="form-group cus-form-group">
                          <Form.Control placeholder="Billing Address 2" className='fill-input' />
                          <label htmlFor="shipping" className='float-label'>Billing Address 2</label>
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-12">
                        <div className="form-group cus-form-group">
                          <Form.Control placeholder="Billing city" className='fill-input' />
                          <label htmlFor="shipping" className='float-label'>Billing city</label>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Select State</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Select State</label>
                          <IoMdArrowDropdown className='inputIcon' />
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-12">
                        <div className="form-group cus-form-group">
                          <Form.Control placeholder="Billing Zip" className='fill-input' />
                          <label htmlFor="shipping" className='float-label'>Billing Zip</label>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>United State</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">United State</label>
                          <IoMdArrowDropdown className='inputIcon' />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option></option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping"></label>
                          <IoMdArrowDropdown className='inputIcon' />
                        </div>
                      </div>
                      <div className="col-md-12 col-sm-12">
                        <Form.Check inline label="Shipping Same as Billing" />
                        <Form.Check label="Opt-Out" />
                        <Form.Check inline label="Update Shipping Address on Specific Order" />
                      </div>

                    </Row>
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>QuickBooks Mapping</Accordion.Header>
                <Accordion.Body>
                  <Form>
                    <Row className="">
                      <div className="col-md-12 col-sm-12">
                        <div className="form-group cus-form-group">
                          <Form.Control placeholder="QuickBooks Mapping" className='fill-input' />
                          <label htmlFor="shipping" className='float-label'>QuickBooks Mapping</label>
                        </div>
                      </div>
                    </Row>
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Custom</Accordion.Header>
                <Accordion.Body>
                  <Form>
                    <Row className="g-3">
                      <div className="col-md-6 col-sm-12">
                        <div className="form-group cus-form cus-form-group">
                          <Form.Control className='fill-input' type="text" />
                          <label className='float-label' >
                            <span className='cursor' ref={target} onClick={() => setShow(!show)}>Name <Icon icon="material-symbols:edit" /></span>
                            <Overlay target={target.current} show={show} placement="top">
                              {(props) => (
                                <Tooltip id="overlay-example" {...props} className="tooltip_Tab" >
                                  <div className='p-3 form'>
                                    <h5 className='text-start text-black mb-3'>Order</h5>
                                    <div className="form-group cus-form-group">
                                      <Form.Control placeholder="User ID" className='fill-input' />
                                      <label htmlFor="shipping" className='float-label'>Act type</label>
                                    </div>
                                    <div className="form-group cus-select-group mt-3">
                                      <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                        <option value="1">Text</option>
                                        <option value="2">Numeric</option>
                                        <option value="3">Date Picker</option>
                                      </Form.Control>
                                      <label className='float-label text-dark' htmlFor="require_shipping">Data Type</label>
                                      <IoMdArrowDropdown className='inputIcon' />
                                    </div>
                                    <button className="btn-hover color-2 mt-3 me-2"><FaCheck /></button>
                                    <button onClick={() => setShow(false)} className="btn-hover color-1 mt-3"><ImCross /></button>
                                  </div>
                                </Tooltip>
                              )}
                            </Overlay>
                          </label>

                        </div>
                      </div>

                      <div className="col-md-6 col-sm-12">
                        <div className="form-group cus-form-group">
                          <Form.Control placeholder="Second Phone11" className='fill-input' />
                          <label htmlFor="shipping" className='float-label'>Second Phone11</label>
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-12">
                        <div className="form-group cus-form-group">
                          <Form.Control placeholder="Second Phone11" className='fill-input' />
                          <label htmlFor="shipping" className='float-label'>Gender</label>
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-12">
                        <div className="form-group cus-form-group">
                          <Form.Control placeholder="Second Phone11" className='fill-input' />
                          <label htmlFor="shipping" className='float-label'>Additional Number</label>
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-12">
                        <div className="form-group cus-form-group">
                          <Form.Control placeholder="Second Phone11" className='fill-input' />
                          <label htmlFor="shipping" className='float-label'>Account</label>
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-12">
                        <div className="form-group cus-form-group">
                          <Form.Control placeholder="Second Phone11" className='fill-input' />
                          <label htmlFor="shipping" className='float-label'>Contact Type</label>
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-12">
                        <div className="form-group cus-form-group">
                          <Form.Control placeholder="Second Phone11" className='fill-input' />
                          <label htmlFor="shipping" className='float-label'>Social Media</label>
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-12">
                        <div className="form-group cus-form-group">
                          <Form.Control placeholder="Second Phone11" className='fill-input' />
                          <label htmlFor="shipping" className='float-label'>Office Phone</label>
                        </div>
                      </div>

                      {/* <div className="col-md-6 col-sm-12">
                        <div className="form-group cus-form">
                          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={4}>
                              Second Phone11
                            </Form.Label>
                            <Col sm={8}>
                              <Form.Control type="text" />
                            </Col>
                          </Form.Group>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <div className="form-group cus-form">
                          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={4}>
                              Gender
                            </Form.Label>
                            <Col sm={8}>
                              <Form.Control type="text" />
                            </Col>
                          </Form.Group>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <div className="form-group cus-form">
                          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={4}>
                              Additional Number
                            </Form.Label>
                            <Col sm={8}>
                              <Form.Control type="text" />
                            </Col>
                          </Form.Group>
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-12">
                        <div className="form-group cus-form">
                          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={4}>
                              Custom Text 2
                            </Form.Label>
                            <Col sm={8}>
                              <Form.Control type="text" />
                            </Col>
                          </Form.Group>

                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <div className="form-group cus-form">
                          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={4}>
                              Contact Type
                            </Form.Label>
                            <Col sm={8}>
                              <Form.Control type="text" />
                            </Col>
                          </Form.Group>
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-12">
                        <div className="form-group cus-form">
                          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={4}>
                              Social Media
                            </Form.Label>
                            <Col sm={8}>
                              <Form.Control type="text" />
                            </Col>
                          </Form.Group>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <div className="form-group cus-form">
                          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={4}>
                              Office Phone
                            </Form.Label>
                            <Col sm={8}>
                              <Form.Control type="text" />
                            </Col>
                          </Form.Group>
                        </div>
                      </div> */}
                    </Row>
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Payment Info</Accordion.Header>
                <Accordion.Body>
                  <Form>
                    <Row className="">
                      <div className="col-md-12 col-sm-12">
                        <div className='card_detail'>
                          <Table responsive>
                            <thead>
                              <tr>
                                <th>Your Save Cards</th>
                                <th className='text-center'>Expires On</th>
                                <th className='text-end'>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>541333******4111 <MdOutlineGeneratingTokens className='' /></td>
                                <td className='text-center'>12/2025</td>
                                <td >
                                  <div className='float-end'>
                                    <span className='text-center d-flex'>
                                      <a className="btn_default cursor">
                                        <MdOutlineDisabledByDefault className='' />
                                        <p className='mb-0'>Default</p>
                                      </a>
                                      <a className="btn_edit cursor ms-3">
                                        <BiCommentEdit className='' />
                                        <p className='mb-0'>Edit</p>
                                      </a>
                                      <a className="btn_delete cursor ms-3">
                                        <RiDeleteBin2Line className='' />
                                        <p className='mb-0'>Delete</p>
                                      </a>
                                    </span>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                        </div>
                      </div>
                    </Row>
                    <Row className="g-3">

                      <div className='col-md-4'>
                        <div className="form-group cus-form-group">
                          <Form.Control placeholder="Card Number" className='fill-input' />
                          <label htmlFor="shipping" className='float-label'>Card Number</label>
                        </div>
                      </div>
                      <div className='col-md-4'>
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Exp Month</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Exp Month</label>
                          <IoMdArrowDropdown className='inputIcon' />
                        </div>
                      </div>
                      <div className='col-md-4'>
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Exp Year</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Exp Year</label>
                          <IoMdArrowDropdown className='inputIcon' />
                        </div>
                      </div>
                      <div className='col-md-12'>
                        <button className="btn-hover color-3 float-end">Save</button>
                      </div>
                    </Row>
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
export default Customer_Details;

