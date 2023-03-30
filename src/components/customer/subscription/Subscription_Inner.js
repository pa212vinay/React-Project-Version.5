import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';


const Subscription_inner = () => {


    return (
        <>
            <div className='bg_col mt-3 p-3'>
                <h6 className='my-3 fw-bold'>SUBSCRIPTION</h6>
                <div className='bg_col mt-4 p-3'>
                    <Row>
                        <h6 className='my-3 fw-bold'>Subscription History</h6>
                        <div>
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th> <Form.Check inline name="group1" /></th>
                                        <th>Subscription ID</th>
                                        <th>Status</th>
                                        <th>Start Date</th>
                                        <th>End Date</th>
                                        <th>Product</th>
                                        <th>Total</th>
                                        <th>Action</th>
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
                                        <td>$399.00</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Row>
                </div>

                <div className='bg_col mt-4 p-3'>
                    <Row>
                        <h6 className='my-3 fw-bold'>Subscription History</h6>
                        <div>
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th> <Form.Check inline name="group1" /></th>
                                        <th>Subscription ID</th>
                                        <th>Order ID</th>
                                        <th>Pyament ID</th>
                                        <th>Status</th>
                                        <th>Frequency</th>
                                        <th>Remaining</th>
                                        <th>Bill Date</th>
                                        <th>Total</th>
                                        <th>Action</th>
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
export default Subscription_inner;