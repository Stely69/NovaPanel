import Estadistica from "./Estadisticas.tsx";
import Notifications from "./Notifications.tsx";
import ReportChart from "./ReportChart.tsx";
import ReportTable from "./ReportTable.tsx";
import UserProfile from "./UserProfile.tsx";

export default function DashboardContent() {
  return (
    <main className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 flex flex-col gap-6">
        <Estadistica />
        <ReportTable />
        <ReportChart />
      </div>
      <div className="flex flex-col gap-6">
        <UserProfile />
        <Notifications />
      </div>
    </main>
  );
}
