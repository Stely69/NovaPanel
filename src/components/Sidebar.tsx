import { FiHome} from "react-icons/fi";
import { Link } from "react-router";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white h-screen p-6 flex flex-col z-20 fixed top-0 left-0">
      <h2 className="text-xl font-bold mb-8">NovaPanel</h2>
      <nav className="flex flex-col gap-4">
        <Link to="/" className="flex items-center gap-2 hover:text-indigo-400">
          <FiHome /> Inicio
        </Link>
      </nav>
    </aside>
  );
}
