export default function Header() {
  return (
    <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-20 
    bg-white/70 backdrop-blur-xl border-b border-gray-200 
    flex items-center justify-between px-8">

      <input
        className="bg-gray-100 px-4 py-2 rounded-lg w-80"
        placeholder="Search executive reports..."
      />

      <div className="flex items-center gap-6">
        <span>🔔</span>
        <span>💬</span>
        <span className="font-medium">Executive</span>
      </div>
    </header>
  );
}