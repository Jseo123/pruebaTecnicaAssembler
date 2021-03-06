import { Password } from "@mui/icons-material";
import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  return context;
};

export const AuthProvider = ({ children }) => {
  const user = {
    login: false,
  };

  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  return (
    <authContext.Provider value={{ signUp }}>{children}</authContext.Provider>
  );
};
