import Row from 'react-bootstrap/Row';
import { Form, Table } from 'react-bootstrap';
import { IoMdArrowDropdown } from "react-icons/io";
const Workflow_Inner = () => {
    return (
        <>
            <div className='p-3'>
                {/* <div className='col-md-12'> */}
                    <div className="p-3 bg_col">
                        <div className='boxborder mt-3'>
                            <h6 className='fw-bold mb-3'>LOG ACTION</h6>
                            <Row className='g-3'>
                                <div className="col-md-4 col-sm-6">
                                    <div className="form-group cus-select-group">
                                        <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                            <option>Action</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Control>
                                        <label className='float-label' htmlFor="require_shipping">Action</label>
                                        <IoMdArrowDropdown className='inputIcon' />
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="form-group cus-select-group">
                                        <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                            <option>Disposition</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Control>
                                        <label className='float-label' htmlFor="require_shipping">Disposition</label>
                                        <IoMdArrowDropdown className='inputIcon' />
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="form-group cus-select-group">
                                        <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                            <option>Next Action</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Control>
                                        <label className='float-label' htmlFor="require_shipping">Next Action</label>
                                        <IoMdArrowDropdown className='inputIcon' />
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="form-group cus-form-group">
                                        <Form.Control className='fill-input form-control' name="datepic" placeholder="DateRange" type="date" value="Wed Nov 02 2022 16:50:21 GMT+0530 (India Standard Time)" />
                                        <label htmlFor="shipping" className='float-label'>Next Action Date</label>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="form-group cus-form-group">
                                        <Form.Control placeholder="Address" className='fill-input' />
                                        <label htmlFor="shipping" className='float-label'>Address</label>
                                    </div>
                                </div>
                                <div className='col-md-12 col-sm-6'>
                                    <div className="form-group cus-form-group">
                                        <Form.Control placeholder="Note" className='fill-input' as="textarea" rows={4} />
                                        <label htmlFor="shipping" className='float-label'>Note</label>
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-6">
                                    <div className='float-end'>
                                        <button class="btn-hover color-1 py-2 px-4 me-2">Clear</button>
                                        <button class="btn-hover color-3 py-2 px-4 r_mt-2">Save</button>
                                    </div>
                                </div>
                            </Row>
                        </div>
                        <Row>
                            <h6 className='fw-bold mt-5'>WORKFLOW</h6>
                            <div>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th> <Form.Check inline name="group1" /></th>
                                            <th>ID</th>
                                            <th>Action Date</th>
                                            <th>Action</th>
                                            <th>Discription</th>
                                            <th>Note</th>
                                            <th>Next Action</th>
                                            <th>Next Action Date</th>
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
            </div>
        </>
    );
}
export default Workflow_Inner;