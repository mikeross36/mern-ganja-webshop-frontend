import { useState } from "react";
import { FaAlignRight } from "react-icons/fa";
import NavMenu from "./NavMenu";

const Header = ({ setShowModal1, setIsCartOpen }) => {
  const [showMobMenu, setShowMobMenu] = useState(false);

  const toggleMobMenu = () => {
    setShowMobMenu((prev) => !prev);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav__logo">
          <h4>GanjaWebshop</h4>
          <img src="/images/header-logo.svg" alt="nav logo" />
        </div>
        <NavMenu
          showMobMenu={showMobMenu}
          setShowMobMenu={setShowMobMenu}
          setShowModal1={setShowModal1}
          setIsCartOpen={setIsCartOpen}
        />
        <menu className="nav__btns">
          <button className="nav__toggle" onClick={toggleMobMenu}>
            <FaAlignRight className="nav__togle-btn" size={30} color="#fff" />
          </button>
        </menu>
      </nav>
    </header>
  );
};

export default Header;
