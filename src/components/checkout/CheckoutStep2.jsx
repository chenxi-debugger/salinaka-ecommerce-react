import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './checkoutStep2.css';

const CheckoutStep2 = () => {
  const navigate = useNavigate();
  const [shipping, setShipping] = useState({
    fullName: '',
    email: '',
    address: '',
    phone: ''
  });
  const [useShipping, setUseShipping] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('shipping');
    if (saved) setShipping(JSON.parse(saved));
  }, []);

  const handleChange = (e) => {
    setShipping({ ...shipping, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    localStorage.setItem('shipping', JSON.stringify(shipping));
    localStorage.setItem('useShipping', JSON.stringify(useShipping));
    navigate('/checkout/step-3');
  };

  const basket = JSON.parse(localStorage.getItem('basket')) || [];
  const subtotal = basket.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingCost = useShipping ? 50.0 : 0;
  const total = subtotal + shippingCost;

  return (
    <div className="checkout-wrapper">
      <div className="checkout-steps">
        <div className="step-line"></div>
        <div className="step-item">
          <div className="step-circle">1</div>
          <p className="step-label">Order Summary</p>
        </div>
        <div className="step-line"></div>
        <div className="step-item">
          <div className="step-circle active">2</div>
          <p className="step-label">Shipping Details</p>
        </div>
        <div className="step-line"></div>
        <div className="step-item">
          <div className="step-circle">3</div>
          <p className="step-label">Payment</p>
        </div>
        <div className="step-line"></div>
      </div>

      <h2 className="checkout-title">Shipping Details</h2>

      <form className="shipping-form">
        <div className="input-group">
          <label>* Full Name</label>
          <input
            type="text"
            name="fullName"
            value={shipping.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label>* Email Address</label>
          <input
            type="email"
            name="email"
            value={shipping.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label>* Shipping Address</label>
          <input
            type="text"
            name="address"
            value={shipping.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label>Mobile Number</label>
          <input
            type="text"
            name="phone"
            value={shipping.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="shipping-option">
          <label><strong>Shipping Option</strong></label>
          <div className="option-box">
            <input
              type="checkbox"
              name="shippingOption"
              checked={useShipping}
              onChange={() => setUseShipping(!useShipping)}
            />{' '}
            International Shipping (7–14 days)
            <span className="option-price">$50.00</span>
          </div>
        </div>

        <div className="checkout-summary">
          <p>International Shipping: ${shippingCost.toFixed(2)}</p>
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
          <p><strong>Total: ${total.toFixed(2)}</strong></p>
        </div>

        <div className="checkout-footer">
          <button type="button" className="btn-outline" onClick={() => navigate('/checkout/step-1')}>
            ← Go Back
          </button>
          <button type="button" className="btn-black" onClick={handleNext}>
            Next Step →
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutStep2;
