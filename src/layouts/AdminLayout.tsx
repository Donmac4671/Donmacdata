import { Link } from "react-router-dom";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-[#050816] text-white">
      <aside className="w-72 bg-[#0B1120] border-r border-slate-800 p-6">
        <h1 className="text-3xl font-bold mb-10">
          DonmacData
        </h1>

        <nav className="space-y-4">
          <Link
            to="/admin"
            className="block p-4 rounded-xl bg-slate-800"
          >
            Dashboard
          </Link>

          <Link
            to="/admin/resellers"
            className="block p-4 rounded-xl hover:bg-slate-800"
          >
            Resellers
          </Link>

          <Link
            to="/admin/customers"
            className="block p-4 rounded-xl hover:bg-slate-800"
          >
            Customers
          </Link>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}
