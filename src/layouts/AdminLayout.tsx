import {
  Link,
  useLocation,
} from "react-router-dom";

import {
  useState,
} from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const location =
    useLocation();

  const [open, setOpen] =
    useState(false);

  const menus = [
    {
      name: "Dashboard",
      path: "/admin",
    },

    {
      name: "Resellers",
      path:
        "/admin/resellers",
    },

    {
      name: "Customers",
      path:
        "/admin/customers",
    },

    {
      name: "Orders",
      path:
        "/admin/orders",
    },

    {
      name: "Top Ups",
      path:
        "/admin/topups",
    },

    {
      name:
        "Complaints",
      path:
        "/admin/complaints",
    },

    {
      name:
        "Announcements",
      path:
        "/admin/announcements",
    },

    {
      name:
        "Packages",
      path:
        "/admin/packages",
    },

    {
      name:
        "Rankings",
      path:
        "/admin/rankings",
    },
  ];

  return (
    <div style={wrapper}>
      {/* MOBILE TOP BAR */}
      <div style={mobileTop}>
        <h1 style={logo}>
          DonmacData
        </h1>

        <button
          onClick={() =>
            setOpen(!open)
          }
          style={menuButton}
        >
          ☰
        </button>
      </div>

      {/* SIDEBAR */}
      <aside
        style={{
          ...sidebar,

          left:
            open ||
            window.innerWidth >
              900
              ? "0"
              : "-100%",
        }}
      >
        <div>
          <h1 style={logo}>
            DonmacData
          </h1>

          <p style={sub}>
            Admin Panel
          </p>
        </div>

        <div style={menuWrap}>
          {menus.map((menu) => (
            <Link
              key={
                menu.path
              }
              to={menu.path}
              onClick={() =>
                setOpen(
                  false
                )
              }
              style={{
                ...menuStyle,

                background:
                  location.pathname ===
                  menu.path
                    ? "linear-gradient(135deg,#2563eb,#7c3aed)"
                    : "#111827",
              }}
            >
              {menu.name}
            </Link>
          ))}
        </div>

        <button
          style={logoutBtn}
        >
          Logout
        </button>
      </aside>

      {/* CONTENT */}
      <main style={main}>
        <div style={content}>
          {children}
        </div>
      </main>
    </div>
  );
}

const wrapper = {
  display: "flex",
  minHeight: "100vh",
  background: "#050816",
  color: "white",
};

const sidebar = {
  width: "290px",
  background: "#0B1120",
  borderRight:
    "1px solid rgba(255,255,255,0.08)",

  padding: "24px",

  display: "flex",
  flexDirection:
    "column" as const,

  justifyContent:
    "space-between",

  position: "fixed" as const,

  top: 0,

  bottom: 0,

  zIndex: 1000,

  transition:
    "0.3s ease",
};

const logo = {
  fontSize: "34px",
  fontWeight: "900",
};

const sub = {
  color: "#94a3b8",
  marginTop: "8px",
};

const menuWrap = {
  display: "flex",
  flexDirection:
    "column" as const,

  gap: "14px",

  marginTop: "40px",
};

const menuStyle = {
  color: "white",
  textDecoration:
    "none",

  padding:
    "16px 18px",

  borderRadius:
    "16px",

  fontWeight: "600",

  transition:
    "0.2s ease",
};

const logoutBtn = {
  background: "#dc2626",
  border: "none",
  color: "white",
  padding: "18px",
  borderRadius: "18px",
  fontWeight: "700",
  cursor: "pointer",
};

const main = {
  flex: 1,
  marginLeft: "290px",
  width: "100%",
};

const content = {
  padding: "32px",
  maxWidth: "1600px",
};

const mobileTop = {
  display: "none",
};

const menuButton = {
  background: "#111827",
  border: "none",
  color: "white",
  fontSize: "24px",
  padding:
    "10px 16px",

  borderRadius:
    "12px",

  cursor: "pointer",
};
