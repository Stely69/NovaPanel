import { FiActivity, FiAlertCircle, FiTrendingUp, FiUserCheck } from "react-icons/fi";


export default function ReportSection() {
  const reports = [
    {
      icon: <FiActivity className="text-indigo-600 text-3xl" />,
      title: "Casos activos",
      value: 18,
      desc: "Reportes en seguimiento",
    },
    {
      icon: <FiAlertCircle className="text-red-500 text-3xl" />,
      title: "Alertas críticas",
      value: 3,
      desc: "Necesitan atención inmediata",
    },
    {
      icon: <FiUserCheck className="text-green-500 text-3xl" />,
      title: "Usuarios conectados",
      value: 27,
      desc: "Durante la última hora",
    },
    {
      icon: <FiTrendingUp className="text-yellow-500 text-3xl" />,
      title: "Tendencia positiva",
      value: "+12%",
      desc: "Comparado con la semana pasada",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">
          Reporte general
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reports.map((report, index) => (
            <div
              key={index}
              className="bg-gray-50 shadow-sm rounded-xl p-6 flex flex-col items-center hover:shadow-md transition"
            >
              <div className="mb-4">{report.icon}</div>
              <h3 className="font-semibold text-lg text-gray-800">
                {report.title}
              </h3>
              <p className="text-2xl font-bold mt-1">{report.value}</p>
              <span className="text-gray-500 text-sm mt-1">{report.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
