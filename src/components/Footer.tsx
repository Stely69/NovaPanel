import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sección 1: Marca */}
        <div>
          <h3 className="text-xl font-bold text-white mb-2">NovaPanel</h3>
          <p className="text-sm text-gray-400">
            Simplifica la gestión de tus reportes y proyectos con una
            interfaz moderna e intuitiva.
          </p>
        </div>

        {/* Sección 2: Enlaces */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Enlaces útiles</h4>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-indigo-400 transition">
                Inicio
              </a>
            </li>
            <li>
              <a href="/login" className="hover:text-indigo-400 transition">
                Iniciar sesión
              </a>
            </li>
            <li>
              <a href="#formulario-reporte" className="hover:text-indigo-400 transition">
                Enviar reporte
              </a>
            </li>
            <li>
              <a href="/dashboard" className="hover:text-indigo-400 transition">
                Panel
              </a>
            </li>
          </ul>
        </div>

        {/* Sección 3: Redes */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Conéctate</h4>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-indigo-400 transition">
              <FiGithub />
            </a>
            <a href="#" className="hover:text-indigo-400 transition">
              <FiTwitter />
            </a>
            <a href="#" className="hover:text-indigo-400 transition">
              <FiLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Línea final */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} NovaPanel. Todos los derechos reservados.
      </div>
    </footer>
  );
}
