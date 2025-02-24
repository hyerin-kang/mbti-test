import { createContext, useState } from "react";
import { apiLogin, getUserProfile } from "../api/auth";

export const AuthContext = createContext();

const token = sessionStorage.getItem("accessToken");

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);
  const [user, setUser] = useState(null);

  const login = async (userData) => {
    console.log("Auth userData : ", userData);
    const data = await apiLogin(userData);
    console.log(data);

    //토큰 있을때만 (로그인되었을때)
    if (data.accessToken) {
      setIsAuthenticated(true);
      const userInfo = await getUserProfile(token);
      setUser(userInfo);
      console.log("userInfo : ", userInfo);
    }

    //서버통신 해주기
  };

  const logout = () => {
    sessionStorage.removeItem("accessToken");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};
