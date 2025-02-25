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
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    localStorage.setItem("accessToken", response.data.accessToken);
    localStorage.setItem("userInfo", JSON.stringify(response.data));
    alert("로그인 되었습니다.");
    // console.log(response.data);
    return response.data;
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const getUserProfile = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log("token : ", response.data);
    return response.data;
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const updateProfile = async (nickname, token) => {
  // const token = localStorage.getItem("accessToken");
  try {
    const response = await axios.patch(
      `${API_URL}/profile`,
      { nickname },
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(token);
    console.log(response.data);
    return response.data;
  } catch (error) {
    alert(error);
  }
};
