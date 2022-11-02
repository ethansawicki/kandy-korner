import React, { useState } from 'react'
import { AllProducts } from '../products/AllProducts'
import { ProductSearch } from './ProductSearch'

export const ProductParent = () => {
  const [candySearch, setCandySearch] = useState("")
  
  return (
    <>
        <ProductSearch searchCandy={setCandySearch} />
      {
        candySearch ? <AllProducts searchCandyTerms={candySearch} /> : null
      } 
    </>
  )
}