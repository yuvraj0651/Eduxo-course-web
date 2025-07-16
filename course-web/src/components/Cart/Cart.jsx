import { Col, Container, Row } from 'react-bootstrap';
import "./Cart.css";
import CartItem from './CartItem/CartItem';
import { useContext } from 'react';
import { CartContext } from '../context/cart/CartContext';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Cart = () => {

    const { cart, dispatch } = useContext(CartContext);

    const cartTotal = cart.reduce((acc, item) => {
        const numericPrice = parseFloat(item.newPrice.replace("$", ""));
        return acc + numericPrice * item.quantity;
    }, 0);

    const taxRate = 0.1;
    const tax = taxRate * cartTotal;
    const grandTotal = cartTotal + tax;

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    }

    const checkoutHandler = () => {
        toast.success("Your Order Has Been Placed Successfully");
        clearCart();
    }

    return (
        <>
            <section>
                <div className="cart-section section-padding">
                    <Container fluid>
                        <div className="cart-section__inner">
                            {
                                cart.length === 0 ? (
                                    <div className='empty-cart'>
                                        <p className="fallback-text">your cart is empty</p>
                                    </div>
                                ) : (
                                    <>
                                        <Row>
                                            <Col xl={8} lg={8} md={12} sm={12} xs={12}>
                                                <div className="cart-section__top">
                                                    <h4 className='cart-headingText'>your cart ({cart.length} {cart.length > 1 ? "items" : "item"})</h4>
                                                </div>
                                                <div className="cart-section__bottom">
                                                    <div className="table-responsive">
                                                        <table>
                                                            <thead>
                                                                <tr>
                                                                    <th>Item</th>
                                                                    <th>Price</th>
                                                                    <th>Quantity</th>
                                                                    <th>Total</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {
                                                                    cart.map((item) => (
                                                                        <CartItem key={item.id} item={item} dispatch={dispatch} />
                                                                    ))
                                                                }
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={4} lg={4} md={12} sm={12} xs={12}>
                                                <div className="checkout-summary">
                                                    <ul className="summary-list">
                                                        <li>
                                                            <span className="label">Subtotal:</span>
                                                            <span className="value">${cartTotal.toFixed(2)}</span>
                                                        </li>
                                                        <li>
                                                            <span className="label">Sales Tax:</span>
                                                            <span className="value">${tax.toFixed(2)}</span>
                                                        </li>
                                                        <li>
                                                            <span className="label">Coupon Code:</span>
                                                            <span className="value"><a href="#" className="coupon-link">Add Coupon</a></span>
                                                        </li>
                                                        <li className="grand-total">
                                                            <span className="label">Grand Total:</span>
                                                            <span className="value total-price">${grandTotal.toFixed(2)}</span>
                                                        </li>
                                                    </ul>

                                                    <div className="shipping-eligible">
                                                        <p>Congrats, you're eligible for <strong>Free Shipping</strong> <i className="fa fa-truck"></i></p>
                                                        <div className="shipping-line"></div>
                                                    </div>

                                                    <button
                                                        className="checkout-btn"
                                                        onClick={checkoutHandler}
                                                    >Check out</button>
                                                </div>

                                            </Col>
                                        </Row>
                                    </>
                                )
                            }
                            <div className="continue-shopping__block">
                                <Link to="/" className="continue-shopping__link">
                                    Continue Shopping
                                </Link>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default Cart