import { Form, Row, Table, Col, Dropdown, Tab, Tabs } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useState } from 'react';
import Filter from './Filter';
import { Icon } from '@iconify/react';
import { Editor } from 'react-draft-wysiwyg';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


const Contact_Inner = () => {
  const [filter, setFilter] = useState(false);
  const [contact, setContact] = useState(false);
  return (
    <>
      <div className="contact_inner my-3">
        <Row>
          <Col xxl={4} xl={4} lg={4} md={4} sm={12} xs={12}>
            <div className="form-group cus-select-group">
              <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                <input type='text' />
                <option>All Contact</option>
                <option value="1">Email</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Control>
              <label className='float-label' htmlFor="require_shipping">Contact</label>
              <Icon icon="mdi:arrow-down-drop" className='inputIcon'/>
            </div>
          </Col>
          <Col xxl={8} xl={8} lg={8} md={8} sm={12} xs={12}>
            <Dropdown className='float-end r_mt-2'>
              <Dropdown.Toggle className='btn-icon color-3'>
                <Icon icon="mdi:dots-vertical" width={24}/>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/New_Details">Save</Dropdown.Item>
                <Dropdown.Item as={Link} to="/Import_Contact"> Import Contact</Dropdown.Item>
                <Dropdown.Item as={Link} to="/Contact_Email">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Link to="/New_Details">
              <button className='btn-hover color-3 float-end me-2 r_mt-2' >New</button>
            </Link>
            <button className='btn-hover color-3 float-end me-2 r_mt-2' onClick={() => setFilter(!filter)}>Filter</button>
          </Col>
          {
            filter ?
              <Filter /> : null
          }
        </Row>
        <div className='table-responsive'>
          <Table className='mt-4'>
            <thead>
              <tr>
                <th><Form.Check inline name="group1" /></th>
                <th>User ID</th>
                <th>Customer Status</th>
                <th>Name</th>
                <th>Email</th>
                <th>Company</th>
                <th>City</th>
                <th>Address</th>
                <th>Address 2</th>
                <th>State</th>
                <th>Postal code</th>
                <th>Contact source</th>
                <th>State</th>
                <th>ABV ID</th>
                <th>Additionl Phone</th>
                <th>Phone</th>
                <th>Dollers Spend</th>
                <th>Last Order Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><Form.Check inline name="group1" /></td>
                <td className="text-decoration-none cursor"><Icon icon="ic:round-play-arrow" width={18} onClick={() => setContact(!contact)} className='me-2'/><lable>1</lable></td>
                <td>menual testing</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
              </tr>
              {
                contact ?  
                <tr>
                  <td colSpan={18} className="p-3">

                    <div className='row g-3'>
                      <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                        <div className=" bg_col p-3">
                          <Tabs
                            defaultActiveKey="Email"
                            transition={false}
                            id="noanim-tab-example"
                            className=" contact_tab me-0"
                          >
                            <Tab eventKey="Email" title="Email" className='me-0'>
                              <Row className="mt-3 g-3">
                                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <Row className='g-3'>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                      <div className="form-group cus-select-group">
                                        <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                          <option>Select Template</option>
                                          <option value="1">One</option>
                                          <option value="2">Two</option>
                                          <option value="3">Three</option>
                                        </Form.Control>
                                        <label className='float-label' htmlFor="require_shipping"></label>
                                        <Icon icon="mdi:arrow-down-drop" className='inputIcon'/>
                                      </div>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                      <div className='upload-btn-wrapper col-md-3 col-sm-12'>
                                        <button className="btn-icon color-3">
                                        <Icon icon="ci:paperclip-attechment-tilt" width={22} />
                                        </button>
                                        <input type="file" name="myfile" />
                                      </div>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                      <div className="form-group cus-form-group">
                                        <Form.Control placeholder="From" className='fill-input' />
                                        <label htmlFor="ticket" className='float-label'>From</label>
                                      </div>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                      <div className="form-group cus-form-group">
                                        <Form.Control placeholder="To" className='fill-input' />
                                        <label htmlFor="ticket" className='float-label'>To</label>
                                      </div>
                                    </div>
                                    <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                      <div className="form-group cus-form-group">
                                        <Form.Control placeholder="Subject" className='fill-input' />
                                        <label htmlFor="ticket" className='float-label'>Subject</label>
                                      </div>
                                    </div>
                                    <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-3'>
                                      <h6 className='fw-bold'>Body</h6>
                                      <Editor />
                                    </div>
                                    <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                      <button className="btn-hover color-3 float-end w-auto">Send Email</button>
                                    </div>
                                  </Row>
                                </div>
                              </Row>
                            </Tab>
                            <Tab eventKey="Task" title="Task">
                              <Row className="mt-3 g-3">
                                <div className="col-md-12">

                                  <Row className='g-3'>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                      <div className="form-group cus-select-group">
                                        <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                          <option>Select Template</option>
                                          <option value="1">One</option>
                                          <option value="2">Two</option>
                                          <option value="3">Three</option>
                                        </Form.Control>
                                        <label className='float-label' htmlFor="require_shipping">Action</label>
                                        <Icon icon="mdi:arrow-down-drop" className='inputIcon'/>
                                      </div>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                      <div className="form-group cus-select-group">
                                        <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                          <option>Select Template</option>
                                          <option value="1">One</option>
                                          <option value="2">Two</option>
                                          <option value="3">Three</option>
                                        </Form.Control>
                                        <label className='float-label' htmlFor="require_shipping">Disposition</label>
                                        <Icon icon="mdi:arrow-down-drop" className='inputIcon'/>
                                        
                                      </div>
                                    </div>

                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                      <div className="form-group cus-form-group">
                                        <Form.Control className='fill-input form-control' name="datepic" placeholder="DateRange" type="date" />
                                        <label htmlFor="shipping" className='float-label'>Next Action Date</label>
                                      </div>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                      <div className="form-group cus-select-group">
                                        <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                          <option>Select Template</option>
                                          <option value="1">One</option>
                                          <option value="2">Two</option>
                                          <option value="3">Three</option>
                                        </Form.Control>
                                        <label className='float-label' htmlFor="require_shipping">Select Celendar</label>
                                        <Icon icon="mdi:arrow-down-drop" className='inputIcon'/>
                                      </div>
                                    </div>
                                    <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-3'>
                                      <div className="form-group cus-form-group">
                                        <Form.Control placeholder="Message" as="textarea" rows={12} className='fill-input' />
                                        <label htmlFor="shipping" className='float-label'>Notes</label>
                                      </div>
                                    </div>
                                    <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                      <button className="btn-hover color-3 float-end w-auto">Save</button>
                                    </div>
                                  </Row>
                                </div>
                              </Row>
                            </Tab>
                          </Tabs>
                        </div>
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className=" bg_col p-3">
                          <h6 className='fw-bold mb-3'>NOTES</h6>
                          <Row className='g-3'>
                            <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-3'>
                              <div className="form-group cus-form-group">
                                <Form.Control placeholder="Enter a Note here" as="textarea" rows={12} className='fill-input' />
                                <label htmlFor="shipping" className='float-label'>Message</label>
                              </div>
                            </div>
                            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                              <button className="btn-hover color-3 float-end w-auto">Save</button>
                            </div>
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
                                </tbody>
                              </Table>
                            </div>
                          </Row>
                        </div>
                      </div>
                    </div>

                  </td>
                </tr>
                : null
              }
              <tr>
                <td><Form.Check inline name="group1" /></td>
                <td><Icon icon="ic:round-play-arrow" width={18} className='me-2'/>2</td>
                <td>menual testing</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
              </tr>
              <tr>
                <td><Form.Check inline name="group1" /></td>
                <td><Icon icon="ic:round-play-arrow" width={18} className='me-2'/>3</td>
                <td>menual testing</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
              </tr>
              <tr>
                <td><Form.Check inline name="group1" /></td>
                <td><Icon icon="ic:round-play-arrow" width={18} className='me-2'/>4</td>
                <td>menual testing</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
              </tr>
              <tr>
                <td><Form.Check inline name="group1" /></td>
                <td><Icon icon="ic:round-play-arrow" width={18} className='me-2'/>5</td>
                <td>menual testing</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
                <td>$399.00</td>
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
      </div>
    </>
  );
}
export default Contact_Inner;