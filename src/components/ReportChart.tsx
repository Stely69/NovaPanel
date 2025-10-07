import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Pendiente", value: 6 },
  { name: "En proceso", value: 3 },
  { name: "Resuelto", value: 12 },
];

const COLORS = ["#f87171", "#facc15", "#4ade80"];

export default function ReportChart() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-lg font-bold mb-4">Estado de los reportes</h2>
      <PieChart width={300} height={250}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          dataKey="value"
          label
        >
          {data.map((_, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}
