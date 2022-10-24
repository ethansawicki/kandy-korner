import React, { useState } from 'react'
import Products from './Products'
import { ProductSearch } from './ProductSearch'

const ProductParent = () => {
  const [candySearch, setCandySearch] = useState("")
  
  return (
    <>
        <ProductSearch searchCandy={setCandySearch} />
      {
        candySearch ? <Products searchCandy={setCandySearch} searchCandyTerms={candySearch} /> : null
      } 
    </>
  )
}

export default ProductParent