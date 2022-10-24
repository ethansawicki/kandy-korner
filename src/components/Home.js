import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Locations from './Locations'
import NewProductsForm from './products/NewProductsForm'
import AllProducts from './products/AllProducts'
import ProductParent from './productSearch/ProductParent'
import EmployeeList from './employees/EmployeeList'

const Home = () => {
  return (
    <>
    <Routes>
        <Route path='Locations' element={<Locations />} />
        <Route path='Products' element={<AllProducts />} />
        <Route path='Product/create' element={<NewProductsForm />} />
        <Route path='ProductSearch' element={<ProductParent />} />
        <Route path='Employees' element={<EmployeeList />} />
    </Routes>
    </>
  )
}

export default Home