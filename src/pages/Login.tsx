import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí solo simulamos el login
    window.location.href = "/dashboard";
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-96 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-center text-indigo-600">
          Bienvenido a NovaPanel
        </h2>

        <div>
          <label className="text-gray-600 text-sm">Correo</label>
          <input
            type="email"
            className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="text-gray-600 text-sm">Contraseña</label>
          <input
            type="password"
            className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
