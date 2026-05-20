import AdminLayout from "../layouts/AdminLayout";

export default function TopupsPage() {
  return (
    <AdminLayout>
      <h1 style={title}>
        Top Ups
      </h1>

      <div style={card}>
        <table style={table}>
          <thead>
            <tr>
              <th style={th}>
                Transaction ID
              </th>

              <th style={th}>
                Network
              </th>

              <th style={th}>
                Amount
              </th>

              <th style={th}>
                Status
              </th>

              <th style={th}>
                Claimed By
              </th>

              <th style={th}>
                Date & Time
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={td}>
                No topups yet
              </td>
            </tr>
          </tbody>
        </table>
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
  overflowX: "auto",
};

const table = {
  width: "100%",
};

const th = {
  textAlign: "left" as const,
  padding: "14px",
  color: "#94a3b8",
};

const td = {
  padding: "16px",
};
