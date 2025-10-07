export default function Notifications() {
  const notifications = [
    { id: 1, text: "Nuevo reporte enviado por Ana Torres.", time: "Hace 5 min" },
    { id: 2, text: "Se resolvió el caso #24.", time: "Hace 1 hora" },
    { id: 3, text: "Mantenimiento programado mañana.", time: "Hace 3 horas" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-lg font-bold mb-4">Notificaciones</h2>
      <ul className="space-y-3">
        {notifications.map((n) => (
          <li key={n.id} className="p-3 bg-gray-50 rounded-lg border border-gray-100">
            <p className="text-sm text-gray-800">{n.text}</p>
            <span className="text-xs text-gray-500">{n.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
