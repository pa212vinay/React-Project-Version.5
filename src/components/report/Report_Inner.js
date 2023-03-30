import React, { useState } from "react";
import { Container, Row, Col, Nav, Tab, Form, Table, NavLink } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import "react-datepicker/dist/react-datepicker.css";

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

    return (
        <>
            <div fluid className='report'>
                <Row>
                    <Col md="12">
                        <div id="wrapper" class="toggled">
                            <div className=" bg_col pt-0 addtab">
                                <Row className='g-3'>
                                    <div className='col-md-12'>
                                        <div id="sidebar-wrapper" style={Side}>
                                            <Icon icon="ic:round-close" className="close-icon" onClick={showHide} />
                                            <ul class="sidebar-nav">
                                                <li class="sidebar-brand"> <a href="#"> Report </a> </li>
                                                <li> <NavLink>Sales Summary</NavLink> </li>
                                                <li> <NavLink>Transactions By Agent</NavLink> </li>
                                                <li> <NavLink>Product Profitability</NavLink> </li>
                                                <li> <NavLink>Inventory Summary</NavLink> </li>
                                                <li> <NavLink>Inventory by Category</NavLink> </li>
                                                <li> <NavLink>Inventory Totals</NavLink> </li>
                                                <li> <NavLink>Customer Data Collection</NavLink> </li>
                                                <li> <NavLink>zReport</NavLink> </li>
                                                <li> <NavLink>zSample1</NavLink> </li>
                                            </ul>
                                        </div>
                                        <div id="page-content-wrapper" style={Sidemargin}>
                                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                                <Row className="p-3">
                                                    <Col sm={12} md={12} lg={12} className='mb-3'>
                                                        <Icon icon="uis:bars" className="baricon" onClick={showHide} />
                                                        <Nav variant="pills " >
                                                            <Nav.Item>
                                                                <Nav.Link eventKey="first">Sales Summary Parameters</Nav.Link>
                                                            </Nav.Item>
                                                            <Nav.Item>
                                                                <Nav.Link eventKey="second">Sales Summary Export</Nav.Link>
                                                            </Nav.Item>
                                                        </Nav>
                                                    </Col>
                                                    <Col sm={12} md={12} lg={12}>
                                                        <Tab.Content>
                                                            <Tab.Pane eventKey="first">
                                                                <Row className="g-3 mt-4">
                                                                    <Col md={3}>
                                                                        <div className="form-group cus-form-group">
                                                                            <Form.Control className='fill-input' type="date" name="datepic" placeholder="DateRange" value={date} onChange={(e) => setDate(e.target.value)} />
                                                                            <label htmlFor="shipping" className='float-label'>Date From</label>
                                                                        </div>
                                                                    </Col>
                                                                    <Col md={3}>
                                                                        <div className="form-group cus-form-group">
                                                                            <Form.Control className='fill-input' type="date" name="datepic" placeholder="DateRange" value={date} onChange={(e) => setDate(e.target.value)} />
                                                                            <label htmlFor="shipping" className='float-label'>Date To</label>
                                                                        </div>
                                                                    </Col>
                                                                    <Col md={3}>
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
                                                                    <Col md={3}>
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
                                                                    <div className="text-end">
                                                                        <button className="btn-hover color-3 my-3">View Report</button>
                                                                    </div>

                                                                    <Col md={12}>
                                                                        <div>
                                                                            <h3>HieCOR - Beta Sales Summary Report</h3>
                                                                            <p>Date Range: 3/1/2023 - 3/15/2023</p>
                                                                            <p>Source: </p>
                                                                            <p>Customer Type: </p>
                                                                            <p>Refreshed on: 3/15/2023 2:54:33 AM PDT</p>
                                                                        </div>
                                                                        <div className=" row mt-3">
                                                                            <h6 className='mt-4 mb-3 fw-bold'>Details</h6>
                                                                            <Col md={6}>
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
                                                                            <Col md={6}>
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


                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="second">
                                                                <Row>
                                                                    <Col md={4}>
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
                                                                    <div>
                                                                        <Form.Check inline label="Run Immediately" name="group1" type="radio" />
                                                                        <Form.Check inline label="Schedule" name="group1" type="radio" />
                                                                    </div>
                                                                    <div className="mt-5">
                                                                        <Form.Check aria-label="option 1" label="Purchase Postage" inline />
                                                                        <Form.Check aria-label="option 2" label="Packing Slip" inline />
                                                                        <Form.Check aria-label="option 3" label="Mark Shipped" inline />
                                                                        <Form.Check aria-label="option 4" label="Auto Combine" inline />
                                                                    </div>
                                                                </Row>


                                                                <Row className="g-3 mt-4">
                                                                    <Col md={3}>
                                                                        <div className="form-group cus-form-group">
                                                                            <Form.Control className='fill-input' type="date" name="datepic" placeholder="DateRange" value={date} onChange={(e) => setDate(e.target.value)} />
                                                                            <label htmlFor="shipping" className='float-label'>Date From</label>
                                                                        </div>
                                                                    </Col>
                                                                    <Col md={3}>
                                                                        <div className="form-group cus-form-group">
                                                                            <Form.Control className='fill-input' type="date" name="datepic" placeholder="DateRange" value={date} onChange={(e) => setDate(e.target.value)} />
                                                                            <label htmlFor="shipping" className='float-label'>Date To</label>
                                                                        </div>
                                                                    </Col>
                                                                    <Col md={3}>
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
                                                                    <Col md={3}>
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
                                                                    <div className="text-end">
                                                                        <button className="btn-hover color-3 my-3">View Report</button>
                                                                    </div>
                                                                    <Col md={12}>
                                                                        <div>
                                                                            <h3>HieCOR - Beta Sales Summary Report</h3>
                                                                            <p>Date Range: 3/1/2023 - 3/15/2023</p>
                                                                            <p>Source: </p>
                                                                            <p>Customer Type: </p>
                                                                            <p>Refreshed on: 3/15/2023 2:54:33 AM PDT</p>
                                                                        </div>
                                                                        <div className=" row mt-3">
                                                                            <h6 className='mt-4 mb-3 fw-bold'>Details</h6>
                                                                            <Col md={6}>
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
                                                                            <Col md={6}>
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