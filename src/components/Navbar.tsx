import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
      <h1 className="text-2xl font-bold text-indigo-600">NovaPanel</h1>
      <Link
        to="/login"
        className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition"
      >
        Iniciar sesión
      </Link>
    </nav>
  );
}
