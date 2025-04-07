import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { displayMoney, calculateTotal } from '../../helpers/utils';
import { clearBasket } from '../../redux/actions/basketActions';
import { useModal } from '../../hooks';
import BasketToggle from './BasketToggle';
import BasketItem from './BasketItem';
import Boundary from '../common/Boundary';
import Modal from '../common/Modal';
import * as ROUTES from '../../constants/routes';
import './basket.css';

const Basket = () => {
    const { isOpenModal, onOpenModal, onCloseModal } = useModal();
    const { basket, user } = useSelector((state) => ({
        basket: state.basket,
        user: state.auth
    }));

    const navigate = useNavigate();
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    // const didMount = useDidMount();

    useEffect(() => {
        console.log('Basket state:', basket);
        console.log('User:', user);
    }, [basket, user]);

    const onCheckOut = () => {
        if (basket.length !== 0 && user) {
            document.body.classList.remove('is-basket-open');
            navigate(ROUTES.CHECKOUT_STEP_1);
        } else {
            onOpenModal();
        }
    };

    const onSignInClick = () => {
        onCloseModal();
        document.body.classList.remove('is-basket-open');
        navigate(ROUTES.SIGN_IN);
    };

    const onClearBasket = () => {
        if (basket.length !== 0) {
            dispatch(clearBasket());
        }
    };

    if (user && user.role === 'ADMIN') return null;

    return (
        <Boundary>
            <Modal isOpen={isOpenModal} onRequestClose={onCloseModal}>
                <p className="modal-text">You must sign in to continue checking out</p>
                <div className="modal-actions">
                    <button className="btn-outline" onClick={onCloseModal}>
                    Continue shopping
                    </button>
                    <button className="btn-solid" onClick={onSignInClick}>
                    Sign in to checkout
                    </button>
                </div>
            </Modal>

            <div className="basket-overlay" />
            <div className="basket">
                <div className="basket-list">
                    <div className="basket-header">
                        <h3 className="basket-header-title">
                            My Basket <span>({basket.length} {basket.length > 1 ? 'items' : 'item'})</span>
                        </h3>
                        <BasketToggle>
                            {({ onClickToggle }) => (
                                <span className="basket-toggle button button-border button-border-gray button-small" onClick={onClickToggle}>
                                    Close
                                </span>
                            )}
                        </BasketToggle>
                        <button
                            className="basket-clear button button-border button-border-gray button-small"
                            disabled={basket.length === 0}
                            onClick={onClearBasket}
                        >
                            <span>Clear Basket</span>
                        </button>
                    </div>
                    {basket.length <= 0 && (
                        <div className="basket-empty">
                            <h5 className="basket-empty-msg">Your basket is empty</h5>
                        </div>
                    )}
                    {basket.map((product, index) => (
                        <BasketItem key={`${product.id}_${index}`} product={product} basket={basket} dispatch={dispatch} />
                    ))}
                </div>
                <div className="basket-checkout">
                    <div className="basket-total">
                        <p className="basket-total-title">Subtotal Amount:</p>
                        <h2 className="basket-total-amount">
                            {displayMoney(calculateTotal(basket.map(product => product.price * product.quantity)))}
                        </h2>
                    </div>
                    <button
                        className="basket-checkout-button button"
                        disabled={basket.length === 0 || pathname === '/checkout'}
                        onClick={onCheckOut}
                    >
                        Check Out
                    </button>
                </div>
            </div>
        </Boundary>
    );
};

export default Basket;