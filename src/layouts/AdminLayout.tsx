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
    <div className="min-h-screen flex bg-[#050816] text-white">
      <aside className="w-72 bg-[#0B1120] border-r border-slate-800 p-6 flex flex-col">
        <div>
          <h1 className="text-4xl font-black">
            DonmacData
          </h1>

          <p className="text-gray-400 mt-2">
            Admin Panel
          </p>
        </div>

        <nav className="space-y-3 mt-10">
          {menus.map((menu) => (
            <Link
              key={menu.path}
              to={menu.path}
              className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 ${
                location.pathname ===
                menu.path
                  ? "gradient"
                  : "hover:bg-slate-800"
              }`}
            >
              <span className="text-xl">
                {menu.icon}
              </span>

              {menu.name}
            </Link>
          ))}
        </nav>

        <div className="mt-auto">
          <button
            onClick={logout}
            className="w-full flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 transition p-4 rounded-2xl"
          >
            <FiLogOut />

            Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 p-8 overflow-auto">
        {children}
      </main>
    </div>
  );
}
