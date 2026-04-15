"use client";

export default function Sidebar() {
  return (
    <aside className="fixed w-64 h-full bg-indigo-700 text-white p-6">
      <h2 className="text-xl font-bold mb-8">Chromatic</h2>
      <nav className="space-y-4">
        <div>Dashboard</div>
        <div>Contacts</div>
        <div>Tasks</div>
      </nav>
    </aside>
  );
}