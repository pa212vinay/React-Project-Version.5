// import '../Stylesheet/CustomerPickup_inner.scss';
import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import SignatureCanvas from 'react-signature-canvas';
import { IoMdRefreshCircle } from "react-icons/io";


const CustomerPickup_inner = () => {
    let sigPad = React.useRef({});
    function clear() {
        sigPad.current.clear();
    }

    return (
        <>
            <div className='bg_col mt-3 p-3'>
                <h6 className='my-3 fw-bold'>CUSTOMER PICKUP</h6>
                <div className='mt-3'>
                    <Row>
                        <h6 className='my-3 fw-bold'>Step 1: Select  items to Pickup</h6>
                        <div>
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th> <Form.Check inline name="group1" /></th>
                                        <th>Order ID</th>
                                        <th>Date Finalized</th>
                                        <th>Order Status</th>
                                        <th>Pyament Status</th>
                                        <th>Shipping Status</th>
                                        <th>Product Order</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><Form.Check inline name="group1" /></td>
                                        <td>1</td>
                                        <td>11</td>
                                        <td>menual testing</td>
                                        <td>$399.00</td>
                                        <td>$399.00</td>
                                        <td>$399.00</td>

                                    </tr>
                                    <tr>
                                        <td><Form.Check inline name="group1" /></td>
                                        <td>2</td>
                                        <td>22</td>
                                        <td>menual testing</td>
                                        <td>$399.00</td>
                                        <td>$399.00</td>
                                        <td>$399.00</td>

                                    </tr>
                                    <tr>
                                        <td><Form.Check inline name="group1" /></td>
                                        <td>3</td>
                                        <td>33</td>
                                        <td>menual testing</td>
                                        <td>$399.00</td>
                                        <td>$399.00</td>
                                        <td>$399.00</td>

                                    </tr>
                                    <tr>
                                        <td><Form.Check inline name="group1" /></td>
                                        <td>4</td>
                                        <td>44</td>
                                        <td>menual testing</td>
                                        <td>$399.00</td>
                                        <td>$399.00</td>
                                        <td>$399.00</td>

                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Row>
                </div>

                <Row>
                    <div className='col-md-12 mt-3'>
                        <h6 className='my-3 fw-bold'>Step 2: Enter Notes</h6>
                        <div className="form-group cus-form-group">
                            <Form.Control placeholder="Enter Notes" as="textarea" rows={6} className='fill-input' />
                            <label htmlFor="shipping" className='float-label'>Enter Notes</label>
                        </div>
                    </div>

                    <div className='col-md-12 mt-3'>
                        <h6 className='my-3 fw-bold'>Step 3: Signature</h6>

                        <div className='signCan'>
                            <SignatureCanvas penColor='green'
                                canvasProps={{ className: 'sigCanvas' }} ref={sigPad} />
                            <span className='float-end'>Please sign on above box</span>
                            <IoMdRefreshCircle className='signclear float-end cursor fw-bold text-color font-30' onClick={clear} />
                        </div>
                        <button class="btn-hover color-3 px-3 mt-3">Complite Pickup</button>
                    </div>
                </Row>
            </div>
        </>
    );
}
export default CustomerPickup_inner;