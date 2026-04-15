"use client";

export default function Header() {
  return (
    <header className="fixed left-64 right-0 top-0 h-20 bg-white shadow flex items-center justify-between px-8">
      <input className="border px-4 py-2 rounded" placeholder="Search..." />
      <div>🔔</div>
    </header>
  );
}