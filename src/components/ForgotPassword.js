import { useState } from "react";
import { api } from "../utils/axiosConfig";
import { toast } from "react-toastify";
import Button from "./Button";

const forgotId = "forgotId";

const ForgotPassword = ({ setShowModal3 }) => {
  const [email, setEmail] = useState("");

  const handleSendEmail = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await api.post(
        "/api/v1/users/forgot-password",
        { email },
        config
      );
      if (data.status === "success") {
        toast.success(data.message, { toastId: forgotId });
      }
      setEmail("/");
      setShowModal3(false);
    } catch (err) {
      toast.error(err.response?.data.message, { toastId: forgotId });
    }
  };

  return (
    <div className="forgot__form-container">
      <form className="forgot__form" onSubmit={handleSendEmail}>
        <div className="forgot__title">
          <img
            src="/images/cannabis-logo-2.svg"
            width="32"
            alt="cannabis logo"
          />
          <h3>enter your email</h3>
        </div>
        <div className="input__control">
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
        <Button className="button button--mid" text="send" />
      </form>
    </div>
  );
};

export default ForgotPassword;
