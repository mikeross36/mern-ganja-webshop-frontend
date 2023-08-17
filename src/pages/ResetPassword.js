import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { resetPasswordAction } from "../actions/authActions";
import Button from "../components/Button";

const resetId = "resetId";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const token = useParams();

  const dispatch = useDispatch();

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      toast.error("Passwords do not match!", { toastId: resetId });
      return;
    }
    dispatch(resetPasswordAction(password, token));
    console.log(password);
    setPassword("");
    setPasswordConfirm("");
  };

  return (
    <section className="reset__password section container">
      <div className="reset__form-bcg">
        <form className="reset__form" onSubmit={handleResetPassword}>
          <div className="reset__title">
            <img
              src="/images/cannabis-logo-2.svg"
              width="32"
              alt="cannabis logo"
            />
            <h3>reset password</h3>
          </div>
          <div className="form__control">
            <input
              type="password"
              className="form__input"
              name="password"
              placeholder="your new password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form__control">
            <input
              type="password"
              className="form__input"
              name="passwordConfirm"
              placeholder="confirm password..."
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="button button--small" text="reset" />
        </form>
      </div>
    </section>
  );
};

export default ResetPassword;
