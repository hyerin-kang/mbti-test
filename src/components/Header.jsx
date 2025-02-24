import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  // console.log("헤더에서 확인", isAuthenticated);
  //isAuthenticated true : 로그아웃
  //false : 로그인
  return (
    <header className="bg-primary p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center text-white">
        <Link to={"/"}>HOME</Link>
        {isAuthenticated ? (
          <>
            <Link to={"/profile"}>PROFILE</Link>
            <Link to={"/testpage"}>TEST</Link>
            <button onClick={logout}>LOGOUT</button>
          </>
        ) : (
          <Link to={"/login"}>LOGIN</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
