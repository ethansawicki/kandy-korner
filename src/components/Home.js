import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Locations from './Locations'
import Products from './/products/Products'
import NewProductsForm from './products/NewProductsForm'
const Home = () => {
  return (
    <>
    <Routes>
        <Route path='Locations' element={<Locations />} />
        <Route path='Products' element={<Products />} />
        <Route path='Product/create' element={<NewProductsForm />} />
    </Routes>
    </>
  )
}

export default Home