import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import RevenueChart from "@/components/charts/RevenueChart";
import BarChart from "@/components/charts/BarChart";
import KPIProgress from "@/components/KPIProgress";
import Card from "@/components/ui/Card";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 ml-64">
        <Header />

        <main className="p-8 pt-24 space-y-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>

          <div className="grid grid-cols-4 gap-6">
            <Card title="Revenue" value="$2.4M" change={12} />
            <Card title="Users" value="18K" change={5} />
            <Card title="Conversion" value="3.8%" change={-1.4} />
            <Card title="Session" value="12m" change={0} />
          </div>

          <RevenueChart />

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2">
              <BarChart />
            </div>
            <KPIProgress />
          </div>
        </main>
      </div>
    </div>
  );
}