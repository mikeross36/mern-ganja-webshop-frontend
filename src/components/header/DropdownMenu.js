import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FaAngleDoubleUp } from "react-icons/fa";
import {
  FaUserGear,
  FaArrowRightToBracket,
  FaCartShopping,
} from "react-icons/fa6";
import { logoutUserAction } from "../../actions/authActions";
import { getUserOrdersAction } from "../../actions/orderActions";
import useEmptyClick from "../../hooks/useEmptyClick";

const apiUrl = process.env.REACT_APP_API_URL;

const DropdownMenu = ({ setShowMobMenu }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const authState = useSelector((state) => state.loginUser);
  const { currentUser } = authState;

  const toggleDropdown = () => {
    setShowDropdown((showDropdown) => !showDropdown);
  };

  const dispatch = useDispatch();

  const handleUserLogout = () => {
    dispatch(logoutUserAction());
  };

  const dropRef = useRef(null);

  useEmptyClick(dropRef, () => {
    setShowDropdown(false);
  });

  return (
    <main className="dropdown__menu" ref={dropRef}>
      <div
        className={`dropdown__menu-content ${
          showDropdown ? "show-dropdown" : ""
        }`}
      >
        <button className="dropdown__menu-button" onClick={toggleDropdown}>
          <img
            className="dropdown__menu-user-img"
            src={`${apiUrl}/images/users/${currentUser?.user.photo}`}
            alt="logged in user pic"
          />
          <span className="dropdown__menu-user">
            <p>{currentUser?.user?.name.split(" ").at(0)}</p>
          </span>
          <div className="dropdown__menu-icons">
            <FaAngleDoubleUp className="dropdown__arrow" />
          </div>
        </button>
        <ul
          className="dropdown__list"
          onClick={() => {
            setShowMobMenu(false);
            setShowDropdown(false);
          }}
        >
          <Link to="/user-account">
            <li className="dropdown__item">
              <FaUserGear className="dropdown__icon" />
              <span className="dropdown__title">my account</span>
            </li>
          </Link>
          <Link
            to="/user-orders"
            onClick={() => dispatch(getUserOrdersAction())}
          >
            <li className="dropdown__item">
              <FaCartShopping className="dropdown__icon" />
              <span className="dropdown__title">my orders</span>
            </li>
          </Link>
          <Link onClick={handleUserLogout}>
            <li className="dropdown__item">
              <FaArrowRightToBracket className="dropdown__icon" />
              <span className="dropdown__title">logout</span>
            </li>
          </Link>
        </ul>
      </div>
    </main>
  );
};

export default DropdownMenu;
