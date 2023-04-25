import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Row, Table, Modal, ProgressBar } from 'react-bootstrap';
import { AiOutlinePrinter, AiOutlineClear } from "react-icons/ai";
import FulfillmentOrderSummary from './FulfillmentOrderSummary';
import '../../css/fulfillment/fulfillment.scss';
import { Icon } from '@iconify/react';


const Fulfillment_Inner = () => {
    const [Delete, setDelete] = useState(false);
    const [Postage, setPostage] = useState(false);
    const [order, setOrder] = useState(false);
    const now = 100;
    const overflowHid = { overflowX: 'hidden' };
    const overflowAuto = { overflowX: 'auto' };
    const [tableOverflow, SetTableOverflow] = useState(overflowAuto)

    const OrderSummary = () => {
        setOrder(!order);
        console.log(order);
        if (order == false) {
            console.log(order);
            SetTableOverflow(overflowHid);
        } else {
            console.log(order);
            SetTableOverflow(overflowAuto);
        }
    }

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
                            <button className="btn-hover btn-blue-border r_mt-2">Yes</button>
                        </div>
                    </Modal.Footer>
                </div>
            </Modal>

            <div className='col-md-12 cus-fftheader-col'>
                <div className='cus-fftheader'>
                    <Form.Check className='form-check-input-blue' aria-label="option 1" label="Purchase Postage" inline />
                    <Form.Check className='form-check-input-blue' aria-label="option 2" label="Packing Slip" inline />
                    <Form.Check className='form-check-input-blue' aria-label="option 3" label="Mark Shipped" inline />
                    <Form.Check className='form-check-input-blue' aria-label="option 4" label="Auto Combine" inline />
                    <button className='btn btn-sm btn-blue-border me-2'>Process</button>
                    <button className='btn btn-sm btn-blue-border me-2'>Refund</button>
                    <button className='btn btn-sm btn-blue-border me-2' onClick={() => setPostage(!Postage)}>Postage Queue</button>
                    <button className='btn btn-sm btn-blue-border me-2'>Reset</button>
                    <Link to="#" className='btn btn-sm link-green-border me-2'><Icon icon="bi:filetype-xls" /></Link>
                    <Link to="#" className='btn btn-sm link-green-border'><Icon icon="iconoir:table-2-columns" /></Link>
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
                                    <tr></tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                    : null
            }

            <div className='table-responsive cus-fftable-col' style={tableOverflow}>
                <Table className='mt-4'>
                    <thead>
                        <tr>
                            <th><Form.Check inline name="group1" /></th>
                            <th>Order</th>
                            <th>Order Status</th>
                            <th>Shipping Status</th>
                            <th>Order Date</th>
                            <th>Date Shipped</th>
                            <th>Scheduled Date</th>
                            <th>Source</th>
                            <th>Carrier</th>
                            <th>Service</th>
                            <th>Tracking Number</th>
                            <th>Weight</th>
                            <th>Postage</th>
                            <th>Address</th>
                            <th>Verified</th>
                            <th>Phone</th>
                            <th>Name</th>
                            <th>Company</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><Form.Check inline name="group1" /></td>
                            <td className="text-decoration-none cursor"><a href="#" onClick={OrderSummary} >372</a></td>
                            <td>PURCHASE ORDER</td>
                            <td>In Process</td>
                            <td>10/03/2022</td>
                            <td>13/03/2022</td>
                            <td>13/03/2022</td>
                            <td>PURCHASE ORDER</td>
                            <td>No Carrier</td>
                            <td>New Service</td>
                            <td>456123</td>
                            <td>45Kg</td>
                            <td>$0.00</td>
                            <td>US</td>
                            <td>$399.00</td>
                            <td>Invalid</td>
                            <td>Vinay Verma</td>
                            <td>Hiecor</td>
                        </tr>
                        {
                            order ?
                                <FulfillmentOrderSummary />
                                : null
                        }
                    </tbody>
                </Table>
            </div>



        </>
    );
}
export default Fulfillment_Inner;
