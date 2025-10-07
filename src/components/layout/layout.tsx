import Navbar from "../../components/Navbar.tsx";
import Footer from "../../components/Footer.tsx";
import { Outlet } from "react-router";

export default function Layou() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
        <div>
            <Outlet/>
        </div>
      <Footer />
    </div>
  );
}
