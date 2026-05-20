import AdminLayout from "../layouts/AdminLayout";

export default function RankingsPage() {
  return (
    <AdminLayout>
      <h1 style={{
        fontSize: "42px",
        fontWeight: "900"import AdminLayout from "../layouts/AdminLayout";

export default function RankingsPage() {
  return (
    <AdminLayout>
      <h1 style={title}>
        Top Resellers
      </h1>

      <div style={card}>
        <ol>
          <li>
            No rankings yet
          </li>
        </ol>
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
      }}>
        Top Reseller Rankings
      </h1>
    </AdminLayout>
  );
}
