import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './editAccount.css';

const EditAccount = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fullname: '',
    email: '',
    address: '',
    phone: ''
  });

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('user'));
    if (stored) setUser(stored);
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem('user', JSON.stringify(user));
    alert('Account details updated');
    navigate('/account');
  };

  return (
    <div className="edit-account-wrapper">
      <h2>Edit Account Details</h2>
      <form className="edit-form">
        <label>
          Full Name
          <input type="text" name="fullname" value={user.fullname} onChange={handleChange} required />
        </label>
        <label>
          Email Address
          <input type="email" name="email" value={user.email} onChange={handleChange} required />
        </label>
        <label>
          Address
          <input type="text" name="address" value={user.address} onChange={handleChange} />
        </label>
        <label>
          Mobile Number
          <input type="text" name="phone" value={user.phone} onChange={handleChange} />
        </label>

        <div className="form-actions">
          <button type="button" className="btn-outline" onClick={() => navigate('/account')}>Cancel</button>
          <button type="button" className="btn-black" onClick={handleSave}>Save Changes</button>
        </div>
      </form>
    </div>
  );
};

export default EditAccount;
