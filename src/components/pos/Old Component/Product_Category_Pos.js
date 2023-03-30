import React from 'react'
import { Form } from 'react-bootstrap';
import '../../css/pos/pos_style.scss';
import ScanIcon from '../../images/scanbar.svg'
import { Icon } from '@iconify/react';
import Pos_Product from './Pos_Product';

export default function Product_Category_Pos() {
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
                        <div className='qrSearachIcon'><img src={ScanIcon} alt="" /><span>Scan</span></div>
                    </div>
                </Form>

                <div className='row'>
                    <div className='col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-3 cusPosItem'><a href=""><Pos_Product /></a></div>
                    <div className='col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-3 cusPosItem'><a href=""><Pos_Product /></a></div>
                    <div className='col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-3 cusPosItem'><a href=""><Pos_Product /></a></div>
                    <div className='col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-3 cusPosItem'><a href=""><Pos_Product /></a></div>
                    <div className='col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-3 cusPosItem'><a href=""><Pos_Product /></a></div>
                    <div className='col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-3 cusPosItem'><a href=""><Pos_Product /></a></div>
                    <div className='col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-3 cusPosItem'><a href=""><Pos_Product /></a></div>
                    <div className='col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-3 cusPosItem'><a href=""><Pos_Product /></a></div>
                    <div className='col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-3 cusPosItem'><a href=""><Pos_Product /></a></div>
                    <div className='col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-3 cusPosItem'><a href=""><Pos_Product /></a></div>
                    <div className='col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-3 cusPosItem'><a href=""><Pos_Product /></a></div>
                    <div className='col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-3 cusPosItem'><a href=""><Pos_Product /></a></div>
                    <div className='col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-3 cusPosItem'><a href=""><Pos_Product /></a></div>
                    <div className='col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-3 cusPosItem'><a href=""><Pos_Product /></a></div>
                    <div className='col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-3 cusPosItem'><a href=""><Pos_Product /></a></div>
                    <div className='col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-3 cusPosItem'><a href=""><Pos_Product /></a></div>
                    <div className='col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-3 cusPosItem'><a href=""><Pos_Product /></a></div>
                    <div className='col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-3 cusPosItem'><a href=""><Pos_Product /></a></div>
                </div>
            </div>
        </>
    )
}
