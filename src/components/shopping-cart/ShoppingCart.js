import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  getTotalsAction,
  clearCartAction,
} from "../../actions/shoppingCartActions";
import CartItem from "./CartItem";
import Button from "../Button";
import Checkout from "./Checkout";

const ShoppingCart = ({ isCartOpen, setIsCartOpen, setShowModal1 }) => {
  const shoppingCartState = useSelector((state) => state.shoppingCart);
  const { cartItems, cartTotal } = shoppingCartState;

  const userState = useSelector((state) => state.loginUser);
  const { currentUser } = userState;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotalsAction());
  }, [cartItems, dispatch]);

  return (
    <section className="shopping__cart">
      <div className={`sidebar__overlay ${isCartOpen ? "expand" : "shrink"}`}>
        <button className="close__cart" onClick={() => setIsCartOpen(false)}>
          <FaTimes size={35} />
        </button>
        {cartItems.length === 0 ? (
          <aside className="sidebar-empty">
            <h1 className="sidebar__title">cart is empty</h1>
          </aside>
        ) : (
          <aside className="sidebar">
            <h3 className="sidebar__title">your cart</h3>
            {cartItems?.map((item) => {
              return <CartItem key={item.id} item={item} />;
            })}
            <footer className="shopping__cart-footer">
              {cartItems.length !== 0 && (
                <>
                  <div className="shopping__cart-total">
                    {!currentUser?.user ? (
                      <Link
                        onClick={() => {
                          setShowModal1(true);
                          setIsCartOpen(false);
                        }}
                      >
                        <Button
                          className="button button--xSmall button--purchase"
                          text="login to purchase"
                        />
                      </Link>
                    ) : (
                      <Checkout cartTotal={cartTotal} />
                    )}
                    <h4>Total: {cartTotal.toFixed(2)}€</h4>
                  </div>
                  <span onClick={() => dispatch(clearCartAction())}>
                    <Button
                      className="button button--xSmall button--clear"
                      text="clear cart"
                    />
                  </span>
                </>
              )}
            </footer>
          </aside>
        )}
      </div>
    </section>
  );
};

export default ShoppingCart;
