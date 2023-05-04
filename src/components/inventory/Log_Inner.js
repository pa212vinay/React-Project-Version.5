import Row from 'react-bootstrap/Row';
import React from 'react';
import { Form, Table } from 'react-bootstrap';
import Tab from "./Tab";
import { BsSearch } from "react-icons/bs";
import { SiMicrosoftexcel } from "react-icons/si";
import { ImTable2 } from "react-icons/im";



const Log_Inner = () => {

    return (
        <>
           
                    <div className="p-3 bg_col pt-0">
                        <Tab />
                        <Row className='g-3 mt-1'>
                            <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                <div className='float-end'>
                                    <button type="button" class="btn btn-outline-primary me-2">Reset</button>
                                    <button type="button" class="btn btn-outline-success me-2"><SiMicrosoftexcel className='text-green' /></button>
                                    <button type="button" class="btn btn-outline-primary me-2"><ImTable2 /></button>
                                    <div className="form-group cus-form-group d-inline-block r_mt-2">
                                        <Form.Control placeholder="Supplier Name" className='fill-input' />
                                        <label className='float-label'>Search</label>
                                        <BsSearch className='inputIcon' />
                                    </div>
                                </div>

                            </div>
                            <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                <div className='bg_col p-3'>
                                    <Table responsive>
                                        <thead>
                                            <tr>
                                                <th> <Form.Check inline name="group1" /></th>
                                                <th>ID</th>
                                                <th>Username</th>
                                                <th>Variation ID</th>
                                                <th>Variation Name</th>
                                                <th>Quantity</th>
                                                <th>Computed Stock</th>
                                                <th>Cost</th>
                                                <th>Order ID</th>
                                                <th>Item Meta 1</th>
                                                <th>Item Meta 2</th>
                                                <th>Reason Code</th>
                                                <th>Date Transferred</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><Form.Check inline name="group1" /></td>
                                                <td>51140</td>
                                                <td>abc</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td>0</td>
                                                <td>0</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td>Inventory Created</td>
                                                <td>2/22/2023</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </Row>
                    </div>
        </>
    );
}

export default Log_Inner;