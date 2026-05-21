import { useState } from "react";

import AdminLayout from "../layouts/AdminLayout";

export default function DashboardPage() {
  const [fromDate, setFromDate] =
    useState("");

  const [toDate, setToDate] =
    useState("");

  const cards = [
    {
      title:
        "Resellers",
      value: "152",
      color:
        "#3b82f6",
    },

    {
      title:
        "Customers",
      value: "4,821",
      color:
        "#22c55e",
    },

    {
      title:
        "Orders",
      value: "12,420",
      color:
        "#f59e0b",
    },

    {
      title:
        "Revenue",
      value:
        "GH₵84,320",
      color:
        "#8b5cf6",
    },

    {
      title:
        "Total Capacity",
      value:
        "12,840GB",
      color:
        "#06b6d4",
    },

    {
      title:
        "Profit",
      value:
        "GH₵19,820",
      color:
        "#10b981",
    },

    {
      title:
        "Total Top Ups",
      value:
        "GH₵42,000",
      color:
        "#f97316",
    },

    {
      title:
        "Wallet Balance",
      value:
        "GH₵25,440",
      color:
        "#14b8a6",
    },

    {
      title:
        "Delivered Orders",
      value: "11,983",
      color:
        "#22c55e",
    },

    {
      title:
        "Complaints",
      value: "28",
      color:
        "#ef4444",
    },
  ];

  const recentOrders = [
    {
      ref:
        "DMX82K1",
      network: "MTN",
      amount:
        "GH₵43.00",
      status:
        "Delivered",
    },

    {
      ref:
        "AKP92WQ",
      network:
        "Telecel",
      amount:
        "GH₵10.00",
      status:
        "Processing",
    },

    {
      ref:
        "ZQW71PL",
      network:
        "AirtelTigo",
      amount:
        "GH₵95.00",
      status:
        "Pending",
    },
  ];

  function statusColor(
    value: string
  ) {
    if (
      value ===
      "Delivered"
    )
      return "#22c55e";

    if (
      value ===
      "Processing"
    )
      return "#3b82f6";

    if (
      value ===
      "Pending"
    )
      return "#facc15";

    return "#ef4444";
  }

  return (
    <AdminLayout>
      <div>
        {/* HEADER */}

        <div
          style={{
            display: "flex",
            justifyContent:
              "space-between",
            alignItems:
              "center",
            flexWrap:
              "wrap",
            gap: "20px",
            marginBottom:
              "30px",
          }}
        >
          <div>
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
                  "#94a3b8",
                fontSize:
                  "16px",
              }}
            >
              DonmacData
              Management
              Platform
            </p>
          </div>

          {/* DATE FILTERS */}

          <div
            style={{
              display:
                "flex",
              gap: "14px",
              flexWrap:
                "wrap",
            }}
          >
            <input
              type="date"
              value={
                fromDate
              }
              onChange={(
                e
              ) =>
                setFromDate(
                  e.target
                    .value
                )
              }
              style={
                inputStyle
              }
            />

            <input
              type="date"
              value={
                toDate
              }
              onChange={(
                e
              ) =>
                setToDate(
                  e.target
                    .value
                )
              }
              style={
                inputStyle
              }
            />
          </div>
        </div>

        {/* STATS */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(240px,1fr))",
            gap: "22px",
            marginBottom:
              "40px",
          }}
        >
          {cards.map(
            (item) => (
              <div
                key={
                  item.title
                }
                style={{
                  background:
                    "linear-gradient(180deg,#0f172a,#111827)",
                  border:
                    "1px solid rgba(255,255,255,0.08)",
                  borderRadius:
                    "24px",
                  padding:
                    "24px",
                }}
              >
                <div
                  style={{
                    width:
                      "60px",
                    height:
                      "60px",
                    borderRadius:
                      "18px",
                    background:
                      item.color,
                    opacity:
                      0.15,
                    marginBottom:
                      "18px",
                  }}
                />

                <p
                  style={{
                    color:
                      "#94a3b8",
                    marginBottom:
                      "12px",
                    fontSize:
                      "15px",
                  }}
                >
                  {
                    item.title
                  }
                </p>

                <h2
                  style={{
                    fontSize:
                      "34px",
                    fontWeight:
                      "900",
                    color:
                      item.color,
                  }}
                >
                  {
                    item.value
                  }
                </h2>
              </div>
            )
          )}
        </div>

        {/* LOWER SECTION */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "2fr 1fr",
            gap: "24px",
          }}
        >
          {/* RECENT ORDERS */}

          <div
            style={{
              background:
                "#0f172a",
              border:
                "1px solid rgba(255,255,255,0.08)",
              borderRadius:
                "24px",
              padding:
                "24px",
              overflowX:
                "auto",
            }}
          >
            <div
              style={{
                display:
                  "flex",
                justifyContent:
                  "space-between",
                alignItems:
                  "center",
                marginBottom:
                  "24px",
              }}
            >
              <h2
                style={{
                  fontSize:
                    "28px",
                  fontWeight:
                    "800",
                }}
              >
                Recent Orders
              </h2>

              <button
                style={{
                  background:
                    "#2563eb",
                  border:
                    "none",
                  color:
                    "white",
                  padding:
                    "12px 18px",
                  borderRadius:
                    "12px",
                  fontWeight:
                    "700",
                  cursor:
                    "pointer",
                }}
              >
                View All
              </button>
            </div>

            <table
              style={{
                width:
                  "100%",
                borderCollapse:
                  "collapse",
                minWidth:
                  "600px",
              }}
            >
              <thead>
                <tr>
                  {[
                    "Reference",
                    "Network",
                    "Amount",
                    "Status",
                  ].map(
                    (
                      item
                    ) => (
                      <th
                        key={
                          item
                        }
                        style={{
                          textAlign:
                            "left",
                          padding:
                            "16px",
                          color:
                            "#94a3b8",
                          borderBottom:
                            "1px solid rgba(255,255,255,0.08)",
                        }}
                      >
                        {
                          item
                        }
                      </th>
                    )
                  )}
                </tr>
              </thead>

              <tbody>
                {recentOrders.map(
                  (
                    item,
                    index
                  ) => (
                    <tr
                      key={
                        index
                      }
                    >
                      <td
                        style={
                          tdStyle
                        }
                      >
                        {
                          item.ref
                        }
                      </td>

                      <td
                        style={
                          tdStyle
                        }
                      >
                        {
                          item.network
                        }
                      </td>

                      <td
                        style={
                          tdStyle
                        }
                      >
                        {
                          item.amount
                        }
                      </td>

                      <td
                        style={{
                          ...tdStyle,
                          color:
                            statusColor(
                              item.status
                            ),
                          fontWeight:
                            "800",
                        }}
                      >
                        {
                          item.status
                        }
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>

          {/* QUICK ACTIONS */}

          <div
            style={{
              display:
                "grid",
              gap: "24px",
            }}
          >
            <div
              style={{
                background:
                  "#0f172a",
                border:
                  "1px solid rgba(255,255,255,0.08)",
                borderRadius:
                  "24px",
                padding:
                  "24px",
              }}
            >
              <h2
                style={{
                  fontSize:
                    "24px",
                  fontWeight:
                    "800",
                  marginBottom:
                    "24px",
                }}
              >
                Quick Actions
              </h2>

              <div
                style={{
                  display:
                    "grid",
                  gap: "14px",
                }}
              >
                <button
                  style={
                    actionButton
                  }
                >
                  Add Reseller
                </button>

                <button
                  style={
                    actionButton
                  }
                >
                  Send Announcement
                </button>

                <button
                  style={
                    actionButton
                  }
                >
                  Manage Orders
                </button>

                <button
                  style={
                    actionButton
                  }
                >
                  View Complaints
                </button>
              </div>
            </div>

            {/* SYSTEM STATUS */}

            <div
              style={{
                background:
                  "#0f172a",
                border:
                  "1px solid rgba(255,255,255,0.08)",
                borderRadius:
                  "24px",
                padding:
                  "24px",
              }}
            >
              <h2
                style={{
                  fontSize:
                    "24px",
                  fontWeight:
                    "800",
                  marginBottom:
                    "24px",
                }}
              >
                System Status
              </h2>

              <div
                style={{
                  display:
                    "grid",
                  gap: "18px",
                }}
              >
                <div
                  style={
                    statusRow
                  }
                >
                  <span>
                    MTN
                    Services
                  </span>

                  <span
                    style={{
                      color:
                        "#22c55e",
                      fontWeight:
                        "800",
                    }}
                  >
                    Online
                  </span>
                </div>

                <div
                  style={
                    statusRow
                  }
                >
                  <span>
                    Telecel
                    Services
                  </span>

                  <span
                    style={{
                      color:
                        "#22c55e",
                      fontWeight:
                        "800",
                    }}
                  >
                    Online
                  </span>
                </div>

                <div
                  style={
                    statusRow
                  }
                >
                  <span>
                    AirtelTigo
                    Services
                  </span>

                  <span
                    style={{
                      color:
                        "#facc15",
                      fontWeight:
                        "800",
                    }}
                  >
                    Slow
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

const inputStyle = {
  background:
    "#111827",
  border:
    "1px solid rgba(255,255,255,0.08)",
  color: "white",
  padding:
    "14px 18px",
  borderRadius:
    "14px",
  outline: "none",
};

const tdStyle = {
  padding: "16px",
  borderBottom:
    "1px solid rgba(255,255,255,0.08)",
};

const actionButton = {
  background:
    "#111827",
  border:
    "1px solid rgba(255,255,255,0.08)",
  color: "white",
  padding:
    "14px 18px",
  borderRadius:
    "14px",
  fontWeight:
    "700",
  cursor:
    "pointer",
  textAlign:
    "left" as const,
};

const statusRow = {
  display: "flex",
  justifyContent:
    "space-between",
  alignItems:
    "center",
};
