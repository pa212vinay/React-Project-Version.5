import React from 'react'
import ProductCategoryPos from './ProductCategoryPos'
import ProductPricingDetails from './ProductPricingDetails'

export default function HomePos() {
    return (
        <>
            <div className='container-fluid pt-3'>
                <div className='row'>
                    <div className='col-xl-8 col-lg-8  col-md-8 col-sm-12 col-12'>
                        <ProductCategoryPos />
                    </div>
                    <div className='col-xl-4 col-lg-4  col-md-4 col-sm-12 col-12'>
                        <ProductPricingDetails />
                    </div>
                </div>
            </div>
        </>
    )
}
