import React from 'react'
import { Form, Row } from 'react-bootstrap';

export default function FulfillmentOrderSummary() {
    return (
        <>
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
        </>
    )
}
