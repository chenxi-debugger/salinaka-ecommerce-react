// src/components/auth/SignIn.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './auth-signin.css';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate sign-in by dispatching a LOGIN action
        const user = {
            id: 'user123',
            email,
            role: 'USER',
            fullname: 'Test User', // For simplicity, using a static name
        };
        dispatch({ type: 'LOGIN', payload: user });
        navigate('/'); // Redirect to home page after sign-in
    };

    return (
        <div className='auth-container-wrapper'>
        <div className='auth-inner-wrapper'>
        <div className="auth-container">
            <div className="auth-form">
                <h2>Sign in to Salinaka</h2>
                <form onSubmit={handleSubmit}>
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
                    <Link to="/forgot-password" className="forgot-password">Forgot password?</Link>
                    <button type="submit" className="auth-button">Sign In →</button>
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
                        <span>Don't have an account?</span>
                        <Link to="/sign-up" className="auth-link"><button className='auth-sign-button'>Sign Up</button></Link>
                    </div>
            </div>
        </div>
    );
};

export default SignIn;