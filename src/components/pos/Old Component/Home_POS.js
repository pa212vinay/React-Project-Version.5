import React from 'react'
import Product_Category_Pos from './Product_Category_Pos'

export default function Home_POS() {
  return (
    <>
      <div className='container-fluid pt-3'>
        <div className='row'>
          <div className='col-xl-8 col-lg-8  col-md-8 col-sm-12'>
            <Product_Category_Pos />
          </div>
          <div className='col-xl-4 col-lg-4  col-md-4 col-sm-12'>
            
          </div>
        </div>
      </div>
    </>
  )
}
