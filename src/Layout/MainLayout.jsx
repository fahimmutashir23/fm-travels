import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import PageWidth from "../Components/PageWidth/PageWidth";
import Footer from "../Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <PageWidth>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </PageWidth>
    </div>
  );
};

export default MainLayout;
