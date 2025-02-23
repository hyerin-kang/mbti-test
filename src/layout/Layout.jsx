import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <main
        style={{
          minHeight: "calc(100vh - 200px)",
        }}
        className="container mx-auto my-8 flex justify-center"
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
