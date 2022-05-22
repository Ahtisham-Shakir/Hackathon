import React from 'react'
import './Navbar.styles.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import CartIcon from '../../assets/cart-icon.svg'

const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand image-fluid" to="/"><img src={Logo} alt="" id='logo'/></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
            <li className="nav-item mx-2" >
              <Link className="nav-link text-dark" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item mx-2" >
              <Link className="nav-link text-dark" to="/shop">Shop</Link>
            </li>
            <li className="nav-item mx-2" >
              <Link className="nav-link text-dark" to="/signin">SignIn</Link>
            </li>
            <li className="nav-item mx-2" >
              <Link className="nav-link text-dark" to="/signin"></Link>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>




  )
}

export default Navbar