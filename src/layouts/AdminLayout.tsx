import { Link } from "react-router-dom";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#050816",
        color: "white",
      }}
    >
      {/* SIDEBAR */}
      <div
        style={{
          width: "280px",
          background: "#0B1120",
          padding: "24px",
          borderRight:
            "1px solid rgba(255,255,255,0.1)",
          display: "flex",
          flexDirection: "column",
        }}
      >
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

        {/* MENU */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <Link
            to="/admin"
            style={menuStyle}
          >
            Dashboard
          </Link>

          <Link
            to="/admin/resellers"
            style={menuStyle}
          >
            Resellers
          </Link>

          <Link
            to="/admin/customers"
            style={menuStyle}
          >
            Customers
          </Link>

          <Link
            to="/admin/orders"
            style={menuStyle}
          >
            Orders
          </Link>
        </div>

        <div style={{ marginTop: "auto" }}>
          <button
            style={{
              width: "100%",
              background: "#dc2626",
              border: "none",
              color: "white",
              padding: "16px",
              borderRadius: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div
        style={{
          flex: 1,
          padding: "32px",
        }}
      >
        {children}
      </div>
    </div>
  );
}

const menuStyle = {
  background: "#111827",
  color: "white",
  textDecoration: "none",
  padding: "16px 20px",
  borderRadius: "16px",
  fontWeight: "600",
};
