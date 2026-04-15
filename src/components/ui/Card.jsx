export default function Card({ title, value, change }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <p className="text-gray-500">{title}</p>
      <h3 className="text-2xl font-bold">{value}</h3>
      <span className={change > 0 ? "text-green-500" : "text-red-500"}>
        {change === 0 ? "Stable" : `${change}%`}
      </span>
    </div>
  );
}