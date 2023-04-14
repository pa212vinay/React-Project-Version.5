import React, { useState } from "react";
import { Form, Row, Col, Table, Modal, Nav, Tab } from 'react-bootstrap';
import { Icon } from '@iconify/react';



import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Tracking_Ad = () => {
    const [Traick, setTrack] = useState(false);
    // const [, setTrack] = useState(false);
    const [Affiliate, setAffiliate] = useState(  [{
        Affiliate_user: ' ',
    }]);

    const addAffiliate = () => {
        setAffiliate([...Affiliate, {
            Affiliate_user: '',
        }])
    }

    const removeAffiliate = (Custom) => {
        const rows = [...Affiliate];
        rows.splice(Custom, 1);
        setAffiliate(rows);
    }

    const handleChangeCustom = (Custom, evnt) => {
        const { name, value } = evnt.target;
        const list = [...Affiliate];
        list[Custom][name] = value;
        setAffiliate(list);
    }
    return (
        <div className="tracking_Ad">
            <Modal size="lg" show={Traick} onHide={() => setTrack(false)} aria-labelledby="example-modal-1" className="edit_tracking">
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
                                            <Nav.Link eventKey="first">General Info</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Tracking Pixel</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="Third">Pay out</Nav.Link>
                                        </Nav.Item>
                                    </Nav>

                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <Row className="g-3">
                                                <Col md={12}>
                                                    <Form>
                                                        <div className="form-group cus-form-group mt-5">
                                                            <Form.Control placeholder="Campaign Code" className='fill-input' />
                                                            <label htmlFor="Campaign Code" className='float-label'>Campaign Code</label>
                                                        </div>
                                                        <div className="form-group cus-form-group mt-3">
                                                            <Form.Control placeholder="Campaign Description" className='fill-input' />
                                                            <label htmlFor="Campaign Description" className='float-label'>Campaign Description</label>
                                                        </div>
                                                        <h3 className="fw-bold my-4">Limit to subID(comma separated)</h3>

                                                        <Form.Group as={Row} className="my-3" controlId="formHorizontalEmail">
                                                            <Col sm={12}><p>Affiliate User</p></Col>
                                                            <Col sm={5}>
                                                                <Form.Control type="email" placeholder="Email" />
                                                            </Col>
                                                            <Col sm={5}>
                                                                <Form.Control type="email" placeholder="Email" />
                                                            </Col>
                                                            <Col sm={2}><Icon icon="material-symbols:add-circle-outline" className="icon-add " onClick={addAffiliate}/></Col>
                                                        </Form.Group>
                                                        {
                                            Affiliate.map((data, Custom) => {
                                                const { Affiliate_user } = data;
                                                return (
                                                        <Form.Group as={Row} className="my-3" controlId="formHorizontalEmail" onChange={(evnt) => handleChangeCustom(Custom, evnt)} value={Affiliate_user} name="Affiliate_user">
                                                            <Col sm={12}><p>Affiliate User</p></Col>
                                                            <Col sm={5}>
                                                                <Form.Control type="email" placeholder="Email" />
                                                            </Col>
                                                            <Col sm={5}>
                                                                <Form.Control type="email" placeholder="Email" />
                                                            </Col>
                                                            <Col sm={2}>{(Affiliate.length !== 0) ? <Icon icon="ph:minus-circle-bold" className="icon-minus" onClick={removeAffiliate}/> : ''}</Col>
                                                        </Form.Group>
                                                         )
                                                        })
                                                    }
                                                    </Form>
                                                </Col>
                                                
                                            </Row>
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

                            <button type="button" class="btn-hover color-2 me-2 r_mt-2">Reset</button>
                            <button type="button" class="btn-hover color-2 me-2 r_mt-2">New Campaign</button>
                            <button type="button" class="btn-hover color-2 me-2 r_mt-2">New Affiliate</button>

                            <button type="button" class="btn btn-outline-primary me-2 r_mt-2">Reset</button>
                            <button type="button" class="btn btn-outline-success me-2 r_mt-2"><Icon icon="uiw:file-excel" className='text-green' /></button>
                            <button type="button" class="btn btn-outline-primary me-2 r_mt-2"><Icon icon="uiw:table" /></button>
                            <div className="form-group cus-form-group d-inline-block r_mt-2">
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

        </div>
    );

}
export default Tracking_Ad;