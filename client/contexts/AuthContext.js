import React, { useContext, createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { login, signup } from "../helpers/auth";

export const Auth = createContext();

export const useAuth = () => {
  return useContext(Auth);
};

const AuthContext = ({ children }) => {
  const [token, setToken] = useLocalStorage("token", null);
  const [userId, setUserId] = useLocalStorage("userId", null);

  const signIn = async ({ email, password }) => {
    try {
      const user = await login({ email, password });

      if (user.error) {
        return console.log(user.error);
      }

      setToken(user.data.token);
      setUserId(user.data.user._id);
    } catch (err) {
      console.log(err);
    }
  };

  const signUp = async ({ name, email, password, repeatPassword }) => {
    try {
      if (repeatPassword !== password) {
        return console.log("repeat password do not match!");
      }

      const user = await signup({ name, email, password });

      if (user.error) {
        return console.log(user.error);
      }

      console.log(user.data.token);

      setToken(user.data.token);
      return setUserId(user.data.user._id);
    } catch (err) {
      return console.log(err.message);
    }
  };

  const value = {
    userId,
    token,
    signIn,
    signUp,
  };

  return <Auth.Provider value={value}>{children}</Auth.Provider>;
};

export default AuthContext;
