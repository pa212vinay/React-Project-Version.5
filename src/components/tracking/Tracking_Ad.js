import React, { useState } from "react";
import { Form, Row, Col, Table, Modal, Nav, Tab } from 'react-bootstrap';
import { Icon } from '@iconify/react';



import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Tracking_Ad = () => {
    const [Traick, setTrack] = useState(false);
    return (
        <>
            <Modal size="lg" show={Traick} onHide={() => setTrack(false)} aria-labelledby="example-modal-1">
                <div className="">
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-1">
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col md={12}>
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                <Nav variant="pills " >
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Sales Summary Parameters</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Sales Summary Export</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="Third">Sales Summary Export</Nav.Link>
                                    </Nav.Item>
                                </Nav>

                                <Tab.Content>
                                    <Tab.Pane eventKey="first">

                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">

                                    </Tab.Pane>
                                    <Tab.Pane eventKey="Third">

                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>

                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="float-end mb-2 mt-3">
                            <button className="btn-hover color-1 me-2">Cancel</button>
                            <button className="btn-hover color-2 r_mt-2">Update Product Inventory</button>
                        </div>
                    </Modal.Footer>
                </div>
            </Modal>


            <div className="bg_col p-3">
                <Row>
                    <div className='col-md-12'>
                        <div className='float-end'>

                            <button type="button" class="btn-hover color-2 me-2">Reset</button>
                            <button type="button" class="btn-hover color-2 me-2">New Campaign</button>
                            <button type="button" class="btn-hover color-2 me-2">New Affiliate</button>

                            <button type="button" class="btn btn-outline-primary me-2">Reset</button>
                            <button type="button" class="btn btn-outline-success me-2"><Icon icon="uiw:file-excel" className='text-green' /></button>
                            <button type="button" class="btn btn-outline-primary me-2"><Icon icon="uiw:table" /></button>
                            <div className="form-group cus-form-group d-inline-block">
                                <Form.Control placeholder="Supplier Name" className='fill-input' />
                                <label className='float-label'>Search</label>
                                <BsSearch className='inputIcon' />
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 contact">
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th><Form.Check inline name="group1" /></th>
                                    <th>Product ID</th>
                                    <th>Product Code</th>
                                    <th>Brand</th>
                                    <th>Title</th>
                                    <th>Price</th>
                                    <th>Cost</th>
                                    <th>On Hand</th>
                                    <th>Commited</th>
                                    <th>Available to Sell</th>
                                    <th>On Open PO</th>
                                    <th>Primary Category</th>
                                    <th>UPC</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><Form.Check inline name="group1" /></td>
                                    <td>1</td>
                                    <td>menual testing</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>
                                        <div className='card_detail'>
                                            <span className='text-center d-flex'>
                                                <Link className="btn_edit cursor" to="">
                                                    <Icon icon="bx:comment-edit" />
                                                    <p className='mb-0'>Edit</p>
                                                </Link>
                                                <a className="btn_default cursor ms-3" onClick={() => setTrack(true)}>
                                                    <Icon icon="solar:copy-broken" />
                                                    <p className='mb-0'>Traick</p>
                                                </a>
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><Form.Check inline name="group1" /></td>
                                    <td>2</td>
                                    <td>menual testing</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>
                                        <div className='card_detail'>
                                            <span className='text-center d-flex'>
                                                <a className="btn_edit cursor">
                                                    <Icon icon="bx:comment-edit" />
                                                    <p className='mb-0'>Edit</p>
                                                </a>
                                                <a className="btn_default cursor ms-3">
                                                    <Icon icon="solar:copy-broken" />
                                                    <p className='mb-0'>Traick</p>
                                                </a>


                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><Form.Check inline name="group1" /></td>
                                    <td>3</td>
                                    <td>menual testing</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>
                                        <div className='card_detail'>
                                            <span className='text-center d-flex'>
                                                <a className="btn_edit cursor">
                                                    <Icon icon="bx:comment-edit" />
                                                    <p className='mb-0'>Edit</p>
                                                </a>
                                                <a className="btn_default cursor ms-3">
                                                    <Icon icon="solar:copy-broken" />
                                                    <p className='mb-0'>Traick</p>
                                                </a>


                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><Form.Check inline name="group1" /></td>
                                    <td>4</td>
                                    <td>menual testing</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td><div className='card_detail'>
                                        <span className='text-center d-flex'>
                                            <a className="btn_edit cursor">
                                                <Icon icon="bx:comment-edit" />
                                                <p className='mb-0'>Edit</p>
                                            </a>
                                            <a className="btn_default cursor ms-3">
                                                <Icon icon="solar:copy-broken" />
                                                <p className='mb-0'>Stock</p>
                                            </a>
                                        </span>
                                    </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><Form.Check inline name="group1" /></td>
                                    <td>4</td>
                                    <td>menual testing</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>
                                        <div className='card_detail'>
                                            <span className='text-center d-flex'>
                                                <a className="btn_edit cursor">
                                                    <Icon icon="bx:comment-edit" />
                                                    <p className='mb-0'>Edit</p>
                                                </a>
                                                <a className="btn_default cursor ms-3">
                                                    <Icon icon="solar:copy-broken" />
                                                    <p className='mb-0'>Stock</p>
                                                </a>


                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><Form.Check inline name="group1" /></td>
                                    <td>4</td>
                                    <td>menual testing</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>
                                        <div className='card_detail'>
                                            <span className='text-center d-flex'>
                                                <a className="btn_edit cursor">
                                                    <Icon icon="bx:comment-edit" />
                                                    <p className='mb-0'>Edit</p>
                                                </a>
                                                <a className="btn_default cursor ms-3">
                                                    <Icon icon="solar:copy-broken" />
                                                    <p className='mb-0'>Stock</p>
                                                </a>


                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><Form.Check inline name="group1" /></td>
                                    <td>4</td>
                                    <td>menual testing</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>
                                        <div className='card_detail'>
                                            <span className='text-center d-flex'>
                                                <a className="btn_edit cursor">
                                                    <Icon icon="bx:comment-edit" />
                                                    <p className='mb-0'>Edit</p>
                                                </a>
                                                <a className="btn_default cursor ms-3">
                                                    <Icon icon="solar:copy-broken" />
                                                    <p className='mb-0'>Stock</p>
                                                </a>


                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><Form.Check inline name="group1" /></td>
                                    <td>4</td>
                                    <td>menual testing</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>
                                        <div className='card_detail'>
                                            <span className='text-center d-flex'>
                                                <a className="btn_edit cursor">
                                                    <Icon icon="bx:comment-edit" />
                                                    <p className='mb-0'>Edit</p>
                                                </a>
                                                <a className="btn_default cursor ms-3">
                                                    <Icon icon="solar:copy-broken" />
                                                    <p className='mb-0'>Stock</p>
                                                </a>


                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><Form.Check inline name="group1" /></td>
                                    <td>4</td>
                                    <td>menual testing</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>
                                        <div className='card_detail'>
                                            <span className='text-center d-flex'>
                                                <a className="btn_edit cursor">
                                                    <Icon icon="bx:comment-edit" />
                                                    <p className='mb-0'>Edit</p>
                                                </a>
                                                <a className="btn_default cursor ms-3">
                                                    <Icon icon="solar:copy-broken" />
                                                    <p className='mb-0'>Stock</p>
                                                </a>


                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><Form.Check inline name="group1" /></td>
                                    <td>4</td>
                                    <td>menual testing</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>
                                        <div className='card_detail'>
                                            <span className='text-center d-flex'>
                                                <a className="btn_edit cursor">
                                                    <Icon icon="bx:comment-edit" />
                                                    <p className='mb-0'>Edit</p>
                                                </a>
                                                <a className="btn_default cursor ms-3">
                                                    <Icon icon="solar:copy-broken" />
                                                    <p className='mb-0'>Stock</p>
                                                </a>


                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><Form.Check inline name="group1" /></td>
                                    <td>4</td>
                                    <td>menual testing</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>
                                        <div className='card_detail'>
                                            <span className='text-center d-flex'>
                                                <a className="btn_edit cursor">
                                                    <Icon icon="bx:comment-edit" />
                                                    <p className='mb-0'>Edit</p>
                                                </a>
                                                <a className="btn_default cursor ms-3">
                                                    <Icon icon="solar:copy-broken" />
                                                    <p className='mb-0'>Stock</p>
                                                </a>


                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><Form.Check inline name="group1" /></td>
                                    <td>4</td>
                                    <td>menual testing</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>
                                        <div className='card_detail'>
                                            <span className='text-center d-flex'>
                                                <a className="btn_edit cursor">
                                                    <Icon icon="bx:comment-edit" />
                                                    <p className='mb-0'>Edit</p>
                                                </a>
                                                <a className="btn_default cursor ms-3">
                                                    <Icon icon="solar:copy-broken" />
                                                    <p className='mb-0'>Stock</p>
                                                </a>


                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Row>
            </div>

        </>
    );

}
export default Tracking_Ad;