import React, { useState } from 'react';
import { Row, Col, Form, Table, Modal } from "react-bootstrap";
import { HiPlus } from "react-icons/hi";


const Import_Contact_Inner = () => {
  const [Contact, setContact] = useState(false);
  return (
    <>
      <Modal size="md" show={Contact} onHide={() => setContact(false)} aria-labelledby="example-modal-4">
        <div className="px-4">
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-4">
              <h6 className="fw-bold">Add Contact List</h6>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group cus-form-group">
              <Form.Control placeholder="List Name" className='fill-input' />
              <label htmlFor="shipping" className='float-label'>List Name</label>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="float-end mb-2 mt-4">
              <button className="btn-hover color-1 me-2">No</button>
              <button className="btn-hover color-2 r_mt-2">Yes</button>
            </div>
          </Modal.Footer>
        </div>
      </Modal>
      <div className="mt-2">
        <Row className='g-3'>
          <Col md={{ span: 6, offset: 3 }} >
            <div className='dropFile mt-5'>
              <h6 className='fw-bold'>Upload CSV <a>Example</a></h6>
              <label for="images" class="drop-container">
                <span class="drop-title">Bulk Upload</span>
                or
                <input type="file" id="images" accept="image/*" required />
              </label>
            </div>
            <div class="float-end my-3">
              <button class="btn-hover color-1 me-2">Upload</button>
            </div>
          </Col>
        </Row>

        <div class="row clearfix">
          <Col>
            <Table className='table table-bordered table-hover ' id="tab_logic" responsive >
              <thead>
                <tr className='bg_color_lightblue'>
                  <th>
                    Column Name
                  </th>
                  <th>
                    Action
                  </th>
                  <th>
                    Lower<Form.Check inline name="group1" className='ms-3' />
                  </th>
                  <th>
                    Sample
                  </th>
                </tr>
              </thead>
              <tbody >
                <tr >
                  <td>Contact List</td>
                  <td>
                    <Row>
                      <Col>
                        <div className="form-group cus-select-group w-100">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Mapped</option>
                            <option value="1">One</option> []
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Mapped</label>
                        </div>
                      </Col>
                      <Col>
                        <div className="form-group cus-form-group">
                          <Form.Control placeholder="Address" className='fill-input' />
                          <label htmlFor="shipping" className='float-label'>Address</label>
                        </div>
                      </Col>
                      <Col md={1}>
                        <button className='btn-icon color-3 ms-2' onClick={() => setContact(!Contact)}><HiPlus /></button>
                      </Col>
                    </Row>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
              <thead >
                <tr className='bg_color_lightblue'>
                  <th className='border-end-0 text-start' colSpan={5}>
                    System
                  </th>
                </tr>
              </thead>
              <tbody >
                <tr >
                  <td>User Id</td>
                  <td>
                    <Row>
                      <Col>
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Mapped</option>
                            <option value="1">One</option> []
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Mapped</label>
                        </div>
                      </Col>
                      <Col>
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>User ID</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">User ID</label>
                        </div>
                      </Col>
                    </Row>
                  </td>
                  <td>
                    <Form.Check inline name="group1" className='mx-auto' />
                  </td>
                  <td>
                    11111
                  </td>
                </tr>



                <tr >
                  <td>Owner</td>
                  <td>
                    <Row>
                      <Col>
                        <div className="form-group cus-select-group w-100">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Mapped</option>
                            <option value="1">One</option> []
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Mapped</label>
                        </div>
                      </Col>
                      <Col>
                        <div className="form-group cus-form-group">
                          <Form.Control placeholder="Address" className='fill-input' />
                          <label htmlFor="shipping" className='float-label'>Address</label>
                        </div>
                      </Col>
                    </Row>
                  </td>
                  <td>
                    <Form.Check inline name="group1" className='mx-auto' />
                  </td>
                  <td>
                    70717926
                  </td>
                </tr>


                <tr >
                  <td>Sales Tax Code</td>
                  <td>
                    <Row>
                      <Col md={6}>
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Mapped</option>
                            <option value="1">One</option> []
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Mapped</label>
                        </div>
                      </Col>
                    </Row>
                  </td>
                  <td>
                    <Form.Check inline name="group1" className='mx-auto' />
                  </td>
                  <td>
                    56565
                  </td>
                </tr>

                <tr >
                  <td>Admin Notes</td>
                  <td>
                    <Row>
                      <Col md={6}>
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Mapped</option>
                            <option value="1">One</option> []
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Mapped</label>
                        </div>
                      </Col>
                    </Row>
                  </td>
                  <td>
                    <Form.Check inline name="group1" className='mx-auto' />
                  </td>
                  <td>
                    test
                  </td>
                </tr>

                <tr >
                  <td>Customer Status</td>
                  <td>
                    <Row>
                      <Col md={6}>
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Mapped</option>
                            <option value="1">One</option> []
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Mapped</label>
                        </div>
                      </Col>
                    </Row>
                  </td>
                  <td>
                    <Form.Check inline name="group1" className='mx-auto' />
                  </td>
                  <td>

                  </td>
                </tr>

                <tr >
                  <td>Action</td>
                  <td>
                    <Row>
                      <Col md={6}>
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Mapped</option>
                            <option value="1">One</option> []
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Mapped</label>
                        </div>
                      </Col>
                    </Row>
                  </td>
                  <td>
                    <Form.Check inline name="group1" className='mx-auto' />
                  </td>
                  <td>
                    create
                  </td>
                </tr>
              </tbody>


              <thead >
                <tr className='bg_color_lightblue'>
                  <th className='border-end-0 text-start' colSpan={5}>
                    Card Info
                  </th>
                </tr>
              </thead>
              <tbody >
                <tr >
                  <td>Exp Month</td>
                  <td>
                    <Row>
                      <Col md={6}>
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Ignore</option>
                            <option value="1">One</option> []
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Ignore</label>
                        </div>
                      </Col>
                    </Row>
                  </td>
                  <td>
                    <Form.Check inline name="group1" className='mx-auto' />
                  </td>
                  <td> </td>
                </tr>

                <tr >
                  <td>Exp Year</td>
                  <td>
                    <Row>
                      <Col md={6}>
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Ignore</option>
                            <option value="1">One</option> []
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Ignore</label>
                        </div>
                      </Col>
                    </Row>
                  </td>
                  <td>
                    <Form.Check inline name="group1" className='mx-auto' />
                  </td>
                  <td> </td>
                </tr>

                <tr >
                  <td>Card Number</td>
                  <td>
                    <Row>
                      <Col md={6}>
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Ignore</option>
                            <option value="1">One</option> []
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Ignore</label>
                        </div>
                      </Col>
                    </Row>
                  </td>
                  <td>
                    <Form.Check inline name="group1" className='mx-auto' />
                  </td>
                  <td> </td>
                </tr>
              </tbody>


              <thead >
                <tr className='bg_color_lightblue'>
                  <th className='border-end-0 text-start' colSpan={5}>
                    Demographics
                  </th>
                </tr>
              </thead>
              <tbody >
                <tr >
                  <td>First Name</td>
                  <td>
                    <Row>
                      <Col md={6}>
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Ignore</option>
                            <option value="1">One</option> []
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Mapped</label>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>First Name</option>
                            <option value="1">One</option> []
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">First Name</label>
                        </div>
                      </Col>
                    </Row>
                  </td>
                  <td>
                    <Form.Check inline name="group1" className='mx-auto' />
                  </td>
                  <td>	Test HieCOr </td>
                </tr>

                <tr >
                  <td>Last Name</td>
                  <td>
                    <Row>
                      <Col md={6}>
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Ignore</option>
                            <option value="1">One</option> []
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Mapped</label>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Last Name</option>
                            <option value="1">One</option> []
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Last Name</label>
                        </div>
                      </Col>
                    </Row>
                  </td>
                  <td>
                    <Form.Check inline name="group1" className='mx-auto' />
                  </td>
                  <td>Solution </td>
                </tr>

                <tr >
                  <td>Phone</td>
                  <td>
                    <Row>
                      <Col md={6}>
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Mapped</option>
                            <option value="1">One</option> []
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Mapped</label>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Phone</option>
                            <option value="1">One</option> []
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Phone</label>
                        </div>
                      </Col>
                    </Row>
                  </td>
                  <td>
                    <Form.Check inline name="group1" className='mx-auto' />
                  </td>
                  <td>1111222233 </td>
                </tr>

                <tr >
                  <td>Fax</td>
                  <td>
                    <Row>
                      <Col md={6}>
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Mapped</option>
                            <option value="1">One</option> []
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Mapped</label>
                        </div>
                      </Col>
                    </Row>
                  </td>
                  <td>
                    <Form.Check inline name="group1" className='mx-auto' />
                  </td>
                  <td>123566 </td>
                </tr>

                <tr >
                  <td>Email</td>
                  <td>
                    <Row>
                      <Col md={6}>
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Mapped</option>
                            <option value="1">One</option> []
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Mapped</label>
                        </div>
                      </Col>
                    </Row>
                  </td>
                  <td>
                    <Form.Check inline name="group1" className='mx-auto' />
                  </td>
                  <td>123566 </td>
                </tr>

                <tr >
                  <td>Company</td>
                  <td>
                    <Row>
                      <Col md={6}>
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Mapped</option>
                            <option value="1">One</option> []
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Mapped</label>
                        </div>
                      </Col>
                    </Row>
                  </td>
                  <td>
                    <Form.Check inline name="group1" className='mx-auto' />
                  </td>
                  <td>123566 </td>
                </tr>

                <tr >
                  <td>Title</td>
                  <td>
                    <Row>
                      <Col md={6}>
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Mapped</option>
                            <option value="1">One</option> []
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Mapped</label>
                        </div>
                      </Col>
                    </Row>
                  </td>
                  <td>
                    <Form.Check inline name="group1" className='mx-auto' />
                  </td>
                  <td>123566 </td>
                </tr>

                <tr >
                  <td>Contact Source</td>
                  <td>
                    <Row>
                      <Col md={6}>
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Mapped</option>
                            <option value="1">One</option> []
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Mapped</label>
                        </div>
                      </Col>
                    </Row>
                  </td>
                  <td>
                    <Form.Check inline name="group1" className='mx-auto' />
                  </td>
                  <td>123566 </td>
                </tr>
              </tbody>


              <thead >
                <tr className='bg_color_lightblue'>
                  <th className='border-end-0 text-start' colSpan={5}>
                    Shipping & Billing Address
                  </th>
                </tr>
              </thead>
              <tbody >
                <tr >
                  <td>Shipping Address</td>
                  <td>
                    <Row>
                      <Col md={6}>
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Ignore</option>
                            <option value="1">One</option> []
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Mapped</label>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>First Name</option>
                            <option value="1">One</option> []
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">First Name</label>
                        </div>
                      </Col>
                    </Row>
                  </td>
                  <td>
                    <Form.Check inline name="group1" className='mx-auto' />
                  </td>
                  <td>	Test HieCOr </td>
                </tr>

                <tr >
                  <td>Shipping Address (line 2)</td>
                  <td>
                    <Row>
                      <Col md={6}>
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Ignore</option>
                            <option value="1">One</option> []
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Mapped</label>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Last Name</option>
                            <option value="1">One</option> []
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Last Name</label>
                        </div>
                      </Col>
                    </Row>
                  </td>
                  <td>
                    <Form.Check inline name="group1" className='mx-auto' />
                  </td>
                  <td>Solution </td>
                </tr>

                <tr >
                  <td>Shipping City</td>
                  <td>
                    <Row>
                      <Col md={6}>
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Mapped</option>
                            <option value="1">One</option> []
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Mapped</label>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Phone</option>
                            <option value="1">One</option> []
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Phone</label>
                        </div>
                      </Col>
                    </Row>
                  </td>
                  <td>
                    <Form.Check inline name="group1" className='mx-auto' />
                  </td>
                  <td>1111222233 </td>
                </tr>

                <tr >
                  <td>Shipping State</td>
                  <td>
                    <Row>
                      <Col md={6}>
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Mapped</option>
                            <option value="1">One</option> []
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Mapped</label>
                        </div>
                      </Col>
                    </Row>
                  </td>
                  <td>
                    <Form.Check inline name="group1" className='mx-auto' />
                  </td>
                  <td>123566 </td>
                </tr>

                <tr >
                  <td>Shipping Country</td>
                  <td>
                    <Row>
                      <Col md={6}>
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Mapped</option>
                            <option value="1">One</option> []
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Mapped</label>
                        </div>
                      </Col>
                    </Row>
                  </td>
                  <td>
                    <Form.Check inline name="group1" className='mx-auto' />
                  </td>
                  <td>123566 </td>
                </tr>

                <tr >
                  <td>Shipping Zip</td>
                  <td>
                    <Row>
                      <Col md={6}>
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Mapped</option>
                            <option value="1">One</option> []
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Mapped</label>
                        </div>
                      </Col>
                    </Row>
                  </td>
                  <td>
                    <Form.Check inline name="group1" className='mx-auto' />
                  </td>
                  <td>123566 </td>
                </tr>

                <tr >
                  <td>Billing Address</td>
                  <td>
                    <Row>
                      <Col md={6}>
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Mapped</option>
                            <option value="1">One</option> []
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Mapped</label>
                        </div>
                      </Col>
                    </Row>
                  </td>
                  <td>
                    <Form.Check inline name="group1" className='mx-auto' />
                  </td>
                  <td>123566 </td>
                </tr>

                <tr >
                  <td>Billing Address (line 2)</td>
                  <td>
                    <Row>
                      <Col md={6}>
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Mapped</option>
                            <option value="1">One</option> []
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Mapped</label>
                        </div>
                      </Col>
                    </Row>
                  </td>
                  <td>
                    <Form.Check inline name="group1" className='mx-auto' />
                  </td>
                  <td>123566 </td>
                </tr>

                <tr >
                  <td>Billing City</td>
                  <td>
                    <Row>
                      <Col md={6}>
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Mapped</option>
                            <option value="1">One</option> []
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Mapped</label>
                        </div>
                      </Col>
                    </Row>
                  </td>
                  <td>
                    <Form.Check inline name="group1" className='mx-auto' />
                  </td>
                  <td>123566 </td>
                </tr>

                <tr >
                  <td>Billing State</td>
                  <td>
                    <Row>
                      <Col>
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Mapped</option>
                            <option value="1">One</option> []
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Mapped</label>
                        </div>
                      </Col>
                      <Col>
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Zip</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Zip</label>
                        </div>
                      </Col>
                    </Row>
                  </td>
                  <td>
                    <Form.Check inline name="group1" className='mx-auto' />
                  </td>
                  <td>123566 </td>
                </tr>

                <tr >
                  <td>Billing Country</td>
                  <td>
                    <Row>
                      <Col md={6}>
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Mapped</option>
                            <option value="1">One</option> []
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Mapped</label>
                        </div>
                      </Col>
                    </Row>
                  </td>
                  <td>
                    <Form.Check inline name="group1" className='mx-auto' />
                  </td>
                  <td>123566 </td>
                </tr>

                <tr >
                  <td>Billing Zip</td>
                  <td>
                    <Row>
                      <Col>
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Mapped</option>
                            <option value="1">One</option> []
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Mapped</label>
                        </div>
                      </Col>
                      <Col>
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>State</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">State</label>
                        </div>
                      </Col>
                    </Row>
                  </td>
                  <td>
                    <Form.Check inline name="group1" className='mx-auto' />
                  </td>
                  <td>123566 </td>
                </tr>

                <tr >
                  <td>Opt Out</td>
                  <td>
                    <Row>
                      <Col md={6}>
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Mapped</option>
                            <option value="1">One</option> []
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Mapped</label>
                        </div>
                      </Col>
                    </Row>
                  </td>
                  <td>
                    <Form.Check inline name="group1" className='mx-auto' />
                  </td>
                  <td>123566 </td>
                </tr>
              </tbody>


              <thead >
                <tr className='bg_color_lightblue'>
                  <th className='border-end-0 text-start' colSpan={5}>
                    Custom
                  </th>
                </tr>
              </thead>
              <tbody >
                <tr >
                  <td>Custom 1</td>
                  <td>
                    <Row>
                      <Col md={6}>
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Ignore</option>
                            <option value="1">One</option> []
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Mapped</label>
                        </div>
                      </Col>

                    </Row>
                  </td>
                  <td>
                    <Form.Check inline name="group1" className='mx-auto' />
                  </td>
                  <td>	Test HieCOr </td>
                </tr>

                <tr >
                  <td>Custom 2</td>
                  <td>
                    <Row>
                      <Col md={6}>
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Ignore</option>
                            <option value="1">One</option> []
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Mapped</label>
                        </div>
                      </Col>

                    </Row>
                  </td>
                  <td>
                    <Form.Check inline name="group1" className='mx-auto' />
                  </td>
                  <td>Solution </td>
                </tr>

                <tr >
                  <td>Custom 3</td>
                  <td>
                    <Row>
                      <Col md={6}>
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Mapped</option>
                            <option value="1">One</option> []
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Mapped</label>
                        </div>
                      </Col>

                    </Row>
                  </td>
                  <td>
                    <Form.Check inline name="group1" className='mx-auto' />
                  </td>
                  <td>1111222233 </td>
                </tr>

                <tr >
                  <td>Custom 4</td>
                  <td>
                    <Row>
                      <Col md={6}>
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Mapped</option>
                            <option value="1">One</option> []
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Mapped</label>
                        </div>
                      </Col>
                    </Row>
                  </td>
                  <td>
                    <Form.Check inline name="group1" className='mx-auto' />
                  </td>
                  <td>123566 </td>
                </tr>

                <tr >
                  <td>Custom 5</td>
                  <td>
                    <Row>
                      <Col md={6}>
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Mapped</option>
                            <option value="1">One</option> []
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Mapped</label>
                        </div>
                      </Col>
                    </Row>
                  </td>
                  <td>
                    <Form.Check inline name="group1" className='mx-auto' />
                  </td>
                  <td>123566 </td>
                </tr>

                <tr >
                  <td>Contact Type</td>
                  <td>
                    <Row>
                      <Col md={6}>
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Mapped</option>
                            <option value="1">One</option> []
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Mapped</label>
                        </div>
                      </Col>
                    </Row>
                  </td>
                  <td>
                    <Form.Check inline name="group1" className='mx-auto' />
                  </td>
                  <td>123566 </td>
                </tr>

                <tr >
                  <td>Office Phone</td>
                  <td>
                    <Row>
                      <Col md={6}>
                        <div className="form-group cus-select-group">
                          <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                            <option>Mapped</option>
                            <option value="1">One</option> []
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Control>
                          <label className='float-label' htmlFor="require_shipping">Mapped</label>
                        </div>
                      </Col>
                    </Row>
                  </td>
                  <td>
                    <Form.Check inline name="group1" className='mx-auto' />
                  </td>
                  <td>123566 </td>
                </tr>

              </tbody>
            </Table>
          </Col>
        </div>
      </div>
    </>
  );
}
export default Import_Contact_Inner;