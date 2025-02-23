import { useState } from "react";

const AuthForm = ({ mode, onSubmit }) => {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    nickname: "",
  });

  //입력폼 인풋
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(function (prevData) {
      return { ...prevData, [name]: value };
    });
  };

  //제출하기
  const handleSubmit = (e) => {
    e.preventDefault();
    // const { id, password, nickname } = formData;

    onSubmit(formData);

    // if (mode === "login") {
    //   login({
    //     id,
    //     password,
    //   });
    // } else if (mode === "signup") {
    //   register(formData);
    // }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-6 bg-gray-50 p-6 rounded-lg shadow-md"
      >
        <input
          type="text"
          placeholder="아이디"
          name="id"
          value={formData.id}
          onChange={handleChange}
          className="p-4 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="password"
          placeholder="비밀번호"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="p-4 border border-gray-300 rounded-lg"
          required
        />
        {mode === "signup" && (
          <input
            type="text"
            placeholder="닉네임"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
            className="p-4 border border-gray-300 rounded-lg"
            required
          />
        )}

        <button type="submit" className="bg-primary p-4 rounded-md text-white">
          {mode === "signup" ? "회원가입" : "로그인"}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
