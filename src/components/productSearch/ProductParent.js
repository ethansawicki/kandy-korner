import React, { useState } from 'react'
import Products from './Products'
import { ProductSearch } from './ProductSearch'

const ProductParent = () => {
  const [candySearch, setCandySearch] = useState("")
  
  return (
    <>
        <ProductSearch searchCandy={setCandySearch} />
        <Products searchCandy={setCandySearch} searchCandyTerms={candySearch} />
    </>
  )
}

export default ProductParent