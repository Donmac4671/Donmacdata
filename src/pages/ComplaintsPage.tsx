import AdminLayout from "../layouts/AdminLayout";

export default function ComplaintsPage() {
  return (
    <AdminLayout>
      <h1 style={title}>
        Complaints
      </h1>

      <div style={card}>
        <div style={complaintBox}>
          <h3>
            No complaints yet
          </h3>
        </div>
      </div>
    </AdminLayout>
  );
}

const title = {
  fontSize: "42px",
  fontWeight: "900",
  marginBottom: "24px",
};

const card = {
  background: "#0B1120",
  padding: "24px",
  borderRadius: "24px",
};

const complaintBox = {
  background: "#111827",
  padding: "24px",
  borderRadius: "18px",
};
