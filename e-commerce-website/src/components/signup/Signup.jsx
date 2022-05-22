import React, { useState } from 'react'
import { useGlobalContext } from '../../context/appContext'
import { auth } from '../../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [number, setNumber] = useState('');
    const [zip, setZip] = useState('');

    const { showAlert, validate } = useGlobalContext();

    // Reseting states
    const reset = () => {
        setName('')
        setEmail('')
        setPassword('')
        setConfirm('')
        setCountry('')
        setCity('')
        setState('')
        setNumber('')
        setZip('')
    }

    // Creating user
    const handleSubmit = (e) => {
        e.preventDefault();
        const objToValidate = { name, email, password, confirm, country, city, state, number, zip };
        if (validate(objToValidate)) {
            
            showAlert('success','Wait for a while')
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCred) => {
                    console.log(userCred.user);
                    showAlert('success', 'Your Account has been created Successfuly');
                    reset();
                    return true

                }).catch((error) => {
                    showAlert('error', error.message);
                    return false
                })
        }

    }

    return (
        <div className='container py-3'>
            <h2 className="title my-3">I do not have an account</h2>
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputConfirm" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="inputConfirm" value={confirm} onChange={e => setConfirm(e.target.value)} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputAddress2" className="form-label">Country</label>
                    <input type="text" className="form-control" id="inputAddress2" value={country} onChange={e => setCountry(e.target.value)} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity" value={city} onChange={e => setCity(e.target.value)} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputState" className="form-label">State</label>
                    <input type="text" className="form-control" id="inputState" value={state} onChange={e => setState(e.target.value)} />
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputNumber" className="form-label">Mobile Number</label>
                    <input type="number" className="form-control" id="inputNumber" value={number} onChange={e => setNumber(e.target.value)} />
                </div>

                <div className="col-md-2">
                    <label htmlFor="inputZip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="inputZip" value={zip} onChange={e => setZip(e.target.value)} />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Sign up</button>
                </div>
            </form>
        </div>
    )
}

export default Signup