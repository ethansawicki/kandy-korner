import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Locations from './Locations'
import NewProductsForm from './products/NewProductsForm'
import AllProducts from './products/AllProducts'
import ProductParent from './productSearch/ProductParent'
import Employee from './employees/Employee'
import NewEmployee from './employees/NewEmployee'

const Home = () => {
  return (
    <>
    <Routes>
        <Route path='Locations' element={<Locations />} />
        <Route path='Products' element={<AllProducts />} />
        <Route path='Product/create' element={<NewProductsForm />} />
        <Route path='ProductSearch' element={<ProductParent />} />
        <Route path='Employees' element={<Employee />} />
        <Route path='/Employee/Add' element={<NewEmployee />} />
    </Routes>
    </>
  )
}

export default Home