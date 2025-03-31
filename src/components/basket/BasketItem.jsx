import React from 'react';
import PropTypes from 'prop-types';
import BasketItemControl from './BasketItemControl';
import { Link } from 'react-router-dom';

const BasketItem = ({ product, dispatch }) => (
  <div className="basket-item">
    <div className="basket-item-wrapper">
      <div className="basket-item-img-wrapper">
        <img className="basket-item-img" src={product.image} alt={product.name} />
      </div>
      <div className="basket-item-details">
        <Link className="basket-item-name" to={`/product/${product.id}`}>
          {product.name}
        </Link>
        <span className="basket-item-spec">
          {product.selectedSize && `Size: ${product.selectedSize}`}
        </span>
        <span className="basket-item-spec">
          {product.selectedColor && `Color: `}
          <span
            className="basket-item-color"
            style={{ backgroundColor: product.selectedColor }}
          />
        </span>
        <BasketItemControl product={product} dispatch={dispatch} />
      </div>
    </div>
  </div>
);

BasketItem.propTypes = {
  product: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default BasketItem;
