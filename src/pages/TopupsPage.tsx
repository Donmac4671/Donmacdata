import { useState } from "react";

import AdminLayout from "../layouts/AdminLayout";

export default function TopupsPage() {
  const [status, setStatus] =
    useState("All");

  const [topups, setTopups] =
    useState([
      {
        id: "TPX82AK",
        network: "MTN",
        amount: "GH₵ 100",
        status: "Claimed",
        claimedBy:
          "Michael Mensah",
        date:
          "2026-05-20",
        time: "10:30 AM",
      },

      {
        id: "TPZ22PL",
        network:
          "Telecel",
        amount: "GH₵ 50",
        status:
          "Unclaimed",
        claimedBy: "-",
        date:
          "2026-05-20",
        time: "11:15 AM",
      },

      {
        id: "TPQ91LK",
        network:
          "AirtelTigo",
        amount: "GH₵ 200",
        status: "Claimed",
        claimedBy:
          "Sarah Arthur",
        date:
          "2026-05-19",
        time: "4:10 PM",
      },
    ]);

  function statusColor(
    value: string
  ) {
    switch (value) {
      case "Claimed":
        return "#22c55e";

      case "Unclaimed":
        return "#ef4444";

      default:
        return "white";
    }
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
            flexWrap: "wrap",
            gap: "20px",
            marginBottom:
              "30px",
          }}
        >
          <div>
            <h1
              style={{
                fontSize:
                  "40px",
                fontWeight:
                  "900",
                marginBottom:
                  "8px",
              }}
            >
              Top Ups
            </h1>

            <p
              style={{
                color:
                  "#94a3b8",
              }}
            >
              Monitor all
              top up
              transactions
            </p>
          </div>

          <button
            style={{
              background:
                "linear-gradient(135deg,#2563eb,#7c3aed)",
              border:
                "none",
              color:
                "white",
              padding:
                "14px 24px",
              borderRadius:
                "14px",
              fontWeight:
                "700",
              cursor:
                "pointer",
            }}
          >
            Export Top Ups
          </button>
        </div>

        {/* FILTERS */}
        <div
          style={{
            background:
              "#0f172a",
            padding: "24px",
            borderRadius:
              "24px",
            marginBottom:
              "30px",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap: "18px",
            border:
              "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <input
            placeholder="Search transaction ID"
            style={inputStyle}
          />

          <select
            value={status}
            onChange={(
              e
            ) =>
              setStatus(
                e.target
                  .value
              )
            }
            style={
              inputStyle
            }
          >
            <option>
              All
            </option>

            <option>
              Claimed
            </option>

            <option>
              Unclaimed
            </option>
          </select>

          <input
            type="date"
            style={inputStyle}
          />

          <input
            type="date"
            style={inputStyle}
          />
        </div>

        {/* TABLE */}
        <div
          style={{
            overflowX:
              "auto",
            background:
              "#0f172a",
            borderRadius:
              "24px",
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
                "1050px",
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
                  Transaction ID
                </th>

                <th
                  style={
                    thStyle
                  }
                >
                  Network
                </th>

                <th
                  style={
                    thStyle
                  }
                >
                  Amount
                </th>

                <th
                  style={
                    thStyle
                  }
                >
                  Status
                </th>

                <th
                  style={
                    thStyle
                  }
                >
                  Claimed By
                </th>

                <th
                  style={
                    thStyle
                  }
                >
                  Date
                </th>

                <th
                  style={
                    thStyle
                  }
                >
                  Time
                </th>

                <th
                  style={
                    thStyle
                  }
                >
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {topups.map(
                (
                  topup,
                  index
                ) => (
                  <tr
                    key={index}
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
                      {
                        topup.id
                      }
                    </td>

                    <td
                      style={
                        tdStyle
                      }
                    >
                      {
                        topup.network
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
                        topup.amount
                      }
                    </td>

                    <td
                      style={{
                        ...tdStyle,
                        color:
                          statusColor(
                            topup.status
                          ),
                        fontWeight:
                          "700",
                      }}
                    >
                      {
                        topup.status
                      }
                    </td>

                    <td
                      style={
                        tdStyle
                      }
                    >
                      {
                        topup.claimedBy
                      }
                    </td>

                    <td
                      style={
                        tdStyle
                      }
                    >
                      {
                        topup.date
                      }
                    </td>

                    <td
                      style={
                        tdStyle
                      }
                    >
                      {
                        topup.time
                      }
                    </td>

                    <td
                      style={
                        tdStyle
                      }
                    >
                      <button
                        onClick={() => {
                          const updated =
                            topups.filter(
                              (
                                _,
                                i
                              ) =>
                                i !==
                                index
                            );

                          setTopups(
                            updated
                          );
                        }}
                        style={{
                          background:
                            "#dc2626",
                          border:
                            "none",
                          color:
                            "white",
                          padding:
                            "10px 14px",
                          borderRadius:
                            "12px",
                          cursor:
                            "pointer",
                          fontWeight:
                            "700",
                        }}
                      >
                        Delete
                      </button>
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

const inputStyle = {
  background:
    "#111827",
  border:
    "1px solid rgba(255,255,255,0.08)",
  color: "white",
  padding: "14px",
  borderRadius:
    "14px",
  outline: "none",
  width: "100%",
  boxSizing:
    "border-box" as const,
};

const thStyle = {
  textAlign:
    "left" as const,
  padding: "20px",
  color: "#94a3b8",
  fontSize: "14px",
};

const tdStyle = {
  padding: "20px",
  fontSize: "14px",
  color: "white",
};
