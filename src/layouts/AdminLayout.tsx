import AdminLayout from "../layouts/AdminLayout";

export default function AdminDashboard() {
  const cards = [
    {
      title: "Resellers",
      value: "0",
    },

    {
      title: "Customers",
      value: "0",
    },

    {
      title: "Orders",
      value: "0",
    },

    {
      title: "Revenue",
      value: "GH₵ 0.00",
    },

    {
      title: "Top Ups",
      value: "0",
    },

    {
      title: "Complaints",
      value: "0",
    },

    {
      title:
        "Wallet Balance",
      value: "GH₵ 0.00",
    },

    {
      title: "Profit",
      value: "GH₵ 0.00",
    },
  ];

  return (
    <AdminLayout>
      <div>
        {/* HEADER */}
        <div
          style={{
            background:
              "linear-gradient(135deg,#2563eb,#7c3aed)",

            padding: "32px",

            borderRadius:
              "24px",

            marginBottom:
              "30px",
          }}
        >
          <h1
            style={{
              fontSize:
                "42px",

              fontWeight:
                "900",

              marginBottom:
                "10px",
            }}
          >
            Admin Dashboard
          </h1>

          <p
            style={{
              color:
                "rgba(255,255,255,0.85)",

              fontSize:
                "18px",
            }}
          >
            DonmacData
            Management
            Platform
          </p>
        </div>

        {/* GRID */}
        <div
          style={{
            display: "grid",

            gridTemplateColumns:
              "repeat(auto-fit,minmax(240px,1fr))",

            gap: "24px",
          }}
        >
          {cards.map(
            (card) => (
              <div
                key={
                  card.title
                }
                style={{
                  background:
                    "#0f172a",

                  border:
                    "1px solid rgba(255,255,255,0.08)",

                  borderRadius:
                    "22px",

                  padding:
                    "28px",
                }}
              >
                <p
                  style={{
                    color:
                      "#94a3b8",

                    marginBottom:
                      "14px",

                    fontSize:
                      "16px",
                  }}
                >
                  {
                    card.title
                  }
                </p>

                <h2
                  style={{
                    fontSize:
                      "34px",

                    fontWeight:
                      "900",
                  }}
                >
                  {
                    card.value
                  }
                </h2>
              </div>
            )
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
