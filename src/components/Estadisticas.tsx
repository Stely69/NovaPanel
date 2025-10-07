import Card from "./Card.tsx";

export default function Estadisticas() {
  return (
    <main className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card title="Usuarios activos" value={120} description="Última semana" />
      <Card title="Proyectos" value={34} description="En progreso" />
      <Card title="Tareas completadas" value={87} description="Mes actual" />
      <Card title="Notificaciones" value={12} />
    </main>
  );
}
