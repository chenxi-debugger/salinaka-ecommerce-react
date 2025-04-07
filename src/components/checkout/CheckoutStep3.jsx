import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './checkoutStep3.css';

const CheckoutStep3 = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardDetails, setCardDetails] = useState({
    cardName: '',
    cardNumber: '',
    expiry: '',
    ccv: ''
  });

  const basket = JSON.parse(localStorage.getItem('basket')) || [];
  const subtotal = basket.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const useShipping = JSON.parse(localStorage.getItem('useShipping'));
  const shippingCost = useShipping ? 50.0 : 0;
  const total = subtotal + shippingCost;

  const handleCardChange = (e) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };

  const handleConfirm = () => {
    alert(`Payment method: ${paymentMethod}\nOrder placed successfully!`);
    localStorage.removeItem('basket');
    navigate('/');
  };

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
          <div className="step-circle">2</div>
          <p className="step-label">Shipping Details</p>
        </div>
        <div className="step-line"></div>
        <div className="step-item">
          <div className="step-circle active">3</div>
          <p className="step-label">Payment</p>
        </div>
        <div className="step-line"></div>
      </div>

      <h2 className="checkout-title">Payment</h2>

      <div className="payment-options">
        <label className={`payment-option ${paymentMethod === 'card' ? 'active' : ''}`}>
          <input
            type="radio"
            name="paymentMethod"
            value="card"
            checked={paymentMethod === 'card'}
            onChange={() => setPaymentMethod('card')}
          />
          <div className="label-text">
            <strong>Credit Card</strong>
            <span>Pay with Visa, Master Card and other debit or credit card</span>
          </div>
          <img src="/image/bank-5.jpeg" alt="Visa Icon" className="pay-icon" />
        </label>

        {paymentMethod === 'card' && (
          <div className="card-details">
            <div className="accepted">
              <p>Accepted Cards</p>
              <div className="card-icons">
                <img src="/image/bank-3.jpeg" alt="Visa" />
                <img src="/image/bank-2.jpeg" alt="Mastercard" />
                <img src="/image/bank-1.jpeg" alt="Amex" />
                <img src="/image/bank-4.jpeg" alt="Discover" />
              </div>
            </div>
            <div className="card-form">
              <input type="text" name="cardName" placeholder="* Name on Card" value={cardDetails.cardName} onChange={handleCardChange} />
              <input type="text" name="cardNumber" placeholder="* Card Number" value={cardDetails.cardNumber} onChange={handleCardChange} />
              <input type="text" name="expiry" placeholder="* Expiry Date" value={cardDetails.expiry} onChange={handleCardChange} />
              <input type="text" name="ccv" placeholder="* CCV" value={cardDetails.ccv} onChange={handleCardChange} />
            </div>
          </div>
        )}

        <label className={`payment-option ${paymentMethod === 'paypal' ? 'active' : ''}`}>
          <input
            type="radio"
            name="paymentMethod"
            value="paypal"
            checked={paymentMethod === 'paypal'}
            onChange={() => setPaymentMethod('paypal')}
          />
          <div className="label-text">
            <strong>PayPal</strong>
            <span>Pay easily, fast and secure with PayPal.</span>
          </div>
          <img src="/image/paypal-logo.webp" alt="PayPal Icon" className="pay-icon" />
        </label>
      </div>

      <div className="checkout-footer">
        <button type="button" className="btn-outline" onClick={() => navigate('/checkout/step-2')}>
          ← Go Back
        </button>
        <div className="total-area">
          <p><strong>Total: ${total.toFixed(2)}</strong></p>
          <button className="btn-black" onClick={handleConfirm}>✔ Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutStep3;
