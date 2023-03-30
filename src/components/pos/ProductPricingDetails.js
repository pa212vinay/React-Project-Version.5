import React from 'react'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import KioskImg from '../../images/koisk-removebg-preview_1.png'
import { Button } from 'react-bootstrap';

export default function ProductPricingDetails() {
    return (
        <>
            {/* ----- Add Cutsomer Tab ----- */}
            <Link to="/" className='addCustomerHead customerNameHead'>
                <div className='addCustomer'>
                    <Icon className='addCusUserIcon' icon="teenyicons:user-plus-solid" />
                    <span className='addCusText'>Add Customer</span>
                </div>
                <Icon className='addCusIcon' icon="ic:baseline-plus" />
            </Link>


            {/* ----- Product Detail Tab ----- */}
            <div className='productDetail'>
                <div className='productDetailItem'>
                    <img className='productDetailItemImg' src={KioskImg} alt="" />
                    <div className='productDetailItemHeading'>
                        <div className='proHeadingBtn'>
                            <h2>Maytag® 24.9 Cu. Ft. Fingerprint Resistant Stainless Steel Side-by-Side Refrigerator</h2>
                            <div className='proEditDeletIcon'>
                                <Link to="#" className='proEditIcon'><Icon icon="material-symbols:edit-square-outline-rounded" /></Link>
                                <Link to="#" className='prodeleteIcon'><Icon icon="ant-design:delete-filled" /></Link>
                            </div>
                        </div>
                        <div className='productDescription'>
                            <div><span>Code : 1234</span></div>
                            <div><span>Breakpoints are customizable widths that determine how your responsive layout behaves across device or viewport sizes in Bootstrap.</span></div>
                            <div><span>Model Number: Service</span></div>
                            <div><span>Serial Number: 123456</span></div>
                            <div><span><b>3 X $500.00</b></span></div>
                            <div><span>Service Date : 03/14/2023</span></div>
                            <div><span>Product : New Product</span></div>
                            <div><span>Model Number : N123</span></div>
                            <div><span>Series Revision Number : 213s</span></div>
                            <div><span>Serial Number : 312s</span></div>
                            <div><span>Date Purchased : 03/13/2023</span></div>
                            <div><span>Purchased From : Local store</span></div>
                            <div><span>Complaint : Breakpoints are customizable widths that determine how your responsive layout behaves across device or viewport sizes in Bootstrap.</span></div>
                            <div><span>Time In : 12</span></div>
                            <div><span>Time Out : 1</span></div>
                            <div><span>Type : Local Service Call</span></div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                {/* ----- Discount Tab ----- */}
                <div className='addDiscountTab'>
                    <Link to="#" className='addDiscountBtn'>
                        <span className='discountBtn'><Icon icon="ic:twotone-discount" /> Add Discount</span>
                        <span><Icon icon="mdi:circle-plus-outline" /></span>
                    </Link>
                </div>

                {/* ----- Price Tab ----- */}
                <div className='priceTotalTab'>
                    <div className='priceSubTotal'>
                        <span className='subTotalHeading'>Subtotal</span>
                        <span className='subTotalHeading'>$20.00</span>
                    </div>
                    <div className='priceSubTotal'>
                        <span className='subTotalHeading'>Coupon Applied<span class="couponName">(Discount 1)</span>
                        <Link to="/"><Icon icon="gridicons:cross-circle" /></Link></span>
                        <span className='subTotalHeading'>$20.00</span>
                    </div>
                    <div className='priceSubTotal'>
                        <span className='subTotalHeading'>Shipping & Handling</span>
                        <span className='subTotalHeading'>$0.00</span>
                    </div>
                    <div className='priceSubTotal'>
                        <span className='subTotalHeading'>Tax(Default)</span>
                        <span className='subTotalHeading'>$10.00</span>
                    </div>

                    <div className='priceSubTotal priceTotal'>
                        <span className='subTotalHeading'>Total</span>
                        <span className='subTotalHeading'>$110.00</span>
                    </div>
                </div>

                {/* ----- Discount Tab ----- */}
                <div className='PaymentBtnTab'>
                    <Button className="PaymentBtn">Payment</Button>
                </div>
            </div>
        </>
    )
}
