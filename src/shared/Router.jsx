import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Test from "../pages/Test";
import Results from "../pages/Results";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/test" element={<Test />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
