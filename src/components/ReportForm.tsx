import { useState } from "react";

export default function ReportForm() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
    setNombre("");
    setEmail("");
    setDescripcion("");
  };

  return (
    <section className="py-16 bg-gray-50" id="formulario-reporte">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Enviar un reporte
        </h2>

        {!enviado ? (
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-md flex flex-col gap-6"
          >
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Nombre completo
              </label>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Correo</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Descripción del reporte
              </label>
              <textarea
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                rows={4}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Describe brevemente el problema o situación..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Enviar reporte
            </button>
          </form>
        ) : (
          <div className="bg-green-50 p-6 rounded-xl text-center shadow-sm border border-green-200">
            <h3 className="text-green-600 font-semibold text-lg mb-2">
              ¡Reporte enviado con éxito!
            </h3>
            <p className="text-gray-600">
              Gracias por comunicarte. Tu reporte será revisado por el equipo.
            </p>
            <button
              onClick={() => setEnviado(false)}
              className="mt-4 text-indigo-600 hover:underline text-sm"
            >
              Enviar otro reporte
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
