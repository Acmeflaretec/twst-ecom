import React from 'react'
import { categories } from '../../utils/constant/categories'
import ProductSlide from '../carousel/ProductSlide'

const BestSeller = () => {
  return (
    <div>
      <ProductSlide text="Best Seller" items={categories} slider="BestSeller"/>
    </div>
  )
}

export default BestSeller
