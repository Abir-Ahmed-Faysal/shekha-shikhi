import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[70vh] md:min-h-screen">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
