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
      {/* SIDEBAR */}
      <aside className="w-[280px] min-h-screen bg-[#0B1120] border-r border-slate-800 flex flex-col p-6">
        <div>
          <h1 className="text-4xl font-black">
            DonmacData
          </h1>

          <p className="text-gray-400 mt-2">
            Admin Panel
          </p>
        </div>

        {/* MENU */}
        <div className="flex flex-col gap-3 mt-10">
          {menus.map((menu) => (
            <Link
              key={menu.path}
              to={menu.path}
              className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 ${
                location.pathname ===
                menu.path
                  ? "gradient text-white"
                  : "hover:bg-slate-800 text-gray-300"
              }`}
            >
              <span className="text-2xl">
                {menu.icon}
              </span>

              <span className="text-lg font-medium">
                {menu.name}
              </span>
            </Link>
          ))}
        </div>

        {/* LOGOUT */}
        <div className="mt-auto">
          <button
            onClick={logout}
            className="w-full bg-red-600 hover:bg-red-700 transition-all px-5 py-4 rounded-2xl flex items-center justify-center gap-3 font-semibold"
          >
            <FiLogOut />

            Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8 overflow-auto">
        {children}
      </main>
    </div>
  );
}
