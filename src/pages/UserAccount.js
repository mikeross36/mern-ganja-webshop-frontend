import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserAccountAction } from "../actions/userActions";
import { logoutUserAction, updatePasswordAction } from "../actions/authActions";
import { toast } from "react-toastify";
import Button from "../components/Button";

const apiUrl = process.env.REACT_APP_API_URL;
const userAccId = "userAccId";

const UserAccount = ({ setShowModal1 }) => {
  const authState = useSelector((state) => state.loginUser);
  const { currentUser } = authState;

  const [name, setName] = useState(
    currentUser?.user ? currentUser.user.name : ""
  );
  const [email, setEmail] = useState(
    currentUser?.user ? currentUser.user.email : ""
  );
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(
    `${apiUrl}/images/users/default.jpg`
  );
  const [loginPassword, setLoginPassword] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const checkPhoto = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
    console.log(file);
    if (e.target.files.length !== 0) {
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  const dispatch = useDispatch();

  const handleUpdateAccount = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", photo);
    dispatch(updateUserAccountAction(name, email, formData));

    const timer = setTimeout(() => {
      dispatch(logoutUserAction());
    }, 3500);
    return () => {
      clearTimeout(timer);
    };
  };

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      toast.error("Passwords do not match!", { toastId: userAccId });
      return;
    }
    dispatch(updatePasswordAction(loginPassword, password));
    const timer = setTimeout(() => {
      dispatch(logoutUserAction());
    }, 3500);
    return () => {
      clearTimeout(timer);
    };
  };

  return (
    <section className="user__account section container">
      <h2 className="section__title">your account</h2>
      <div className="user__account-content">
        <div className="user__account-form-container">
          <form className="form__user-data" onSubmit={handleUpdateAccount}>
            <h3 className="form__title">data update</h3>
            <div className="form__control">
              <input
                type="text"
                className="form__input"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form__control">
              <input
                type="email"
                className="form__input"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form__control form__photo-upload">
              <img
                src={
                  currentUser?.user
                    ? `${apiUrl}/images/users/${currentUser?.user.photo}`
                    : photoPreview
                }
                className="form__user-photo"
                alt="upload user pic"
              />
              <input
                className="form__upload"
                id="photo"
                type="file"
                accept={`${apiUrl}/images/*`}
                onChange={checkPhoto}
              />
              <label htmlFor="photo">upload image</label>
            </div>
            <span>
              <Button
                type="submit"
                className="button button--xSmall"
                text="update"
              />
            </span>
          </form>
        </div>
        <div className="user__account-form-container">
          <form className="form__user-password" onSubmit={handleUpdatePassword}>
            <h3 className="form__title">password update</h3>
            <div className="form__control">
              <input
                type="password"
                name="login-password"
                className="form__input"
                placeholder="your current password..."
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
              />
            </div>
            <div className="form__control">
              <input
                type="password"
                name="password"
                className="form__input"
                placeholder="your new password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form__control">
              <input
                type="password"
                name="password-confirm"
                className="form__input"
                placeholder="confirm password..."
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
            </div>
            <Button className="button button--xSmall" text="update" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default UserAccount;
