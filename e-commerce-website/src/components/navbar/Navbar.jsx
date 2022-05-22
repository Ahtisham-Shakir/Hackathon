import React, { useEffect, useState } from 'react'
import './Navbar.styles.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import CartIcon from '../../assets/cart-icon.svg'
import { auth } from '../../config/firebase'
import { signOut, onAuthStateChanged } from "firebase/auth"
import { useGlobalContext } from '../../context/appContext'

const Navbar = () => {
  const [user, setUser] = useState(false);

  const {showAlert} = useGlobalContext();

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      console.log('change hua user')
      if(user){
          setUser(true);
          console.log("hai")
      }
      else{
          setUser(false);
          console.log('nae hai')
      }
  })
  },[])

  // Function to logout
  const logout = ()=>{
    // e.preventDefault();
    signOut(auth)
    .then(()=>{
        showAlert('success','Logout Successfully!');
    }).catch((error)=>{
        showAlert('error',error.message);
    })
  }
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <Link className="navbar-brand image-fluid" to="/"><img src={Logo} alt="" id='logo'/></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
            <li className="nav-item mx-2" >
              <Link className="nav-link text-white" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item mx-2" >
              <Link className="nav-link text-white" to="/shop">Shop</Link>
            </li>
            <li className="nav-item mx-2" >
              {
                user === false ? 
                (<Link className="nav-link text-white" to="/signin">Sign In</Link>)
                :
                (<Link className="nav-link text-white" to="/" onClick={logout}>Sign out</Link>)
              }

            </li>
            {/* <li className="nav-item mx-2" >
              <Link className="nav-link text-dark" to="/signin"></Link>
            </li> */}
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-light" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>




  )
}

export default Navbar