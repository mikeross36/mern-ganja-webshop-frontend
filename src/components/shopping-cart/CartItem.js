import { FaChevronUp, FaChevronDown, FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  removeItemFromCartAction,
  increaseQuantAction,
  decreaseQuantAction,
} from "../../actions/shoppingCartActions";

const apiUrl = process.env.REACT_APP_API_URL;

const CartItem = ({ item }) => {
  const { id, image, name, packing, quantity, prices } = item;

  const dispatch = useDispatch();

  return (
    <article className="cart__item" key={id}>
      <img src={`${apiUrl}/images/ganjas/${image}`} alt="cart item pic" />
      <div className="name__packing-wrapper">
        <span className="cart__item-name">{name}</span>
        <span className="cart__item-packing">[{packing}]</span>
      </div>
      <span className="cart__item-price">price: {prices[0][packing]}€</span>
      <span className="cart__item-subtotal">
        subtotal: <strong>{(prices[0][packing] * quantity).toFixed(2)}€</strong>
      </span>
      <button
        className="remove__item"
        onClick={() => dispatch(removeItemFromCartAction(item))}
      >
        <FaTrashAlt size={20} />
      </button>
      <div className="cart__item-column">
        <button
          className="quant__btn"
          onClick={() => dispatch(increaseQuantAction(item))}
        >
          <FaChevronUp className="increase" />
        </button>
        <span className="quantity">{quantity}</span>
        <button
          className="quant__btn"
          onClick={() => dispatch(decreaseQuantAction(item))}
        >
          <FaChevronDown className="decrease" />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
