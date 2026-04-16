export default function KPISection() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
      <h2 className="mb-4 font-semibold">KPI Goal Fulfillment</h2>

      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full border-4 border-purple-500 flex items-center justify-center">
            75%
          </div>
          <p>Sales Target</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full border-4 border-red-500 flex items-center justify-center">
            42%
          </div>
          <p>Client Retention</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full border-4 border-blue-500 flex items-center justify-center">
            92%
          </div>
          <p>System Uptime</p>
        </div>
      </div>
    </div>
  );
}