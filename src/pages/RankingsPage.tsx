import AdminLayout from "../layouts/AdminLayout";

export default function RankingsPage() {
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
          marginBottom: "24px",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            fontWeight: "900",
          }}
        >
          Top Resellers
        </h1>

        <select
          style={input}
        >
          <option>
            This Month
          </option>

          <option>
            January
          </option>

          <option>
            February
          </option>

          <option>
            March
          </option>

          <option>
            April
          </option>

          <option>
            May
          </option>

          <option>
            June
          </option>

          <option>
            July
          </option>

          <option>
            August
          </option>

          <option>
            September
          </option>

          <option>
            October
          </option>

          <option>
            November
          </option>

          <option>
            December
          </option>
        </select>
      </div>

      <div style={card}>
        <ol
          style={{
            display: "flex",
            flexDirection:
              "column",
            gap: "18px",
          }}
        >
          <li>
            Kwame Data Hub —
            ₵12,000 Sales
          </li>

          <li>
            Donmac Reseller —
            ₵10,500 Sales
          </li>

          <li>
            FastNet GH —
            ₵9,800 Sales
          </li>
        </ol>
      </div>
    </AdminLayout>
  );
}

const card = {
  background: "#0B1120",
  padding: "24px",
  borderRadius: "24px",
};

const input = {
  background: "#111827",
  border: "1px solid #374151",
  color: "white",
  padding: "14px",
  borderRadius: "14px",
};
