import { Link } from "react-router-dom";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* SIDEBAR */}
      <aside
        style={{
          width: "300px",
          background: "#0B1120",
          padding: "24px",
          borderRight:
            "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        {/* LOGO */}
        <div>
          <h1
            style={{
              fontSize: "42px",
              fontWeight: "900",
              margin: 0,
            }}
          >
            DonmacData
          </h1>

          <p
            style={{
              color: "#94a3b8",
              marginTop: "10px",
              fontSize: "15px",
            }}
          >
            Admin Panel
          </p>
        </div>

        {/* MENU */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          {menus.map((menu) => (
            <Link
              key={menu.path}
              to={menu.path}
              style={{
                background: "#111827",
                color: "white",
                textDecoration: "none",
                padding: "18px 20px",
                borderRadius: "18px",
                fontWeight: "700",
                fontSize: "16px",
                transition: "0.3s",
              }}
            >
              {menu.name}
            </Link>
          ))}
        </div>

        {/* LOGOUT */}
        <div style={{ marginTop: "auto" }}>
          <button
            style={{
              width: "100%",
              background:
                "linear-gradient(135deg,#dc2626,#ef4444)",
              border: "none",
              color: "white",
              padding: "18px",
              borderRadius: "18px",
              fontWeight: "800",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main
        style={{
          flex: 1,
          padding: "40px",
          overflowY: "auto",
        }}
      >
        {children}
      </main>
    </div>
  );
}
