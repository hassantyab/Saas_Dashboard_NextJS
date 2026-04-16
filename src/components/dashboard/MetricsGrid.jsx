const data = [
  {
    title: "Total Revenue",
    value: "$2,482,900",
    change: "+12.4%",
    bg: "bg-primary-container"
  },
  {
    title: "Active Users",
    value: "18,245",
    change: "+5.2%",
    bg: "bg-secondary-container"
  },
  {
    title: "Conversion Rate",
    value: "3.82%",
    change: "-1.4%",
    bg: "bg-tertiary-container"
  },
  {
    title: "Avg Session",
    value: "12m 44s",
    change: "Stable",
    bg: "bg-gray-200"
  }
];

export default function MetricsGrid() {
  return (
    <div className="grid grid-cols-4 gap-6">
      {data.map((item) => (
        <div key={item.title} className="card p-5">
          <div className="flex justify-between mb-4">
            <div className={`p-3 rounded-xl ${item.bg}`}>📊</div>
            <span className="text-sm text-gray-500">{item.change}</span>
          </div>

          <p className="text-sm text-gray-500">{item.title}</p>
          <p className="text-2xl font-semibold">{item.value}</p>
        </div>
      ))}
    </div>
  );
}