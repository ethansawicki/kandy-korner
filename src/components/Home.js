import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Locations from './Locations'
import Products from './Products'
const Home = () => {
  return (
    <>
    <Routes>
        <Route path='Locations' element={<Locations />} />
        <Route path='Products' element={<Products />} />
    </Routes>
    </>
  )
}

export default Home