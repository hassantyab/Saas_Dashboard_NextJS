import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import MetricsGrid from "@/components/dashboard/MetricsGrid";
import RevenueChart from "@/components/dashboard/RevenueChart";
import KPISection from "@/components/dashboard/KPISection";
import AnomalyList from "@/components/dashboard/AnomalyList";

export default function DashboardPage() {
  return (
    <div>
      <Sidebar />
      <Header />

      <main className="ml-64 pt-24 p-8">
        <h1 className="text-2xl font-semibold mb-6">
          CRM Analytics & Statistics
        </h1>

        <MetricsGrid />

        <div className="grid grid-cols-3 gap-6 mt-6">
          <div className="col-span-2">
            <RevenueChart />
          </div>

          <KPISection />
        </div>

        <AnomalyList />
      </main>
    </div>
  );
}