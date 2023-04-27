import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Row, label } from 'react-bootstrap';
import { Icon } from '@iconify/react';

export default function FulfillmentOrderSummary() {
    return (
        <>
            <tr>
                <td colSpan={18} className="cus-os-td" >
                    <div className='row cus-ffos-row'>
                        <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12 mb-3 mb-lg-0'>
                            <div className=" row mb-3 mx-auto bg_col p-3">
                                <h6 className='fw-bold mb-3' > Order Summary</h6>

                                <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                    {/* <div className="main-div" ref={observedDiv}>
                                            <p>Block width: {width}, height: {height} </p>
                                        </div> */}
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
                                <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                    <div className='fforderSlipSec'>
                                        <Link className='ffOrderSlip' to="#" as='link'><Icon icon="cil:print" /> Print Packing Slip</Link>
                                        <Link className='ffOrderSlip' to="#" as='link'><Icon icon="cil:print" /> Print Full Receipt</Link>
                                        <Link className='ffOrderAddNote' to="#" as='link'><Icon icon="material-symbols:note-add-outline" /> Add Note</Link>
                                    </div>
                                </div>

                            </div>
                            <div className=" row mx-auto bg_col p-3">

                                <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                    <h6 className='fw-bold mb-3' > Ship To</h6>
                                    <div className='fforderSlipSec'>
                                        <Link className='ffOrderAddNote' to="#" as='link'><Icon icon="material-symbols:note-add-outline" /> Add Note</Link>
                                    </div>
                                </div>

                                <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                    {/* <div className="main-div" ref={observedDiv}>
                                            <p>Block width: {width}, height: {height} </p>
                                        </div> */}
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
                                <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                    <div className='fforderSlipSec'>
                                        <Link className='ffOrderSlip' to="#" as='link'><Icon icon="cil:print" /> Print Packing Slip</Link>
                                        <Link className='ffOrderSlip' to="#" as='link'><Icon icon="cil:print" /> Print Full Receipt</Link>
                                        <Link className='ffOrderAddNote' to="#" as='link'><Icon icon="material-symbols:note-add-outline" /> Add Note</Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
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
