// src/components/auth/SignUp.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './auth-signup.css';

const SignUp = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate sign-up by dispatching a LOGIN action
        const user = {
            id: 'user123',
            email,
            role: 'USER',
            fullname: fullName,
        };
        dispatch({ type: 'LOGIN', payload: user });
        navigate('/'); // Redirect to home page after sign-up
    };

    return (
        <div className='auth-container-wrapper'>
        <div className='auth-inner-wrapper'>
        <div className="auth-container">
            <div className="auth-form">
                <h2>Sign up to Salinaka</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="fullName">* Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="John Doe"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">* Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="test@example.com"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">* Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Your Password"
                            required
                        />
                    </div>
                    <button type="submit" className="auth-button">Sign Up →</button>
                </form>
                
            </div>
            <div className="auth-social">
                <span className="auth-or">OR</span>
                <button className="social-button facebook">Continue with Facebook</button>
                <button className="social-button google">Continue with Google</button>
                <button className="social-button github">Continue with GitHub</button>
            </div>
        </div>
                <div className="auth-footer">
                            <span>Already have an account?</span>
                            <Link to="/sign-in" className="auth-link"><button className='auth-sign-button'>Sign In</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;