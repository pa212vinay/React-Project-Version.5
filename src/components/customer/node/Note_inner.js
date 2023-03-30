import { Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import * as React from 'react';

const Note_inner = () => {

    return (
        <>
            <div className='bg_col mt-3 p-3'>
                <Row className='g-3'>
                    <h6 className='fw-bold mb-3'>LOG NOTE</h6>
                    <div className='col-md-12 col-lg-6'>
                        <div className="form-group cus-form-group">
                            <Form.Control placeholder="Type Note Here" as="textarea" rows={7} className='fill-input' />
                            <label htmlFor="shipping" className='float-label'>Type Note Here</label>
                        </div>
                    </div>

                    <div className='col-md-12 col-lg-6 '>
                        <div className="form-group cus-form-group">
                            <Form.Control placeholder="Link Note ot order" as="textarea" rows={4} className='fill-input' />
                            <label htmlFor="shipping" className='float-label'>Link Note ot order</label>
                        </div>
                        <div className='float-end mt-3'>
                            <button class="btn-hover color-1 me-2">Clear</button>
                            <button class="btn-hover color-3   r_mt-2">Log note</button>
                        </div>
                    </div>
                </Row>

                <div className='mt-5'>
                    <Row>
                        <h6 className='fw-bold'></h6>
                        <div>
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th> <Form.Check inline name="group1" /></th>
                                        <th>ID</th>
                                        <th>Order ID</th>
                                        <th>Date/Time</th>
                                        <th>Created Form</th>
                                        <th>Loged by</th>
                                        <th>Note</th>
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
                            <div className="row table_pagination">
                                <div className="col">
                                    <nav aria-label="Page navigation example">
                                        <ul class="pagination">
                                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="col">
                                    <nav aria-label="Page navigation example">
                                        <ul class="pagination float-end">
                                            <li class="page-item">
                                                <a class="page-link" href="#" aria-label="Previous">
                                                    <span aria-hidden="true">&laquo;</span>
                                                </a>
                                            </li>
                                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                                            <li class="page-item">
                                                <a class="page-link" href="#" aria-label="Next">
                                                    <span aria-hidden="true">&raquo;</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </Row>
                </div>

                <div className='mt-5'>
                    <h6 className='fw-bold mt-2'>NOTE</h6>
                    <Row>
                        <div>
                            <Table responsive striped>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td colSpan={2}>Larry the Bird</td>
                                        <td>@twitter</td>
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

export default Note_inner;