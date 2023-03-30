import { Row, Table, Form } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { IoMdArrowDropdown } from "react-icons/io";



const Customer_nav = () => {
  const [More_Action, set1Show] = useState(false);
  const [Order_status, set2Show] = useState(false);
  const [Sale_ocation, set3Show] = useState(false);
  const [Delete, set4Show] = useState(false);
  const [Receipt, set5Show] = useState(false);
  const [Tracking_Number, set10Show] = useState(false);
  const [Text_receipt, set6Show] = useState(false);
  return (
    <>
      <Modal size="lg" show={More_Action} onHide={() => set1Show(false)} aria-labelledby="example-modal-1">
        <div className="px-4">
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-1">
              <h6 className="fw-bold">User Merge Details</h6>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
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
                      <th>Next Action</th>
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

                <Form>
                  <h6 className="fw-bold">Select Customer to Merge Into:</h6>
                  <Row className="mt-4 g-3">
                    <div className="col-md-6 col-sm-12">
                      <div className="form-group cus-form-group">
                        <Form.Control placeholder="First name" className='fill-input' />
                        <label htmlFor="shipping" className='float-label'>First name</label>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <div className="form-group cus-form-group">
                        <Form.Control placeholder="Last name" className='fill-input' />
                        <label htmlFor="shipping" className='float-label'>Last name</label>
                      </div>
                    </div>

                    <div className="col-md-6 col-sm-12">
                      <div className="form-group cus-form-group">
                        <Form.Control placeholder="Phone No." className='fill-input' />
                        <label htmlFor="shipping" className='float-label'>Phone No.</label>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <div className="form-group cus-form-group">
                        <Form.Control placeholder="Fax No." className='fill-input' />
                        <label htmlFor="shipping" className='float-label'>Fax No.</label>
                      </div>
                    </div>

                    <div className="col-md-6 col-sm-12">
                      <div className="form-group cus-form-group">
                        <Form.Control placeholder="Email Id" className='fill-input' />
                        <label htmlFor="shipping" className='float-label'>Email Id</label>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <div className="form-group cus-form-group">
                        <Form.Control placeholder="Company" className='fill-input' />
                        <label htmlFor="shipping" className='float-label'>Company</label>
                      </div>
                    </div>

                    <div className="col-md-6 col-sm-12">
                      <div className="form-group cus-form-group">
                        <Form.Control placeholder="Company" className='fill-input' />
                        <label htmlFor="shipping" className='float-label'>Company</label>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <div className="form-group cus-form-group">
                        <Form.Control placeholder="Contact Source" className='fill-input' />
                        <label htmlFor="shipping" className='float-label'>Contact Source</label>
                      </div>
                    </div>
                  </Row>
                  <button className="btn-hover color-3  mt-3 float-end ">Save</button>
                </Form>
              </div>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <div className="float-end mb-2 mt-3">
              <button className="btn-hover color-1 me-2">Cancel</button>
              <button className="btn-hover color-2 r_mt-2">Save</button>
            </div>
          </Modal.Footer>
        </div>
      </Modal>


      <Modal size="md" show={Order_status} onHide={() => set2Show(false)} aria-labelledby="example-modal-2">
        <div className="px-4">
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-2">
              <h6 className="fw-bold">Order Status</h6>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Row className="my-3">
                <div className="col-md-12 col-sm-12">
                  <div className="form-group cus-select-group">
                    <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                      <option>Select Status</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Control>
                    <label className='float-label' htmlFor="require_shipping">Select Status</label>
                    <IoMdArrowDropdown className='inputIcon' />
                  </div>
                </div>
              </Row>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <div className="float-end mb-2 mt-4">
              <button className="btn-hover color-1 me-2">Cancel</button>
              <button className="btn-hover color-2 r_mt-2">Save</button>
            </div>
          </Modal.Footer>
        </div>
      </Modal>


      <Modal size="md" show={Sale_ocation} onHide={() => set3Show(false)} aria-labelledby="example-modal-3">
        <div className="px-4">
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-3">
              <h6 className="fw-bold">Sale Location</h6>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Row className="my-3">
                <div className="col-md-12 col-sm-12">
                  <div className="form-group cus-select-group">
                    <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                      <option>Select Sale Location</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Control>
                    <label className='float-label' htmlFor="require_shipping">Select Sale Location</label>
                    <IoMdArrowDropdown className='inputIcon' />
                  </div>
                </div>
              </Row>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <div className="float-end mb-2 mt-4">
              <button className="btn-hover color-1 me-2">Cancel</button>
              <button className="btn-hover color-2  r_mt-2">Save</button>
            </div>
          </Modal.Footer>
        </div>
      </Modal>

      <Modal size="md" show={Delete} onHide={() => set4Show(false)} aria-labelledby="example-modal-4">
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
              <button className="btn-hover color-2 r_mt-2">Yes</button>
            </div>
          </Modal.Footer>
        </div>
      </Modal>

      <Modal size="md" show={Receipt} onHide={() => set5Show(false)} aria-labelledby="example-modal-5">
        <div className="px-4">
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-5">
              <h6 className="fw-bold">Receipt</h6>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group cus-form-group">
              <Form.Control placeholder="Email" className='fill-input' />
              <label htmlFor="shipping" className='float-label'>Email</label>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="float-end mb-2 mt-4">
              <button className="btn-hover color-1 me-2">Close</button>
              <button className="btn-hover color-2 r_mt-2">Send</button>
            </div>
          </Modal.Footer>
        </div>
      </Modal>

      <Modal size="md" show={Text_receipt} onHide={() => set6Show(false)} aria-labelledby="example-modal-6">
        <div className="px-4">
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-6">
              <h6 className="fw-bold">Receipt</h6>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group cus-form-group">
              <Form.Control placeholder="Phone" className='fill-input' />
              <label htmlFor="shipping" className='float-label'>Phone</label>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="float-end mb-2 mt-4">
              <button className="btn-hover color-1 me-2" closeButton>Close</button>
              <button className="btn-hover color-2 me-2 r_mt-2">Send</button>
            </div>
          </Modal.Footer>
        </div>
      </Modal>

      <Modal size="md" show={Tracking_Number} onHide={() => set10Show(false)} aria-labelledby="example-modal-10">
        <div className="px-4">
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-10">
              <h6 className="fw-bold">Tracking Number</h6>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h6 className="fw-bold">Enter tracking number</h6>
            <div className="form-group cus-form-group">
              <Form.Control placeholder="Tracking Number" className='fill-input' />
              <label htmlFor="shipping" className='float-label'>Tracking Number</label>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="float-end mb-2 mt-4">
              <button className="btn-hover color-1 me-2" closeButton>Close</button>
              <button className="btn-hover color-2 me-2 r_mt-2">Save changes</button>
            </div>
          </Modal.Footer>
        </div>
      </Modal>

      <div className="TabNav ">
        <Nav className="justify-content-between">
          <Nav.Item className="mt-3">
            <NavLink to="/Invoice" >Order Summary</NavLink>
          </Nav.Item>
          <Nav.Item className="mt-3">
            <NavLink to="/Transaction" >Transaction</NavLink>
          </Nav.Item>
          <Nav.Item className="mt-3">
            <NavLink to="/Tracking_Info" eventKey="link-2.2">Tracking_info</NavLink>
          </Nav.Item>

          <NavDropdown title="Recipt" id="nav-dropdown" className="mt-3">
            <NavDropdown.Item eventKey="4.1">Print Mini Receipt</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Print Cloud Receipt</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Print Full Receipt</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.4">Print Gift Receipt</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.5" onClick={() => set5Show(true)}>Email Receipt</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.6" onClick={() => set6Show(true)}>Text Receipt</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="More Action" id="nav-dropdown" className="mt-3">
            <NavDropdown.Item eventKey="5.1" onClick={() => set1Show(true)}>Move Order</NavDropdown.Item>
            <NavDropdown.Item eventKey="5.2" onClick={() => set2Show(true)}>Change Status</NavDropdown.Item>
            <NavDropdown.Item eventKey="5.3" onClick={() => set3Show(true)}>Change Sale Location</NavDropdown.Item>
            <NavDropdown.Item eventKey="5.5" onClick={() => set4Show(true)}>Delete Order</NavDropdown.Item>
            <NavDropdown.Item eventKey="5.6" onClick={() => set10Show(true)}>Tracking Number</NavDropdown.Item>
          </NavDropdown>

          <Nav.Item className="mt-3">
            <NavLink to="/Update_Invoice" eventKey="link-2.3" target='_blank' >Update Invoice</NavLink>
          </Nav.Item>
        </Nav>
      </div>
    </>

  );
}

export default Customer_nav;
