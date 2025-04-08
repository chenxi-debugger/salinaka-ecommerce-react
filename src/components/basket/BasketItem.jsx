// src/components/basket/BasketItem.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BasketItemControl from './BasketItemControl';

const BasketItem = ({ product, dispatch }) => (
    <div className="basket-item">
        <div className="basket-item-wrapper">
            <div className="basket-item-img-wrapper">
                <img className="basket-item-img" src={`${process.env.PUBLIC_URL}${product.image}`} alt={product.name} />
            </div>
            <div className="basket-item-details">
                <Link
                    className="basket-item-name"
                    to={`/product/${product.id}`}
                    onClick={() => document.body.classList.remove('is-basket-open')}
                >
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
                <span className="basket-item-price">
                    ${(product.price * product.quantity).toFixed(2)} {/* Display total price */}
                </span>
                <BasketItemControl product={product} dispatch={dispatch} />
            </div>
        </div>
    </div>
);

BasketItem.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        brand: PropTypes.string,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        maxQuantity: PropTypes.number.isRequired,
        description: PropTypes.string,
        keywords: PropTypes.arrayOf(PropTypes.string),
        selectedSize: PropTypes.string,
        selectedColor: PropTypes.string,
        imageCollection: PropTypes.arrayOf(PropTypes.string),
        sizes: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
        image: PropTypes.string.isRequired,
        imageUrl: PropTypes.string,
        isFeatured: PropTypes.bool,
        isRecommended: PropTypes.bool,
        availableColors: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
    dispatch: PropTypes.func.isRequired,
};

export default BasketItem;