import { toast } from "react-toastify";
import "./CartItem.css";

const CartItem = ({ item, dispatch }) => {

    const { id, courseImage, courseTitle, courseDesc, Author, newPrice } = item;

    const numericPrice = parseFloat(newPrice.replace("$", ""));

    return (
        <tr key={id}>
            <td>
                <div className="product-item__information">
                    <div className="product-item__picture">
                        <img src={courseImage} alt="product-image" className='product-pic' />
                    </div>
                    <div className="product-item__content">
                        <h4 className="product-title">{courseTitle}</h4>
                        <p className="product-desc">{courseDesc}.</p>
                        <span className="product-author">By {Author}</span>
                        <div className="product-remove__block">
                            <button
                                type="button"
                                className="remove-btn"
                                onClick={() => {
                                    dispatch({
                                        type: "REMOVE_FROM_CART",
                                        payload: { id }
                                    })
                                    toast.error("Order Removed Successfully");
                                }}
                            >remove</button>
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <div className="product-item__price">
                    <span className="product-price">{newPrice}</span>
                </div>
            </td>
            <td>
                <div className="product-item__quantity">
                    <button
                        type='button'
                        className='quantity-btn increase-btn'
                        onClick={() => {
                            dispatch({
                                type: "INCREASE_CART_QUANTITY",
                                payload: { id }
                            })
                        }}
                    >+</button>
                    <span>{item.quantity}</span>
                    <button
                        type='button'
                        className='quantity-btn decrease-btn'
                        onClick={() => {
                            dispatch({
                                type: "DECREASE_CART_QUANTITY",
                                payload: { id }
                            })
                        }}
                    >-</button>
                </div>
            </td>
            <td>
                <div className="product-price__total">
                    <span>${(numericPrice * item.quantity).toFixed(2)}</span>
                </div>
            </td>
        </tr>
    )
}

export default CartItem