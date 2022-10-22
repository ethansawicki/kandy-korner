import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Locations from './Locations'
import NewProductsForm from './products/NewProductsForm'
import { ProductSearch } from './products/ProductSearch'
import ProductsParent from './products/ProductsParent'
const Home = () => {
  return (
    <>
    <Routes>
        <Route path='Locations' element={<Locations />} />
        <Route path='Products' element={<ProductsParent />} />
        <Route path='Product/create' element={<NewProductsForm />} />
        <Route path='ProductSearch' element={<ProductSearch />} />
    </Routes>
    </>
  )
}

export default Home