import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { registerUserAction } from "../actions/authActions";
import Button from "./Button";

const registerId = "registerId";

const UserRegister = ({ setShowModal2, setShowModal1 }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegisterUser = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      toast.error("Passwords do not match!", { toastId: registerId });
      return;
    }
    dispatch(registerUserAction(name, email, password));
    setShowModal2(false);
    navigate("/");
  };

  return (
    <div className="register__form-bcg">
      <div className="register__title">
        <img src="/images/cannabis-logo-2.svg" width="32" alt="cannabis logo" />
        <h3>register</h3>
      </div>
      <form className="register__form" onSubmit={handleRegisterUser}>
        <div className="form__control">
          <input
            type="text"
            className="form__input"
            name="name"
            placeholder="your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
            placeholder="password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form__control">
          <input
            type="password"
            className="form__input"
            name="password-confirm"
            placeholder="confirm password..."
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className="button button--mid" text="register" />
        <div className="already">
          <span>Already have an account?</span>
          <Link
            onClick={() => {
              setShowModal2(false);
              setShowModal1(true);
            }}
          >
            <span>login</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default UserRegister;
