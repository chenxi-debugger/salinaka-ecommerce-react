import { useEffect } from 'react';
import PropTypes from 'prop-types';

const BasketToggle = ({ children }) => {
    const onClickToggle = () => {
        if (document.body.classList.contains('is-basket-open')) {
            document.body.classList.remove('is-basket-open');
        } else {
            document.body.classList.add('is-basket-open');
        }
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            const closest = e.target.closest('.basket');
            const toggle = e.target.closest('.basket-toggle');
            const closeToggle = e.target.closest('.basket-item-remove');
            const cartIcon = e.target.closest('.cart-icon');

            if (!closest && !cartIcon && document.body.classList.contains('is-basket-open') && !toggle && !closeToggle) {
                document.body.classList.remove('is-basket-open');
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return children({ onClickToggle });
};

BasketToggle.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.func,
        PropTypes.node
    ]).isRequired
};

export default BasketToggle;