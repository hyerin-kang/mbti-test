import { createContext, useEffect, useState } from "react";
import { apiLogin } from "../api/auth";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);

  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("userInfo")) || null
  );
  // console.log("userInfo 스토리지 : ", userInfo);

  useEffect(() => {
    if (userInfo) {
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      localStorage.getItem("userInfo");
    }
  }, [userInfo]);

  //유저정보 요청
  //로그인후 불러온 정보를 로컬수토리지에

  const login = async (userData) => {
    // console.log("Auth userData : ", userData);
    const data = await apiLogin(userData);
    // console.log(data);

    //토큰 있을때만 (로그인되었을때)
    if (data.accessToken) {
      setIsAuthenticated(true);
      localStorage.setItem("accessToken", data.accessToken);
      setUserInfo(data);
      // const userInfo = await getUserProfile(data.accessToken);
      // setUser(userInfo);
      // console.log("userInfo : ", userInfo);
    }
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userInfo");
    setIsAuthenticated(false);
    alert("로그아웃되었습니다");
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, userInfo, setUserInfo, token }}
    >
      {children}
    </AuthContext.Provider>
  );
};
