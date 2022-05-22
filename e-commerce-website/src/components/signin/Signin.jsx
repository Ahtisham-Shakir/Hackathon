import React, { useState } from 'react'
import './signin.styles.css'

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
        console.log(password)
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
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Signin