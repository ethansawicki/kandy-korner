import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Locations from './Locations'
const Home = () => {
  return (
    <Routes>
        <Route path='Locations' element={<Locations />} />
    </Routes>
  )
}

export default Home