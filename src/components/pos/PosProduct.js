import React from 'react'
import KioskImg from '../../images/koisk-removebg-preview_1.png'
import { Icon } from '@iconify/react';
import '../../css/pos/pos_style.scss';
import { Link } from 'react-router-dom';

export default function PosProduct() {
    return (
        <>
            {/* <Link to="/" className='productCardLink'>
                <div className='productCard'>
                    <div className='cardImg'>
                        <img src={KioskImg} alt="KioskImg" />
                    </div>
                    <div className='posCardDetail'>
                        <h2 className='posCardHeading'>Maytag® 24.9 Cu. Ft. Fingerprint Resistant Stainless Steel Side-by-Side Refrigerator</h2>
                        <div className='posCodePrice'>
                            <div className='posCode'><b>Code:</b> <span>21277</span></div>
                            <div className='posPrice'><b>$:</b> <span>7714.00</span></div>
                        </div>
                    </div>
                    <div className='productInfoIcon'>
                        <Link to="/" className='InfoIcon'><Icon icon="mdi:information-variant-circle-outline" /></Link>
                    </div>
                    <div className='productOutofStock'>
                        <span>OUT OF STOCK</span>
                    </div>
                </div>

            </Link> */}
            <Link to="/" className='productCardLink'>
                <div className='productCard'>
                <h2 className='posCardHeading'>Maytag® 24.9 Cu. Ft. Fingerprint Resistant Stainless Steel Side-by-Side Refrigerator</h2>
                    <div className='cardImg'>
                        <img src={KioskImg} alt="KioskImg" />
                        <div className='productInfoIcon'>
                        <Link to="/" className='InfoIcon'><Icon icon="mdi:information-variant-circle-outline" /></Link>
                    </div>
                    <div className='productOutofStock'>
                        <span>OUT OF STOCK</span>
                    </div>
                    </div>
                    <div className='posCardDetail'>
                        <div className='posCodePrice'>
                            <div className='posCode'><b>Code:</b> <span>21277</span></div>
                            <div className='posPrice'><b>$:</b> <span>7714.00</span></div>
                        </div>
                    </div>
                    
                </div>

            </Link>
        </>
    )
}
