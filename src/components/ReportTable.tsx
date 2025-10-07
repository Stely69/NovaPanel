interface Report {
  id: number;
  usuario: string;
  fecha: string;
  categoria: string;
  estado: "Pendiente" | "En proceso" | "Resuelto";
}

const reports: Report[] = [
  {
    id: 1,
    usuario: "Ana Torres",
    fecha: "2025-10-07",
    categoria: "Soporte técnico",
    estado: "Pendiente",
  },
  {
    id: 2,
    usuario: "Luis Pérez",
    fecha: "2025-10-05",
    categoria: "Error visual",
    estado: "Resuelto",
  },
  {
    id: 3,
    usuario: "María Gómez",
    fecha: "2025-10-03",
    categoria: "Sugerencia",
    estado: "En proceso",
  },
];

export default function ReportTable() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-lg font-bold mb-4">Reportes recientes</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3">ID</th>
            <th className="p-3">Usuario</th>
            <th className="p-3">Fecha</th>
            <th className="p-3">Categoría</th>
            <th className="p-3">Estado</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((r) => (
            <tr key={r.id} className="border-t hover:bg-gray-50">
              <td className="p-3">{r.id}</td>
              <td className="p-3">{r.usuario}</td>
              <td className="p-3">{r.fecha}</td>
              <td className="p-3">{r.categoria}</td>
              <td className="p-3">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    r.estado === "Resuelto"
                      ? "bg-green-100 text-green-600"
                      : r.estado === "En proceso"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {r.estado}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
