  import Row from 'react-bootstrap/Row';
import React, { useState } from 'react';
import { Form, Accordion, Modal, Col, Table } from 'react-bootstrap';
import Tab from "./Tab";
import { Editor } from 'react-draft-wysiwyg';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { BsPlusLg } from "react-icons/bs";
import { IoIosBarcode } from "react-icons/io";
import barcode from '../../assets/barcode.png';
import { IoMdArrowDropdown } from "react-icons/io";

const Product_Details_Inner = () => {
    const [add_category, set_add_category] = useState(false);
    const [Print, lable_click] = useState(false);


    return (
        <>
            <Modal size="md" show={Print} onHide={() => lable_click(false)} aria-labelledby="example-modal-6">
                <div className="px-2">
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-6">
                            <h6 className="fw-bold">Print</h6>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row className='g-3'>
                            <Col md={12}>
                                <div className="form-group cus-form-group">
                                    <Form.Control placeholder="Phone" className='fill-input' />
                                    <label htmlFor="shipping" className='float-label'>Label Template</label>
                                </div>
                            </Col>
                            <Col md={12}>
                                <div className="form-group cus-form-group">
                                    <Form.Control placeholder="Phone" className='fill-input' />
                                    <label htmlFor="shipping" className='float-label'>Printer</label>
                                </div>
                            </Col>
                            <Col md={12}>
                                <div className="form-group cus-select-group">
                                    <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                        <option>default</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Control>
                                    <label className='float-label' htmlFor="require_shipping">Default</label>
                                    <IoMdArrowDropdown className='inputIcon' />
                                </div>
                            </Col>
                            <Col md={12}>
                                <div className="form-group cus-form-group">
                                    <Form.Control placeholder="Phone" className='fill-input' />
                                    <label htmlFor="shipping" className='float-label'>Phone</label>
                                </div>
                            </Col>
                            <hr></hr>
                            <Col md={12}>
                                <div className=''>
                                    <span>Red  :</span>
                                    <span className='float-end'><button className='btn-sm-hover color-2'>Print</button></span>
                                </div>
                            </Col>
                            <Col md={12}>
                                <div className=''>
                                    <span>Green :</span>
                                    <span className='float-end'><button className='btn-sm-hover color-2'>Print</button></span>
                                </div>
                            </Col>
                            <Col md={12}>
                                <div className=''>
                                    <span>POS :</span>
                                    <span className='float-end'><button className='btn-sm-hover color-2'>Print</button></span>
                                </div>
                            </Col>
                            <Col md={12}>
                                <div className=''>
                                    <span>Warehouse :</span>
                                    <span className='float-end'><button className='btn-sm-hover color-2'>Print</button></span>
                                </div>
                            </Col>
                            <Col md={12}>
                                <div className=''>
                                    <span>BStock  :</span>
                                    <span className='float-end'><button className='btn-sm-hover color-2'>Print</button></span>
                                </div>
                            </Col>
                            <Col md={12}>
                                <div className=''>
                                    <span>mike's   :</span>
                                    <span className='float-end'><button className='btn-sm-hover color-2'>Print</button></span>
                                </div>
                            </Col>

                            <div className='bg_col p-3'>
                                <h6 className='fw-bold mb-3'>Label Preview</h6>

                                <div>
                                    <Table responsive>

                                        <tbody>
                                            <tr>
                                                <td>DEL-Wavelandtec<br />01/11/2023</td>
                                                <td>KVS</td>
                                            </tr>
                                            <tr>
                                                <td>KVS</td>
                                                <td>po-0115<br />red</td>
                                            </tr>
                                            <tr>
                                                <td><img src={barcode} alt="barcode" className='w-50' /><br />17171</td>
                                                <td>po-0115<br />red</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>


                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="text-end mb-2 mt-4">
                            <button className="btn-hover color-1" closeButton>Close</button>
                        </div>
                    </Modal.Footer>
                </div>
            </Modal>
            <div className='row'>
                <div className='col-md-12'>
                    <div className="p-3 bg_col pt-0 product_details">
                        <Tab />
                        <Row className='g-3 mt-1'>
                            <div className='col-md-12 col-lg-12 col-xl-9 col-xxl-9 col-sm-12'>
                                <div className='bg_col p-3'>
                                    <h6 className='fw-bold mb-3'>Basic Info</h6>
                                    <Row className='g-3'>
                                        <div className="col-md-2 col-sm-6">
                                            <div className="form-group cus-select-group">
                                                <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                                    <option>17171</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </Form.Control>
                                                <label className='float-label' htmlFor="require_shipping">Product ID</label>
                                                <IoMdArrowDropdown className='inputIcon' />
                                            </div>
                                        </div>
                                        <div className="col-md-2 col-sm-6">
                                            <div className="form-group cus-select-group">
                                                <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                                    <option>Yes</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </Form.Control>
                                                <label className='float-label' htmlFor="require_shipping">Taxable</label>
                                                <IoMdArrowDropdown className='inputIcon' />
                                            </div>
                                        </div>
                                        <div className="col-md-2 col-sm-6">
                                            <div className="form-group cus-select-group">
                                                <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                                    <option>default</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </Form.Control>
                                                <label className='float-label' htmlFor="require_shipping">Default</label>
                                                <IoMdArrowDropdown className='inputIcon' />
                                            </div>
                                        </div>
                                        <div className="col-md-2 col-sm-6">
                                            <div className="form-group cus-select-group">
                                                <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                                    <option>No</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </Form.Control>
                                                <label className='float-label' htmlFor="require_shipping">Subscription</label>
                                                <IoMdArrowDropdown className='inputIcon' />
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-6">
                                            <Form.Check inline label="Allow Subscription Online" />
                                        </div>
                                        <div className="col-md-4 col-sm-6">
                                            <div className="form-group cus-form-group">
                                                <Form.Control placeholder="Tital" className='fill-input' />
                                                <label htmlFor="shipping" className='float-label'>Tital</label>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-6">
                                            <div className="form-group cus-form-group">
                                                <Form.Control placeholder="Cost" className='fill-input' />
                                                <label htmlFor="shipping" className='float-label'>Cost</label>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-6">
                                            <div className="form-group cus-form-group">
                                                <Form.Control placeholder="Address" />
                                                <label htmlFor="shipping" className='float-label'>Available to Sell</label>
                                            </div>
                                            <div className="mt-2">
                                                <Form.Check inline label="Unlimited" />
                                                <Form.Check inline label="Allow Decimal Quantity" />
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-6">
                                            <div className="form-group cus-form-group">
                                                <Form.Control placeholder="Cost" className='fill-input' />
                                                <label htmlFor="shipping" className='float-label'>Product Cost</label>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-6">
                                            <div className='position-relative'>
                                                <div className="form-group cus-form-group">
                                                    <Form.Control placeholder="Cost" className='fill-input' />
                                                    <label htmlFor="shipping" className='float-label'>UPC</label>
                                                </div>
                                                <div className='lable_icon' onClick={() => lable_click(true)}>
                                                    <IoIosBarcode />
                                                    <p>Label</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-6">
                                            <div className="form-group cus-form-group">
                                                <Form.Control placeholder="Cost" className='fill-input' />
                                                <label htmlFor="shipping" className='float-label'>Brand</label>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-6">
                                            <div className="form-group cus-form-group">
                                                <Form.Control placeholder="Cost" className='fill-input' />
                                                <label htmlFor="shipping" className='float-label'>Department</label>
                                            </div>
                                        </div>



                                    </Row>
                                </div>

                                <div className='bg_col p-3 mt-3'>
                                    <h6 className='fw-bold mb-3'>Description</h6>
                                    <Row className='g-3'>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="form-group cus-form-group">
                                                <Form.Control placeholder="Cost" className='fill-input' />
                                                <label htmlFor="shipping" className='float-label'>Keywords</label>
                                            </div>
                                            <div className="form-group cus-form-group mt-3">
                                                <Form.Control placeholder="Cost" className='fill-input' as="textarea" rows={6} />
                                                <label htmlFor="shipping" className='float-label'>Notes</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <Accordion defaultActiveKey="0" flush>
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header>Short Description </Accordion.Header>
                                                    <Accordion.Body>
                                                        <Form>
                                                            <Editor />
                                                        </Form>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="1">
                                                    <Accordion.Header>Long Description</Accordion.Header>
                                                    <Accordion.Body>
                                                        <Form>
                                                            <Editor />
                                                        </Form>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div>

                                    </Row>
                                </div>
                            </div>
                            <div className='col-md-12 col-lg-12 col-xl-3 col-xxl-3 col-sm-12'>
                                <div className='bg_col p-3'>
                                    <div className='position-relative '>
                                        <h6 className='mb-3 fw-bold'>Availability</h6>
                                        <Form.Check label="Point of Sale/Invoice" />
                                        <Form.Check label="Prompt for Price/Quantity" />
                                        <Form.Check label="Online Store" />
                                    </div>
                                </div>
                                <div className='bg_col p-3 mt-3'>
                                    <h6 className='mb-3 fw-bold'>Primary Category *</h6>
                                    <div className="form-group cus-select-group">
                                        <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                            <option>A</option>
                                            <option value="1">B</option>
                                            <option value="2">C</option>
                                            <option value="3">D</option>
                                        </Form.Control>
                                        <label className='float-label' htmlFor="require_shipping">Category</label>
                                        <IoMdArrowDropdown className='inputIcon' />
                                    </div>
                                </div>

                                <div className='bg_col p-3 mt-3  P_details'>
                                    <h6 className='mb-3 fw-bold'>Product Categories</h6>
                                    <div className="border p-3">

                                        <Form.Check label="13 dec cat" />
                                        <Form.Check label="A" />
                                        <Form.Check label="abc" />
                                        <Form.Check label="Acoustic Smart" />
                                        <Form.Check label="Alfresco" />
                                        <Form.Check label="Anthem" />
                                        <Form.Check label="Appliances" />
                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header><Form.Check label="" />13 dec cat </Accordion.Header>
                                                <Accordion.Body>
                                                    <Form>
                                                        <Form.Check label="13 dec cat" />
                                                    </Form>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header><Form.Check label="" />Long Description</Accordion.Header>
                                                <Accordion.Body>
                                                    <Form>
                                                        <Form.Check label="13 dec child cat" />
                                                    </Form>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>

                                    </div>
                                    <div className='text-end'>
                                        <button class="btn-hover color-3 mt-2" onClick={() => set_add_category(!add_category)}><BsPlusLg /> Add Category</button>
                                    </div>
                                </div>

                                {
                                    add_category ?
                                        <div className='bg_col p-3 mt-3'>
                                            <h6 className='mb-3 fw-bold'>Primary Category *</h6>

                                            <div className="form-group cus-form-group">
                                                <Form.Control placeholder="Zip" className='fill-input' />
                                            </div>

                                            <div className="form-group cus-select-group mt-3">
                                                <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                                    <option>A</option>
                                                    <option value="1">B</option>
                                                    <option value="2">C</option>
                                                    <option value="3">D</option>
                                                </Form.Control>
                                                <label className='float-label' htmlFor="require_shipping">Parent Category</label>
                                                <IoMdArrowDropdown className='inputIcon' />
                                            </div>
                                            <div className='text-end'>
                                                <button class="btn-hover color-3 mt-2"> Save Category</button>
                                            </div>
                                        </div> : null
                                }

                            </div>
                            <div className='col'>
                                <div className='float-end'>
                                    <button class="btn-hover color-1 py-2 px-4 me-2 ">Clear</button>
                                    <button class="btn-hover color-3 py-2 px-4 r_mt-2 ">Save</button>
                                </div>
                            </div>
                        </Row>

                    </div>

                </div>

            </div>
        </>
    );
}
export default Product_Details_Inner;