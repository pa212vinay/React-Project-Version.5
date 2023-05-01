import React, { useState } from 'react';
import { Form, Row, Table, Modal } from 'react-bootstrap';
import { SiShutterstock } from "react-icons/si";
import { BiCommentEdit } from "react-icons/bi";
import { RiDeleteBin2Line } from "react-icons/ri";
import { FaRegCopy } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { SiMicrosoftexcel } from "react-icons/si";
import { ImTable2 } from "react-icons/im";

const Inventory_Inner = () => {
    const [Stock, setStock] = useState(false);
    const [Copy, setCopy] = useState(false);
    const [Delete, setDelete] = useState(false);
    return (
        <>
            <Modal size="lg" show={Stock} onHide={() => setStock(false)} aria-labelledby="example-modal-1">
                <div className="px-4">
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-1">
                            <h6 className="fw-bold">Update Inventory</h6>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <div>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>Variation</th>
                                            <th>Price</th>
                                            <th>Product Code</th>
                                            <th>Quantity</th>
                                            <th>Units Received</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>LG | Red | large</td>
                                            <td>0</td>
                                            <td></td>
                                            <td>1</td>
                                            <td>
                                                <div className="form-group cus-form-group">
                                                    <Form.Control placeholder="Units Received" className='fill-input' />
                                                    <label htmlFor="shipping" className='float-label'>Units Received</label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>samsung | Green</td>
                                            <td>0</td>
                                            <td></td>
                                            <td>0</td>
                                            <td>
                                                <div className="form-group cus-form-group">
                                                    <Form.Control placeholder="Units Received" className='fill-input' />
                                                    <label htmlFor="shipping" className='float-label'>Units Received</label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Dell</td>
                                            <td>0</td>
                                            <td></td>
                                            <td>5</td>
                                            <td>
                                                <div className="form-group cus-form-group">
                                                    <Form.Control placeholder="Units Received" className='fill-input' />
                                                    <label htmlFor="shipping" className='float-label'>Units Received</label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>HP</td>
                                            <td>0</td>
                                            <td></td>
                                            <td>0</td>
                                            <td>
                                                <div className="form-group cus-form-group">
                                                    <Form.Control placeholder="Units Received" className='fill-input' />
                                                    <label htmlFor="shipping" className='float-label'>Units Received</label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>POS</td>
                                            <td>0</td>
                                            <td></td>
                                            <td>0</td>
                                            <td>
                                                <div className="form-group cus-form-group">
                                                    <Form.Control placeholder="Units Received" className='fill-input' />
                                                    <label htmlFor="shipping" className='float-label'>Units Received</label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Warehouse</td>
                                            <td>0</td>
                                            <td></td>
                                            <td>0</td>
                                            <td>
                                                <div className="form-group cus-form-group">
                                                    <Form.Control placeholder="Units Received" className='fill-input' />
                                                    <label htmlFor="shipping" className='float-label'>Units Received</label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>BStock</td>
                                            <td>0</td>
                                            <td></td>
                                            <td>0</td>
                                            <td>
                                                <div className="form-group cus-form-group">
                                                    <Form.Control placeholder="Units Received" className='fill-input' />
                                                    <label htmlFor="shipping" className='float-label'>Units Received</label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Mike's</td>
                                            <td>0</td>
                                            <td></td>
                                            <td>0</td>
                                            <td>
                                                <div className="form-group cus-form-group">
                                                    <Form.Control placeholder="Units Received" className='fill-input' />
                                                    <label htmlFor="shipping" className='float-label'>Units Received</label>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>


                                </Table>

                            </div>
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

            <Modal size="md" show={Copy} onHide={() => setCopy(false)} aria-labelledby="example-modal-4">
                <div className="px-4">
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-4">
                            <h6 className="fw-bold">Delete</h6>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Are you sure you want to copy this product?
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="float-end mb-2 mt-4">
                            <button className="btn-hover color-1 me-2" closeButton>No</button>
                            <button className="btn-hover color-2 r_mt-2">Yes</button>
                        </div>
                    </Modal.Footer>
                </div>
            </Modal>

            <Modal size="md" show={Delete} onHide={() => setDelete(false)} aria-labelledby="example-modal-4">
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

            <div className="">
                <div className="bg_col p-3">
                    <Row>
                        <div className='col-md-12'>
                            <div className='float-end'>
                            <Link to="/Product_Details"className="">
                            <button type="button" class="btn-hover color-2 me-2">New Item</button>
                            </Link>
                            <Link to="/New_Order"className="">
                            <button type="button" class="btn-hover color-2 me-2">New Purchase Order</button>
                            </Link>
                            <Link to="/Parts_Lookup"className="">
                            <button type="button" class="btn-hover color-2 me-2">Parts Lookup</button>
                            </Link>
                                <button type="button" class="btn btn-outline-primary me-2">Reset</button>
                                <button type="button" class="btn btn-outline-success me-2"><SiMicrosoftexcel className='text-green' /></button>
                                <button type="button" class="btn btn-outline-primary me-2"><ImTable2 /></button>
                                <div className="form-group cus-form-group d-inline-block">
                                    <Form.Control placeholder="Supplier Name" className='fill-input' />
                                    <label className='float-label'>Search</label>
                                    <BsSearch className='inputIcon' />
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
                                                    <Link className="btn_edit cursor" to="/Product_Details">
                                                        <BiCommentEdit className='' />
                                                        <p className='mb-0'>Edit</p>
                                                    </Link>
                                                    <a className="btn_default cursor ms-3" onClick={() => setStock(true)}>
                                                        <SiShutterstock className='' />
                                                        <p className='mb-0'>Stock</p>
                                                    </a>
                                                    <a className="btn_copy cursor ms-3" onClick={() => setCopy(true)}>
                                                        <FaRegCopy className='' />
                                                        <p className='mb-0'>Copy</p>
                                                    </a>
                                                    <a className="btn_delete cursor ms-3" onClick={() => setDelete(true)}>
                                                        <RiDeleteBin2Line className='' />
                                                        <p className='mb-0'>Delete</p>
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
                                                        <BiCommentEdit className='' />
                                                        <p className='mb-0'>Edit</p>
                                                    </a>
                                                    <a className="btn_default cursor ms-3">
                                                        <SiShutterstock className='' />
                                                        <p className='mb-0'>Stock</p>
                                                    </a>
                                                    <a className="btn_copy cursor ms-3">
                                                        <FaRegCopy className='' />
                                                        <p className='mb-0'>Copy</p>
                                                    </a>
                                                    <a className="btn_delete cursor ms-3">
                                                        <RiDeleteBin2Line className='' />
                                                        <p className='mb-0'>Delete</p>
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
                                                        <BiCommentEdit className='' />
                                                        <p className='mb-0'>Edit</p>
                                                    </a>
                                                    <a className="btn_default cursor ms-3">
                                                        <SiShutterstock className='' />
                                                        <p className='mb-0'>Stock</p>
                                                    </a>
                                                    <a className="btn_copy cursor ms-3">
                                                        <FaRegCopy className='' />
                                                        <p className='mb-0'>Copy</p>
                                                    </a>
                                                    <a className="btn_delete cursor ms-3">
                                                        <RiDeleteBin2Line className='' />
                                                        <p className='mb-0'>Delete</p>
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
                                                    <BiCommentEdit className='' />
                                                    <p className='mb-0'>Edit</p>
                                                </a>
                                                <a className="btn_default cursor ms-3">
                                                    <SiShutterstock className='' />
                                                    <p className='mb-0'>Stock</p>
                                                </a>
                                                <a className="btn_copy cursor ms-3">
                                                    <FaRegCopy className='' />
                                                    <p className='mb-0'>Copy</p>
                                                </a>
                                                <a className="btn_delete cursor ms-3">
                                                    <RiDeleteBin2Line className='' />
                                                    <p className='mb-0'>Delete</p>
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
                                                        <BiCommentEdit className='' />
                                                        <p className='mb-0'>Edit</p>
                                                    </a>
                                                    <a className="btn_default cursor ms-3">
                                                        <SiShutterstock className='' />
                                                        <p className='mb-0'>Stock</p>
                                                    </a>
                                                    <a className="btn_copy cursor ms-3">
                                                        <FaRegCopy className='' />
                                                        <p className='mb-0'>Copy</p>
                                                    </a>
                                                    <a className="btn_delete cursor ms-3">
                                                        <RiDeleteBin2Line className='' />
                                                        <p className='mb-0'>Delete</p>
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
                                                        <BiCommentEdit className='' />
                                                        <p className='mb-0'>Edit</p>
                                                    </a>
                                                    <a className="btn_default cursor ms-3">
                                                        <SiShutterstock className='' />
                                                        <p className='mb-0'>Stock</p>
                                                    </a>
                                                    <a className="btn_copy cursor ms-3">
                                                        <FaRegCopy className='' />
                                                        <p className='mb-0'>Copy</p>
                                                    </a>
                                                    <a className="btn_delete cursor ms-3">
                                                        <RiDeleteBin2Line className='' />
                                                        <p className='mb-0'>Delete</p>
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
                                                        <BiCommentEdit className='' />
                                                        <p className='mb-0'>Edit</p>
                                                    </a>
                                                    <a className="btn_default cursor ms-3">
                                                        <SiShutterstock className='' />
                                                        <p className='mb-0'>Stock</p>
                                                    </a>
                                                    <a className="btn_copy cursor ms-3">
                                                        <FaRegCopy className='' />
                                                        <p className='mb-0'>Copy</p>
                                                    </a>
                                                    <a className="btn_delete cursor ms-3">
                                                        <RiDeleteBin2Line className='' />
                                                        <p className='mb-0'>Delete</p>
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
                                                        <BiCommentEdit className='' />
                                                        <p className='mb-0'>Edit</p>
                                                    </a>
                                                    <a className="btn_default cursor ms-3">
                                                        <SiShutterstock className='' />
                                                        <p className='mb-0'>Stock</p>
                                                    </a>
                                                    <a className="btn_copy cursor ms-3">
                                                        <FaRegCopy className='' />
                                                        <p className='mb-0'>Copy</p>
                                                    </a>
                                                    <a className="btn_delete cursor ms-3">
                                                        <RiDeleteBin2Line className='' />
                                                        <p className='mb-0'>Delete</p>
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
                                                        <BiCommentEdit className='' />
                                                        <p className='mb-0'>Edit</p>
                                                    </a>
                                                    <a className="btn_default cursor ms-3">
                                                        <SiShutterstock className='' />
                                                        <p className='mb-0'>Stock</p>
                                                    </a>
                                                    <a className="btn_copy cursor ms-3">
                                                        <FaRegCopy className='' />
                                                        <p className='mb-0'>Copy</p>
                                                    </a>
                                                    <a className="btn_delete cursor ms-3">
                                                        <RiDeleteBin2Line className='' />
                                                        <p className='mb-0'>Delete</p>
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
                                                        <BiCommentEdit className='' />
                                                        <p className='mb-0'>Edit</p>
                                                    </a>
                                                    <a className="btn_default cursor ms-3">
                                                        <SiShutterstock className='' />
                                                        <p className='mb-0'>Stock</p>
                                                    </a>
                                                    <a className="btn_copy cursor ms-3">
                                                        <FaRegCopy className='' />
                                                        <p className='mb-0'>Copy</p>
                                                    </a>
                                                    <a className="btn_delete cursor ms-3">
                                                        <RiDeleteBin2Line className='' />
                                                        <p className='mb-0'>Delete</p>
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
                                                        <BiCommentEdit className='' />
                                                        <p className='mb-0'>Edit</p>
                                                    </a>
                                                    <a className="btn_default cursor ms-3">
                                                        <SiShutterstock className='' />
                                                        <p className='mb-0'>Stock</p>
                                                    </a>
                                                    <a className="btn_copy cursor ms-3">
                                                        <FaRegCopy className='' />
                                                        <p className='mb-0'>Copy</p>
                                                    </a>
                                                    <a className="btn_delete cursor ms-3">
                                                        <RiDeleteBin2Line className='' />
                                                        <p className='mb-0'>Delete</p>
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
                                                        <BiCommentEdit className='' />
                                                        <p className='mb-0'>Edit</p>
                                                    </a>
                                                    <a className="btn_default cursor ms-3">
                                                        <SiShutterstock className='' />
                                                        <p className='mb-0'>Stock</p>
                                                    </a>
                                                    <a className="btn_copy cursor ms-3">
                                                        <FaRegCopy className='' />
                                                        <p className='mb-0'>Copy</p>
                                                    </a>
                                                    <a className="btn_delete cursor ms-3">
                                                        <RiDeleteBin2Line className='' />
                                                        <p className='mb-0'>Delete</p>
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
            </div>,
        </>
    );
}
export default Inventory_Inner;
