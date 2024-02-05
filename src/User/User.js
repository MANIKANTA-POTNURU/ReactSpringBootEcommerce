import React from 'react'
import Navbar from './Header/Navbar'
import Category from './Category/Category'
import ProductsByCategory from './Products/ProductsByCategory'
import { Route, Routes } from 'react-router'
function User() {
  return (
    <div>
    <Navbar/>
    {/* <Category/> */}
          <Routes>
          <Route path="/category" element={<Category/>} />
            <Route path="/viewproductsbycategory/:catid" element={<ProductsByCategory/>} />

          </Routes>
    </div>
  )
}

export default User