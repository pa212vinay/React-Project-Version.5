import React, { useState } from "react";
import { Form, Row, Col, Table, Modal, Nav, Tab } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import "react-datepicker/dist/react-datepicker.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const Tracking_Ad = () => {
    // -------------------Custom
    const [edit, setEdit] = useState(false);
    const [copy, setCopy] = useState(false);
    const [newcamp, setNewcamp] = useState(false);
    const [management, setManagement] = useState(false);
    const [date, setDate] = useState(new Date());
    const [setting, setSetting] = useState(false);
    const [enable, setEnable] = useState(false);

    const renderTooltip = props => (
        <Tooltip {...props}>
            <ul>
            Password must be:   
                <li>7 characters in length</li>
                <li>Contain one or more lower case character</li>
                <li>Contain one or more upper case character</li>
                <li>Contain one or more numeric values</li>
            </ul>
        </Tooltip>
      );

    const [Affiliate, setAffiliate] = useState([{
        Affiliate_user: ' ',
    }]);

    const addAffiliate = () => {
        setAffiliate([...Affiliate, {
            Affiliate_user: '',
        }])
    }

    const removeAffiliate = (Custom) => {
        const rows = [...Affiliate];
        rows.splice(Custom, 1);
        setAffiliate(rows);
    }

    const handleChangeCustom = (Custom, evnt) => {
        const { name, value } = evnt.target;
        const list = [...Affiliate];
        list[Custom][name] = value;
        setAffiliate(list);
    }
    // -------------------------opne Pixel
    const [Pixle_page, setPixle] = useState([{
        Pixel_user: ' ',
    }]);

    const addPixle = () => {
        setPixle([...Pixle_page, {
            Pixle_user: '',
        }])
    }

    const removePixle = (Pixel) => {
        const rows = [...Pixle_page];
        rows.splice(Pixel, 1);
        setPixle(rows);
    }

    const handleChangePixel = (Pixel, evnt) => {
        const { name, value } = evnt.target;
        const list = [...Pixle_page];
        list[Pixel][name] = value;
        setPixle(list);
    }




    return (
        <div className="tracking_Ad">
            <Modal size="lg" show={edit} onHide={() => setEdit(false)} aria-labelledby="example-modal-1" className="edit_tracking">
                <div className="">
                    <Modal.Header closeButton >
                        <Modal.Title id="example-modal-1" className="mb-0 txt_color">
                            <p className="mb-0"> Edit Campaign</p>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col md={12}>
                                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                    <Nav variant="pills " >
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">General Info</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Tracking Pixel</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="Third">Pay out</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <Row className="g-3">
                                                <Col md={12}>

                                                    <div className="form-group cus-form-group mt-5">
                                                        <Form.Control placeholder="Campaign Code" className='fill-input' />
                                                        <label htmlFor="Campaign Code" className='float-label'>Campaign Code</label>
                                                    </div>
                                                    <div className="form-group cus-form-group mt-3">
                                                        <Form.Control placeholder="Campaign Description" className='fill-input' />
                                                        <label htmlFor="Campaign Description" className='float-label'>Campaign Description</label>
                                                    </div>
                                                    <h3 className="fw-bold my-4">Limit to subID(comma separated)</h3>

                                                    <Form.Group as={Row} className="g-3" controlId="form">
                                                        <Col sm={12}>
                                                            <p className="mb-1">Affiliate User</p>
                                                        </Col>
                                                        <Col sm={6}>
                                                            <div className="form-group cus-select-group">
                                                                <Form.Control className="form-control fill-input" as="select" name="select">
                                                                    <option>Please Select</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </Form.Control>
                                                                <label className='float-label' htmlFor="select">Source</label>
                                                                <Icon icon="ic:round-keyboard-arrow-down" className='inputIcon' />
                                                            </div>
                                                        </Col>
                                                        <Col sm={5}>
                                                            <div className="form-group cus-form-group">
                                                                <Form.Control placeholder="Email To" className='fill-input' />
                                                                <label htmlFor="shipping" className='float-label'>Email To</label>
                                                            </div>
                                                        </Col>
                                                        <Col sm={1} className="text-end"><Icon icon="material-symbols:add-circle-outline" className="icon-add " onClick={addAffiliate} /></Col>
                                                    </Form.Group>
                                                    {
                                                        Affiliate.map((data, Custom) => {
                                                            const { Affiliate_user } = data;
                                                            return (
                                                                <Form.Group as={Row} className="mt-1 g-3" controlId="form" onChange={(evnt) => handleChangeCustom(Custom, evnt)} value={Affiliate_user} name="Affiliate_user">
                                                                    <Col sm={12}>
                                                                        <p className="mb-1">Affiliate User</p>
                                                                    </Col>
                                                                    <Col sm={6}>
                                                                        <div className="form-group cus-select-group">
                                                                            <Form.Control className="form-control fill-input" as="select" name="select">
                                                                                <option>Please Select</option>
                                                                                <option value="1">One</option>
                                                                                <option value="2">Two</option>
                                                                                <option value="3">Three</option>
                                                                            </Form.Control>
                                                                            <label className='float-label' htmlFor="select">Source</label>
                                                                            <Icon icon="ic:round-keyboard-arrow-down" className='inputIcon' />
                                                                        </div>
                                                                    </Col>
                                                                    <Col sm={5}>
                                                                        <div className="form-group cus-form-group">
                                                                            <Form.Control placeholder="Email To" className='fill-input' />
                                                                            <label htmlFor="shipping" className='float-label'>Email To</label>
                                                                        </div>
                                                                    </Col>
                                                                    <Col sm={1} className="text-end">{(Affiliate.length !== 0) ? <Icon icon="ph:minus-circle-bold" className="icon-minus" onClick={removeAffiliate} /> : ''}</Col>
                                                                </Form.Group>
                                                            )
                                                        })
                                                    }
                                                    <Col md={12} sm={12} className="mt-4">
                                                        <div className="form-group cus-select-group">
                                                            <Form.Control className="form-control fill-input" as="select" name="select">
                                                                <option>Select Campaign</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </Form.Control>
                                                            <label className='float-label' htmlFor="select">Campaign Status</label>
                                                            <Icon icon="ic:round-keyboard-arrow-down" className='inputIcon' />
                                                        </div>
                                                    </Col>
                                                    <Col md={12} sm={12} className="mt-4">
                                                        <p>Active allow all affiliate to view campaign.Deleted cause all jump link to return dead</p>
                                                        <div className="form-group cus-form-group">
                                                            <Form.Control placeholder="Email To" className='fill-input' />
                                                            <label htmlFor="shipping" className='float-label'>Email To</label>
                                                        </div>
                                                    </Col>
                                                    <Col md={12} sm={12} className="mt-4">
                                                        <p>Assign reference Id to this offer and pass this value into campaign URl's</p>
                                                        <div className="form-group cus-form-group">
                                                            <Form.Control className='fill-input' type="date" name="datepic" placeholder="Expiration" value={date} onChange={(e) => setDate(e.target.value)} />
                                                            <label htmlFor="shipping" className='float-label'>Expiration</label>
                                                        </div>
                                                    </Col>
                                                    <Row className="my-3 g-3">
                                                        <p className="fw-bold">last day the campaign will be archive</p>
                                                        <Col md={4} sm={12}>Campaign URL</Col>
                                                        <Col md={8} sm={12}>http://mike.corcrm.com/track/testjq/offer/newv5</Col>

                                                        <Col md={4} sm={12}>Affiliate Pixel</Col>
                                                        <Col md={8} sm={12}><img src="http://mike.corcrm.com/pixel/testjq/offer/newv5/?order_id={orderID}" /></Col>


                                                        <Col md={4} sm={12}>Default Destination</Col>
                                                        <Col md={8} sm={12}>
                                                            <Form.Check inline label="Week" name="group1" type="radio" />
                                                            <Form.Check inline label="Month" name="group1" type="radio" />
                                                            <Form.Check inline label="Once" name="group1" type="radio" />
                                                        </Col>
                                                    </Row>
                                                    <Row className="mt-3 g-3">
                                                        <Col md={6} sm={6} className="mt-3">
                                                            <div className="form-group cus-select-group">
                                                                <Form.Control className="form-control fill-input" as="select" name="select">
                                                                    <option>Select Landing Page</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </Form.Control>
                                                                <label className='float-label' htmlFor="select">Default Landing Page</label>
                                                                <Icon icon="ic:round-keyboard-arrow-down" className='inputIcon' />
                                                            </div>
                                                        </Col>
                                                        <Col md={6} sm={6} className="mt-3">
                                                            <div className="form-group cus-form-group">
                                                                <Form.Control placeholder="Sub ID" className='fill-input' />
                                                                <label htmlFor="Sub ID" className='float-label'>Sub ID</label>
                                                            </div>
                                                        </Col>
                                                    </Row>

                                                    <button className="btn-hover color-3 my-3" onClick={() => setSetting(!setting)}><Icon icon="ant-design:setting-filled" className="me-2 text-white" />Setting</button>

                                                    {
                                                        setting ?
                                                            <div>
                                                                <Form.Group as={Row} className="mb-3 g-3" controlId="form">
                                                                    <Col sm={12}>
                                                                        <p className="mb-1">Daily Conversions</p>
                                                                    </Col>
                                                                    <Col sm={6}>
                                                                        <div className="form-group cus-form-group">
                                                                            <Form.Control placeholder="" className='fill-input' type="number" />
                                                                            <label htmlFor="shipping" className='float-label'>Number</label>
                                                                        </div>
                                                                    </Col>
                                                                    <Col sm={6}>
                                                                        <div className="form-group cus-select-group">
                                                                            <Form.Control className="form-control fill-input" as="select" name="select">
                                                                                <option>Select Act upon limit</option>
                                                                                <option value="1">One</option>
                                                                                <option value="2">Two</option>
                                                                                <option value="3">Three</option>
                                                                            </Form.Control>
                                                                            <Icon icon="ic:round-keyboard-arrow-down" className='inputIcon' />
                                                                        </div>
                                                                    </Col>
                                                                </Form.Group>
                                                                <Form.Group as={Row} className=" g-3" controlId="form">
                                                                    <p className="mt-3 mb-0">Max number of conversions offer can receive per day. For Reporting Purposes Only.</p>
                                                                    <Col sm={12}><h3 className="fw-bold mb-0">Monthly Conversions</h3></Col>
                                                                    <Col sm={6}>
                                                                        <div className="form-group cus-form-group">
                                                                            <Form.Control placeholder="Email To" className='fill-input' type="number" />
                                                                            <label htmlFor="shipping" className='float-label'>Email To</label>
                                                                        </div>
                                                                    </Col>
                                                                    <Col sm={6}>
                                                                        <div className="form-group cus-select-group">
                                                                            <Form.Control className="form-control fill-input" as="select" name="select">
                                                                                <option>Select Act upon monthly limit</option>
                                                                                <option value="1">One</option>
                                                                                <option value="2">Two</option>
                                                                                <option value="3">Three</option>
                                                                            </Form.Control>
                                                                            <Icon icon="ic:round-keyboard-arrow-down" className='inputIcon' />
                                                                        </div>
                                                                    </Col>
                                                                </Form.Group>

                                                                <Col md={12} sm={12} className="mt-3">
                                                                    <p>Max number of conversions offer can receive per day. For Reporting Purposes Only.</p>
                                                                    <div className="form-group cus-form-group">
                                                                        <Form.Control placeholder="Daily Payout" className='fill-input' type="number" />
                                                                        <label htmlFor="Daily_Payout" className='float-label'>Daily Payout</label>
                                                                    </div>
                                                                </Col>
                                                                <Col md={12} sm={12} className="mt-3">
                                                                    <p>Max payout amount offer can post per month. For Reporting Purposes Only.</p>
                                                                    <div className="form-group cus-form-group">
                                                                        <Form.Control placeholder="Monthly Payout" className='fill-input' type="number" />
                                                                        <label htmlFor="Monthly_Payout" className='float-label'>Monthly Payout</label>
                                                                    </div>
                                                                </Col>
                                                                <Col md={12} sm={12} className="mt-3">
                                                                    <p>Max payout amount offer can post per month. For Reporting Purposes Only.</p>
                                                                    <div className="form-group cus-form-group">
                                                                        <Form.Control placeholder=" Daily Revenue" className='fill-input' type="number" />
                                                                        <label htmlFor=" Daily_Revenue" className='float-label'> Daily Revenue</label>
                                                                    </div>
                                                                </Col>
                                                                <Col md={12} sm={12} className="mt-3">
                                                                    <p>Max revenue amount offer can generate per day. For Reporting Purposes Only.</p>
                                                                    <div className="form-group cus-form-group">
                                                                        <Form.Control placeholder="Monthly Revenue " className='fill-input' type="number" />
                                                                        <label htmlFor="Monthly_Revenue" className='float-label'>Monthly Revenue </label>
                                                                    </div>
                                                                </Col>
                                                                <p className="mt-4">Max revenue amount offer can generate per day. For Reporting Purposes Only.</p>
                                                            </div>
                                                            : null
                                                    }

                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <Row>
                                                <Col>
                                                    <h3 className="fw-bold mt-5">Tracking Pixel</h3>
                                                    <p>A tracking pixel is an optional piece of HTML that is executed once for every successful
                                                        purchase for this campaign. This allows affiliates to track sales using an external system.
                                                        For example: you can place a tracker image hosted elsewhere. Every time that image is requested,
                                                        you know that a sale has taken place for this campaign. You can can place the below strings
                                                        inside of your pixel to add customer and order specific information:
                                                        <strong> If the "string" is found in the tracking pixel, then it will be replaced with its description</strong>
                                                    </p>
                                                    <div className="mt-3 contact">


                                                        <Table className="table border" responsive >
                                                            <thead>
                                                                <tr>
                                                                    <th>String & Description</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>[[orderID]] Unique order identification in this system</td>
                                                                    <td>[[total]] Total Amount Charged for this Order</td>
                                                                    <td>[[subtotal]] Sub Total for this order (total - tax - shipping)</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>[[orderID]] Unique order identification in this system</td>
                                                                    <td>[[total]] Total Amount Charged for this Order</td>
                                                                    <td>[[subtotal]] Sub Total for this order (total - tax - shipping)</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>[[orderID]] Unique order identification in this system</td>
                                                                    <td>[[total]] Total Amount Charged for this Order</td>
                                                                    <td>[[subtotal]] Sub Total for this order (total - tax - shipping)</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>[[orderID]] Unique order identification in this system</td>
                                                                    <td>[[total]] Total Amount Charged for this Order</td>
                                                                    <td>[[subtotal]] Sub Total for this order (total - tax - shipping)</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>[[orderID]] Unique order identification in this system</td>
                                                                    <td>[[total]] Total Amount Charged for this Order</td>
                                                                    <td>[[subtotal]] Sub Total for this order (total - tax - shipping)</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>[[orderID]] Unique order identification in this system</td>
                                                                    <td>[[total]] Total Amount Charged for this Order</td>

                                                                </tr>


                                                            </tbody>
                                                        </Table>
                                                        <div className="form-group cus-form-group">
                                                            <Form.Control placeholder="Link Note ot order" as="textarea" rows={6} className='fill-input' />
                                                            <label htmlFor="shipping" className='float-label'>Pixel:</label>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <div className="mt-3">
                                                    <Form.Check aria-label="option 1" label="Enable Page Open Pixel" onClick={() => setEnable(!enable)} />
                                                </div>
                                                {
                                                    enable ?
                                                        <Col>
                                                            <div className="pixel_boder">
                                                                <Form.Group as={Row} className="g-3 " controlId="form">

                                                                    <Col sm={11}>
                                                                        <div className="form-group cus-form-group">
                                                                            <Form.Control placeholder="Page Pixel" className='fill-input' />
                                                                            <label htmlFor="Page_Pixel" className='float-label'>Page Pixel</label>
                                                                        </div>
                                                                        <div className="form-group cus-select-group mt-3">
                                                                            <Form.Control className="form-control fill-input" as="select" name="select">
                                                                                <option>Select Landing Page</option>
                                                                                <option value="1">One</option>
                                                                                <option value="2">Two</option>
                                                                                <option value="3">Three</option>
                                                                            </Form.Control>
                                                                            <label className='float-label' htmlFor="select">Website Name</label>
                                                                            <Icon icon="ic:round-keyboard-arrow-down" className='inputIcon' />
                                                                        </div>
                                                                        <div className="form-group cus-select-group mt-3">
                                                                            <Form.Control className="form-control fill-input" as="select" name="select">
                                                                                <option>Select HTML Pages</option>
                                                                                <option value="1">One</option>
                                                                                <option value="2">Two</option>
                                                                                <option value="3">Three</option>
                                                                            </Form.Control>
                                                                            <label className='float-label' htmlFor="select">Linkable HTML Page</label>
                                                                            <Icon icon="ic:round-keyboard-arrow-down" className='inputIcon' />
                                                                        </div>
                                                                    </Col>

                                                                    <Col sm={1} className="text-end"><Icon icon="material-symbols:add-circle-outline" className="icon-add " onClick={addPixle} /></Col>

                                                                </Form.Group>
                                                            </div>

                                                            {
                                                                Pixle_page.map((data, Pixel) => {
                                                                    const { Pixle_user } = data;
                                                                    return (
                                                                        <div className="pixel_boder mt-3">
                                                                            <Form.Group as={Row} className="g-3" controlId="form" onChange={(evnt) => handleChangePixel(Pixel, evnt)} value={Pixle_user} name="Pixle_user">
                                                                                <Col sm={11}>
                                                                                    <div className="form-group cus-form-group">
                                                                                        <Form.Control placeholder="Page Pixel" className='fill-input' />
                                                                                        <label htmlFor="Page_Pixel" className='float-label'>Page Pixel</label>
                                                                                    </div>
                                                                                    <div className="form-group cus-select-group mt-3">
                                                                                        <Form.Control className="form-control fill-input" as="select" name="select">
                                                                                            <option>Select Landing Page</option>
                                                                                            <option value="1">One</option>
                                                                                            <option value="2">Two</option>
                                                                                            <option value="3">Three</option>
                                                                                        </Form.Control>
                                                                                        <label className='float-label' htmlFor="select">Website Name</label>
                                                                                        <Icon icon="ic:round-keyboard-arrow-down" className='inputIcon' />
                                                                                    </div>
                                                                                    <div className="form-group cus-select-group mt-3">
                                                                                        <Form.Control className="form-control fill-input" as="select" name="select">
                                                                                            <option>Select HTML Pages</option>
                                                                                            <option value="1">One</option>
                                                                                            <option value="2">Two</option>
                                                                                            <option value="3">Three</option>
                                                                                        </Form.Control>
                                                                                        <label className='float-label' htmlFor="select">Linkable HTML Page</label>
                                                                                        <Icon icon="ic:round-keyboard-arrow-down" className='inputIcon' />
                                                                                    </div>
                                                                                </Col>
                                                                                <Col sm={1} className="text-end">{(Pixle_page.length !== 0) ? <Icon icon="ph:minus-circle-bold" className="icon-minus" onClick={removePixle} /> : ''}</Col>
                                                                            </Form.Group>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </Col>
                                                        : null
                                                }
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="Third">
                                            <Row>
                                                <Col md={12} className="mt-5">
                                                    <h3 className="fw-bold">Revenue</h3>
                                                    <Form.Group as={Row} className="mt-4 " controlId="form">
                                                        <Col md={8}>
                                                            <Form.Check inline label="Revenue per Conversion (RPA)" name="group4" type="radio" />
                                                            <p className="ms-4"> <small>Flat rate per sale</small></p>
                                                        </Col>
                                                        <Col md={4}>
                                                            <div className="form-group cus-form-group">
                                                                <Form.Control placeholder="%" className='fill-input' />
                                                            </div>
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={Row} className="mt-4 " controlId="form">
                                                        <Col md={8}>
                                                            <Form.Check inline label="Revenue per Sale(RPS)" name="group4" type="radio" />
                                                            <p className="ms-4"> <small>Percent of Sale amount</small></p>
                                                        </Col>
                                                        <Col md={4}>
                                                            <div className="form-group cus-form-group">
                                                                <Form.Control placeholder="%" className='fill-input' />
                                                            </div>
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={Row} className="mt-4 " controlId="form">
                                                        <Col md={8}>
                                                            <Form.Check inline label="Revenue per Thousand Impressions(RPM)" name="group4" type="radio" />
                                                            <p className="ms-4"> <small>Flat rate per Impressions</small></p>
                                                        </Col>
                                                        <Col md={4}>
                                                            <div className="form-group cus-form-group">
                                                                <Form.Control placeholder="%" className='fill-input' />
                                                            </div>
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={Row} className="mt-4 " controlId="form">
                                                        <Col md={8}>
                                                            <Form.Check inline label="Revenue per Click(RPC)" name="group4" type="radio" />
                                                            <p className="ms-4"> <small>Flat rate per Visitor</small></p>
                                                        </Col>
                                                        <Col md={4}>
                                                            <div className="form-group cus-form-group">
                                                                <Form.Control placeholder="%" className='fill-input' />
                                                            </div>
                                                        </Col>
                                                    </Form.Group>
                                                </Col>
                                                <Col md={12} className="mt-5">
                                                    <h3 className="fw-bold">Revenue</h3>
                                                    <Form.Group as={Row} className="mt-4 " controlId="form">
                                                        <Col md={8}>
                                                            <Form.Check inline label="Cost per Conversion (RPA)" name="group5" type="radio" />
                                                            <p className="ms-4"> <small>Flat rate per sale</small></p>
                                                        </Col>
                                                        <Col md={4}>
                                                            <div className="form-group cus-form-group">
                                                                <Form.Control placeholder="$" className='fill-input' />
                                                            </div>
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={Row} className="mt-4 " controlId="form">
                                                        <Col md={8}>
                                                            <Form.Check inline label="Cost per Sale(RPS)" name="group5" type="radio" />
                                                            <p className="ms-4"> <small>Percent of Sale amount</small></p>
                                                        </Col>
                                                        <Col md={4}>
                                                            <div className="form-group cus-form-group">
                                                                <Form.Control placeholder="%" className='fill-input' />
                                                            </div>
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={Row} className="mt-4 " controlId="form">
                                                        <Col md={8}>
                                                            <Form.Check inline label="Cost per Thousand Impressions(RPM)" name="group5" type="radio" />
                                                            <p className="ms-4"> <small>Flat rate per Impressions</small></p>
                                                        </Col>
                                                        <Col md={4}>
                                                            <div className="form-group cus-form-group">
                                                                <Form.Control placeholder="$" className='fill-input' />
                                                            </div>
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={Row} className="mt-4 " controlId="form">
                                                        <Col md={8}>
                                                            <Form.Check inline label="Cost per Click(RPC)" name="group5" type="radio" />
                                                            <p className="ms-4"> <small>Flat rate per Visitor</small></p>
                                                        </Col>
                                                        <Col md={4}>
                                                            <div className="form-group cus-form-group">
                                                                <Form.Control placeholder="$" className='fill-input' />
                                                            </div>
                                                        </Col>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="float-end mb-2 mt-3">
                            <button className="btn-hover color-1 me-2">Cancel</button>
                            <button className="btn-hover color-2 r_mt-2">Update Product Inventory</button>
                        </div>
                    </Modal.Footer>
                </div>
            </Modal>

            <Modal size="lg" show={copy} onHide={() => setCopy(false)} aria-labelledby="example-modal-1" className="edit_tracking">
                <div className="">
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-1" className="mb-0 txt_color">
                            New Campaign
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col md={12}>
                                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                    <Nav variant="pills " >
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">General Info</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Tracking Pixel</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="Third">Pay out</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <Row className="g-3">
                                                <Col md={12}>

                                                    <div className="form-group cus-form-group mt-5">
                                                        <Form.Control placeholder="Campaign Code" className='fill-input' />
                                                        <label htmlFor="Campaign Code" className='float-label'>Campaign Code</label>
                                                    </div>
                                                    <div className="form-group cus-form-group mt-3">
                                                        <Form.Control placeholder="Campaign Description" className='fill-input' />
                                                        <label htmlFor="Campaign Description" className='float-label'>Campaign Description</label>
                                                    </div>
                                                    <h3 className="fw-bold my-4">Limit to subID(comma separated)</h3>

                                                    <Form.Group as={Row} className="g-3" controlId="form">
                                                        <Col sm={12}>
                                                            <p className="mb-1">Affiliate User</p>
                                                        </Col>
                                                        <Col sm={6}>
                                                            <div className="form-group cus-select-group">
                                                                <Form.Control className="form-control fill-input" as="select" name="select">
                                                                    <option>Please Select</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </Form.Control>
                                                                <label className='float-label' htmlFor="select">Source</label>
                                                                <Icon icon="ic:round-keyboard-arrow-down" className='inputIcon' />
                                                            </div>
                                                        </Col>
                                                        <Col sm={5}>
                                                            <div className="form-group cus-form-group">
                                                                <Form.Control placeholder="Email To" className='fill-input' />
                                                                <label htmlFor="shipping" className='float-label'>Email To</label>
                                                            </div>
                                                        </Col>
                                                        <Col sm={1} className="text-end"><Icon icon="material-symbols:add-circle-outline" className="icon-add " onClick={addAffiliate} /></Col>
                                                    </Form.Group>
                                                    {
                                                        Affiliate.map((data, Custom) => {
                                                            const { Affiliate_user } = data;
                                                            return (
                                                                <Form.Group as={Row} className="mt-1 g-3" controlId="form" onChange={(evnt) => handleChangeCustom(Custom, evnt)} value={Affiliate_user} name="Affiliate_user">
                                                                    <Col sm={12}>
                                                                        <p className="mb-1">Affiliate User</p>
                                                                    </Col>
                                                                    <Col sm={6}>
                                                                        <div className="form-group cus-select-group">
                                                                            <Form.Control className="form-control fill-input" as="select" name="select">
                                                                                <option>Please Select</option>
                                                                                <option value="1">One</option>
                                                                                <option value="2">Two</option>
                                                                                <option value="3">Three</option>
                                                                            </Form.Control>
                                                                            <label className='float-label' htmlFor="select">Source</label>
                                                                            <Icon icon="ic:round-keyboard-arrow-down" className='inputIcon' />
                                                                        </div>
                                                                    </Col>
                                                                    <Col sm={5}>
                                                                        <div className="form-group cus-form-group">
                                                                            <Form.Control placeholder="Email To" className='fill-input' />
                                                                            <label htmlFor="shipping" className='float-label'>Email To</label>
                                                                        </div>
                                                                    </Col>
                                                                    <Col sm={1} className="text-end">{(Affiliate.length !== 0) ? <Icon icon="ph:minus-circle-bold" className="icon-minus" onClick={removeAffiliate} /> : ''}</Col>
                                                                </Form.Group>
                                                            )
                                                        })
                                                    }
                                                    <Col md={12} sm={12} className="mt-4">
                                                        <div className="form-group cus-select-group">
                                                            <Form.Control className="form-control fill-input" as="select" name="select">
                                                                <option>Select Campaign</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </Form.Control>
                                                            <label className='float-label' htmlFor="select">Campaign Status</label>
                                                            <Icon icon="ic:round-keyboard-arrow-down" className='inputIcon' />
                                                        </div>
                                                    </Col>
                                                    <Col md={12} sm={12} className="mt-4">
                                                        <p>Active allow all affiliate to view campaign.Deleted cause all jump link to return dead</p>
                                                        <div className="form-group cus-form-group">
                                                            <Form.Control placeholder="Email To" className='fill-input' />
                                                            <label htmlFor="shipping" className='float-label'>Email To</label>
                                                        </div>
                                                    </Col>
                                                    <Col md={12} sm={12} className="mt-4">
                                                        <p>Assign reference Id to this offer and pass this value into campaign URl's</p>
                                                        <div className="form-group cus-form-group">
                                                            <Form.Control className='fill-input' type="date" name="datepic" placeholder="Expiration" value={date} onChange={(e) => setDate(e.target.value)} />
                                                            <label htmlFor="shipping" className='float-label'>Expiration</label>
                                                        </div>
                                                    </Col>
                                                    <Row className="my-3 g-3">
                                                        <p className="fw-bold mb-1">last day the campaign will be archive</p>
                                                        {/* <Col md={4} sm={12}>Campaign URL</Col>
                                                        <Col md={8} sm={12}>http://mike.corcrm.com/track/testjq/offer/newv5</Col>

                                                        <Col md={4} sm={12}>Affiliate Pixel</Col>
                                                        <Col md={8} sm={12}><img src="http://mike.corcrm.com/pixel/testjq/offer/newv5/?order_id={orderID}" /></Col> */}


                                                        <Col md={4} sm={12}>Default Destination</Col>
                                                        <Col md={8} sm={12}>
                                                            <Form.Check inline label="Week" name="group1" type="radio" />
                                                            <Form.Check inline label="Month" name="group1" type="radio" />
                                                            <Form.Check inline label="Once" name="group1" type="radio" />
                                                        </Col>
                                                    </Row>
                                                    <Row className="mt-3 g-3">
                                                        <Col md={6} sm={6} className="mt-3">
                                                            <div className="form-group cus-select-group">
                                                                <Form.Control className="form-control fill-input" as="select" name="select">
                                                                    <option>Select Landing Page</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </Form.Control>
                                                                <label className='float-label' htmlFor="select">Default Landing Page</label>
                                                                <Icon icon="ic:round-keyboard-arrow-down" className='inputIcon' />
                                                            </div>
                                                        </Col>
                                                        <Col md={6} sm={6} className="mt-3">
                                                            <div className="form-group cus-form-group">
                                                                <Form.Control placeholder="Sub ID" className='fill-input' />
                                                                <label htmlFor="Sub ID" className='float-label'>Sub ID</label>
                                                            </div>
                                                        </Col>
                                                    </Row>

                                                    <button className="btn-hover color-3 my-3" onClick={() => setSetting(!setting)}><Icon icon="ant-design:setting-filled" className="me-2 text-white" />Setting</button>

                                                    {
                                                        setting ?
                                                            <div>
                                                                <Form.Group as={Row} className="mb-3 g-3" controlId="form">
                                                                    <Col sm={12}>
                                                                        <p className="mb-1">Daily Conversions</p>
                                                                    </Col>
                                                                    <Col sm={6}>
                                                                        <div className="form-group cus-form-group">
                                                                            <Form.Control placeholder="" className='fill-input' type="number" />
                                                                            <label htmlFor="shipping" className='float-label'>Number</label>
                                                                        </div>
                                                                    </Col>
                                                                    <Col sm={6}>
                                                                        <div className="form-group cus-select-group">
                                                                            <Form.Control className="form-control fill-input" as="select" name="select">
                                                                                <option>Select Act upon limit</option>
                                                                                <option value="1">One</option>
                                                                                <option value="2">Two</option>
                                                                                <option value="3">Three</option>
                                                                            </Form.Control>
                                                                            <Icon icon="ic:round-keyboard-arrow-down" className='inputIcon' />
                                                                        </div>
                                                                    </Col>
                                                                </Form.Group>
                                                                <Form.Group as={Row} className=" g-3" controlId="form">
                                                                    <p className="mt-3 mb-0">Max number of conversions offer can receive per day. For Reporting Purposes Only.</p>
                                                                    <Col sm={12}><h3 className="fw-bold mb-0">Monthly Conversions</h3></Col>
                                                                    <Col sm={6}>
                                                                        <div className="form-group cus-form-group">
                                                                            <Form.Control placeholder="Email To" className='fill-input' type="number" />
                                                                            <label htmlFor="shipping" className='float-label'>Email To</label>
                                                                        </div>
                                                                    </Col>
                                                                    <Col sm={6}>
                                                                        <div className="form-group cus-select-group">
                                                                            <Form.Control className="form-control fill-input" as="select" name="select">
                                                                                <option>Select Act upon monthly limit</option>
                                                                                <option value="1">One</option>
                                                                                <option value="2">Two</option>
                                                                                <option value="3">Three</option>
                                                                            </Form.Control>
                                                                            <Icon icon="ic:round-keyboard-arrow-down" className='inputIcon' />
                                                                        </div>
                                                                    </Col>
                                                                </Form.Group>

                                                                <Col md={12} sm={12} className="mt-3">
                                                                    <p>Max number of conversions offer can receive per day. For Reporting Purposes Only.</p>
                                                                    <div className="form-group cus-form-group">
                                                                        <Form.Control placeholder="Daily Payout" className='fill-input' type="number" />
                                                                        <label htmlFor="Daily_Payout" className='float-label'>Daily Payout</label>
                                                                    </div>
                                                                </Col>
                                                                <Col md={12} sm={12} className="mt-3">
                                                                    <p>Max payout amount offer can post per month. For Reporting Purposes Only.</p>
                                                                    <div className="form-group cus-form-group">
                                                                        <Form.Control placeholder="Monthly Payout" className='fill-input' type="number" />
                                                                        <label htmlFor="Monthly_Payout" className='float-label'>Monthly Payout</label>
                                                                    </div>
                                                                </Col>
                                                                <Col md={12} sm={12} className="mt-3">
                                                                    <p>Max payout amount offer can post per month. For Reporting Purposes Only.</p>
                                                                    <div className="form-group cus-form-group">
                                                                        <Form.Control placeholder=" Daily Revenue" className='fill-input' type="number" />
                                                                        <label htmlFor=" Daily_Revenue" className='float-label'> Daily Revenue</label>
                                                                    </div>
                                                                </Col>
                                                                <Col md={12} sm={12} className="mt-3">
                                                                    <p>Max revenue amount offer can generate per day. For Reporting Purposes Only.</p>
                                                                    <div className="form-group cus-form-group">
                                                                        <Form.Control placeholder="Monthly Revenue " className='fill-input' type="number" />
                                                                        <label htmlFor="Monthly_Revenue" className='float-label'>Monthly Revenue </label>
                                                                    </div>
                                                                </Col>
                                                                <p className="mt-4">Max revenue amount offer can generate per day. For Reporting Purposes Only.</p>
                                                            </div>
                                                            : null
                                                    }

                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <Row>
                                                <Col>
                                                    <h3 className="fw-bold mt-5">Tracking Pixel</h3>
                                                    <p>A tracking pixel is an optional piece of HTML that is executed once for every successful
                                                        purchase for this campaign. This allows affiliates to track sales using an external system.
                                                        For example: you can place a tracker image hosted elsewhere. Every time that image is requested,
                                                        you know that a sale has taken place for this campaign. You can can place the below strings
                                                        inside of your pixel to add customer and order specific information:
                                                        <strong> If the "string" is found in the tracking pixel, then it will be replaced with its description</strong>
                                                    </p>
                                                    <div className="mt-3 contact">


                                                        <Table className="table border" responsive >
                                                            <thead>
                                                                <tr>
                                                                    <th>String & Description</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>[[orderID]] Unique order identification in this system</td>
                                                                    <td>[[total]] Total Amount Charged for this Order</td>
                                                                    <td>[[subtotal]] Sub Total for this order (total - tax - shipping)</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>[[orderID]] Unique order identification in this system</td>
                                                                    <td>[[total]] Total Amount Charged for this Order</td>
                                                                    <td>[[subtotal]] Sub Total for this order (total - tax - shipping)</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>[[orderID]] Unique order identification in this system</td>
                                                                    <td>[[total]] Total Amount Charged for this Order</td>
                                                                    <td>[[subtotal]] Sub Total for this order (total - tax - shipping)</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>[[orderID]] Unique order identification in this system</td>
                                                                    <td>[[total]] Total Amount Charged for this Order</td>
                                                                    <td>[[subtotal]] Sub Total for this order (total - tax - shipping)</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>[[orderID]] Unique order identification in this system</td>
                                                                    <td>[[total]] Total Amount Charged for this Order</td>
                                                                    <td>[[subtotal]] Sub Total for this order (total - tax - shipping)</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>[[orderID]] Unique order identification in this system</td>
                                                                    <td>[[total]] Total Amount Charged for this Order</td>

                                                                </tr>


                                                            </tbody>
                                                        </Table>
                                                        <div className="form-group cus-form-group">
                                                            <Form.Control placeholder="Link Note ot order" as="textarea" rows={6} className='fill-input' />
                                                            <label htmlFor="shipping" className='float-label'>Pixel:</label>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <div className="mt-3">
                                                    <Form.Check aria-label="option 1" label="Enable Page Open Pixel" onClick={() => setEnable(!enable)} />
                                                </div>
                                                {
                                                    enable ?
                                                        <Col>
                                                            <div className="pixel_boder">
                                                                <Form.Group as={Row} className="g-3 " controlId="form">

                                                                    <Col sm={11}>
                                                                        <div className="form-group cus-form-group">
                                                                            <Form.Control placeholder="Page Pixel" className='fill-input' />
                                                                            <label htmlFor="Page_Pixel" className='float-label'>Page Pixel</label>
                                                                        </div>
                                                                        <div className="form-group cus-select-group mt-3">
                                                                            <Form.Control className="form-control fill-input" as="select" name="select">
                                                                                <option>Select Landing Page</option>
                                                                                <option value="1">One</option>
                                                                                <option value="2">Two</option>
                                                                                <option value="3">Three</option>
                                                                            </Form.Control>
                                                                            <label className='float-label' htmlFor="select">Website Name</label>
                                                                            <Icon icon="ic:round-keyboard-arrow-down" className='inputIcon' />
                                                                        </div>
                                                                        <div className="form-group cus-select-group mt-3">
                                                                            <Form.Control className="form-control fill-input" as="select" name="select">
                                                                                <option>Select HTML Pages</option>
                                                                                <option value="1">One</option>
                                                                                <option value="2">Two</option>
                                                                                <option value="3">Three</option>
                                                                            </Form.Control>
                                                                            <label className='float-label' htmlFor="select">Linkable HTML Page</label>
                                                                            <Icon icon="ic:round-keyboard-arrow-down" className='inputIcon' />
                                                                        </div>
                                                                    </Col>

                                                                    <Col sm={1} className="text-end"><Icon icon="material-symbols:add-circle-outline" className="icon-add " onClick={addPixle} /></Col>

                                                                </Form.Group>
                                                            </div>

                                                            {
                                                                Pixle_page.map((data, Pixel) => {
                                                                    const { Pixle_user } = data;
                                                                    return (
                                                                        <div className="pixel_boder mt-3">
                                                                            <Form.Group as={Row} className="g-3" controlId="form" onChange={(evnt) => handleChangePixel(Pixel, evnt)} value={Pixle_user} name="Pixle_user">
                                                                                <Col sm={11}>
                                                                                    <div className="form-group cus-form-group">
                                                                                        <Form.Control placeholder="Page Pixel" className='fill-input' />
                                                                                        <label htmlFor="Page_Pixel" className='float-label'>Page Pixel</label>
                                                                                    </div>
                                                                                    <div className="form-group cus-select-group mt-3">
                                                                                        <Form.Control className="form-control fill-input" as="select" name="select">
                                                                                            <option>Select Landing Page</option>
                                                                                            <option value="1">One</option>
                                                                                            <option value="2">Two</option>
                                                                                            <option value="3">Three</option>
                                                                                        </Form.Control>
                                                                                        <label className='float-label' htmlFor="select">Website Name</label>
                                                                                        <Icon icon="ic:round-keyboard-arrow-down" className='inputIcon' />
                                                                                    </div>
                                                                                    <div className="form-group cus-select-group mt-3">
                                                                                        <Form.Control className="form-control fill-input" as="select" name="select">
                                                                                            <option>Select HTML Pages</option>
                                                                                            <option value="1">One</option>
                                                                                            <option value="2">Two</option>
                                                                                            <option value="3">Three</option>
                                                                                        </Form.Control>
                                                                                        <label className='float-label' htmlFor="select">Linkable HTML Page</label>
                                                                                        <Icon icon="ic:round-keyboard-arrow-down" className='inputIcon' />
                                                                                    </div>
                                                                                </Col>
                                                                                <Col sm={1} className="text-end">{(Pixle_page.length !== 0) ? <Icon icon="ph:minus-circle-bold" className="icon-minus" onClick={removePixle} /> : ''}</Col>
                                                                            </Form.Group>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </Col>
                                                        : null
                                                }
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="Third">
                                            <Row>
                                                <Col md={12} className="mt-5">
                                                    <h3 className="fw-bold">Revenue</h3>
                                                    <Form.Group as={Row} className="mt-4 " controlId="form">
                                                        <Col md={8}>
                                                            <Form.Check inline label="Revenue per Conversion (RPA)" name="group4" type="radio" />
                                                            <p className="ms-4"> <small>Flat rate per sale</small></p>
                                                        </Col>
                                                        <Col md={4}>
                                                            <div className="form-group cus-form-group">
                                                                <Form.Control placeholder="%" className='fill-input' />
                                                            </div>
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={Row} className="mt-4 " controlId="form">
                                                        <Col md={8}>
                                                            <Form.Check inline label="Revenue per Sale(RPS)" name="group4" type="radio" />
                                                            <p className="ms-4"> <small>Percent of Sale amount</small></p>
                                                        </Col>
                                                        <Col md={4}>
                                                            <div className="form-group cus-form-group">
                                                                <Form.Control placeholder="%" className='fill-input' />
                                                            </div>
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={Row} className="mt-4 " controlId="form">
                                                        <Col md={8}>
                                                            <Form.Check inline label="Revenue per Thousand Impressions(RPM)" name="group4" type="radio" />
                                                            <p className="ms-4"> <small>Flat rate per Impressions</small></p>
                                                        </Col>
                                                        <Col md={4}>
                                                            <div className="form-group cus-form-group">
                                                                <Form.Control placeholder="%" className='fill-input' />
                                                            </div>
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={Row} className="mt-4 " controlId="form">
                                                        <Col md={8}>
                                                            <Form.Check inline label="Revenue per Click(RPC)" name="group4" type="radio" />
                                                            <p className="ms-4"> <small>Flat rate per Visitor</small></p>
                                                        </Col>
                                                        <Col md={4}>
                                                            <div className="form-group cus-form-group">
                                                                <Form.Control placeholder="%" className='fill-input' />
                                                            </div>
                                                        </Col>
                                                    </Form.Group>
                                                </Col>
                                                <Col md={12} className="mt-5">
                                                    <h3 className="fw-bold">Revenue</h3>
                                                    <Form.Group as={Row} className="mt-4 " controlId="form">
                                                        <Col md={8}>
                                                            <Form.Check inline label="Cost per Conversion (RPA)" name="group5" type="radio" />
                                                            <p className="ms-4"> <small>Flat rate per sale</small></p>
                                                        </Col>
                                                        <Col md={4}>
                                                            <div className="form-group cus-form-group">
                                                                <Form.Control placeholder="$" className='fill-input' />
                                                            </div>
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={Row} className="mt-4 " controlId="form">
                                                        <Col md={8}>
                                                            <Form.Check inline label="Cost per Sale(RPS)" name="group5" type="radio" />
                                                            <p className="ms-4"> <small>Percent of Sale amount</small></p>
                                                        </Col>
                                                        <Col md={4}>
                                                            <div className="form-group cus-form-group">
                                                                <Form.Control placeholder="%" className='fill-input' />
                                                            </div>
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={Row} className="mt-4 " controlId="form">
                                                        <Col md={8}>
                                                            <Form.Check inline label="Cost per Thousand Impressions(RPM)" name="group5" type="radio" />
                                                            <p className="ms-4"> <small>Flat rate per Impressions</small></p>
                                                        </Col>
                                                        <Col md={4}>
                                                            <div className="form-group cus-form-group">
                                                                <Form.Control placeholder="$" className='fill-input' />
                                                            </div>
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={Row} className="mt-4 " controlId="form">
                                                        <Col md={8}>
                                                            <Form.Check inline label="Cost per Click(RPC)" name="group5" type="radio" />
                                                            <p className="ms-4"> <small>Flat rate per Visitor</small></p>
                                                        </Col>
                                                        <Col md={4}>
                                                            <div className="form-group cus-form-group">
                                                                <Form.Control placeholder="$" className='fill-input' />
                                                            </div>
                                                        </Col>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="float-end mb-2 mt-3">
                            <button className="btn-hover color-1 me-2">Cancel</button>
                            <button className="btn-hover color-2 r_mt-2">Update Product Inventory</button>
                        </div>
                    </Modal.Footer>
                </div>
            </Modal>

            <Modal size="lg" show={newcamp} onHide={() => setNewcamp(false)} aria-labelledby="example-modal-1" className="edit_tracking">
                <div className="">
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-1" className="mb-0 txt_color">
                            New Campaign
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col md={12}>
                                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                    <Nav variant="pills " >
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">General Info</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Tracking Pixel</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="Third">Pay out</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <Row className="g-3">
                                                <Col md={12}>

                                                    <div className="form-group cus-form-group mt-5">
                                                        <Form.Control placeholder="Campaign Code" className='fill-input' />
                                                        <label htmlFor="Campaign Code" className='float-label'>Campaign Code</label>
                                                    </div>
                                                    <div className="form-group cus-form-group mt-3">
                                                        <Form.Control placeholder="Campaign Description" className='fill-input' />
                                                        <label htmlFor="Campaign Description" className='float-label'>Campaign Description</label>
                                                    </div>
                                                    <h3 className="fw-bold my-4">Limit to subID(comma separated)</h3>

                                                    <Form.Group as={Row} className="g-3" controlId="form">
                                                        <Col sm={12}>
                                                            <p className="mb-1">Affiliate User</p>
                                                        </Col>
                                                        <Col sm={6}>
                                                            <div className="form-group cus-select-group">
                                                                <Form.Control className="form-control fill-input" as="select" name="select">
                                                                    <option>Please Select</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </Form.Control>
                                                                <label className='float-label' htmlFor="select">Source</label>
                                                                <Icon icon="ic:round-keyboard-arrow-down" className='inputIcon' />
                                                            </div>
                                                        </Col>
                                                        <Col sm={5}>
                                                            <div className="form-group cus-form-group">
                                                                <Form.Control placeholder="Email To" className='fill-input' />
                                                                <label htmlFor="shipping" className='float-label'>Email To</label>
                                                            </div>
                                                        </Col>
                                                        <Col sm={1} className="text-end"><Icon icon="material-symbols:add-circle-outline" className="icon-add " onClick={addAffiliate} /></Col>
                                                    </Form.Group>
                                                    {
                                                        Affiliate.map((data, Custom) => {
                                                            const { Affiliate_user } = data;
                                                            return (
                                                                <Form.Group as={Row} className="mt-1 g-3" controlId="form" onChange={(evnt) => handleChangeCustom(Custom, evnt)} value={Affiliate_user} name="Affiliate_user">
                                                                    <Col sm={12}>
                                                                        <p className="mb-1">Affiliate User</p>
                                                                    </Col>
                                                                    <Col sm={6}>
                                                                        <div className="form-group cus-select-group">
                                                                            <Form.Control className="form-control fill-input" as="select" name="select">
                                                                                <option>Please Select</option>
                                                                                <option value="1">One</option>
                                                                                <option value="2">Two</option>
                                                                                <option value="3">Three</option>
                                                                            </Form.Control>
                                                                            <label className='float-label' htmlFor="select">Source</label>
                                                                            <Icon icon="ic:round-keyboard-arrow-down" className='inputIcon' />
                                                                        </div>
                                                                    </Col>
                                                                    <Col sm={5}>
                                                                        <div className="form-group cus-form-group">
                                                                            <Form.Control placeholder="Email To" className='fill-input' />
                                                                            <label htmlFor="shipping" className='float-label'>Email To</label>
                                                                        </div>
                                                                    </Col>
                                                                    <Col sm={1} className="text-end">{(Affiliate.length !== 0) ? <Icon icon="ph:minus-circle-bold" className="icon-minus" onClick={removeAffiliate} /> : ''}</Col>
                                                                </Form.Group>
                                                            )
                                                        })
                                                    }
                                                    <Col md={12} sm={12} className="mt-4">
                                                        <div className="form-group cus-select-group">
                                                            <Form.Control className="form-control fill-input" as="select" name="select">
                                                                <option>Select Campaign</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </Form.Control>
                                                            <label className='float-label' htmlFor="select">Campaign Status</label>
                                                            <Icon icon="ic:round-keyboard-arrow-down" className='inputIcon' />
                                                        </div>
                                                    </Col>
                                                    <Col md={12} sm={12} className="mt-4">
                                                        <p>Active allow all affiliate to view campaign.Deleted cause all jump link to return dead</p>
                                                        <div className="form-group cus-form-group">
                                                            <Form.Control placeholder="Email To" className='fill-input' />
                                                            <label htmlFor="shipping" className='float-label'>Refrence ID</label>
                                                        </div>
                                                    </Col>
                                                    <Col md={12} sm={12} className="mt-4">
                                                        <p>Assign reference Id to this offer and pass this value into campaign URl's</p>
                                                        <div className="form-group cus-form-group">
                                                            <Form.Control className='fill-input' type="date" name="datepic" placeholder="Expiration" value={date} onChange={(e) => setDate(e.target.value)} />
                                                            <label htmlFor="shipping" className='float-label'>Expiration</label>
                                                        </div>
                                                    </Col>
                                                    <Row className="my-3 g-3">
                                                        <p className="fw-bold mb-1">last day the campaign will be archive</p>
                                                        {/* <Col md={4} sm={12}>Campaign URL</Col>
                                                        <Col md={8} sm={12}>http://mike.corcrm.com/track/testjq/offer/newv5</Col>

                                                        <Col md={4} sm={12}>Affiliate Pixel</Col>
                                                        <Col md={8} sm={12}><img src="http://mike.corcrm.com/pixel/testjq/offer/newv5/?order_id={orderID}" /></Col> */}


                                                        <Col md={4} sm={12}>Default Destination</Col>
                                                        <Col md={8} sm={12}>
                                                            <Form.Check inline label="Sale Page" name="group1" type="radio" />
                                                            <Form.Check inline label="Websites" name="group1" type="radio" />
                                                            <Form.Check inline label="Website " name="group1" type="radio" />
                                                            <Form.Check inline label="Other " name="group1" type="radio" />
                                                        </Col>
                                                    </Row>
                                                    <Row className="mt-3 g-3">
                                                        <Col md={6} sm={6} className="mt-3">
                                                            <div className="form-group cus-select-group">
                                                                <Form.Control className="form-control fill-input" as="select" name="select">
                                                                    <option>Select Landing Page</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </Form.Control>
                                                                <label className='float-label' htmlFor="select">Default Landing Page</label>
                                                                <Icon icon="ic:round-keyboard-arrow-down" className='inputIcon' />
                                                            </div>
                                                        </Col>
                                                        <Col md={6} sm={6} className="mt-3">
                                                            <div className="form-group cus-form-group">
                                                                <Form.Control placeholder="Sub ID" className='fill-input' />
                                                                <label htmlFor="Sub ID" className='float-label'>Sub ID</label>
                                                            </div>
                                                        </Col>
                                                    </Row>

                                                    <button className="btn-hover color-3 my-3" onClick={() => setSetting(!setting)}><Icon icon="ant-design:setting-filled" className="me-2 text-white" />Setting</button>

                                                    {
                                                        setting ?
                                                            <div>
                                                                <Form.Group as={Row} className="mb-3 g-3" controlId="form">
                                                                    <Col sm={12}>
                                                                        <p className="mb-1">Daily Conversions</p>
                                                                    </Col>
                                                                    <Col sm={6}>
                                                                        <div className="form-group cus-form-group">
                                                                            <Form.Control placeholder="" className='fill-input' type="number" />
                                                                            <label htmlFor="shipping" className='float-label'>Number</label>
                                                                        </div>
                                                                    </Col>
                                                                    <Col sm={6}>
                                                                        <div className="form-group cus-select-group">
                                                                            <Form.Control className="form-control fill-input" as="select" name="select">
                                                                                <option>Select Act upon limit</option>
                                                                                <option value="1">One</option>
                                                                                <option value="2">Two</option>
                                                                                <option value="3">Three</option>
                                                                            </Form.Control>
                                                                            <Icon icon="ic:round-keyboard-arrow-down" className='inputIcon' />
                                                                        </div>
                                                                    </Col>
                                                                </Form.Group>
                                                                <Form.Group as={Row} className=" g-3" controlId="form">
                                                                    <p className="mt-3 mb-0">Max number of conversions offer can receive per day. For Reporting Purposes Only.</p>
                                                                    <Col sm={12}><h3 className="fw-bold mb-0">Monthly Conversions</h3></Col>
                                                                    <Col sm={6}>
                                                                        <div className="form-group cus-form-group">
                                                                            <Form.Control placeholder="Reference ID" className='fill-input' type="number" />
                                                                            <label htmlFor="Reference_ID" className='float-label'>Reference ID</label>
                                                                        </div>
                                                                    </Col>
                                                                    <Col sm={6}>
                                                                        <div className="form-group cus-select-group">
                                                                            <Form.Control className="form-control fill-input" as="select" name="select">
                                                                                <option>Select Act upon monthly limit</option>
                                                                                <option value="1">One</option>
                                                                                <option value="2">Two</option>
                                                                                <option value="3">Three</option>
                                                                            </Form.Control>
                                                                            <Icon icon="ic:round-keyboard-arrow-down" className='inputIcon' />
                                                                        </div>
                                                                    </Col>
                                                                </Form.Group>

                                                                <Col md={12} sm={12} className="mt-3">
                                                                    <p>Max number of conversions offer can receive per day. For Reporting Purposes Only.</p>
                                                                    <div className="form-group cus-form-group">
                                                                        <Form.Control placeholder="Daily Payout" className='fill-input' type="number" />
                                                                        <label htmlFor="Daily_Payout" className='float-label'>Daily Payout</label>
                                                                    </div>
                                                                </Col>
                                                                <Col md={12} sm={12} className="mt-3">
                                                                    <p>Max payout amount offer can post per month. For Reporting Purposes Only.</p>
                                                                    <div className="form-group cus-form-group">
                                                                        <Form.Control placeholder="Monthly Payout" className='fill-input' type="number" />
                                                                        <label htmlFor="Monthly_Payout" className='float-label'>Monthly Payout</label>
                                                                    </div>
                                                                </Col>
                                                                <Col md={12} sm={12} className="mt-3">
                                                                    <p>Max payout amount offer can post per month. For Reporting Purposes Only.</p>
                                                                    <div className="form-group cus-form-group">
                                                                        <Form.Control placeholder=" Daily Revenue" className='fill-input' type="number" />
                                                                        <label htmlFor=" Daily_Revenue" className='float-label'> Daily Revenue</label>
                                                                    </div>
                                                                </Col>
                                                                <Col md={12} sm={12} className="mt-3">
                                                                    <p>Max revenue amount offer can generate per day. For Reporting Purposes Only.</p>
                                                                    <div className="form-group cus-form-group">
                                                                        <Form.Control placeholder="Monthly Revenue " className='fill-input' type="number" />
                                                                        <label htmlFor="Monthly_Revenue" className='float-label'>Monthly Revenue </label>
                                                                    </div>
                                                                </Col>
                                                                <p className="mt-4">Max revenue amount offer can generate per day. For Reporting Purposes Only.</p>
                                                            </div>
                                                            : null
                                                    }

                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <Row>
                                                <Col>
                                                    <h3 className="fw-bold mt-5">Tracking Pixel</h3>
                                                    <p>A tracking pixel is an optional piece of HTML that is executed once for every successful
                                                        purchase for this campaign. This allows affiliates to track sales using an external system.
                                                        For example: you can place a tracker image hosted elsewhere. Every time that image is requested,
                                                        you know that a sale has taken place for this campaign. You can can place the below strings
                                                        inside of your pixel to add customer and order specific information:
                                                        <strong> If the "string" is found in the tracking pixel, then it will be replaced with its description</strong>
                                                    </p>
                                                    <div className="mt-3 contact">


                                                        <Table className="table border" responsive >
                                                            <thead>
                                                                <tr>
                                                                    <th>String & Description</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>[[orderID]] Unique order identification in this system</td>
                                                                    <td>[[total]] Total Amount Charged for this Order</td>
                                                                    <td>[[subtotal]] Sub Total for this order (total - tax - shipping)</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>[[orderID]] Unique order identification in this system</td>
                                                                    <td>[[total]] Total Amount Charged for this Order</td>
                                                                    <td>[[subtotal]] Sub Total for this order (total - tax - shipping)</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>[[orderID]] Unique order identification in this system</td>
                                                                    <td>[[total]] Total Amount Charged for this Order</td>
                                                                    <td>[[subtotal]] Sub Total for this order (total - tax - shipping)</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>[[orderID]] Unique order identification in this system</td>
                                                                    <td>[[total]] Total Amount Charged for this Order</td>
                                                                    <td>[[subtotal]] Sub Total for this order (total - tax - shipping)</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>[[orderID]] Unique order identification in this system</td>
                                                                    <td>[[total]] Total Amount Charged for this Order</td>
                                                                    <td>[[subtotal]] Sub Total for this order (total - tax - shipping)</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>[[orderID]] Unique order identification in this system</td>
                                                                    <td>[[total]] Total Amount Charged for this Order</td>

                                                                </tr>


                                                            </tbody>
                                                        </Table>
                                                        <div className="form-group cus-form-group">
                                                            <Form.Control placeholder="Link Note ot order" as="textarea" rows={6} className='fill-input' />
                                                            <label htmlFor="shipping" className='float-label'>Pixel:</label>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <div className="mt-3">
                                                    <Form.Check aria-label="option 1" label="Enable Page Open Pixel" onClick={() => setEnable(!enable)} />
                                                </div>
                                                {
                                                    enable ?
                                                        <Col>
                                                            <div className="pixel_boder">
                                                                <Form.Group as={Row} className="g-3 " controlId="form">

                                                                    <Col sm={11}>
                                                                        <div className="form-group cus-form-group">
                                                                            <Form.Control placeholder="Page Pixel" className='fill-input' />
                                                                            <label htmlFor="Page_Pixel" className='float-label'>Page Pixel</label>
                                                                        </div>
                                                                        <div className="form-group cus-select-group mt-3">
                                                                            <Form.Control className="form-control fill-input" as="select" name="select">
                                                                                <option>Select Landing Page</option>
                                                                                <option value="1">One</option>
                                                                                <option value="2">Two</option>
                                                                                <option value="3">Three</option>
                                                                            </Form.Control>
                                                                            <label className='float-label' htmlFor="select">Website Name</label>
                                                                            <Icon icon="ic:round-keyboard-arrow-down" className='inputIcon' />
                                                                        </div>
                                                                        <div className="form-group cus-select-group mt-3">
                                                                            <Form.Control className="form-control fill-input" as="select" name="select">
                                                                                <option>Select HTML Pages</option>
                                                                                <option value="1">One</option>
                                                                                <option value="2">Two</option>
                                                                                <option value="3">Three</option>
                                                                            </Form.Control>
                                                                            <label className='float-label' htmlFor="select">Linkable HTML Page</label>
                                                                            <Icon icon="ic:round-keyboard-arrow-down" className='inputIcon' />
                                                                        </div>
                                                                    </Col>

                                                                    <Col sm={1} className="text-end"><Icon icon="material-symbols:add-circle-outline" className="icon-add " onClick={addPixle} /></Col>

                                                                </Form.Group>
                                                            </div>

                                                            {
                                                                Pixle_page.map((data, Pixel) => {
                                                                    const { Pixle_user } = data;
                                                                    return (
                                                                        <div className="pixel_boder mt-3">
                                                                            <Form.Group as={Row} className="g-3" controlId="form" onChange={(evnt) => handleChangePixel(Pixel, evnt)} value={Pixle_user} name="Pixle_user">
                                                                                <Col sm={11}>
                                                                                    <div className="form-group cus-form-group">
                                                                                        <Form.Control placeholder="Page Pixel" className='fill-input' />
                                                                                        <label htmlFor="Page_Pixel" className='float-label'>Page Pixel</label>
                                                                                    </div>
                                                                                    <div className="form-group cus-select-group mt-3">
                                                                                        <Form.Control className="form-control fill-input" as="select" name="select">
                                                                                            <option>Select Landing Page</option>
                                                                                            <option value="1">One</option>
                                                                                            <option value="2">Two</option>
                                                                                            <option value="3">Three</option>
                                                                                        </Form.Control>
                                                                                        <label className='float-label' htmlFor="select">Website Name</label>
                                                                                        <Icon icon="ic:round-keyboard-arrow-down" className='inputIcon' />
                                                                                    </div>
                                                                                    <div className="form-group cus-select-group mt-3">
                                                                                        <Form.Control className="form-control fill-input" as="select" name="select">
                                                                                            <option>Select HTML Pages</option>
                                                                                            <option value="1">One</option>
                                                                                            <option value="2">Two</option>
                                                                                            <option value="3">Three</option>
                                                                                        </Form.Control>
                                                                                        <label className='float-label' htmlFor="select">Linkable HTML Page</label>
                                                                                        <Icon icon="ic:round-keyboard-arrow-down" className='inputIcon' />
                                                                                    </div>
                                                                                </Col>
                                                                                <Col sm={1} className="text-end">{(Pixle_page.length !== 0) ? <Icon icon="ph:minus-circle-bold" className="icon-minus" onClick={removePixle} /> : ''}</Col>
                                                                            </Form.Group>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </Col>
                                                        : null
                                                }
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="Third">
                                            <Row>
                                                <Col md={12} className="mt-5">
                                                    <h3 className="fw-bold">Revenue</h3>
                                                    <Form.Group as={Row} className="mt-4 " controlId="form">
                                                        <Col md={8}>
                                                            <Form.Check inline label="Revenue per Conversion (RPA)" name="group4" type="radio" />
                                                            <p className="ms-4"> <small>Flat rate per sale</small></p>
                                                        </Col>
                                                        <Col md={4}>
                                                            <div className="form-group cus-form-group">
                                                                <Form.Control placeholder="%" className='fill-input' />
                                                            </div>
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={Row} className="mt-4 " controlId="form">
                                                        <Col md={8}>
                                                            <Form.Check inline label="Revenue per Sale(RPS)" name="group4" type="radio" />
                                                            <p className="ms-4"> <small>Percent of Sale amount</small></p>
                                                        </Col>
                                                        <Col md={4}>
                                                            <div className="form-group cus-form-group">
                                                                <Form.Control placeholder="%" className='fill-input' />
                                                            </div>
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={Row} className="mt-4 " controlId="form">
                                                        <Col md={8}>
                                                            <Form.Check inline label="Revenue per Thousand Impressions(RPM)" name="group4" type="radio" />
                                                            <p className="ms-4"> <small>Flat rate per Impressions</small></p>
                                                        </Col>
                                                        <Col md={4}>
                                                            <div className="form-group cus-form-group">
                                                                <Form.Control placeholder="%" className='fill-input' />
                                                            </div>
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={Row} className="mt-4 " controlId="form">
                                                        <Col md={8}>
                                                            <Form.Check inline label="Revenue per Click(RPC)" name="group4" type="radio" />
                                                            <p className="ms-4"> <small>Flat rate per Visitor</small></p>
                                                        </Col>
                                                        <Col md={4}>
                                                            <div className="form-group cus-form-group">
                                                                <Form.Control placeholder="%" className='fill-input' />
                                                            </div>
                                                        </Col>
                                                    </Form.Group>
                                                </Col>
                                                <Col md={12} className="mt-5">
                                                    <h3 className="fw-bold">Revenue</h3>
                                                    <Form.Group as={Row} className="mt-4 " controlId="form">
                                                        <Col md={8}>
                                                            <Form.Check inline label="Cost per Conversion (RPA)" name="group5" type="radio" />
                                                            <p className="ms-4"> <small>Flat rate per sale</small></p>
                                                        </Col>
                                                        <Col md={4}>
                                                            <div className="form-group cus-form-group">
                                                                <Form.Control placeholder="$" className='fill-input' />
                                                            </div>
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={Row} className="mt-4 " controlId="form">
                                                        <Col md={8}>
                                                            <Form.Check inline label="Cost per Sale(RPS)" name="group5" type="radio" />
                                                            <p className="ms-4"> <small>Percent of Sale amount</small></p>
                                                        </Col>
                                                        <Col md={4}>
                                                            <div className="form-group cus-form-group">
                                                                <Form.Control placeholder="%" className='fill-input' />
                                                            </div>
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={Row} className="mt-4 " controlId="form">
                                                        <Col md={8}>
                                                            <Form.Check inline label="Cost per Thousand Impressions(RPM)" name="group5" type="radio" />
                                                            <p className="ms-4"> <small>Flat rate per Impressions</small></p>
                                                        </Col>
                                                        <Col md={4}>
                                                            <div className="form-group cus-form-group">
                                                                <Form.Control placeholder="$" className='fill-input' />
                                                            </div>
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={Row} className="mt-4 " controlId="form">
                                                        <Col md={8}>
                                                            <Form.Check inline label="Cost per Click(RPC)" name="group5" type="radio" />
                                                            <p className="ms-4"> <small>Flat rate per Visitor</small></p>
                                                        </Col>
                                                        <Col md={4}>
                                                            <div className="form-group cus-form-group">
                                                                <Form.Control placeholder="$" className='fill-input' />
                                                            </div>
                                                        </Col>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="float-end mb-2 mt-3">
                            <button className="btn-hover color-1 me-2">Cancel</button>
                            <button className="btn-hover color-2 r_mt-2">Update Product Inventory</button>
                        </div>
                    </Modal.Footer>
                </div>
            </Modal>

            <Modal size="lg" show={management} onHide={() => setManagement(false)} aria-labelledby="example-modal-1" className="edit_tracking">
                <div className="">
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-1" className="mb-0 txt_color">
                            User Management
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col md={12}>
                                <Form.Group as={Row} className="g-3" controlId="form">

                                    <Col sm={12}>
                                        <label className="mb-1">User name</label>
                                        <div className="form-group cus-form-group">
                                            <Form.Control placeholder="User Name" className='fill-input' />
                                            <label htmlFor="Username" className='float-label'>User Name</label>
                                        </div>
                                    </Col>
                                    <Col sm={6}>
                                        <label className="mb-1">Password</label>
                                        <OverlayTrigger placement="top" overlay={renderTooltip}>
                                        <div className="form-group cus-form-group">
                                            <Form.Control placeholder="Password" className='fill-input' />
                                            <label htmlFor="Password" className='float-label'>Password</label>
                                        </div>
                                        </OverlayTrigger>
                                    </Col>
                                    <Col sm={6}>
                                        <label className="mb-1">Re-Type Password</label>
                                        <div className="form-group cus-form-group">
                                            <Form.Control placeholder="Re-Type Password" className='fill-input' />
                                            <label htmlFor="Re-Type-Password" className='float-label'>Re-Type Password</label>
                                        </div>
                                    </Col>
                                    <Col sm={6}>
                                        <label className="mb-1">First Name</label>
                                        <div className="form-group cus-form-group">
                                            <Form.Control placeholder="First Name" className='fill-input' />
                                            <label htmlFor="First-Name" className='float-label'>First Name</label>
                                        </div>
                                    </Col>
                                    <Col sm={6}>
                                        <label className="mb-1">Last Name</label>
                                        <div className="form-group cus-form-group">
                                            <Form.Control placeholder="Last Name" className='fill-input' />
                                            <label htmlFor="Last-Name" className='float-label'>Last Name</label>
                                        </div>
                                    </Col>
                                    <Col sm={6}>
                                        <label className="mb-1">Company</label>
                                        <div className="form-group cus-form-group">
                                            <Form.Control placeholder="Company" className='fill-input' />
                                            <label htmlFor="Company" className='float-label'>Company</label>
                                        </div>
                                    </Col>

                                    <Col sm={6}>
                                        <label className="mb-1">Email</label>
                                        <div className="form-group cus-form-group">
                                            <Form.Control placeholder="Email" className='fill-input' />
                                            <label htmlFor="Email" className='float-label'>Email</label>
                                        </div>
                                    </Col>
                                    <Col sm={6}>
                                        <label className="mb-1">Account Type</label>
                                        <div className="form-group cus-select-group">
                                            <Form.Control className="form-control fill-input" as="select" name="select" disabled>
                                                <option>Affiliate</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Control>
                                            <label className='float-label' htmlFor="select">Source</label>
                                            <Icon icon="ic:round-keyboard-arrow-down" className='inputIcon' />
                                        </div>
                                    </Col>
                                    <Col sm={6}>
                                        <label className="mb-1">Force Password Reset</label>
                                        <div className="mt-2">
                                            <Form.Check inline label="Yes" name="group6" type="radio" />
                                            <Form.Check inline label="No" name="group6" type="radio" />
                                        </div>
                                    </Col>
                                    <Col sm={6}>
                                        <label className="mb-1">Campaign</label>
                                        <div className="form-group cus-select-group">
                                            <Form.Control className="form-control fill-input" as="select" name="select">
                                            <option value="1"><Form.Check aria-label="option 1" label="Mon" inline /></option>
                                                <option value="2"><Form.Check aria-label="option 2" label="Tue" inline /></option>
                                                <option value="3"><Form.Check aria-label="option 3" label="Wed" inline /></option>
                                                <option value="3"><Form.Check aria-label="option 4" label="Thur" inline /></option>
                                                <option value="3"><Form.Check aria-label="option 5" label="Fri" inline /></option>
                                                <option value="3"> <Form.Check aria-label="option 6" label="Sat" inline /></option>
                                                <option value="3"><Form.Check aria-label="option 7" label="Sun" inline /></option>
                                            </Form.Control>
                                            <label className='float-label' htmlFor="select">Source</label>
                                            <Icon icon="ic:round-keyboard-arrow-down" className='inputIcon' />
                                        </div>
                                    </Col>
                                    <Col sm={6}>
                                        <label className="mb-1">Limit to subID(comma separated)</label>
                                        <div className="form-group cus-form-group">
                                            <Form.Control placeholder="Limit to subID" className='fill-input' />
                                            <label htmlFor="Limit-to-subID" className='float-label'>Limit to subID</label>
                                        </div>
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="float-end mb-2 mt-3">
                            <button className="btn-hover color-1 me-2">Cancel</button>
                            <button className="btn-hover color-2 r_mt-2">Update Product Inventory</button>
                        </div>
                    </Modal.Footer>
                </div>
            </Modal>


            
                <Row>
                    <div className='col-md-12'>
                        <div className='float-end'>
                            <button type="button" class="btn-hover color-2 me-2 r_mt-2">Reset</button>
                            <button type="button" class="btn-hover color-2 me-2 r_mt-2" onClick={() => setNewcamp(true)}>New Campaign</button>
                            <button type="button" class="btn-hover color-2 me-2 r_mt-2" onClick={() => setManagement(true)}>New Affiliate</button>
                            <button type="button" class="btn btn-outline-primary me-2 r_mt-2">Reset</button>
                            <button type="button" class="btn btn-outline-success me-2 r_mt-2"><Icon icon="uiw:file-excel" className='text-green' /></button>
                            <button type="button" class="btn btn-outline-primary me-2 r_mt-2"><Icon icon="uiw:table" /></button>
                            <div className="form-group cus-form-group d-inline-block r_mt-2">
                                <Form.Control placeholder="Supplier Name" className='fill-input' />
                                <label className='float-label'>Search</label>
                                <Icon icon="material-symbols:search-rounded" className='inputIcon'/>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 contact">
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th><Form.Check inline name="group1" /></th>
                                    <th>Product ID</th>
                                    <th>Product Code</th>
                                    <th>Brand</th>
                                    <th>Title</th>
                                    <th>Price</th>
                                    <th>Cost</th>
                                    <th>On Hand</th>
                                    <th>Commited</th>
                                    <th>Available to Sell</th>
                                    <th>On Open PO</th>
                                    <th>Primary Category</th>
                                    <th>UPC</th>
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
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>
                                        <div className='card_detail'>
                                            <span className='text-center d-flex'>
                                                <a className="btn_edit cursor" onClick={() => setEdit(true)}>
                                                    <Icon icon="bx:comment-edit" />
                                                    <p className='mb-0'>Edit</p>
                                                </a>
                                                <a className="btn_default cursor ms-3" onClick={() => setCopy(true)}>
                                                    <Icon icon="solar:copy-broken" />
                                                    <p className='mb-0'>Traick</p>
                                                </a>
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><Form.Check inline name="group1" /></td>
                                    <td>2</td>
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
                                    <td>
                                        <div className='card_detail'>
                                            <span className='text-center d-flex'>
                                                <a className="btn_edit cursor">
                                                    <Icon icon="bx:comment-edit" />
                                                    <p className='mb-0'>Edit</p>
                                                </a>
                                                <a className="btn_default cursor ms-3">
                                                    <Icon icon="solar:copy-broken" />
                                                    <p className='mb-0'>Traick</p>
                                                </a>
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><Form.Check inline name="group1" /></td>
                                    <td>3</td>
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
                                    <td>
                                        <div className='card_detail'>
                                            <span className='text-center d-flex'>
                                                <a className="btn_edit cursor">
                                                    <Icon icon="bx:comment-edit" />
                                                    <p className='mb-0'>Edit</p>
                                                </a>
                                                <a className="btn_default cursor ms-3">
                                                    <Icon icon="solar:copy-broken" />
                                                    <p className='mb-0'>Traick</p>
                                                </a>


                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><Form.Check inline name="group1" /></td>
                                    <td>4</td>
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
                                    <td><div className='card_detail'>
                                        <span className='text-center d-flex'>
                                            <a className="btn_edit cursor">
                                                <Icon icon="bx:comment-edit" />
                                                <p className='mb-0'>Edit</p>
                                            </a>
                                            <a className="btn_default cursor ms-3">
                                                <Icon icon="solar:copy-broken" />
                                                <p className='mb-0'>Stock</p>
                                            </a>
                                        </span>
                                    </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><Form.Check inline name="group1" /></td>
                                    <td>4</td>
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
                                    <td>
                                        <div className='card_detail'>
                                            <span className='text-center d-flex'>
                                                <a className="btn_edit cursor">
                                                    <Icon icon="bx:comment-edit" />
                                                    <p className='mb-0'>Edit</p>
                                                </a>
                                                <a className="btn_default cursor ms-3">
                                                    <Icon icon="solar:copy-broken" />
                                                    <p className='mb-0'>Stock</p>
                                                </a>


                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><Form.Check inline name="group1" /></td>
                                    <td>4</td>
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
                                    <td>
                                        <div className='card_detail'>
                                            <span className='text-center d-flex'>
                                                <a className="btn_edit cursor">
                                                    <Icon icon="bx:comment-edit" />
                                                    <p className='mb-0'>Edit</p>
                                                </a>
                                                <a className="btn_default cursor ms-3">
                                                    <Icon icon="solar:copy-broken" />
                                                    <p className='mb-0'>Stock</p>
                                                </a>


                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><Form.Check inline name="group1" /></td>
                                    <td>4</td>
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
                                    <td>
                                        <div className='card_detail'>
                                            <span className='text-center d-flex'>
                                                <a className="btn_edit cursor">
                                                    <Icon icon="bx:comment-edit" />
                                                    <p className='mb-0'>Edit</p>
                                                </a>
                                                <a className="btn_default cursor ms-3">
                                                    <Icon icon="solar:copy-broken" />
                                                    <p className='mb-0'>Stock</p>
                                                </a>


                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><Form.Check inline name="group1" /></td>
                                    <td>4</td>
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
                                    <td>
                                        <div className='card_detail'>
                                            <span className='text-center d-flex'>
                                                <a className="btn_edit cursor">
                                                    <Icon icon="bx:comment-edit" />
                                                    <p className='mb-0'>Edit</p>
                                                </a>
                                                <a className="btn_default cursor ms-3">
                                                    <Icon icon="solar:copy-broken" />
                                                    <p className='mb-0'>Stock</p>
                                                </a>


                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><Form.Check inline name="group1" /></td>
                                    <td>4</td>
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
                                    <td>
                                        <div className='card_detail'>
                                            <span className='text-center d-flex'>
                                                <a className="btn_edit cursor">
                                                    <Icon icon="bx:comment-edit" />
                                                    <p className='mb-0'>Edit</p>
                                                </a>
                                                <a className="btn_default cursor ms-3">
                                                    <Icon icon="solar:copy-broken" />
                                                    <p className='mb-0'>Stock</p>
                                                </a>


                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><Form.Check inline name="group1" /></td>
                                    <td>4</td>
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
                                    <td>
                                        <div className='card_detail'>
                                            <span className='text-center d-flex'>
                                                <a className="btn_edit cursor">
                                                    <Icon icon="bx:comment-edit" />
                                                    <p className='mb-0'>Edit</p>
                                                </a>
                                                <a className="btn_default cursor ms-3">
                                                    <Icon icon="solar:copy-broken" />
                                                    <p className='mb-0'>Stock</p>
                                                </a>
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><Form.Check inline name="group1" /></td>
                                    <td>4</td>
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
                                    <td>
                                        <div className='card_detail'>
                                            <span className='text-center d-flex'>
                                                <a className="btn_edit cursor">
                                                    <Icon icon="bx:comment-edit" />
                                                    <p className='mb-0'>Edit</p>
                                                </a>
                                                <a className="btn_default cursor ms-3">
                                                    <Icon icon="solar:copy-broken" />
                                                    <p className='mb-0'>Stock</p>
                                                </a>


                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><Form.Check inline name="group1" /></td>
                                    <td>4</td>
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
                                    <td>
                                        <div className='card_detail'>
                                            <span className='text-center d-flex'>
                                                <a className="btn_edit cursor">
                                                    <Icon icon="bx:comment-edit" />
                                                    <p className='mb-0'>Edit</p>
                                                </a>
                                                <a className="btn_default cursor ms-3">
                                                    <Icon icon="solar:copy-broken" />
                                                    <p className='mb-0'>Stock</p>
                                                </a>


                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Row>
            </div>

        
    );

}
export default Tracking_Ad;