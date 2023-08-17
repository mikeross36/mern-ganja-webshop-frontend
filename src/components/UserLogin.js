import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "./Button";
import { loginUserAction } from "../actions/authActions";

const UserLogin = ({ setShowModal1, setShowModal2, setShowModal3 }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginUser = (e) => {
    e.preventDefault();
    dispatch(loginUserAction(email, password));
    setShowModal1(false);
    navigate("/");
  };

  return (
    <div className="login__form-bcg">
      <div className="login__title">
        <img src="/images/cannabis-logo-2.svg" width="32" alt="cannabis logo" />
        <h3>login</h3>
      </div>
      <form className="login__form" onSubmit={handleLoginUser}>
        <div className="form__control">
          <input
            type="email"
            className="form__input"
            name="email"
            placeholder="your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form__control">
          <input
            type="password"
            className="form__input"
            name="password"
            placeholder="your password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Link
          className="form__forgot-link"
          onClick={() => {
            setShowModal1(false);
            setShowModal3(true);
          }}
        >
          <span style={{ textDecoration: "underline" }}>forgot password</span>
        </Link>
        <Button type="submit" className="button button--mid" text="login" />
        <div className="already">
          <span>Do not have an account?</span>
          <Link
            onClick={() => {
              setShowModal1(false);
              setShowModal2(true);
            }}
          >
            <span>register</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default UserLogin;
