import axios from "axios";

const API_URL = "https://www.nbcamp-react-auth.link";

export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    alert("회원가입이 완료되었습니다.");
    return response.data;
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const apiLogin = async (userData) => {
  console.log("로그인함수실행", userData);
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    sessionStorage.setItem("accessToken", response.data.accessToken);
    alert("로그인 되었습니다.");
    return response.data;
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const getUserProfile = async (token) => {};

export const updateProfile = async (formData) => {};
