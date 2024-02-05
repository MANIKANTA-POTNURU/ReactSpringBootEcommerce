import React from 'react'
import Navbar from './Header/Navbar'
import Category from './Category/Category'
import ProductsByCategory from './Products/ProductsByCategory'
function User() {
  return (
    <div>
    <Navbar/>
    <Category/>
          <Routes>
            <Route path="/viewproductsbycategory:catid" element={<ProductsByCategory/>} />
          </Routes>
    </div>
  )
}

export default User