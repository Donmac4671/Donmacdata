import AdminLayout from "../layouts/AdminLayout";

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div
        style={{
          display: "flex",
          justifyContent:
            "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "48px",
              fontWeight: "900",
            }}
          >
            Dashboard
          </h1>

          <p
            style={{
              color: "#94a3b8",
            }}
          >
            DonmacData Admin
            Analytics
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <input
            type="date"
            style={dateInput}
          />

          <input
            type="date"
            style={dateInput}
          />
        </div>
      </div>

      <div style={grid}>
        <Card
          title="Revenue"
          value="₵0.00"
        />

        <Card
          title="Profit"
          value="₵0.00"
        />

        <Card
          title="Total Capacity"
          value="0"
        />

        <Card
          title="Total Top Ups"
          value="0"
        />

        <Card
          title="Wallet Balance"
          value="₵0.00"
        />

        <Card
          title="Delivered Orders"
          value="0"
        />

        <Card
          title="Complaints"
          value="0"
        />

        <Card
          title="Customers"
          value="0"
        />
      </div>
    </AdminLayout>
  );
}

function Card({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div style={card}>
      <p style={small}>
        {title}
      </p>

      <h2 style={big}>
        {value}
      </h2>
    </div>
  );
}

const grid = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit,minmax(240px,1fr))",
  gap: "20px",
};

const card = {
  background: "#0B1120",
  borderRadius: "24px",
  padding: "28px",
};

const small = {
  color: "#94a3b8",
  marginBottom: "12px",
};

const big = {
  fontSize: "42px",
  fontWeight: "900",
};

const dateInput = {
  background: "#111827",
  border: "1px solid #374151",
  color: "white",
  padding: "14px",
  borderRadius: "14px",
};
