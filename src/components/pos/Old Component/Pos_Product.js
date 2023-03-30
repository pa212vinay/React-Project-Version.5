import React from 'react'
import KioskImg from '../../images/koisk-removebg-preview_1.png'
import { Icon } from '@iconify/react';
import '../../css/pos/pos_style.scss';

export default function Pos_Product() {
  return (
    <div className='productCard'>
    <div className='cardImg'>
        <img src={KioskImg} alt="" />
    </div>
    <div className='posCardDetail'>
        <h2 className='posCardHeading'>Maytag® 24.9 Cu. Ft. Fingerprint Resistant Stainless Steel Side-by-Side Refrigerator</h2>
        <div className='posCodePrice'>
        <div className='posCode'><b>Code:</b> <span>21277</span></div>
        <div className='posPrice'><b>$:</b> <span>7714.00</span></div>
      </div>
    </div>
    </div>
  )
}
