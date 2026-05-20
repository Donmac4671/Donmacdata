import AdminLayout from "../layouts/AdminLayout";

export default function RankingsPage() {
  const rankings = [
    {
      position: 1,
      name: "Michael Mensah",
      phone: "0241234567",
      email:
        "michael@gmail.com",
      capacity:
        "GH₵ 45,000",
      revenue:
        "GH₵ 9,800",
    },

    {
      position: 2,
      name: "Daniel Owusu",
      phone: "0559876543",
      email:
        "daniel@gmail.com",
      capacity:
        "GH₵ 38,000",
      revenue:
        "GH₵ 8,300",
    },

    {
      position: 3,
      name: "Prince Addo",
      phone: "0204567890",
      email:
        "prince@gmail.com",
      capacity:
        "GH₵ 31,500",
      revenue:
        "GH₵ 7,400",
    },

    {
      position: 4,
      name: "Sarah Arthur",
      phone: "0548882221",
      email:
        "sarah@gmail.com",
      capacity:
        "GH₵ 28,000",
      revenue:
        "GH₵ 6,900",
    },

    {
      position: 5,
      name: "Kwame Boateng",
      phone: "0274441110",
      email:
        "kwame@gmail.com",
      capacity:
        "GH₵ 21,000",
      revenue:
        "GH₵ 5,200",
    },
  ];

  return (
    <AdminLayout>
      <div>
        {/* HEADER */}
        <div
          style={{
            marginBottom:
              "30px",

            display: "flex",

            justifyContent:
              "space-between",

            alignItems:
              "center",

            flexWrap:
              "wrap",

            gap: "16px",
          }}
        >
          <div>
            <h1
              style={{
                fontSize:
                  "38px",

                fontWeight:
                  "900",

                marginBottom:
                  "8px",
              }}
            >
              Rankings
            </h1>

            <p
              style={{
                color:
                  "#94a3b8",
              }}
            >
              Top 5 Best
              Performing
              Resellers
            </p>
          </div>

          <select
            style={{
              background:
                "#111827",

              border:
                "1px solid rgba(255,255,255,0.08)",

              color:
                "white",

              padding:
                "14px 18px",

              borderRadius:
                "14px",

              outline:
                "none",
            }}
          >
            <option>
              This Month
            </option>

            <option>
              Last Month
            </option>

            <option>
              Last 3 Months
            </option>

            <option>
              This Year
            </option>
          </select>
        </div>

        {/* TOP CARD */}
        <div
          style={{
            background:
              "linear-gradient(135deg,#2563eb,#7c3aed)",

            borderRadius:
              "26px",

            padding: "30px",

            marginBottom:
              "30px",

            display: "flex",

            alignItems:
              "center",

            justifyContent:
              "space-between",

            flexWrap:
              "wrap",

            gap: "20px",
          }}
        >
          <div>
            <p
              style={{
                opacity: 0.8,

                marginBottom:
                  "10px",
              }}
            >
              Best Reseller
            </p>

            <h2
              style={{
                fontSize:
                  "42px",

                fontWeight:
                  "900",
              }}
            >
              {
                rankings[0]
                  .name
              }
            </h2>

            <p
              style={{
                marginTop:
                  "10px",

                opacity: 0.9,
              }}
            >
              Revenue:
              {" "}
              {
                rankings[0]
                  .revenue
              }
            </p>
          </div>

          <div
            style={{
              width: "100px",

              height:
                "100px",

              borderRadius:
                "50%",

              background:
                "rgba(255,255,255,0.15)",

              display: "flex",

              alignItems:
                "center",

              justifyContent:
                "center",

              fontSize:
                "46px",
            }}
          >
            🏆
          </div>
        </div>

        {/* TABLE */}
        <div
          style={{
            background:
              "#0f172a",

            borderRadius:
              "24px",

            overflowX:
              "auto",

            border:
              "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <table
            style={{
              width: "100%",

              borderCollapse:
                "collapse",

              minWidth:
                "900px",
            }}
          >
            <thead>
              <tr
                style={{
                  background:
                    "#111827",
                }}
              >
                <th
                  style={
                    thStyle
                  }
                >
                  Position
                </th>

                <th
                  style={
                    thStyle
                  }
                >
                  Name
                </th>

                <th
                  style={
                    thStyle
                  }
                >
                  Phone
                </th>

                <th
                  style={
                    thStyle
                  }
                >
                  Email
                </th>

                <th
                  style={
                    thStyle
                  }
                >
                  Total Capacity
                </th>

                <th
                  style={
                    thStyle
                  }
                >
                  Total Revenue
                </th>
              </tr>
            </thead>

            <tbody>
              {rankings.map(
                (
                  reseller
                ) => (
                  <tr
                    key={
                      reseller.position
                    }
                    style={{
                      borderBottom:
                        "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <td
                      style={
                        tdStyle
                      }
                    >
                      <div
                        style={{
                          display:
                            "flex",

                          alignItems:
                            "center",

                          gap: "10px",
                        }}
                      >
                        <div
                          style={{
                            width:
                              "36px",

                            height:
                              "36px",

                            borderRadius:
                              "50%",

                            background:
                              reseller.position ===
                              1
                                ? "#facc15"
                                : reseller.position ===
                                  2
                                ? "#cbd5e1"
                                : reseller.position ===
                                  3
                                ? "#f97316"
                                : "#1e293b",

                            display:
                              "flex",

                            alignItems:
                              "center",

                            justifyContent:
                              "center",

                            fontWeight:
                              "700",

                            color:
                              "white",
                          }}
                        >
                          {
                            reseller.position
                          }
                        </div>

                        {reseller.position ===
                          1 &&
                          "👑"}
                      </div>
                    </td>

                    <td
                      style={
                        tdStyle
                      }
                    >
                      {
                        reseller.name
                      }
                    </td>

                    <td
                      style={
                        tdStyle
                      }
                    >
                      {
                        reseller.phone
                      }
                    </td>

                    <td
                      style={
                        tdStyle
                      }
                    >
                      {
                        reseller.email
                      }
                    </td>

                    <td
                      style={{
                        ...tdStyle,

                        color:
                          "#38bdf8",

                        fontWeight:
                          "700",
                      }}
                    >
                      {
                        reseller.capacity
                      }
                    </td>

                    <td
                      style={{
                        ...tdStyle,

                        color:
                          "#4ade80",

                        fontWeight:
                          "700",
                      }}
                    >
                      {
                        reseller.revenue
                      }
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}

const thStyle = {
  textAlign:
    "left" as const,

  padding: "20px",

  color: "#94a3b8",

  fontSize: "14px",

  fontWeight: "700",
};

const tdStyle = {
  padding: "22px 20px",

  fontSize: "15px",

  color: "white",
};
