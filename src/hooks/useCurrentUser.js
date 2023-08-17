import { useSelector } from "react-redux";

export const useCurrentUser = () => {
  const userState = useSelector((state) => state.loginUser);
  const { currentUser } = userState;
  return currentUser;
};
