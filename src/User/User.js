import React from 'react'
import Navbar from './Header/Navbar'
import Category from './Category/Category'
import ProductsByCategory from './Products/ProductsByCategory'
import { Route, Routes } from 'react-router'
import Viewallproducts from './Products/Viewallproducts'
import Cart from './Products/Cart'
function User() {
  return (
    <div>
    <Navbar/>
    {/* <Category/> */}
          <Routes>
          <Route path="/category" element={<Category/>} />
            <Route path="/viewproductsbycategory/:catid" element={<ProductsByCategory/>} />
            <Route path="/viewallproducts" element={<Viewallproducts/>} />
            <Route path="/cart" element={<Cart/>} />

          </Routes>
    </div>
  )
}

export default User