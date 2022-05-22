import React from 'react'
import './signin-and-signup.styles.css'
import Signin from '../../components/signin/Signin'
import Signup from '../../components/signup/Signup'

const SigninAndSignup = () => {
  return (
    <div className='.sign-in-and-sign-up'>
      <Signin/>
      <Signup/>
    </div>
  )
}

export default SigninAndSignup