import AdminLayout from "../layouts/AdminLayout";

export default function PackagesPage() {
  const packages = [
    "MTN Data",
    "Telecel Data",
    "AirtelTigo Data",
    "Airtime",
    "Mashup",
    "Telecel Voice + SMS",
    "Telecel Voice + Data + SMS",
  ];

  return (
    <AdminLayout>
      <h1 style={title}>
        Packages
      </h1>

      <div style={grid}>
        {packages.map((item) => (
          <div
            key={item}
            style={card}
          >
            <h3>{item}</h3>

            <label
              style={{
                marginTop: "20px",
                display: "block",
              }}
            >
              <input
                type="checkbox"
                defaultChecked
              />{" "}
              Enabled
            </label>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}

const title = {
  fontSize: "42px",
  fontWeight: "900",
  marginBottom: "24px",
};

const grid = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit,minmax(260px,1fr))",
  gap: "20px",
};

const card = {
  background: "#0B1120",
  padding: "24px",
  borderRadius: "24px",
};
