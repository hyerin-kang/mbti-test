import { Link } from "react-router-dom";
import AuthForm from "../components/AuthForm";

const Login = () => {
  return (
    <main className="container mx-auto">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full flex flex-col gap-4">
        <h1 className="text-3xl font-bold">로그인</h1>
        <AuthForm mode="login"></AuthForm>
        <p>
          계정이 없으신가요?{" "}
          <Link to={"/signin"} className="text-primary">
            회원가입
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
