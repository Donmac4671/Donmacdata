import AdminLayout from "../layouts/AdminLayout";

export default function AnnouncementsPage() {
  return (
    <AdminLayout>
      <h1 style={title}>
        Announcements
      </h1>

      <div style={card}>
        <textarea
          placeholder="Type announcement..."
          style={textarea}
        />

        <button style={button}>
          Send Announcement
        </button>
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
  display: "flex",
  flexDirection: "column" as const,
  gap: "20px",
};

const textarea = {
  minHeight: "200px",
  background: "#111827",
  border: "none",
  borderRadius: "18px",
  padding: "20px",
  color: "white",
};

const button = {
  background:
    "linear-gradient(135deg,#2563eb,#7c3aed)",
  border: "none",
  color: "white",
  padding: "18px",
  borderRadius: "18px",
  fontWeight: "700",
  cursor: "pointer",
};
