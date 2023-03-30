import Row from 'react-bootstrap/Row';
import { Form, Table } from 'react-bootstrap';
import { IoMdArrowDropdown } from "react-icons/io";

const Ticket_inner = () => {
    return (
        <>
            <div className='row'>
                <div className='col-md-12'>
                    <div className="p-3 bg_col">
                        <h6 className='fw-bold mb-3'>Step 1: Update or Create</h6>
                        <Form.Check label="Create" name="group1" type='radio' id='ticket' className='fw-bold' />
                        <div className='boxborder mt-3'>
                            <span className='borderTxt'>Step 2: Ticket Info</span>
                            <Row className='g-3'>
                                <div className="col-md-6 col-sm-6">
                                    <div className="form-group cus-form-group">
                                        <Form.Control placeholder="Ticket Name" className='fill-input' />
                                        <label htmlFor="ticket" className='float-label'>Ticket Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <div className="form-group cus-select-group">
                                        <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                            <option>Open</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Control>
                                        <label className='float-label' htmlFor="require_shipping">Open</label>
                                        <IoMdArrowDropdown className='inputIcon' />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <div className="form-group cus-select-group">
                                        <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                            <option>Type</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Control>
                                        <label className='float-label' htmlFor="require_shipping">Type</label>
                                        <IoMdArrowDropdown className='inputIcon' />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <div className="form-group cus-select-group">
                                        <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                            <option>Assigned To</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Control>
                                        <label className='float-label' htmlFor="require_shipping">Assigned To</label>
                                        <IoMdArrowDropdown className='inputIcon' />
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-6">
                                    <Form.Control className='my-3' as="textarea" rows={6} placeholder='Notes to Add' />
                                    <div className="form-group cus-form-group">
                                        <Form.Control as="textarea" rows={6} placeholder='Notes to Add' className='fill-input' />
                                        <label htmlFor="ticket" className='float-label'>Notes to Add</label>
                                    </div>
                                    <div className='float-end'>
                                        <button class="btn-hover color-3 mt-3">Save</button>
                                    </div>
                                </div>
                            </Row>
                        </div>

                        <Row>
                            <h6 className='fw-bold mt-5'>Ticket History</h6>
                            <div>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th> <Form.Check inline name="group1" /></th>
                                            <th>Ticket</th>
                                            <th>Ticket Type</th>
                                            <th>Ticket Status</th>
                                            <th>Ticket Name</th>
                                            <th>Agent</th>
                                            <th>Date Logged</th>
                                            <th>Last Update</th>
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

                                    </tbody>
                                </Table>
                            </div>
                        </Row>
                    </div>

                </div>
            </div>
        </>
    );
}
export default Ticket_inner;