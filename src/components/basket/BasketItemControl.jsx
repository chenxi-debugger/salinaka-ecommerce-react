import React from 'react';
import PropTypes from 'prop-types';
import { addQtyItem, minusQtyItem, removeFromBasket } from '../../redux/actions/basketActions';

const BasketItemControl = ({ product, dispatch }) => {
  const addQuantity = () => {
    if (product.quantity < product.maxQuantity) {
      dispatch(addQtyItem(product.id));
    }
  };

  const minusQuantity = () => {
    if (product.quantity > 1) {
      dispatch(minusQtyItem(product.id));
    }
  };

  const removeItem = () => dispatch(removeFromBasket(product.id));

  return (
    <div className="basket-item-control">
      <button className="button button-border button-border-gray" onClick={minusQuantity}>-</button>
      <span className="basket-item-quantity">{product.quantity}</span>
      <button className="button button-border button-border-gray" onClick={addQuantity}>+</button>
      <button className="basket-item-remove" onClick={removeItem}>x</button>
    </div>
  );
};

BasketItemControl.propTypes = {
  product: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default BasketItemControl;
