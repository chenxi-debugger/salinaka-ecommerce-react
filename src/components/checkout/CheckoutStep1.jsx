import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './checkoutStep1.css';

const CheckoutStep1 = () => {
  const navigate = useNavigate();

  const basket = JSON.parse(localStorage.getItem('basket')) || [];

  const updateQuantity = (index, change) => {
    const updated = [...basket];
    updated[index].quantity = Math.max(1, updated[index].quantity + change);
    localStorage.setItem('basket', JSON.stringify(updated));
    window.location.reload();
  };

  const removeItem = (index) => {
    const updated = [...basket];
    updated.splice(index, 1);
    localStorage.setItem('basket', JSON.stringify(updated));
    window.location.reload();
  };

  const subtotal = basket.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="checkout-wrapper">
      <div className="checkout-steps">
        <div className="step-line"></div>
        <div className="step-item">
          <div className="step-circle active">1</div>
          <p className="step-label">Order Summary</p>
        </div>
        <div className="step-line"></div>
        <div className="step-item">
          <div className="step-circle">2</div>
          <p className="step-label">Shipping Details</p>
        </div>
        <div className="step-line"></div>
        <div className="step-item">
          <div className="step-circle">3</div>
          <p className="step-label">Payment</p>
        </div>
        <div className="step-line"></div>
      </div>

      <h2 className="checkout-title">Order Summary</h2>
      <p className="checkout-subtitle">Review items in your basket.</p>

      <div className="basket-summary">
        {basket.map((item, index) => (
          <div key={index} className="basket-item">
            <div className="quantity-control">
              <button onClick={() => updateQuantity(index, 1)} className='quantity-control-btn'>+</button>
              <button onClick={() => updateQuantity(index, -1)} className='quantity-control-btn'>-</button>
            </div>
            <img src={item.image} alt={item.name} className="basket-img" />
            <div className="basket-info">
              <Link className="basket-item-name" to={`/product/${item.id}`}>
                {item.name}
              </Link>
              <p className="item-detail">Quantity: {item.quantity}</p>
              <p className="item-detail">Size: {item.selectedSize} mm</p>
              <p className="item-detail">
                Color: <span className="color-dot" style={{ backgroundColor: item.selectedColor }}></span>
              </p>
            </div>
            <p className="item-price">${(item.price * item.quantity).toFixed(2)}</p>
            <button className="remove-btn" onClick={() => removeItem(index)}>×</button>
          </div>
        ))}
      </div>

      <div className="checkout-footer">
        <button className="btn-outline" onClick={() => navigate('/shop')}>← Continue Shopping</button>
        <div>
          <p className="subtotal">Subtotal: <strong>${subtotal.toFixed(2)}</strong></p>
          <button className="btn-black" onClick={() => navigate('/checkout/step-2')}>Next Step →</button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutStep1;
