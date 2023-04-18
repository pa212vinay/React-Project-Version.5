import React, { useState } from 'react';
import { Form, Row, Table, Modal, ProgressBar, Link } from 'react-bootstrap';
import { AiOutlinePrinter, AiOutlineClear } from "react-icons/ai";
const Fulfillment_Inner = () => {
    const [Delete, setDelete] = useState(false);
    const [Postage, setPostage] = useState(false);
    const [order, setOrder] = useState(false);
    const now = 100;
    return (
        <>
            <Modal size="md" show={Delete} onHide={() => setDelete(false)} aria-labelledby="example-modal-4">
                <div className="px-4">
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-4">
                            <h6 className="fw-bold">Delete</h6>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Are you sure want to delete this order?
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="float-end mb-2 mt-4">
                            <button className="btn-hover color-1 me-2">No</button>
                            <button className="btn-hover color-2 r_mt-2">Yes</button>
                        </div>
                    </Modal.Footer>
                </div>
            </Modal>


            <div className="bg_col p-3">
                <Row>
                    <div className='col-md-12'>
                        <div className=''>
                            <Form.Check aria-label="option 1" label="Purchase Postage" inline />
                            <Form.Check aria-label="option 2" label="Packing Slip" inline />
                            <Form.Check aria-label="option 3" label="Mark Shipped" inline />
                            <Form.Check aria-label="option 4" label="Auto Combine" inline />
                            <button className='btn-hover color-2 me-2'>Process</button>
                            <button className='btn-hover color-2 me-2'>Refund</button>
                            <button className='btn-hover color-2' onClick={() => setPostage(!Postage)}>Postage Queue</button>
                        </div>
                    </div>
                    {
                        Postage ?
                            <div>
                                <div className="mt-3">
                                    <h6 className='mt-4 mb-3 fw-bold'>Details</h6>
                                    <Table responsive>
                                        <thead>
                                            <tr>
                                                <th>Created Date</th>
                                                <th>Total</th>
                                                <th>Success</th>
                                                <th>Failed</th>
                                                <th>Reprinted</th>
                                                <th>Progress</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>2023-03-02 21:14:55</td>
                                                <td>1</td>
                                                <td>0</td>
                                                <td>1</td>
                                                <td>0</td>
                                                <td><ProgressBar variant="success" now={100} label={`${now}%`} /></td>
                                                <td>
                                                    <div className='card_detail'>
                                                        <span className='text-center d-flex'>
                                                            <a className="btn_edit cursor">
                                                                <AiOutlinePrinter className='' />
                                                                <p className='mb-0'>Print</p>
                                                            </a>
                                                            <a className="btn_delete cursor ms-3">
                                                                <AiOutlineClear className='' />
                                                                <p className='mb-0'>Clear</p>
                                                            </a>
                                                        </span>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                            : null
                    }

                    <div className='table-responsive'>
                        <Table className='mt-4'>
                            <thead>
                                <tr>
                                    <th><Form.Check inline name="group1" /></th>
                                    <th>User ID</th>
                                    <th>Customer Status</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Company</th>
                                    <th>City</th>
                                    <th>Address</th>
                                    <th>Address 2</th>
                                    <th>State</th>
                                    <th>Postal code</th>
                                    <th>Contact source</th>
                                    <th>State</th>
                                    <th>ABV ID</th>
                                    <th>Additionl Phone</th>
                                    <th>Phone</th>
                                    <th>Dollers Spend</th>
                                    <th>Last Order Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><Form.Check inline name="group1" /></td>
                                    <td className="text-decoration-none cursor"><lable onClick={() => setOrder(!order)} >1</lable></td>
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
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                </tr>
                                {
                                    order ?
                                        <tr>
                                            <td colSpan={18} className="py-3">

                                                <div className='row g-3 my-3'>
                                                    <div className='col-md-4'>
                                                        <div className=" bg_col p-3">
                                                            <h6 className='fw-bold mb-3'>Order Summary</h6>
                                                            <Row>
                                                                <div className='col-md-8'>
                                                                    <p>
                                                                        <span className='fw-bold'>Source:</span>
                                                                        <span className='float-end'>API</span>
                                                                    </p>
                                                                    <p>
                                                                        <span className='fw-bold'>Order Date:</span>
                                                                        <span className='float-end'>09/28/2022</span>
                                                                    </p>
                                                                    <p>
                                                                        <span className='fw-bold'>Paid Date:</span>
                                                                        <span className='float-end'>09/28/2022</span>
                                                                    </p>
                                                                </div>
                                                                <div className='col-md-4'>
                                                                    <p>Print Packing Slip</p>
                                                                    <p>Print Full Receipt</p>
                                                                    <p>Add Note</p>
                                                                </div>
                                                                <div className="p-3">
                                                            <div className="form-group cus-form-group">
                                                                <Form.Control placeholder="Wholesale Price" className='fill-input' />
                                                                <label htmlFor="shipping" className='float-label'>Search Product</label>

                                                            </div>

                                                        </div>
                                                            </Row>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8">
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
                                        : null
                                }
                            </tbody> 
                        </Table>
                    </div>
                </Row>
            </div>

        </>
    );
}
export default Fulfillment_Inner;
