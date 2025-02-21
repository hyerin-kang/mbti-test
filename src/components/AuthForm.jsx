const AuthForm = ({ mode }) => {
  return (
    <div>
      <form className="flex flex-col space-y-6 bg-gray-50 p-6 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="아이디"
          className="p-4 border border-gray-300 rounded-lg"
        />
        <input
          type="password"
          placeholder="비밀번호"
          className="p-4 border border-gray-300 rounded-lg"
        />
        {mode === "signin" && (
          <input
            type="text"
            placeholder="닉네임"
            className="p-4 border border-gray-300 rounded-lg"
          />
        )}

        <button className="bg-primary p-4 rounded-md text-white">
          {mode === "signin" ? "회원가입" : "로그인"}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
