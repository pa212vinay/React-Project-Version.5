import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Row, Modal, Col } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import { Formik, Field } from 'formik';
import FulfillmentResize from './FulfillmentResize';


export default function FulfillmentOrderSummary() {
    const [verifyadd, setVerifyAdd] = useState(false)
    const [addressStatus, setAddressStatus] = useState('Add Address')
    const setOverrideAdd = () =>{
        alert('Code Run!');
        setVerifyAdd(false);
        setAddressStatus('Verify Address');

    }
    return (
        <>
            <Formik initialValues={{ picked: ' ', fname: '', lname: '', companyname: '', firstadd: '', secadd: '', city: '', state: '', zip: '', country: '', override: '' }}>
                <Form>
                    <Modal size="lg" show={verifyadd} onHide={() => setVerifyAdd(false)} aria-labelledby="example-modal-6">
                        <Modal.Header closeButton>
                            <Modal.Title className='ffverifyAddress'>
                                Verify Address
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Row className='g-3'>
                                <Col md={12}>
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

                                        <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12} >
                                            <div className='form-group cus-form-group'>
                                                <Field className="form-control fill-input" type="text" placeholder="none" name="fname" />
                                                <label htmlFor="productId" className='float-label'>First Name</label>
                                            </div>
                                        </Col>
                                        <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12} className='mt-md-0 mt-3'>
                                            <div className="form-group cus-form-group">
                                                <Field className="form-control fill-input" type="text" placeholder="none" name="lname" />
                                                <label htmlFor="productId" className='float-label'>Last Name</label>
                                            </div>
                                        </Col>
                                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12} className='pt-3'>
                                            <div className="form-group cus-form-group">
                                                <Field className="form-control fill-input" type="text" placeholder="none" name="companyname" />
                                                <label htmlFor="productId" className='float-label'>Company Name</label>
                                            </div>
                                        </Col>
                                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12} className='pt-3'>
                                            <div className="form-group cus-form-group">
                                                <Field className="form-control fill-input" type="text" placeholder="none" name="firstadd" />
                                                <label htmlFor="productId" className='float-label'>Address (First)</label>
                                            </div>
                                        </Col>
                                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12} className='pt-3'>
                                            <div className="form-group cus-form-group">
                                                <Field className="form-control fill-input" type="text" placeholder="none" name="secadd" />
                                                <label htmlFor="productId" className='float-label'>Address (Second)</label>
                                            </div>
                                        </Col>
                                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12} className='pt-3'>
                                            <div className="form-group cus-form-group">
                                                <Field className="form-control fill-input" type="text" placeholder="none" name="city" />
                                                <label htmlFor="productId" className='float-label'>City</label>
                                            </div>
                                        </Col>
                                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12} className='pt-3'>
                                            <div className="form-group cus-select-group" >
                                                <Field as="select" className="form-control fill-input" name='state'>
                                                    <option value="india">India</option>
                                                    <option value="china">China</option>
                                                    <option value="norway">Norway</option>
                                                </Field>
                                                <label htmlFor="State" className='float-label'>State</label>
                                            </div>
                                        </Col>
                                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12} className='pt-3'>
                                            <div className="form-group cus-form-group" >
                                                <Field className="form-control fill-input" type="text" placeholder="none" name='zip' />
                                                <label htmlFor="productId" className='float-label'>Zip</label>
                                            </div>
                                        </Col>
                                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12} className='pt-3'>
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
                                        <div className='pt-3'>
                                            <h5>Recommended Address</h5>
                                            <p className='modalError'><Icon icon="bxs:error" /> Error: <span>The state is not supported in the Customer Integration Environment.</span></p>
                                        </div>
                                    </Row>
                                </Col>
                            </Row>
                        </Modal.Body>
                        <Modal.Footer>
                            <div className="float-end mb-2 mt-3">
                                <button className="btn-hover color-1" onClick={() => setVerifyAdd(false)}>Close</button>
                                <button className="btn-hover cusSuccessBtn ms-1" onClick={setOverrideAdd}>Override</button>
                            </div>
                        </Modal.Footer>
                    </Modal>
                </Form>
            </Formik>
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
                                    <div className='ffShipAddSec'>
                                        <h4>Ship To</h4>
                                        <div className='ffShipAdd'>
                                            <span>Richard Jones</span>
                                            <span>4055 haward ave western springs, IL 60558</span>
                                            <span>Richard@mailinator.com</span>
                                            <span>4520003</span>
                                        </div>
                                    </div>
                                    <Link to="#" onClick={() => setVerifyAdd(true)}>{addressStatus} <Icon icon="mdi:location-question" /></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-xxl-7 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className=" bg_col p-3">
                                <div className="form-group cus-form-group">
                                    <FulfillmentResize />

                                </div>

                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        </>
    )
}
