import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer__container">
        <span>&copy; Copyright 2022 DodaDesign</span>
        <nav className="footer__nav">
          <ul className="footer__nav-socials">
            <li className="footer__nav-item">
              <Link to="https://twitter.com/">
                <FaTwitter size={24} color="#525151" />
              </Link>
            </li>
            <li className="footer__nav-item">
              <Link to="https://www.instagram.com/">
                <FaInstagram size={24} color="#525151" />
              </Link>
            </li>
            <li className="footer__nav-item">
              <Link to="https://www.facebook.com/">
                <FaFacebook size={24} color="#525151" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
