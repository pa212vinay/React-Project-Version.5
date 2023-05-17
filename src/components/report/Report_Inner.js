import React, { useState } from "react";
import { Row, Col, Nav, Tab, Form, Table } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import "react-datepicker/dist/react-datepicker.css";
// import  Login from '../login/Login';

import Report_Sidebar from "./Report_Sidebar";

const Report_Inner = () => {
    const [date, setDate] = useState(new Date());
    const cssadd = { left: '-220px' };
    const cssNadd = { left: '0px' };

    const cssmarginadd = { marginLeft: '220px' };
    const cssmarginremove = { marginLeft: '0px' }


    const [Side, setSide] = useState(cssadd);
    const [Sidemargin, setSidemargin] = useState(cssmarginremove);

    const showHide = () => {
        if (JSON.stringify(Side, Sidemargin) === JSON.stringify(cssadd, cssmarginadd)) {
            setSide(cssNadd);
            setSidemargin(cssmarginadd);
            console.log('if case', Side, Sidemargin);
        }
        else {
            setSide(cssadd)
            setSidemargin(cssmarginremove);
            console.log('else case', Side, Sidemargin);
        }
    }
    const [isActive, setIsActive] = useState(false);
    const [visible1, setShedule] = useState(false);
    const [day, setDay] = useState(true);
    const [hour, setHour] = useState(false);




    return (
        <>
            <div fluid className='report'>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div id="wrapper" class="toggled">
                            <div className=" bg_col pt-0 addtab">
                                <Row className='g-3'>
                                    <div className='col-md-12'>
                                        <div id="sidebar-wrapper" style={Side}>
                                            <Report_Sidebar />
                                        </div >
                                        <div id="page-content-wrapper" style={Sidemargin}>
                                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                                <Row className="p-2">
                                                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12} className='mb-3'>
                                                        <div className="mb-3" onClick={showHide} >
                                                            {isActive ?
                                                                <Icon icon="ic:round-close" className="baricon  close-icon" onClick={() => {
                                                                    setIsActive(!isActive)
                                                                }} /> :

                                                                <Icon icon="uis:bars" className="baricon" onClick={() => {
                                                                    setIsActive(!isActive)
                                                                }} />
                                                            }
                                                        </div>
                                                        <Nav variant="pills " >
                                                            <Nav.Item>
                                                                <Nav.Link eventKey="first">Sales Summary Parameters</Nav.Link>
                                                            </Nav.Item>
                                                            <Nav.Item>
                                                                <Nav.Link eventKey="second">Sales Summary Export</Nav.Link>
                                                            </Nav.Item>
                                                        </Nav>
                                                    </Col>
                                                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                                        <Tab.Content>
                                                            <Tab.Pane eventKey="first">
                                                                <div className="bg_col p-3">
                                                                    <Row className="g-3 mt-4">
                                                                        <Col xxl={3} xl={3} lg={3} md={3} sm={12} xs={12}>
                                                                            <div className="form-group cus-form-group">
                                                                                <Form.Control className='fill-input' type="date" name="datepic" placeholder="DateRange" value={date} onChange={(e) => setDate(e.target.value)} />
                                                                                <label htmlFor="shipping" className='float-label'>Date From</label>
                                                                            </div>
                                                                        </Col>
                                                                        <Col xxl={3} xl={3} lg={3} md={3} sm={12} xs={12}>
                                                                            <div className="form-group cus-form-group">
                                                                                <Form.Control className='fill-input' type="date" name="datepic" placeholder="DateRange" value={date} onChange={(e) => setDate(e.target.value)} />
                                                                                <label htmlFor="shipping" className='float-label'>Date To</label>
                                                                            </div>
                                                                        </Col>
                                                                        <Col xxl={3} xl={3} lg={3} md={3} sm={12} xs={12}>
                                                                            <div className="form-group cus-select-group">
                                                                                <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                                                                    <option>Yes</option>
                                                                                    <option value="1">One</option>
                                                                                    <option value="2">Two</option>
                                                                                    <option value="3">Three</option>
                                                                                </Form.Control>
                                                                                <label className='float-label' htmlFor="require_shipping">Source</label>
                                                                                <Icon icon="ic:round-keyboard-arrow-down" className='inputIcon' />
                                                                            </div>
                                                                        </Col>
                                                                        <Col xxl={3} xl={3} lg={3} md={3} sm={12} xs={12}>
                                                                            <div className="form-group cus-select-group">
                                                                                <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                                                                    <option>Yes</option>
                                                                                    <option value="1">One</option>
                                                                                    <option value="2">Two</option>
                                                                                    <option value="3">Three</option>
                                                                                </Form.Control>
                                                                                <label className='float-label' htmlFor="require_shipping">Customer Type</label>
                                                                                <Icon icon="ic:round-keyboard-arrow-down" className='inputIcon' />
                                                                            </div>
                                                                        </Col>
                                                                        <div className="text-center">
                                                                            <Link to="/Login">
                                                                            <button className="btn-hover color-3 my-3">View Report</button>
                                                                            </Link>
                                                                        </div>
                                                                    </Row>
                                                                </div>
                                                                <div className="bg_col p-3 mt-3">
                                                                    <Row>
                                                                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                                                            <h3 className="txt_color fw-bold mb-4">HieCOR - Beta Sales Summary Report</h3>
                                                                            <div>

                                                                                <p>Date Range: 3/1/2023 - 3/15/2023</p>
                                                                                <p>Source: </p>
                                                                                <p>Customer Type: </p>
                                                                                <p>Refreshed on: 3/15/2023 2:54:33 AM PDT</p>
                                                                            </div>
                                                                            <div className=" row mt-3">
                                                                                <h6 className='mt-4 mb-3 fw-bold'>Details</h6>
                                                                                <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                                                                    <Table responsive table-striped>
                                                                                        <thead>
                                                                                            <tr>
                                                                                                <th>#</th>
                                                                                                <th>Description</th>
                                                                                                <th>Part Number</th>
                                                                                                <th>Sequence Number</th>
                                                                                            </tr>
                                                                                        </thead>
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td>1</td>
                                                                                                <td>IF COMPRESSOR HAS BEEN REPLACED, CHECK LABEL-OVLD & RELA</td>
                                                                                                <td>NOTE:</td>
                                                                                                <td>NI</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>2</td>
                                                                                                <td>BREAKER STRIP-CABINET, HINGE S</td>
                                                                                                <td>A2198P2</td>
                                                                                                <td>NI</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>3</td>
                                                                                                <td>BREAKER STRIP-CABINET, HINGE S</td>
                                                                                                <td>A2198P2</td>
                                                                                                <td>NI</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>4</td>
                                                                                                <td>BREAKER STRIP-CABINET, HINGE S</td>
                                                                                                <td>A2198P2</td>
                                                                                                <td>NI</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>5</td>
                                                                                                <td>BREAKER STRIP-CABINET, HINGE S</td>
                                                                                                <td>A2198P2</td>
                                                                                                <td>NI</td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </Table>
                                                                                </Col>
                                                                                <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                                                                    <Table responsive>
                                                                                        <thead>
                                                                                            <tr>
                                                                                                <th>#</th>
                                                                                                <th>Description</th>
                                                                                                <th>Part Number</th>
                                                                                                <th>Sequence Number</th>
                                                                                            </tr>
                                                                                        </thead>
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td>1</td>
                                                                                                <td>IF COMPRESSOR HAS BEEN REPLACED, CHECK LABEL-OVLD & RELA</td>
                                                                                                <td>NOTE:</td>
                                                                                                <td>NI</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>2</td>
                                                                                                <td>BREAKER STRIP-CABINET, HINGE S</td>
                                                                                                <td>A2198P2</td>
                                                                                                <td>NI</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>3</td>
                                                                                                <td>BREAKER STRIP-CABINET, HINGE S</td>
                                                                                                <td>A2198P2</td>
                                                                                                <td>NI</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>4</td>
                                                                                                <td>BREAKER STRIP-CABINET, HINGE S</td>
                                                                                                <td>A2198P2</td>
                                                                                                <td>NI</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>5</td>
                                                                                                <td>BREAKER STRIP-CABINET, HINGE S</td>
                                                                                                <td>A2198P2</td>
                                                                                                <td>NI</td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </Table>
                                                                                </Col>
                                                                            </div>
                                                                        </Col>
                                                                    </Row>
                                                                </div>

                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="second">
                                                                <Row className="g-3">
                                                                    <Col xxl={4} xl={4} lg={4} md={4} sm={12} xs={12}>
                                                                        <div className="form-group cus-select-group my-4">
                                                                            <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                                                                <option>Yes</option>
                                                                                <option value="1">One</option>
                                                                                <option value="2">Two</option>
                                                                                <option value="3">Three</option>
                                                                            </Form.Control>
                                                                            <label className='float-label' htmlFor="require_shipping">Source</label>
                                                                            <Icon icon="ic:round-keyboard-arrow-down" className='inputIcon' />
                                                                        </div>
                                                                    </Col>

                                                                    <Col xxl={4} xl={4} lg={4} md={4} sm={12} xs={12}>
                                                                        <div className="mt-4 pt-2">
                                                                            <Form.Check inline label="Run Immediately" name="group1" type="radio" onClick={() => setShedule(false)} />
                                                                            <Form.Check inline label="Schedule" name="group1" type="radio" onClick={() => setShedule(true)} />
                                                                        </div>
                                                                    </Col>
                                                                </Row>
                                                                {
                                                                    visible1 &&
                                                                    <div className="bg_col p-3">
                                                                        <Row className=" g-3 mt-0">
                                                                            <Col xxl={3} xl={3} lg={3} md={3} sm={12} xs={12}>
                                                                                <div className="form-group cus-form-group">
                                                                                    <Form.Control placeholder="Description" className='fill-input' />
                                                                                    <label htmlFor="shipping" className='float-label'>Description</label>
                                                                                </div>
                                                                            </Col>
                                                                            <Col xxl={3} xl={3} lg={3} md={3} sm={12} xs={12}>
                                                                                <div className="form-group cus-form-group">
                                                                                    <Form.Control placeholder="Email To" className='fill-input' />
                                                                                    <label htmlFor="shipping" className='float-label'>Email To</label>
                                                                                </div>
                                                                            </Col>
                                                                            <Col xxl={3} xl={3} lg={3} md={3} sm={12} xs={12}>
                                                                                <div className="form-group cus-select-group">
                                                                                    <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                                                                        <option>Yes</option>
                                                                                        <option value="1">One</option>
                                                                                        <option value="2">Two</option>
                                                                                        <option value="3">Three</option>
                                                                                    </Form.Control>
                                                                                    <label className='float-label' htmlFor="require_shipping">Source</label>
                                                                                    <Icon icon="ic:round-keyboard-arrow-down" className='inputIcon' />
                                                                                </div>
                                                                            </Col>
                                                                            <Col xxl={3} xl={3} lg={3} md={3} sm={12} xs={12}>
                                                                                <div className="form-group cus-select-group">
                                                                                    <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                                                                        <option>Yes</option>
                                                                                        <option value="1">One</option>
                                                                                        <option value="2">Two</option>
                                                                                        <option value="3">Three</option>
                                                                                    </Form.Control>
                                                                                    <label className='float-label' htmlFor="require_shipping">Customer Type</label>
                                                                                    <Icon icon="ic:round-keyboard-arrow-down" className='inputIcon' />
                                                                                </div>
                                                                            </Col>
                                                                            <div className="mt-3">
                                                                                <Form.Check inline label="Hour" name="group1" type="radio" onClick={() => setHour(false)} />
                                                                                <Form.Check inline label="Day" name="group1" type="radio" checked onClick={() => setDay(true)} />
                                                                                <Form.Check inline label="Week" name="group1" type="radio" />
                                                                                <Form.Check inline label="Month" name="group1" type="radio" />
                                                                                <Form.Check inline label="Once" name="group1" type="radio" />
                                                                            </div>
                                                                            {
                                                                                hour &&
                                                                                <div className="bg_col">
                                                                                <Row className="hour"> 
                                                                                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                                                                        <Row className="g-3">
                                                                                            <h3 className="txt_color mt-4">Run the schedule every:</h3>
                                                                                            <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                                                                                <div className="form-group cus-form-group">
                                                                                                    <Form.Control placeholder="Hourse" className='fill-input' />
                                                                                                    <label htmlFor="shipping" className='float-label'>Hourse</label>
                                                                                                </div>
                                                                                            </Col>
                                                                                            <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                                                                                <div className="form-group cus-form-group">
                                                                                                    <Form.Control placeholder="Minutes" className='fill-input' />
                                                                                                    <label htmlFor="shipping" className='float-label'>Minutes</label>
                                                                                                </div>
                                                                                            </Col>
                                                                                        </Row>
                                                                                    </Col>
                                                                                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                                                                        <Row className="g-3">
                                                                                            <h3 className="txt_color mt-4">Start Time</h3>
                                                                                            <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                                                                                <div className="form-group cus-select-group">
                                                                                                    <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                                                                                        <option>Select Hours</option>
                                                                                                        <option value="1">1</option>
                                                                                                        <option value="2">2</option>
                                                                                                        <option value="3">3</option>
                                                                                                    </Form.Control>
                                                                                                    <Icon icon="ic:round-keyboard-arrow-down" className='inputIcon' />
                                                                                                </div>
                                                                                            </Col>
                                                                                            <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                                                                                <div className="form-group cus-select-group">
                                                                                                    <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                                                                                        <option>Select Minuts</option>
                                                                                                        <option value="1">00</option>
                                                                                                        <option value="2">01</option>
                                                                                                        <option value="3">02</option>
                                                                                                    </Form.Control>
                                                                                                    <Icon icon="ic:round-keyboard-arrow-down" className='inputIcon' />
                                                                                                </div>
                                                                                            </Col>
                                                                                            <div className="mt-3">
                                                                                                <Form.Check inline label="AM" name="group3" type="radio" />
                                                                                                <Form.Check inline label="PM" name="group3" type="radio" />
                                                                                            </div>
                                                                                            <div className="text-end">
                                                                                                <button className="btn-hover color-1 me-2">Cancel</button>
                                                                                                <button className="btn-hover color-3 r_mt-3">Save</button>
                                                                                            </div>
                                                                                        </Row>
                                                                                    </Col>
                                                                                </Row>
                                                                                </div>
                                                                            }
                                                                            {
                                                                                day &&
                                                                                <Row className="day">
                                                                                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                                                                        <div className="mt-4">
                                                                                            <h3 className="txt_color mt-3">Daily Schedule</h3>
                                                                                            <Form.Check inline label="On the following Days" name="group2" type="radio" />
                                                                                            <div className="mt-3">
                                                                                                <Form.Check aria-label="option 1" label="Mon" inline />
                                                                                                <Form.Check aria-label="option 2" label="Tue" inline />
                                                                                                <Form.Check aria-label="option 3" label="Wed" inline />
                                                                                                <Form.Check aria-label="option 4" label="Thur" inline />
                                                                                                <Form.Check aria-label="option 5" label="Fri" inline />
                                                                                                <Form.Check aria-label="option 6" label="Sat" inline />
                                                                                                <Form.Check aria-label="option 7" label="Sun" inline />
                                                                                            </div>
                                                                                            <Form.Check className="mt-3" inline label="On the following Days" name="group2" type="radio" />
                                                                                            <Form.Group as={Row} className="" controlId="formHorizontalEmail">
                                                                                                <Col xxl={5} xl={5} lg={5} md={5} sm={12} xs={12}>
                                                                                                    <Form.Check className="mt-3" inline label="Repeat After this number of days" name="group2" type="radio" />
                                                                                                </Col>
                                                                                                <Col xxl={2} xl={2} lg={2} md={2} sm={12} xs={12}>
                                                                                                    <Form.Control type="text" placeholder="" />
                                                                                                </Col>
                                                                                            </Form.Group>
                                                                                        </div>
                                                                                    </Col>
                                                                                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                                                                        <Row className="g-3">
                                                                                            <h3 className="txt_color mt-4">Start Time</h3>
                                                                                            <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                                                                                <div className="form-group cus-select-group">
                                                                                                    <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                                                                                        <option>Select Hours</option>
                                                                                                        <option value="1">1</option>
                                                                                                        <option value="2">2</option>
                                                                                                        <option value="3">3</option>
                                                                                                    </Form.Control>
                                                                                                    <Icon icon="ic:round-keyboard-arrow-down" className='inputIcon' />
                                                                                                </div>
                                                                                            </Col>
                                                                                            <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                                                                                <div className="form-group cus-select-group">
                                                                                                    <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                                                                                        <option>Select Minuts</option>
                                                                                                        <option value="1">00</option>
                                                                                                        <option value="2">01</option>
                                                                                                        <option value="3">02</option>
                                                                                                    </Form.Control>
                                                                                                    <Icon icon="ic:round-keyboard-arrow-down" className='inputIcon' />
                                                                                                </div>
                                                                                            </Col>
                                                                                            <div className="mt-3">
                                                                                                <Form.Check inline label="AM" name="group3" type="radio" />
                                                                                                <Form.Check inline label="PM" name="group3" type="radio" />
                                                                                            </div>
                                                                                            <div className="text-end">
                                                                                                <button className="btn-hover color-1 me-2">Cancel</button>
                                                                                                <button className="btn-hover color-3 r_mt-3">Save</button>
                                                                                            </div>
                                                                                        </Row>
                                                                                    </Col>
                                                                                </Row>
                                                                            }
                                                                            <Row className="week">
                                                                                <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                                                                    <div className="mt-4">
                                                                                        <h3 className="txt_color mt-3">Weekly Schedule</h3>
                                                                                        <Form.Check inline label="On the following Days" name="group2" type="radio" />
                                                                                        <div className="mt-3">
                                                                                            <Form.Check aria-label="option 1" label="Mon" inline />
                                                                                            <Form.Check aria-label="option 2" label="Tue" inline />
                                                                                            <Form.Check aria-label="option 3" label="Wed" inline />
                                                                                            <Form.Check aria-label="option 4" label="Thur" inline />
                                                                                            <Form.Check aria-label="option 5" label="Fri" inline />
                                                                                            <Form.Check aria-label="option 6" label="Sat" inline />
                                                                                            <Form.Check aria-label="option 7" label="Sun" inline />
                                                                                        </div>

                                                                                        <Form.Group as={Row} className="mt-4" controlId="formHorizontalEmail">
                                                                                            <Col xxl={5} xl={5} lg={5} md={5} sm={12} xs={12}>
                                                                                                <lable>Repeat After this number of weeks:</lable>
                                                                                            </Col>
                                                                                            <Col xxl={2} xl={2} lg={2} md={2} sm={12} xs={12} >
                                                                                                <div className="d-flex">
                                                                                                    <Form.Control type="text" placeholder="" />
                                                                                                </div>
                                                                                            </Col>
                                                                                            <Col xxl={2} xl={2} lg={2} md={2} sm={12} xs={12}>
                                                                                                <lable className='mt-3'>On Days</lable>
                                                                                            </Col>
                                                                                        </Form.Group>
                                                                                    </div>
                                                                                </Col>
                                                                                <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                                                                    <Row className="g-3">
                                                                                        <h3 className="txt_color mt-4">Start Time</h3>
                                                                                        <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                                                                            <div className="form-group cus-select-group">
                                                                                                <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                                                                                    <option>Select Hours</option>
                                                                                                    <option value="1">1</option>
                                                                                                    <option value="2">2</option>
                                                                                                    <option value="3">3</option>
                                                                                                </Form.Control>
                                                                                                <Icon icon="ic:round-keyboard-arrow-down" className='inputIcon' />
                                                                                            </div>
                                                                                        </Col>
                                                                                        <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                                                                            <div className="form-group cus-select-group">
                                                                                                <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                                                                                    <option>Select Minuts</option>
                                                                                                    <option value="1">00</option>
                                                                                                    <option value="2">01</option>
                                                                                                    <option value="3">02</option>
                                                                                                </Form.Control>
                                                                                                <Icon icon="ic:round-keyboard-arrow-down" className='inputIcon' />
                                                                                            </div>
                                                                                        </Col>
                                                                                        <div className="mt-3">
                                                                                            <Form.Check inline label="AM" name="group3" type="radio" />
                                                                                            <Form.Check inline label="PM" name="group3" type="radio" />
                                                                                        </div>
                                                                                        <div className="text-end">
                                                                                            <button className="btn-hover color-1 me-2">Cancel</button>
                                                                                            <button className="btn-hover color-3 r_mt-3">Save</button>
                                                                                        </div>
                                                                                    </Row>
                                                                                </Col>
                                                                            </Row>

                                                                            <Row className="Month">
                                                                                <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                                                                    <div className="mt-4">
                                                                                        <h3 className="txt_color mt-3">Weekly Schedule</h3>
                                                                                        <Form.Check inline label="On the following Days" name="group3" type="radio" />
                                                                                        <div className="mt-3">
                                                                                            <Form.Check aria-label="option 1" label="Jan" inline />
                                                                                            <Form.Check aria-label="option 2" label="Feb" inline />
                                                                                            <Form.Check aria-label="option 3" label="Mar" inline />
                                                                                            <Form.Check aria-label="option 4" label="Apr" inline />
                                                                                            <Form.Check aria-label="option 5" label="May" inline />
                                                                                            <Form.Check aria-label="option 6" label="Jun" inline />
                                                                                            <Form.Check aria-label="option 7" label="Jul" inline />
                                                                                            <Form.Check aria-label="option 7" label="Aug" inline />
                                                                                            <Form.Check aria-label="option 7" label="Sep" inline />
                                                                                            <Form.Check aria-label="option 7" label="Oct" inline />
                                                                                            <Form.Check aria-label="option 7" label="Nov" inline />
                                                                                            <Form.Check aria-label="option 7" label="Dec" inline />
                                                                                        </div>

                                                                                        <Form.Group as={Row} className="mt-4" controlId="formHorizontalEmail">
                                                                                            <Col xxl={5} xl={5} lg={5} md={5} sm={12} xs={12}>
                                                                                                <Form.Check className="mt-2" inline label="On Week Of Months" name="group3" type="radio" />
                                                                                            </Col>
                                                                                            <Col xxl={2} xl={2} lg={2} md={2} sm={12} xs={12} >
                                                                                                <div className="d-flex">
                                                                                                    <div className="form-group cus-select-group">
                                                                                                        <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                                                                                            <option>Select </option>
                                                                                                            <option value="1">1</option>
                                                                                                            <option value="2">2</option>
                                                                                                            <option value="3">3</option>
                                                                                                        </Form.Control>
                                                                                                        <Icon icon="ic:round-keyboard-arrow-down" className='inputIcon' />
                                                                                                    </div>
                                                                                                </div>
                                                                                            </Col>
                                                                                        </Form.Group>
                                                                                        <div className="mt-4">
                                                                                            <h3 className="txt_color mt-3">On day of week:</h3>

                                                                                            <div className="mt-3">
                                                                                                <Form.Check aria-label="option 1" label="Mon" inline />
                                                                                                <Form.Check aria-label="option 2" label="Tue" inline />
                                                                                                <Form.Check aria-label="option 3" label="Wed" inline />
                                                                                                <Form.Check aria-label="option 4" label="Thur" inline />
                                                                                                <Form.Check aria-label="option 5" label="Fri" inline />
                                                                                                <Form.Check aria-label="option 6" label="Sat" inline />
                                                                                                <Form.Check aria-label="option 7" label="Sun" inline />
                                                                                            </div>
                                                                                            <Form.Group as={Row} className="mt-4" controlId="formHorizontalEmail">
                                                                                                <Col xxl={5} xl={5} lg={5} md={5} sm={12} xs={12}>
                                                                                                    <Form.Check className="mt-2" inline label="On calender day(s):" name="group2" type="radio" />
                                                                                                </Col>
                                                                                                <Col xxl={2} xl={2} lg={2} md={2} sm={12} xs={12}>
                                                                                                    <Form.Control type="text" placeholder="" />
                                                                                                </Col>
                                                                                                <Col xxl={2} xl={2} lg={2} md={2} sm={12} xs={12}>
                                                                                                <lable className='mt-3'>Like 1,3-6</lable>
                                                                                            </Col>
                                                                                            </Form.Group>
                                                                                        </div>
                                                                                    </div>
                                                                                </Col>
                                                                                <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                                                                    <Row className="g-3">
                                                                                        <h3 className="txt_color mt-4">Start Time</h3>
                                                                                        <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                                                                            <div className="form-group cus-select-group">
                                                                                                <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                                                                                    <option>Select Hours</option>
                                                                                                    <option value="1">1</option>
                                                                                                    <option value="2">2</option>
                                                                                                    <option value="3">3</option>
                                                                                                </Form.Control>
                                                                                                <Icon icon="ic:round-keyboard-arrow-down" className='inputIcon' />
                                                                                            </div>
                                                                                        </Col>
                                                                                        <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                                                                            <div className="form-group cus-select-group">
                                                                                                <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                                                                                    <option>Select Minuts</option>
                                                                                                    <option value="1">00</option>
                                                                                                    <option value="2">01</option>
                                                                                                    <option value="3">02</option>
                                                                                                </Form.Control>
                                                                                                <Icon icon="ic:round-keyboard-arrow-down" className='inputIcon' />
                                                                                            </div>
                                                                                        </Col>
                                                                                        <div className="mt-3">
                                                                                            <Form.Check inline label="AM" name="group3" type="radio" />
                                                                                            <Form.Check inline label="PM" name="group3" type="radio" />
                                                                                        </div>
                                                                                        <div className="text-end">
                                                                                            <button className="btn-hover color-1 me-2">Cancel</button>
                                                                                            <button className="btn-hover color-3 r_mt-3">Save</button>
                                                                                        </div>
                                                                                    </Row>
                                                                                </Col>
                                                                                
                                                                            </Row>
                                                                            <Row className="Once">
                                                                            <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                                                                    <Row className="g-3">
                                                                                    <h3 className="txt_color mt-4">One-time Schedule</h3>
                                                                                    <h3 className="txt_color mt-2">Run Only Once:</h3>
                                                                                        <h3 className="txt_color mt-2">Start Time</h3>
                                                                                        <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                                                                            <div className="form-group cus-select-group">
                                                                                                <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                                                                                    <option>Select Hours</option>
                                                                                                    <option value="1">1</option>
                                                                                                    <option value="2">2</option>
                                                                                                    <option value="3">3</option>
                                                                                                </Form.Control>
                                                                                                <Icon icon="ic:round-keyboard-arrow-down" className='inputIcon' />
                                                                                            </div>
                                                                                        </Col>
                                                                                        <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                                                                            <div className="form-group cus-select-group">
                                                                                                <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                                                                                    <option>Select Minuts</option>
                                                                                                    <option value="1">00</option>
                                                                                                    <option value="2">01</option>
                                                                                                    <option value="3">02</option>
                                                                                                </Form.Control>
                                                                                                <Icon icon="ic:round-keyboard-arrow-down" className='inputIcon' />
                                                                                            </div>
                                                                                        </Col>
                                                                                        <div className="mt-3">
                                                                                            <Form.Check inline label="AM" name="group3" type="radio" />
                                                                                            <Form.Check inline label="PM" name="group3" type="radio" />
                                                                                        </div>
                                                                                        <div className="text-end">
                                                                                            <button className="btn-hover color-1 me-2">Cancel</button>
                                                                                            <button className="btn-hover color-3 r_mt-3">Save</button>
                                                                                        </div>
                                                                                    </Row>
                                                                                </Col>
                                                                            </Row>
                                                                        </Row>
                                                                    </div>

                                                                }
                                                                <div className="bg_col p-3 mt-3">
                                                                    <Row className="g-3">
                                                                        <Col md={12}>
                                                                            <div>
                                                                                <h3 className="txt_color">HieCOR - Beta Sales Summary Report</h3>
                                                                                <p>Date Range: 3/1/2023 - 3/15/2023</p>
                                                                                <p>Source: </p>
                                                                                <p>Customer Type: </p>
                                                                                <p>Refreshed on: 3/15/2023 2:54:33 AM PDT</p>
                                                                            </div>
                                                                            <div className=" row mt-3">
                                                                                <h6 className='mt-4 mb-3 fw-bold'>Details</h6>
                                                                                <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                                                                    <Table responsive table-striped>
                                                                                        <thead>
                                                                                            <tr>
                                                                                                <th>#</th>
                                                                                                <th>Description</th>
                                                                                                <th>Part Number</th>
                                                                                                <th>Sequence Number</th>
                                                                                            </tr>
                                                                                        </thead>
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td>1</td>
                                                                                                <td>IF COMPRESSOR HAS BEEN REPLACED, CHECK LABEL-OVLD & RELA</td>
                                                                                                <td>NOTE:</td>
                                                                                                <td>NI</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>2</td>
                                                                                                <td>BREAKER STRIP-CABINET, HINGE S</td>
                                                                                                <td>A2198P2</td>
                                                                                                <td>NI</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>3</td>
                                                                                                <td>BREAKER STRIP-CABINET, HINGE S</td>
                                                                                                <td>A2198P2</td>
                                                                                                <td>NI</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>4</td>
                                                                                                <td>BREAKER STRIP-CABINET, HINGE S</td>
                                                                                                <td>A2198P2</td>
                                                                                                <td>NI</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>5</td>
                                                                                                <td>BREAKER STRIP-CABINET, HINGE S</td>
                                                                                                <td>A2198P2</td>
                                                                                                <td>NI</td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </Table>
                                                                                </Col>
                                                                                <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                                                                    <Table responsive>
                                                                                        <thead>
                                                                                            <tr>
                                                                                                <th>#</th>
                                                                                                <th>Description</th>
                                                                                                <th>Part Number</th>
                                                                                                <th>Sequence Number</th>
                                                                                            </tr>
                                                                                        </thead>
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td>1</td>
                                                                                                <td>IF COMPRESSOR HAS BEEN REPLACED, CHECK LABEL-OVLD & RELA</td>
                                                                                                <td>NOTE:</td>
                                                                                                <td>NI</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>2</td>
                                                                                                <td>BREAKER STRIP-CABINET, HINGE S</td>
                                                                                                <td>A2198P2</td>
                                                                                                <td>NI</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>3</td>
                                                                                                <td>BREAKER STRIP-CABINET, HINGE S</td>
                                                                                                <td>A2198P2</td>
                                                                                                <td>NI</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>4</td>
                                                                                                <td>BREAKER STRIP-CABINET, HINGE S</td>
                                                                                                <td>A2198P2</td>
                                                                                                <td>NI</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>5</td>
                                                                                                <td>BREAKER STRIP-CABINET, HINGE S</td>
                                                                                                <td>A2198P2</td>
                                                                                                <td>NI</td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </Table>
                                                                                </Col>
                                                                            </div>
                                                                        </Col>
                                                                    </Row>
                                                                </div>
                                                            </Tab.Pane>
                                                        </Tab.Content>
                                                    </Col>
                                                </Row>
                                            </Tab.Container>
                                        </div>
                                    </div>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
}
export default Report_Inner;