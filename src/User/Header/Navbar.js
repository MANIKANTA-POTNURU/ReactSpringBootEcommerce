import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import './navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          {/* <Brand /> */}
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          {/* <Hamburger /> */}
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/user">Home</NavLink>
            </li>
            <li>
              <NavLink to="/user/category">Categories</NavLink>
            </li>
            <li>
              <NavLink to="/user/viewallproducts">Products</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar