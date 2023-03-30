import React from 'react'
import { Form } from 'react-bootstrap';
import '../../css/pos/pos_style.scss';
import ScanIcon from '../../images/scanbar.svg'
import { Icon } from '@iconify/react';
import PosProduct from './PosProduct';
import { Link } from 'react-router-dom';

export default function ProductCategoryPos() {
    return (
        <>
            <div className='productCategoryPos'>
                <Form>
                    <div className='selecOutstock'>
                        <span className='stockCategory'>Category</span>
                        <Form.Check name="group1" label="In Stock" />
                    </div>
                    <div className='searchItem'>
                        <div className='selectCategory form-group cus-select-group'>
                            <Form.Select aria-label="Default select example" className='form-control fill-input'>
                                <option value="1">Home</option>
                                <option value="2">Kitchen</option>
                                <option value="3">Outdoor</option>
                                <option value="3">Indoor</option>
                            </Form.Select>
                            <label className='float-label' htmlFor="require_shipping">Select Category</label>
                        </div>
                        <div className='SearchProduct form-group cus-form-group'>
                            <Form.Control type="search" placeholder="none" className="me-1 fill-input" aria-label="Search" />
                            <label className='float-label'>Scan Here or Tap to Search</label>
                            <button className='SearchIcon'><Icon icon="ic:round-search" /></button>
                        </div>
                        <div className='qrSearch'> 
                            <Link to="/" className='qrSearchIcon'>
                                <img className='qrSearchImg' src={ScanIcon} alt="" />
                                <span className='qrSearchText'>Scan</span>
                            </Link>
                        </div>
                    </div>
                </Form>

                <div className='row'>
                    <div className='col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-sm-none d-none d-md-block cusPosItem mb-4'><PosProduct /></div>
                    <div className='col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-sm-none d-none d-md-block cusPosItem mb-4'><PosProduct /></div>
                    <div className='col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-sm-none d-none d-md-block cusPosItem mb-4'><PosProduct /></div>
                    <div className='col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-sm-none d-none d-md-block cusPosItem mb-4'><PosProduct /></div>
                    <div className='col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-sm-none d-none d-md-block cusPosItem mb-4'><PosProduct /></div>
                    <div className='col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-sm-none d-none d-md-block cusPosItem mb-4'><PosProduct /></div>
                    <div className='col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-sm-none d-none d-md-block cusPosItem mb-4'><PosProduct /></div>
                    <div className='col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-sm-none d-none d-md-block cusPosItem mb-4'><PosProduct /></div>
                    <div className='col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-sm-none d-none d-md-block cusPosItem mb-4'><PosProduct /></div>
                    <div className='col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-sm-none d-none d-md-block cusPosItem mb-4'><PosProduct /></div>
                    <div className='col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-sm-none d-none d-md-block cusPosItem mb-4'><PosProduct /></div>
                    <div className='col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-sm-none d-none d-md-block cusPosItem mb-4'><PosProduct /></div>
                </div>
            </div>
        </>
    )
}
