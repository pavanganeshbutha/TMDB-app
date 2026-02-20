import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col border min-h-screen">
      <Header />
      <main className="flex-1 border">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
