import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './accountPage.css';

const AccountPage = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState('account');

  const user = JSON.parse(localStorage.getItem('user')) || {
    fullname: 'User',
    email: 'example@email.com',
    address: '',
    phone: '',
    joined: 'March 31, 2025'
  };

  return (
    <div className="account-container">
      <div className="account-tabs">
        <button className={tab === 'account' ? 'active' : ''} onClick={() => setTab('account')}>Account</button>
        <button className={tab === 'wishlist' ? 'active' : ''} onClick={() => setTab('wishlist')}>My Wish List</button>
        <button className={tab === 'orders' ? 'active' : ''} onClick={() => setTab('orders')}>My Orders</button>
      </div>

      {tab === 'account' && (
        <div className="account-section">
        <div
            className="account-cover"
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/image/array-of-glasses.jpg)`}}
        >
            <img className="avatar" src={`${process.env.PUBLIC_URL}/image/userImage.png`} alt="avatar" />
            <button className="edit-btn" onClick={() => navigate('/account/edit')}>Edit Account</button>
          </div>
          <div className="account-info">
            <h3>{user.fullname}</h3>
            <p><strong>Email</strong><br />{user.email}</p>
            <p><strong>Address</strong><br /><i>{user.address || 'Address not set'}</i></p>
            <p><strong>Mobile</strong><br />{user.phone || '-'}</p>
            <p><strong>Date Joined</strong><br />{user.joined}</p>
          </div>
        </div>
      )}

      {tab === 'wishlist' && (
        <div className="account-empty">
          <h4>My Wish List</h4>
          <p>You don’t have a wish list</p>
        </div>
      )}

      {tab === 'orders' && (
        <div className="account-empty">
          <h4>My Orders</h4>
          <p>You don’t have any orders</p>
        </div>
      )}
    </div>
  );
};

export default AccountPage;
