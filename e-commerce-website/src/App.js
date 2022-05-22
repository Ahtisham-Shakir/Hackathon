import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import SigninAndSignup from './pages/signin-and-signup/Signin-and-Signup';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/signin' element={<SigninAndSignup />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
