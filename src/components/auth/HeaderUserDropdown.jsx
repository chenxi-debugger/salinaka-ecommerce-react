import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeaderUserDropdown = ({ user, onSignOut }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setOpen(prev => !prev);

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="user-dropdown" ref={dropdownRef}>
      <div className="user-trigger" onClick={toggleDropdown}>
        <span>{user.fullname}</span>
        <img className="user-avatar" src={`${process.env.PUBLIC_URL}/image/userImage.png`} alt="User" />
        <span className="arrow-down">▼</span>
      </div>

      <div className={`user-menu ${open ? 'show' : ''}`}>
        <Link to="/account" className="dropdown-item" onClick={() => setOpen(false)}>
          <span>View Account</span>
          <img src={`${process.env.PUBLIC_URL}/image/user-solid.svg`} alt="account icon" className="menu-icon" />
        </Link>
        <button className="dropdown-item" onClick={onSignOut}>
          <span>Sign Out</span>
          <img src={`${process.env.PUBLIC_URL}/image/arrow-right-from-bracket-solid.svg`} alt="sign out icon" className="menu-icon-2" />
        </button>
      </div>
    </div>
  );
};

export default HeaderUserDropdown;
