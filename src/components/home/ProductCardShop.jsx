import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'; // Import useDispatch
import { addToBasket } from '../../redux/actions/basketActions';

const ProductCardShop = ({ product, showPrice = false }) => {
    const dispatch = useDispatch(); // Define dispatch using useDispatch

    if (!product || !product.id) return null;

    const onAddToBasket = () => {
        const item = {
            id: product.id,
            name: product.name,
            brand: product.brand,
            price: product.price,
            image: product.image,
            quantity: 1,
            maxQuantity: 10,
            selectedSize: '28 mm',
            selectedColor: '#000000'
        };
        dispatch(addToBasket(item));
        console.log('Added to basket:', item); // Debug log
    };

    return (
        <div className='shop-card'>
            <Link to={`/product/${product.id}`}>
                <div className="shop-content">
                    <div className="shop-image-container">
                        <img src={`${process.env.PUBLIC_URL}${product.image}`} alt={product.name} className="shop-image" />
                    </div>
                    <div className="shop-info">
                        <h3 className="shop-name">{product.name}</h3>
                        <p className="shop-brand">{product.brand}</p>
                        {showPrice && <p className="shop-price">${product.price}</p>}
                    </div>
                </div>
                <button
                    className='shop-add-button'
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        onAddToBasket();
                    }}
                >
                    Add to basket
                </button>
            </Link>
        </div>
    );
};

export default ProductCardShop;