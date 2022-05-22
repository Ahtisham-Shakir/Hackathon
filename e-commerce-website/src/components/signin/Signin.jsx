import React, { useState } from 'react'
import './signin.styles.css'
import { auth } from '../../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useGlobalContext } from '../../context/appContext';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {showAlert} = useGlobalContext();

    // validateLogin
    const validateLogin = (email,password)=>{
        if (!email && !password){
            showAlert('error','All fields are required');
            return false
        }
        else {
            return true
        }
    }

    // Login user
    const handleSubmit = (e) => {
        e.preventDefault();
        if(validateLogin(email,password)){
            showAlert('success','Checking your info')
            signInWithEmailAndPassword(auth, email, password)
            .then((userCred)=>{
                console.log(userCred.user)
                showAlert('success','Login Successfully');
                setEmail('')
                setPassword('')
            }).catch((error)=>{
                showAlert('error',error.message);
            })
        }
    }
    return (
        <div className="sign-in container py-2">
            <h2 className='title my-3'>I already have an account</h2>

            <form onSubmit={handleSubmit} className="py-3">
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Signin