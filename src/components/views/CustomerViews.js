import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import {Locations} from '../Locations'
import {AllProducts} from '../products/AllProducts'
import {ProductParent} from '../productSearch/ProductParent'


export const CustomerView = () => {
  return (
    <Routes>
        <Route path='/' element={
            <>
                <h2 className='banner'>Come get y'all juice</h2>
                <Outlet />
            </>
        }></Route>
        <Route path='Locations' element={<Locations />} />
        <Route path='Products' element={<AllProducts />} />
        <Route path='ProductSearch' element={<ProductParent />} />
    </Routes>
  )
}
