import Row from 'react-bootstrap/Row';
import React from "react";
import { Form, Table, Col, Nav, Tab } from 'react-bootstrap';

import "react-datepicker/dist/react-datepicker.css";



const Parts_Lookup_Inner = () => {
    return (
        <>
            <div className="p-3 bg_col pt-0 port_lookup">
                <Row className='g-3 mt-1'>
                    <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12} className='mb-3'>
                                    <Nav variant="pills " >
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Model To Part</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Part Inventory & Pricing</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <Row className='g-3'>
                                                <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                                    <div className="form-group d-flex cus-form-group">
                                                        <Form.Control className='fill-input' placeholder='Enter Model Number' />
                                                        <label htmlFor="Enter Model Number" className='float-label'>Enter Model Number<span className='strick'>*</span></label>
                                                    </div>
                                                </div>
                                                <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                                    <button class="btn-hover color-3 py-2 ms-2 r_mt-2">Search</button>
                                                </div>
                                            </Row>
                                            <div className="mt-3">
                                                <h6 className='mt-4 mb-3 fw-bold'>Details</h6>
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
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                        <Row className='g-3'>
                                            <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                                <div className="form-group d-flex cus-form-group">
                                                    <Form.Control className='fill-input' placeholder='Part Number' />
                                                    <label htmlFor="Part Number" className='float-label'>Part Number<span className='strick'>*</span></label>
                                                </div>
                                            </div>
                                            <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                                    <button class="btn-hover color-3 py-2 ms-2 r_mt-2">Search</button>
                                                </div>
                                                </Row>
                                            <div className="mt-3">
                                                <h6 className='mt-4 mb-3 fw-bold'>Part Details</h6>
                                                <Table responsive>
                                                    <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Retail Price</th>
                                                            <th>Part Price</th>
                                                            <th>Core Price</th>
                                                            <th>Quantity On Hand</th>
                                                            <th>Description</th>
                                                            <th>MFG Code</th>
                                                            <th>MFG Name</th>
                                                            <th>Total Price</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>

                                                            <td>1</td>
                                                            <td>18.9500</td>
                                                            <td>18.9500</td>
                                                            <td>0.0000</td>
                                                            <td>0</td>
                                                            <td>RATCHET HANDLE</td>
                                                            <td>YAD</td>
                                                            <td>YEATS APPLIANCE DOLLY</td>
                                                            <td>18.9500</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                            <div className="mt-3">
                                                <h6 className='mt-4 mb-3 fw-bold'>Available Location</h6>
                                                <Table responsive>
                                                    <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Location ID</th>
                                                            <th>Country Code</th>
                                                            <th>Location Name</th>
                                                            <th>Available Quantity</th>
                                                            <th>City Name</th>
                                                            <th>State Code</th>
                                                            <th>Postal Code</th>
                                                            <th>Address</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>menual testing</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>menual testing</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td>menual testing</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td>menual testing</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td>menual testing</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td>menual testing</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td>menual testing</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td>menual testing</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td>menual testing</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td>menual testing</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td>menual testing</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td>menual testing</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                            <td>$399.00</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </div>
                </Row>
            </div>
        </>
    );
}
export default Parts_Lookup_Inner;