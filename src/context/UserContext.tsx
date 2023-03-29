import { PropsWithChildren, createContext, useState } from "react";

import { LOGIN_PATH } from "../routes/const";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

const UserContext = createContext<{
  user: string | null;
  setUser: (value: string | null) => void;
  handleLogIn: (token: string) => void;
  isLoggedIn: boolean;
  handleLogOut: () => void;
  userToken: string;
}>({
  user: null,
  setUser: () => {},
  isLoggedIn: false,
  handleLogIn: () => {},
  handleLogOut: () => {},
  userToken: "",
});

const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useLocalStorage<string | null>("userToken", null);
  const [userToken, setUserToken] = useState("");
  const navigate = useNavigate();
  const isLoggedIn = !!user;

  if (!userToken) {
    const storage = JSON.parse(localStorage.getItem("userToken") || "{}");
    if (storage !== null) {
      setUserToken(JSON.parse(localStorage.getItem("userToken") || "{}"));
    }
  }

  const handleLogOut = () => {
    setUser(null);
    setUserToken("");
    navigate(LOGIN_PATH);
  };

  const handleLogIn = (token: string) => {
    setUserToken(token);
    setUser(token);
  };

  return (
    <UserContext.Provider
      value={{ user, isLoggedIn, setUser, handleLogOut, handleLogIn, userToken }}>
      {children}
    </UserContext.Provider>
  );
};
export { UserContext, UserProvider };
