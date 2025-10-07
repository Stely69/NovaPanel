import Sidebar from "../../components/Sidebar.tsx";
import { Outlet } from "react-router";

export default function Layou() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Sidebar />
        <div>
            <Outlet/>
        </div>
    </div>
  );
}
