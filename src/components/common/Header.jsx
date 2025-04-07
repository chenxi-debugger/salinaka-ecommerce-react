// src/components/common/Header.jsx
import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import HeaderUserDropdown from '../auth/HeaderUserDropdown';
import './header.css';

const Header = () => {
  const basket = useSelector((state) => state.basket);
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const location = useLocation();
  const isShopPage = location.pathname === '/shop';

  const [showMessage, setShowMessage] = useState(false);
  const prevBasket = useRef(basket);
  const navigate = useNavigate();

  const onSignOut = () => {
    dispatch({ type: 'CLEAR_BASKET' });
    dispatch({ type: 'LOGOUT' });
    navigate('/sign-in');
  };

  const totalItems = basket.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const hasNewItem =
      basket.length > prevBasket.current.length ||
      basket.some((item, index) => {
        const prevItem = prevBasket.current[index];
        return prevItem && item.quantity > prevItem.quantity;
      });

    if (hasNewItem) {
      setShowMessage(true);
      const timer = setTimeout(() => setShowMessage(false), 2000);
      return () => clearTimeout(timer);
    }

    prevBasket.current = basket;
  }, [basket]);

  return (
    <header className="header">
      <div className="header-left">
        <NavLink to="/" id="homeLink">
          <img
            src="/image/logo-full.059e10fa5fedbfb65165e7565ed3936f.png"
            alt="Salinaka Logo"
            className="logo"
          />
        </NavLink>
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-active' : ''}>Home</NavLink>
          <NavLink to="/shop" className={({ isActive }) => isActive ? 'nav-active' : ''}>Shop</NavLink>
          <NavLink to="/featured" className={({ isActive }) => isActive ? 'nav-active' : ''}>Featured</NavLink>
          <NavLink to="/recommended" className={({ isActive }) => isActive ? 'nav-active' : ''}>Recommended</NavLink>
        </div>
      </div>

      <div className="header-right">
        {isShopPage && (
          <button
            className="btn-filters"
            onClick={() => dispatch({ type: 'OPEN_FILTER_POPUP' })}
          >
            Filters
          </button>
        )}

        <div className="search-bar">
          <img
            src="/image/magnifying-glass-solid.svg"
            alt="Search"
            className="magnifierImg"
          />
          <input
            type="text"
            className="header-input"
            placeholder="Kibal Batal"
          />
        </div>

        <div className="cart-icon" onClick={() => document.body.classList.add('is-basket-open')}>
          <img src="/image/cart-plus-solid.svg" alt="Cart" className="cart-icon-img" />
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </div>

        {user ? (
          <HeaderUserDropdown user={user} onSignOut={onSignOut} />
        ) : (
          <>
            <NavLink to="/sign-up" className="btn-signup">Sign Up</NavLink>
            <NavLink to="/sign-in" className="btn-signin">Sign In</NavLink>
          </>
        )}
      </div>

      <div className={`message-box ${showMessage ? 'show' : ''}`} role="alert">
        Item added to basket
      </div>
    </header>
  );
};

export default Header;
