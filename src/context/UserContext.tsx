import { PropsWithChildren, createContext } from "react";

import { LOGIN_PATH } from "../routes/const";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

const UserContext = createContext<{
  user: string | null;
  setUser: (value: string | null) => void;
  handleLogIn: (token: string) => void;
  isLoggedIn: boolean;
  handleLogOut: () => void;
}>({
  user: null,
  setUser: () => {},
  isLoggedIn: false,
  handleLogIn: () => {},
  handleLogOut: () => {},
});

const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useLocalStorage<string | null>("userToken", null);
  const navigate = useNavigate();
  const isLoggedIn = !!user;

  const handleLogOut = () => {
    setUser(null);
    navigate(LOGIN_PATH);
  };

  const handleLogIn = (token: string) => {
    setUser(token);
  };

  return (
    <UserContext.Provider value={{ user, isLoggedIn, setUser, handleLogOut, handleLogIn }}>
      {children}
    </UserContext.Provider>
  );
};
export { UserContext, UserProvider };
