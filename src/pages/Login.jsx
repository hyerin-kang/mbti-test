import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
// import { login } from "../api/auth";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  // console.log(useContext(AuthContext));
  const { login } = useContext(AuthContext);

  const handleLogin = async (data) => {
    await login(data);
    navigate("/");
  };
  return (
    // <main className="container mx-auto">
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full flex flex-col gap-4 h-fit">
      <h1 className="text-3xl font-bold">로그인</h1>
      <AuthForm mode="login" onSubmit={handleLogin}></AuthForm>
      <p>
        계정이 없으신가요?{" "}
        <Link to={"/signup"} className="text-primary">
          회원가입
        </Link>
      </p>
    </div>
    // </main>
  );
};

export default Login;
