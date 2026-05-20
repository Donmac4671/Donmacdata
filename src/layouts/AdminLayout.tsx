import {
  Link,
  useLocation,
} from "react-router-dom";

import {
  FiGrid,
  FiUsers,
  FiUser,
  FiShoppingCart,
  FiLogOut,
} from "react-icons/fi";

import { supabase } from "../lib/supabase";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const location = useLocation();

  async function logout() {
    await supabase.auth.signOut();

    window.location.href = "/";
  }

  const menus = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: <FiGrid />,
    },

    {
      name: "Resellers",
      path: "/admin/resellers",
      icon: <FiUsers />,
    },

    {
      name: "Customers",
      path: "/admin/customers",
      icon: <FiUser />,
    },

    {
      name: "Orders",
      path: "/admin/orders",
      icon: <FiShoppingCart />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#050816] text-white flex">
      <aside className="w-72 bg-[#0B1120] border-r border-slate-800 p-6 flex flex-col">
        <div>
          <h1 className="text-4xl font-black">
            DonmacData
          </h1>

          <p className="text-gray-400 mt-2">
            Admin Panel
          </p>
        </div>

        <nav className="mt-10 space-y-3 flex-1">
          {menus.map((menu) => (
            <Link
              key={menu.path}
              to={menu.path}
              className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${
                location.pathname ===
                menu.path
                  ? "gradient"
                  : "hover:bg-slate-800"
              }`}
            >
              <span className="text-2xl">
                {menu.icon}
              </span>

              <span className="text-lg">
                {menu.name}
              </span>
            </Link>
          ))}
        </nav>

        <button
          onClick={logout}
          className="bg-red-600 hover:bg-red-700 transition p-4 rounded-2xl flex items-center justify-center gap-3"
        >
          <FiLogOut />

          Logout
        </button>
      </aside>

      <main className="flex-1 p-8 overflow-auto">
        {children}
      </main>
    </div>
  );
}
