export default function Sidebar() {
  const items = ["Dashboard", "Contacts", "Tasks", "Analytics"];

  return (
    <aside className="fixed h-screen w-64 bg-primary text-white p-6 flex flex-col">
      <div className="mb-10">
        <h1 className="text-xl font-semibold">The Chromatic</h1>
        <p className="text-xs opacity-70">Executive Suite</p>
      </div>

      <nav className="space-y-2 flex-1">
        {items.map((item, i) => (
          <div
            key={item}
            className={`px-4 py-3 rounded-xl cursor-pointer ${
              i === 3 ? "bg-white/20" : "hover:bg-white/10"
            }`}
          >
            {item}
          </div>
        ))}
      </nav>

      <div className="mt-auto text-sm opacity-70">
        Alex Sterling
      </div>
    </aside>
  );
}