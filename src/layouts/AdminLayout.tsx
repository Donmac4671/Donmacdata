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
      {/* MOBILE HEADER */}
      <div style={mobileHeader}>
        <h1 style={mobileLogo}>
          DonmacData
        </h1>

        <button
          onClick={() =>
            setOpen(true)
          }
          style={menuButton}
        >
          ☰
        </button>
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() =>
            setOpen(false)
          }
          style={overlay}
        />
      )}

      {/* SIDEBAR */}
      <aside
        style={{
          ...sidebar,

          transform:
            open ||
            window.innerWidth >
              900
              ? "translateX(0)"
              : "translateX(-100%)",
        }}
      >
        <div>
          <div
            style={{
              display:
                "flex",
              justifyContent:
                "space-between",
              alignItems:
                "center",
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

            <button
              onClick={() =>
                setOpen(
                  false
                )
              }
              style={
                closeBtn
              }
            >
              ✕
            </button>
          </div>

          <div
            style={
              menuWrap
            }
          >
            {menus.map(
              (menu) => (
                <Link
                  key={
                    menu.path
                  }
                  to={
                    menu.path
                  }
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
                  {
                    menu.name
                  }
                </Link>
              )
            )}
          </div>
        </div>

        <button
          style={
            logoutBtn
          }
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
  minHeight: "100vh",
  background: "#050816",
  color: "white",
};

const mobileHeader = {
  height: "70px",
  background: "#0B1120",
  borderBottom:
    "1px solid rgba(255,255,255,0.08)",

  display: "flex",

  alignItems: "center",

  justifyContent:
    "space-between",

  padding: "0 20px",

  position: "sticky" as const,

  top: 0,

  zIndex: 100,
};

const mobileLogo = {
  fontSize: "28px",
  fontWeight: "900",
};

const menuButton = {
  background: "#111827",
  border: "none",
  color: "white",
  width: "48px",
  height: "48px",
  borderRadius: "12px",
  fontSize: "24px",
  cursor: "pointer",
};

const overlay = {
  position: "fixed" as const,
  inset: 0,
  background:
    "rgba(0,0,0,0.6)",
  zIndex: 999,
};

const sidebar = {
  width: "290px",
  background: "#0B1120",

  borderRight:
    "1px solid rgba(255,255,255,0.08)",

  padding: "24px",

  position: "fixed" as const,

  top: 0,

  bottom: 0,

  left: 0,

  zIndex: 1000,

  display: "flex",

  flexDirection:
    "column" as const,

  justifyContent:
    "space-between",

  transition:
    "0.3s ease",
};

const logo = {
  fontSize: "36px",
  fontWeight: "900",
};

const sub = {
  color: "#94a3b8",
  marginTop: "8px",
};

const closeBtn = {
  background: "#111827",
  border: "none",
  color: "white",
  width: "42px",
  height: "42px",
  borderRadius: "12px",
  cursor: "pointer",
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
  padding:
    "24px 18px",
};

const content = {
  width: "100%",
};
