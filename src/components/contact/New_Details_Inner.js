import React from 'react';
import { Row, Form, Accordion } from "react-bootstrap";
import { IoMdArrowDropdown } from "react-icons/io";
const New_Details = () => {
  return (
    <>
      <div className="mt-2">
        <div className='row'>
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Demographics </Accordion.Header>
              <Accordion.Body>
                <Form>
                  <Row className=" g-3">
                    <div className="col-md-4 col-sm-12">
                      <div className="form-group cus-form-group">
                        <Form.Control className='fill-input' placeholder="First name" />
                        <label htmlFor="shipping" className='float-label'>First name</label>
                      </div>

                    </div>
                    <div className="col-md-4 col-sm-12">
                      <div className="form-group cus-form-group">
                        <Form.Control placeholder="Last name" className='fill-input' />
                        <label htmlFor="shipping" className='float-label'>Last name</label>
                      </div>
                    </div>

                    <div className="col-md-4 col-sm-12">
                      <div className="form-group cus-form-group">
                        <Form.Control placeholder="Phone No." className='fill-input' />
                        <label htmlFor="shipping" className='float-label'>Phone No.</label>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <div className="form-group cus-form-group">
                        <Form.Control placeholder="Fax No." className='fill-input' />
                        <label htmlFor="shipping" className='float-label'>Fax No.</label>
                      </div>
                    </div>

                    <div className="col-md-4 col-sm-12">
                      <div className="form-group cus-form-group">
                        <Form.Control placeholder="Email Id" className='fill-input' />
                        <label htmlFor="shipping" className='float-label'>Email Id</label>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <div className="form-group cus-form-group">
                        <Form.Control placeholder="Company" className='fill-input' />
                        <label htmlFor="shipping" className='float-label'>Company</label>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <div className="form-group cus-form-group">
                        <Form.Control placeholder="Title" className='fill-input' />
                        <label htmlFor="shipping" className='float-label'>Title</label>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <div className="form-group cus-form-group">
                        <Form.Control placeholder="Contact Source" className='fill-input' />
                        <label htmlFor="shipping" className='float-label'>Contact Source</label>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <div className="form-group cus-select-group">
                        <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                          <option>Contact List</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Control>
                        <label className='float-label' htmlFor="require_shipping">Contact List</label>
                        <IoMdArrowDropdown className='inputIcon' />
                      </div>
                    </div>
                  </Row>
                </Form>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Shiping & Billing Address</Accordion.Header>
              <Accordion.Body>
                <Form>
                  <Row className="g-3">
                    <div className="col-md-4 col-sm-12">
                      <div className="form-group cus-form-group">
                        <Form.Control placeholder="Billing Address" className='fill-input' />
                        <label htmlFor="shipping" className='float-label'>Billing Address</label>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <div className="form-group cus-form-group">
                        <Form.Control placeholder="Billing Address 2" className='fill-input' />
                        <label htmlFor="shipping" className='float-label'>Billing Address 2</label>
                      </div>
                    </div>

                    <div className="col-md-4 col-sm-12">
                      <div className="form-group cus-form-group">
                        <Form.Control placeholder="Billing city" className='fill-input' />
                        <label htmlFor="shipping" className='float-label'>Billing city</label>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <div className="form-group cus-select-group">
                        <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                          <option>Select State</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Control>
                        <label className='float-label' htmlFor="require_shipping">Select State</label>
                        <IoMdArrowDropdown className='inputIcon' />
                      </div>
                    </div>

                    <div className="col-md-4 col-sm-12">
                      <div className="form-group cus-form-group">
                        <Form.Control placeholder="Billing Zip" className='fill-input' />
                        <label htmlFor="shipping" className='float-label'>Billing Zip</label>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <div className="form-group cus-select-group">
                        <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                          <option>United State</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Control>
                        <label className='float-label' htmlFor="require_shipping">United State</label>
                        <IoMdArrowDropdown className='inputIcon' />
                      </div>
                    </div>

                    <div className="col-md-12 col-sm-12">
                      <Form.Check inline label="Shipping Same as Billing" />
                      <Form.Check label="Opt-Out" />
                      <Form.Check inline label="Update Shipping Address on Specific Order" />
                    </div>

                  </Row>
                </Form>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>QuickBooks Mapping</Accordion.Header>
              <Accordion.Body>
                <Form>
                  <Row className="">
                    <div className="col-md-12 col-sm-12">
                      <div className="form-group cus-form-group">
                        <Form.Control placeholder="QuickBooks Mapping" className='fill-input' />
                        <label htmlFor="shipping" className='float-label'>QuickBooks Mapping</label>
                      </div>
                      <div className='mappingBox'>
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                      </div>
                    </div>
                  </Row>
                </Form>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Custom</Accordion.Header>
              <Accordion.Body>
                <Form>
                  <Row className="g-3">
                    <div className="col-md-4 col-sm-12">
                      <div className="form-group cus-form">
                        <Form.Control className='fill-input' />
                        <label htmlFor="shipping" className='cus-float-label'>Name</label>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <div className="form-group cus-form">
                        <Form.Control className='fill-input' />
                        <label htmlFor="shipping" className='cus-float-label'>Second Phone11</label>
                      </div>
                    </div>

                    <div className="col-md-4 col-sm-12">
                      <div className="form-group cus-form">
                        <Form.Control className='fill-input' />
                        <label htmlFor="shipping" className='cus-float-label'>Gender</label>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <div className="form-group cus-form">
                        <Form.Control className='fill-input' />
                        <label htmlFor="shipping" className='cus-float-label'>Additional Number</label>
                      </div>
                    </div>

                    <div className="col-md-4 col-sm-12">
                      <div className="form-group cus-form">
                        <Form.Control className='fill-input' />
                        <label htmlFor="shipping" className='cus-float-label'>Custom Text 2</label>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <div className="form-group cus-form">
                        <Form.Control className='fill-input' />
                        <label htmlFor="shipping" className='cus-float-label'>Contact Type</label>
                      </div>
                    </div>

                    <div className="col-md-4 col-sm-12">
                      <div className="form-group cus-form">
                        <Form.Control className='fill-input' />
                        <label htmlFor="shipping" className='cus-float-label'>Social Media</label>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <div className="form-group cus-form">
                        <Form.Control className='fill-input' />
                        <label htmlFor="shipping" className='cus-float-label'>Office Phone</label>
                      </div>
                    </div>
                  </Row>
                </Form>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Payment Info</Accordion.Header>
              <Accordion.Body>
                <Form>

                  <Row className="g-3">
                    <div className='col-xxl-3 col-xl-3 col-md-6 col-sm-12'>
                      <div className="form-group cus-form-group">
                        <Form.Control placeholder="Card Number" className='fill-input' />
                        <label htmlFor="shipping" className='float-label'>Card Number</label>
                      </div>
                    </div>
                    <div className='col-xxl-2 col-xl-2 col-md-3 col-sm-12'>
                      <div className="form-group cus-select-group">
                        <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                          <option>Exp Month</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Control>
                        <label className='float-label' htmlFor="require_shipping">Exp Month</label>
                        <IoMdArrowDropdown className='inputIcon' />
                      </div>
                    </div>
                    <div className='col-xxl-2 col-xl-2 col-md-3 col-sm-12'>
                      <div className="form-group cus-select-group">
                        <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                          <option>Exp Year</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Control>
                        <label className='float-label' htmlFor="require_shipping">Exp Year</label>
                        <IoMdArrowDropdown className='inputIcon' />
                      </div>
                    </div>

                  </Row>
                </Form>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>


        </div>
        <div className='row'>
          <div className='mt-3 float-end'>
            <button className="btn-hover color-1 me-2">Cancel</button>
            <button className="btn-hover color-3 r_mt-2">Save</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default New_Details;