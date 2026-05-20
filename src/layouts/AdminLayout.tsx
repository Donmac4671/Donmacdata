import {
  Link,
  useLocation,
} from "react-router-dom";

import { useState } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const location = useLocation();

  const [open, setOpen] =
    useState(false);

  const menus = [
    {
      name: "Dashboard",
      path: "/admin",
    },

    {
      name: "Resellers",
      path: "/admin/resellers",
    },

    {
      name: "Customers",
      path: "/admin/customers",
    },

    {
      name: "Top Ups",
      path: "/admin/topups",
    },

    {
      name: "Complaints",
      path: "/admin/complaints",
    },

    {
      name: "Announcements",
      path: "/admin/announcements",
    },

    {
      name: "Packages",
      path: "/admin/packages",
    },

    {
      name: "Rankings",
      path: "/admin/rankings",
    },

    {
      name: "Orders",
      path: "/admin/orders",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#050816",
        color: "white",
      }}
    >
      {/* MOBILE MENU BUTTON */}
      <button
        onClick={() =>
          setOpen(!open)
        }
        style={{
          position: "fixed",
          top: "15px",
          left: "15px",
          zIndex: 2000,
          background: "#2563eb",
          border: "none",
          color: "white",
          padding: "12px 16px",
          borderRadius: "12px",
          cursor: "pointer",
          display: window.innerWidth <=
            768
            ? "block"
            : "none",
        }}
      >
        ☰
      </button>

      {/* SIDEBAR */}
      <aside
        style={{
          width: "280px",
          background: "#0B1120",
          padding: "24px",
          borderRight:
            "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          flexDirection: "column",
          position:
            window.innerWidth <= 768
              ? "fixed"
              : "relative",
          left:
            window.innerWidth <= 768
              ? open
                ? "0"
                : "-320px"
              : "0",
          top: 0,
          bottom: 0,
          zIndex: 1500,
          transition: "0.3s",
          overflowY: "auto",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "40px",
              fontWeight: "900",
              marginBottom: "8px",
            }}
          >
            DonmacData
          </h1>

          <p
            style={{
              color: "#94a3b8",
              marginBottom: "40px",
            }}
          >
            Admin Panel
          </p>
        </div>

        {/* MENUS */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {menus.map((menu) => (
            <Link
              key={menu.path}
              to={menu.path}
              onClick={() =>
                setOpen(false)
              }
              style={{
                background:
                  location.pathname ===
                  menu.path
                    ? "linear-gradient(135deg,#2563eb,#7c3aed)"
                    : "#111827",
                color: "white",
                textDecoration: "none",
                padding: "18px",
                borderRadius: "18px",
                fontWeight: "700",
              }}
            >
              {menu.name}
            </Link>
          ))}
        </div>

        {/* LOGOUT */}
        <div
          style={{
            marginTop: "auto",
          }}
        >
          <button
            style={{
              width: "100%",
              background:
                "linear-gradient(135deg,#dc2626,#ef4444)",
              border: "none",
              color: "white",
              padding: "18px",
              borderRadius: "18px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
      </aside>

      {/* CONTENT */}
      <main
        style={{
          flex: 1,
          padding:
            window.innerWidth <= 768
              ? "80px 20px 20px"
              : "40px",
          width: "100%",
        }}
      >
        {children}
      </main>
    </div>
  );
}
