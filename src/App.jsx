// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Basket from './components/basket/Basket';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import HomePage from './Home';
import ShopPage from './Shop';
import FeaturedPage from './Featured';
import RecommendedPage from './Recommended';
import ProductDetails from './components/product/ProductDetails';
import ProductSearch from './components/ProductSearch';
import EditForm from './components/EditForm';
import CheckoutStep1 from './components/checkout/CheckoutStep1';
import CheckoutStep2 from './components/checkout/CheckoutStep2';
import CheckoutStep3 from './components/checkout/CheckoutStep3';
import AccountPage from './components/auth/AccountPage';
import EditAccount from './components/auth/EditAccount';
import FilterPopup from './components/product/FilterPopup';
import * as ROUTES from './constants/routes';


const AppWrapper = () => {
  const location = useLocation();
  const [showFilter, setShowFilter] = useState(false);

  const isShopPage = location.pathname === '/shop';

  return (
    <>
      <Header onToggleFilter={isShopPage ? () => setShowFilter(true) : null} />
      <Basket />
      {isShopPage && showFilter && (
  <FilterPopup
    onClose={() => setShowFilter(false)}
    initialFilters={{
      brand: 'All Brands',
      sortBy: 'None',
      priceRange: [100, 640],
    }}
    onApply={() => setShowFilter(false)} // temp no-op handler
  />
)}

      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.SHOP} element={<ShopPage />} />
        <Route path={ROUTES.FEATURED} element={<FeaturedPage />} />
        <Route path={ROUTES.RECOMMENDED} element={<RecommendedPage />} />
        <Route path={ROUTES.PRODUCT} element={<ProductDetails />} />
        <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
        <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
        <Route path={ROUTES.FORGOT_PASSWORD} element={<div>Forgot Password Page</div>} />
        <Route path={ROUTES.SEARCH} element={<ProductSearch />} />
        <Route path={ROUTES.EDIT} element={<EditForm />} />
        <Route path={ROUTES.CHECKOUT_STEP_1} element={<CheckoutStep1 />} />
        <Route path={ROUTES.CHECKOUT_STEP_2} element={<CheckoutStep2 />} />
        <Route path={ROUTES.CHECKOUT_STEP_3} element={<CheckoutStep3 />} />
        <Route path={ROUTES.ACCOUNT} element={<AccountPage />} />
        <Route path={ROUTES.ACCOUNT_EDIT} element={<EditAccount />} />
      </Routes>
      <Footer />
    </>
  );
};

const App = () => (
  <Router>
    <AppWrapper />
  </Router>
);

export default App;
