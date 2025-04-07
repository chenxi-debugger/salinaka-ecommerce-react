// src/components/basket/BasketItemControl.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { addQtyItem, minusQtyItem, removeFromBasket } from '../../redux/actions/basketActions';

const BasketItemControl = ({ product, dispatch }) => {
    const addQuantity = () => {
        if (product.quantity < product.maxQuantity) {
            dispatch(addQtyItem(product.id, product.selectedSize, product.selectedColor));
        }
    };

    const minusQuantity = () => {
        if (product.quantity > 1) {
            dispatch(minusQtyItem(product.id, product.selectedSize, product.selectedColor));
        }
    };

    const removeItem = () => {
        dispatch(removeFromBasket(product.id, product.selectedSize, product.selectedColor));
    };

    return (
        <div className="basket-item-control">
            <button className="button button-border button-border-gray" onClick={minusQuantity}>
                -
            </button>
            <span className="basket-item-quantity">{product.quantity}</span>
            <button className="button button-border button-border-gray" onClick={addQuantity}>
                +
            </button>
            <button className="basket-item-remove" onClick={removeItem}>
                x
            </button>
        </div>
    );
};

BasketItemControl.propTypes = {
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

export default BasketItemControl;