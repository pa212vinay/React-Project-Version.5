import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Row, label, Modal, Col } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import { Formik, Field } from 'formik';


export default function FulfillmentOrderSummary() {
    const [verifyadd, setVerifyAdd] = useState(false)

    return (
        <>
            <Modal size="lg" show={verifyadd} onHide={() => setVerifyAdd(false)} aria-labelledby="example-modal-6">

                <Modal.Header closeButton>
                    <Modal.Title className='ffverifyAddress'>
                        Verify Address
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className='g-3'>
                        <Col md={12}>
                            <Formik initialValues={{ picked: ' ', fname: '', lname: '', companyname: '', firstadd: '', secadd: '', city: '', state: '', zip: '', country: '', override: '' }}>
                                <Form>
                                    <Row>
                                        <div className='cus-quantity-checkbox pb-4'>
                                            <label className='curntAddrLabel'>
                                                <Field className="formControl" type="radio" name="picked" value="One" checked />&nbsp;
                                                Current
                                            </label>
                                            <div className='curntAddrName'>United State</div>
                                        </div>

                                        <div className='cus-quantity-checkbox pb-2'>
                                            <label className='curntAddrLabel'>
                                                <Field className="formControl" type="radio" name="picked" value="two" />&nbsp;
                                                Manually Override
                                            </label>
                                        </div>

                                        <Col md={6}>
                                            <div className='form-group cus-form-group'>
                                                <Field className="form-control fill-input" type="text" placeholder="none" name="fname" />
                                                <label htmlFor="productId" className='float-label'>First Name</label>
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="form-group cus-form-group">
                                                <Field className="form-control fill-input" type="text" placeholder="none" name="lname" />
                                                <label htmlFor="productId" className='float-label'>Last Name</label>
                                            </div>
                                        </Col>
                                        <Col md={12} className='pt-3'>
                                            <div className="form-group cus-form-group">
                                                <Field className="form-control fill-input" type="text" placeholder="none" name="companyname" />
                                                <label htmlFor="productId" className='float-label'>Company Name</label>
                                            </div>
                                        </Col>
                                        <Col md={12} className='pt-3'>
                                            <div className="form-group cus-form-group">
                                                <Field className="form-control fill-input" type="text" placeholder="none" name="firstadd" />
                                                <label htmlFor="productId" className='float-label'>Address (First)</label>
                                            </div>
                                        </Col>
                                        <Col md={12} className='pt-3'>
                                            <div className="form-group cus-form-group">
                                                <Field className="form-control fill-input" type="text" placeholder="none" name="secadd" />
                                                <label htmlFor="productId" className='float-label'>Address (Second)</label>
                                            </div>
                                        </Col>
                                        <Col md={4} className='pt-3'>
                                            <div className="form-group cus-form-group">
                                                <Field className="form-control fill-input" type="text" placeholder="none" name="city" />
                                                <label htmlFor="productId" className='float-label'>City</label>
                                            </div>
                                        </Col>
                                        <Col md={4} className='pt-3'>
                                            <div className="form-group cus-select-group" >
                                                <Field as="select" className="form-control fill-input" name='state'>
                                                    <option value="india">India</option>
                                                    <option value="china">China</option>
                                                    <option value="norway">Norway</option>
                                                </Field>
                                                <label htmlFor="State" className='float-label'>State</label>
                                            </div>
                                        </Col>
                                        <Col md={4} className='pt-3'>
                                            <div className="form-group cus-form-group" >
                                                <Field className="form-control fill-input" type="text" placeholder="none" name='zip' />
                                                <label htmlFor="productId" className='float-label'>Zip</label>
                                            </div>
                                        </Col>
                                        <Col md={4} className='pt-3'>
                                            <div className="form-group cus-select-group" >
                                                <Field as="select" className="form-control fill-input" name='country'>
                                                    <option value="india">India</option>
                                                    <option value="china">China</option>
                                                    <option value="norway">Norway</option>
                                                </Field>
                                                <label htmlFor="country" className='float-label'>Country</label>
                                            </div>
                                        </Col>
                                        <div className='cus-quantity-checkbox pt-4'>
                                            <label className='curntAddrLabel'>
                                                <Field className="formControl" type="checkbox" name="override" value="One" />&nbsp;
                                                Force Override
                                            </label>
                                        </div>
                                        <div className='closeSubmitBtn'>
                                            <button className="btn-hover color-1" onClick={() => setVerifyAdd(false)}>Close</button>
                                            <button className="btn-hover " >Submit</button>
                                        </div>
                                    </Row>
                                </Form>
                            </Formik>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <div className="float-end mb-2 mt-3">
                        <button className="btn-hover color-1" onClick={() => setVerifyAdd(false)}>Close</button>
                        <button className="btn-hover " >Submit</button>
                    </div>
                </Modal.Footer>

            </Modal>
            <tr>
                <td colSpan={18} className="cus-os-td" >
                    <div className='row cus-ffos-row'>
                        <div className='col-xxl-5 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 mb-3 mb-lg-0'>
                            {/* <div class
                            Name=" row mb-3 mx-auto bg_col p-3">
                                <h6 className='fw-bold mb-3 px-0' > Order Summary</h6>
                                <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 px-0'>
                                    <div className='fforderStatusDate'>
                                        <label className='ffOrderStatus'>Source :</label>
                                        <div className='ffOrderDate'>API</div>
                                    </div>
                                    <div className='fforderStatusDate'>
                                        <label className='ffOrderStatus'>Order Date:</label>
                                        <div className='ffOrderDate'>09/28/2022</div>
                                    </div>
                                    <div className='fforderStatusDate'>
                                        <label className='ffOrderStatus'>Paid Date:</label>
                                        <div className='ffOrderDate'>10/03/2023</div>
                                    </div>
                                </div>
                                <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 px-0'>
                                    <div className='fforderSlipSec'>
                                        <Link className='ffOrderSlip' to="#" as='link'><Icon icon="cil:print" /> Print Packing Slip</Link>
                                        <Link className='ffOrderSlip' to="#" as='link'><Icon icon="cil:print" /> Print Full Receipt</Link>
                                        <Link className='ffOrderAddNote' to="#" as='link'><Icon icon="material-symbols:note-add-outline" /> Add Note</Link>
                                    </div>
                                </div>

                            </div> */}
                            <div className='bg_col p-3 orderSummarybox'>

                                <h6 className='fw-bold mb-3 px-0' > Order Summary</h6>

                                <div className='orderSummaryCard'>
                                    <div className='orderSummaryDateSec'>
                                        <div className='fforderStatusDate'>
                                            <label className='ffOrderStatus'>Source :</label>
                                            <div className='ffOrderDate'>API</div>
                                        </div>
                                        <div className='fforderStatusDate'>
                                            <label className='ffOrderStatus'>Order Date:</label>
                                            <div className='ffOrderDate'>09/28/2022</div>
                                        </div>
                                        <div className='fforderStatusDate'>
                                            <label className='ffOrderStatus'>Paid Date:</label>
                                            <div className='ffOrderDate'>10/03/2023</div>
                                        </div>
                                    </div>

                                    <div className='orderSummaryPrintSec'>
                                        <div className='fforderSlipSec'>
                                            <Link className='ffOrderSlip' to="#" as='link'><Icon icon="cil:print" /> Print Packing Slip</Link>
                                            <Link className='ffOrderSlip' to="#" as='link'><Icon icon="cil:print" /> Print Full Receipt</Link>
                                            <Link className='ffOrderAddNote' to="#" as='link'><Icon icon="material-symbols:note-add-outline" /> Add Note</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='addressVerifySec'>
                                    <Link to="#" onClick={() => setVerifyAdd(true)}>Add Address <Icon icon="mdi:location-question" /></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-xxl-7 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className=" bg_col p-3">
                                <div className="form-group cus-form-group">
                                    <Form.Control placeholder="Wholesale Price" className='fill-input' />
                                    <label htmlFor="shipping" className='float-label'>Search Product</label>

                                </div>

                            </div>
                        </div>
                    </div>

                </td>
            </tr>
        </>
    )
}
