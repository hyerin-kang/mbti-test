import { Link } from "react-router-dom";
import AuthForm from "../components/AuthForm";

const Signin = () => {
  return (
    <main className="container mx-auto">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full flex flex-col gap-4">
        <h1 className="text-3xl font-bold">회원가입</h1>
        <AuthForm mode="signin"></AuthForm>
        <p>
          이미 계정이 있으신가요?
          <Link to={"/login"} className="text-primary">
            로그인
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Signin;
