export default function KPISection() {
  const items = [
    { label: "Sales Target", value: "75%" },
    { label: "Client Retention", value: "42%" },
    { label: "System Uptime", value: "92%" }
  ];

  return (
    <div className="card p-6">
      <h2 className="mb-4 font-semibold">KPI Goal Fulfillment</h2>

      <div className="space-y-6">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border-4 border-primary flex items-center justify-center text-sm">
              {item.value}
            </div>
            <div>
              <p className="font-medium">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}