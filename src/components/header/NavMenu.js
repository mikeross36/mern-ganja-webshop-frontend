import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTimesCircle } from "react-icons/fa";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useSelector, useDispatch } from "react-redux";
import { getTotalsAction } from "../../actions/shoppingCartActions";
import { getAllCategoriesAction } from "../../actions/categoryActions";
import DropdownMenu from "./DropdownMenu";

const NavMenu = ({
  showMobMenu,
  setShowMobMenu,
  setShowModal1,
  setIsCartOpen,
}) => {
  const currentUser = useCurrentUser();

  const shoppingCartState = useSelector((state) => state.shoppingCart);
  const { itemsTotal, cartItems } = shoppingCartState;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotalsAction());
  }, [cartItems, dispatch]);

  return (
    <div
      className={`nav__menu ${showMobMenu && "show-menu"}`}
      onClick={() => setShowMobMenu(false)}
    >
      <ul className="nav__list">
        <div className="nav__close">
          <FaTimesCircle size={30} color="#fff" />
        </div>
        <li className="nav__item">
          <Link to="/" className="nav__link">
            home
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/products" className="nav__link">
            products
          </Link>
        </li>
        <li
          className="nav__item"
          onClick={() => dispatch(getAllCategoriesAction())}
        >
          <Link to="/categories" className="nav__link">
            categories
          </Link>
        </li>
        <li className="nav__item" onClick={() => setIsCartOpen(true)}>
          <Link to="#" className="nav__link">
            cart
          </Link>
          {cartItems.length > 0 && (
            <span className="cart__items-total">{itemsTotal}</span>
          )}
        </li>
        {!currentUser ? (
          <li className="nav__item" onClick={() => setShowModal1(true)}>
            <Link to="#" className="nav__link">
              login
            </Link>
          </li>
        ) : (
          <li className="nav__item" onClick={(e) => e.stopPropagation()}>
            <DropdownMenu setShowMobMenu={setShowMobMenu} />
          </li>
        )}
      </ul>
    </div>
  );
};

export default NavMenu;
