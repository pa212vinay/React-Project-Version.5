import Form from 'react-bootstrap/Form';
import { Container, Row } from 'react-bootstrap';
import React, { useState } from "react";
import Table from 'react-bootstrap/Table';
import "react-datepicker/dist/react-datepicker.css";
import { IoIosClose } from "react-icons/io";
import { MdModeEditOutline } from "react-icons/md";
import SignatureCanvas from 'react-signature-canvas';
import { IoMdRefreshCircle } from "react-icons/io";
import boxImg from '../../assets/cardboard-box.svg';
import { BsUpcScan } from "react-icons/bs";
import Modal from 'react-bootstrap/Modal';
import Product from '../../assets/product.png';
import { IoMdArrowDropdown } from "react-icons/io";


const Adjust_product = () => {
    // const [date, setDate] = useState(new Date());
    // const [status, setStatus] = useState(true);

    let sigPad = React.useRef({});
    function clear() {
        sigPad.current.clear();
    }
    const [Edit, set8Show] = useState(false);
    const [description, set9Show] = useState(false);


    return (
        <>
            <Modal size="lg" show={description} onHide={() => set9Show(false)} aria-labelledby="example-modal-5">
                <div className="px-4">
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-5">
                            <h6 className="fw-bold">Description</h6>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row className="mt-3 g-3">
                            <div className="col-md-4 col-sm-12">
                                <div className="form-group cus-form-group">
                                    <Form.Control placeholder="Notes" className='fill-input' />
                                    <label htmlFor="shipping" className='float-label'>Notes</label>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <div className="form-group cus-form-group">
                                    <Form.Control placeholder="Modal Number" className='fill-input' />
                                    <label htmlFor="shipping" className='float-label'>Modal Number</label>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <div className="form-group cus-form-group">
                                    <Form.Control placeholder="Serial Number" className='fill-input' />
                                    <label htmlFor="shipping" className='float-label'>Serial Number</label>
                                </div>
                            </div>

                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="float-end mb-2 mt-4">
                            <button className="btn-hover color-1 me-2">Close</button>
                            <button className="btn-hover color-2  ms-2 r_mt-2">Done</button>
                        </div>
                    </Modal.Footer>
                </div>
            </Modal>
            <Modal size="lg" show={Edit} onHide={() => set8Show(false)} aria-labelledby="example-modal-1">
                <div className="px-4">
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-1">
                            <h6 className="fw-bold">Refunded</h6>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row className=''>
                            <div className='col-md-12'>
                                <div className='mb-5'>
                                    <img src={Product} alt="productImg" className='mx-auto d-block w-25' />
                                </div>
                            </div>
                            <div className='col-md-8'>
                                <div>
                                    <Table responsive>
                                        <thead>
                                            <tr>
                                                <th colSpan={2}>Price</th>
                                                <th>Qty</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>$737.10</td>
                                                <td>X</td>
                                                <td><span>1</span></td>
                                                <td>$737.10</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="qty-container">
                                    <button class="qty-btn-minus btn-primary btn-rounded mr-1" type="button"><i class="fa fa-minus"></i></button>
                                    <input type="text" name="qty" value="0" class="input-qty input-rounded" />
                                    <button class="qty-btn-plus btn-primary btn-rounded ml-1" type="button"><i class="fa fa-plus"></i></button>
                                </div>
                            </div>
                        </Row>
                        <Row className="mt-3 g-3">
                            <div className="col-md-6 col-sm-12">
                                <div className="form-group cus-form-group">
                                    <Form.Control placeholder="Modal Number" className='fill-input' />
                                    <label htmlFor="shipping" className='float-label'>Modal Number</label>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="form-group cus-form-group">
                                    <Form.Control placeholder="Serial Number" className='fill-input' />
                                    <label htmlFor="shipping" className='float-label'>Serial Number</label>
                                </div>
                            </div>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="float-end mb-2 mt-3">
                            <button className="btn-hover color-1 me-2">Close</button>
                            <button className="btn-hover color-2 r_mt-2">Done</button>
                        </div>
                    </Modal.Footer>
                </div>
            </Modal>
            <div className='container'>
                <div className='bg_col p-3'>
                    <div className='bg_color_blue p-2'>
                        <Container className='position-relative'>
                            <Form.Group as={Row} className="" controlId="formPlaintextupdate">
                                <Form.Label column sm="2">
                                    <span className='text-white'>UPDATE INVOICE</span>
                                </Form.Label>
                                <div className='col-md-3 col-sm-12' >
                                    <div className="form-group cus-select-group">
                                        <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                            <option>Select State</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Control>
                                        <label className='float-label' htmlFor="require_shipping"></label>
                                        <IoMdArrowDropdown className='inputIcon' />
                                    </div>
                                </div>
                            </Form.Group>
                        </Container>
                    </div>
                    <Container >
                        <div className='bg_color_lightblue p-2 mt-4'>
                            <Form.Group as={Row} className="" controlId="formPlaintextPassword">
                                <Form.Label column sm="2">
                                    <span className='fw-bold'>INVOICE TITLE</span>
                                </Form.Label>
                                <div className='col-md-3 col-sm-12' >
                                    <Form.Control placeholder="Serarch Product" />
                                </div>
                            </Form.Group>
                        </div>
                        <div className='mt-4'>
                            <div className='d-flex justify-content-center align-items-center py-10'>
                                <div className='lineOne'></div>
                                <div className='text-center'>
                                    <img src={boxImg} alt="user" />
                                    <h4 className='fw-bold'>NO PRODUCT</h4>
                                </div>
                                <div className='lineTwo'></div>
                            </div>
                            <hr className='my-4'></hr>
                            <div className='bg_color_lightblue p-2'>
                                <Form.Group as={Row} className="" controlId="formPlaintextPassword">
                                    <div className='d-flex' >
                                        <Form.Control placeholder="Serarch Product" />
                                        <a><BsUpcScan className='txt_color ms-2' /></a>
                                    </div>
                                </Form.Group>
                            </div>
                            <Row>
                                <div>
                                    <Table responsive>
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th></th>
                                                <th>Description</th>
                                                <th>Product Code</th>
                                                <th>Quantity</th>
                                                <th>Price</th>
                                                <th>Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><IoIosClose className='font-30 color_red fw-font cursor' /></td>
                                                <td><span className='txt_color cursor' onClick={() => set8Show(true)}><MdModeEditOutline className='cursor' /> Edit</span></td>
                                                <td>
                                                    <span className='cursor' onClick={() => set9Show(true)}>Refunded</span>
                                                </td>
                                                <td>
                                                    <p className='mb-1' >Demo</p>
                                                    <p>Location: Zone2</p>
                                                </td>
                                                <td>
                                                    -1
                                                </td>
                                                <td>-1</td>
                                                <td>3</td>
                                            </tr>
                                            <tr>
                                                <td><IoIosClose className='font-30 color_red fw-font cursor' /></td>
                                                <td><span className='txt_color cursor' onClick={() => set8Show(true)}><MdModeEditOutline className='' /> Edit</span></td>
                                                <td className=''>
                                                    Refunded
                                                </td>
                                                <td >
                                                    <p className='mb-1'>Demo</p>
                                                    <p>Location: Zone2</p>
                                                </td>
                                                <td >
                                                    -2
                                                </td>
                                                <td>-2</td>
                                                <td>3</td>
                                            </tr>
                                            <tr>
                                                <td><IoIosClose className='font-30 color_red fw-font cursor' /></td>
                                                <td><span className='txt_color cursor' onClick={() => set8Show(true)}><MdModeEditOutline className='cursor' /> Edit</span></td>
                                                <td className=''>
                                                    Refunded
                                                </td>
                                                <td >
                                                    <p className='mb-1'>Demo</p>
                                                    <p>Location: Zone2</p>
                                                </td>
                                                <td >
                                                    -3
                                                </td>
                                                <td>-3</td>
                                                <td>3</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Row>


                            <Row>
                                <div className='mt-4'>
                                    <div className='d-flex'>
                                        <label className='me-2 ms-1'>
                                            <Form.Check className='mb-3 checkbox' name="check" />
                                        </label>
                                        <p className='paddingTRB'>Terms and Conditions: Customer agrees to pay the installment payments as set forth above. This agreement shall remain in effect for a period of up to 12 months, as noted. The parties agree that this agreement has no "opt-outs" and the customer shall be charged the full monthly fee even if he or she does not attend the services provided. If the customer fails to pay for the services when due, COACH has the option to treat such failure to pay as a material breach of the agreement and may cancel this agreement and/or seek legal remedies.</p>
                                    </div>
                                </div>
                                <div className='col-md-12'>
                                    <div className='signCan mx-2'>
                                        <SignatureCanvas penColor='green'
                                            canvasProps={{ className: 'sigCanvas' }} ref={sigPad} />
                                        <span>Please sign on above box</span>
                                        <IoMdRefreshCircle className='clearsig float-end cursor fw-bold text-color font-30' onClick={clear} />
                                    </div>
                                </div>
                            </Row>
                        </div>
                    </Container>
                    <div className='bg_color_lightblue p-2 mt-4'>
                        <Container>

                            <div className='row' >
                                <div className='col-md-4'>
                                <div className="form-group cus-select-group">
                                    <Form.Control className="form-control fill-input" as="select">
                                        <option>105- Fake Marchant</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Control>
                                    <label className='float-label' htmlFor="require_shipping"></label>
                                    <IoMdArrowDropdown className='inputIcon' />
                                </div>
                                </div>
                                
                                <div className='col-md-8'>
                                    <div className='float-end'>
                                        <button class="btn-hover color-3 py-2 px-4 me-2 r_mt-2">Process Paymant</button>
                                        <button class="btn-hover color-2 py-2 px-4 r_mt-2">Save Invoice</button>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div >
                </div >
            </div>
        </>
    );
}

export default Adjust_product;  