import React, { useState } from 'react'
import Products from './Products'
import { ProductSearch } from './ProductSearch'

const ProductsParent = () => {
    const [productsSearch, setProductsSearch] = useState("")
    
  return (
    <> 
        <ProductSearch candySearch={setProductsSearch} />
        <Products candySearchValue={productsSearch} />
    </>
  )
}

export default ProductsParent