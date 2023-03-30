import { Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import * as React from 'react';
import { ImAttachment } from "react-icons/im";
const Attachment_Inner = () => {
    return (
        <>
            <div className='bg_col mt-3 p-3'>
                <Row>
                    <h6 className='my-3 fw-bold'>ATTACHMENT</h6>
                    <div className='col-md-12'>
                        <h6 className='my-3 fw-bold'>Add Attechment</h6>
                        <div className="form-group cus-form-group">
                            <Form.Control placeholder="Enter Notes" as="textarea" rows={6} className='fill-input my-3' />
                            <label htmlFor="shipping" className='float-label'>Enter Notes</label>
                        </div>
                        <div className='upload-btn-wrapper col-md-3 col-sm-12'>
                            <button className="btn-hover color-3 px-3">Select files<ImAttachment className='ms-2' /></button>
                            <input type="file" name="myfile" />
                        </div>
                        <button class="btn-hover color-3 px-3 float-end">Save Changes</button>
                    </div>
                </Row>
                <div className='mt-5'>
                    <Row>
                        <h6 className='my-3 fw-bold'>Attachment</h6>
                        <div>
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th><Form.Check inline name="group1" /></th>
                                        <th>Attachment ID</th>
                                        <th>Order ID</th>
                                        <th>Description</th>
                                        <th>File Name</th>
                                        <th>Created Date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><Form.Check inline name="group1" /></td>
                                        <td>1</td>
                                        <td>menual testing</td>
                                        <td>$399.00</td>
                                        <td>$399.00</td>
                                        <td>$399.00</td>
                                        <td>$399.00</td>
                                    </tr>
                                    <tr>
                                        <td><Form.Check inline name="group1" /></td>
                                        <td>2</td>
                                        <td>menual testing</td>
                                        <td>$399.00</td>
                                        <td>$399.00</td>
                                        <td>$399.00</td>
                                        <td>$399.00</td>
                                    </tr>
                                    <tr>
                                        <td><Form.Check inline name="group1" /></td>
                                        <td>3</td>
                                        <td>menual testing</td>
                                        <td>$399.00</td>
                                        <td>$399.00</td>
                                        <td>$399.00</td>
                                        <td>$399.00</td>
                                    </tr>
                                    <tr>
                                        <td><Form.Check inline name="group1" /></td>
                                        <td>4</td>
                                        <td>menual testing</td>
                                        <td>$399.00</td>
                                        <td>$399.00</td>
                                        <td>$399.00</td>
                                        <td>$399.00</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Row>
                </div>
            </div>
        </>
    );
}

export default Attachment_Inner;