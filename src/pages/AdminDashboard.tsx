import AdminLayout from "../layouts/AdminLayout";

export default function AdminDashboard() {
  return (
    <AdminLayout>
      {/* HEADER */}
      <div
        style={{
          background:
            "linear-gradient(135deg,#2563eb,#7c3aed)",
          borderRadius: "28px",
          padding: "40px",
          marginBottom: "32px",
          boxShadow:
            "0 10px 40px rgba(0,0,0,0.4)",
        }}
      >
        <h1
          style={{
            fontSize: "52px",
            fontWeight: "900",
            marginBottom: "10px",
          }}
        >
          Admin Dashboard
        </h1>

        <p
          style={{
            color: "rgba(255,255,255,0.8)",
            fontSize: "18px",
          }}
        >
          Welcome to DonmacData Management
          Platform
        </p>
      </div>

      {/* STATS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(240px,1fr))",
          gap: "24px",
        }}
      >
        <StatCard
          title="Resellers"
          value="0"
        />

        <StatCard
          title="Customers"
          value="0"
        />

        <StatCard
          title="Orders"
          value="0"
        />

        <StatCard
          title="Revenue"
          value="₵0.00"
        />
      </div>

      {/* RECENT ACTIVITY */}
      <div
        style={{
          marginTop: "40px",
          background: "#0B1120",
          borderRadius: "28px",
          padding: "30px",
          border:
            "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            fontWeight: "800",
            marginBottom: "20px",
          }}
        >
          Recent Activity
        </h2>

        <div
          style={{
            color: "#94a3b8",
            padding: "20px",
            background: "#111827",
            borderRadius: "20px",
          }}
        >
          No recent activity yet
        </div>
      </div>
    </AdminLayout>
  );
}

function StatCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div
      style={{
        background: "#0B1120",
        borderRadius: "28px",
        padding: "30px",
        border:
          "1px solid rgba(255,255,255,0.08)",
        boxShadow:
          "0 10px 30px rgba(0,0,0,0.3)",
      }}
    >
      <p
        style={{
          color: "#94a3b8",
          fontSize: "18px",
          marginBottom: "12px",
        }}
      >
        {title}
      </p>

      <h2
        style={{
          fontSize: "46px",
          fontWeight: "900",
        }}
      >
        {value}
      </h2>
    </div>
  );
}
