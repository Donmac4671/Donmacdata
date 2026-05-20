import {
  useState,
} from "react";

import AdminLayout from "../layouts/AdminLayout";

export default function OrdersPage() {
  const [status, setStatus] =
    useState("All");

  const [network, setNetwork] =
    useState("All");

  const orders = [
    {
      ref: "DMX92AK",
      phone: "0241234567",
      network: "MTN",
      package: "10GB",
      amount: "GH₵ 35",
      status: "Delivered",
      time: "10 mins",
      date: "2026-05-20",
    },

    {
      ref: "GHK72PL",
      phone: "0559876543",
      network: "Telecel",
      package: "5GB",
      amount: "GH₵ 20",
      status: "Pending",
      time: "20 mins",
      date: "2026-05-20",
    },

    {
      ref: "KLP92TR",
      phone: "0204567890",
      network:
        "AirtelTigo",
      package:
        "Airtime",
      amount: "GH₵ 50",
      status:
        "Processing",
      time: "45 mins",
      date: "2026-05-19",
    },

    {
      ref: "POX12MK",
      phone: "0278882221",
      network:
        "Mashup",
      package:
        "20GB",
      amount: "GH₵ 70",
      status: "Failed",
      time: "1 hour",
      date: "2026-05-18",
    },

    {
      ref: "ZXC67QP",
      phone: "0542228881",
      network:
        "Telecel Voice + SMS",
      package:
        "Combo",
      amount: "GH₵ 40",
      status: "Waiting",
      time:
        "1 hour 30 mins",
      date: "2026-05-18",
    },
  ];

  function statusColor(
    value: string
  ) {
    switch (value) {
      case "Delivered":
        return "#22c55e";

      case "Pending":
        return "#eab308";

      case "Processing":
        return "#3b82f6";

      case "Failed":
        return "#ef4444";

      case "Waiting":
        return "#9ca3af";

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
                  "40px",

                fontWeight:
                  "900",

                marginBottom:
                  "8px",
              }}
            >
              Orders
            </h1>

            <p
              style={{
                color:
                  "#94a3b8",
              }}
            >
              Manage all
              customer
              orders
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
            Export Orders
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
            placeholder="Search phone or ref code"
            style={inputStyle}
          />

          <select
            value={network}
            onChange={(
              e
            ) =>
              setNetwork(
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
              MTN
            </option>

            <option>
              Telecel
            </option>

            <option>
              AirtelTigo
            </option>

            <option>
              Mashup
            </option>

            <option>
              Airtime
            </option>

            <option>
              Telecel Voice + SMS
            </option>

            <option>
              Telecel Voice + Data + SMS
            </option>
          </select>

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
              Delivered
            </option>

            <option>
              Pending
            </option>

            <option>
              Processing
            </option>

            <option>
              Waiting
            </option>

            <option>
              Failed
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

        {/* AUTO DELIVERY */}
        <div
          style={{
            background:
              "#0f172a",

            border:
              "1px solid rgba(255,255,255,0.08)",

            borderRadius:
              "24px",

            padding: "24px",

            marginBottom:
              "30px",
          }}
        >
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
            }}
          >
            <div>
              <h2
                style={{
                  fontSize:
                    "24px",

                  fontWeight:
                    "800",

                  marginBottom:
                    "8px",
                }}
              >
                Auto Delivery
              </h2>

              <p
                style={{
                  color:
                    "#94a3b8",
                }}
              >
                Automatically
                mark orders
                as delivered
              </p>
            </div>

            <div
              style={{
                display: "flex",

                gap: "14px",

                flexWrap:
                  "wrap",
              }}
            >
              <select
                style={
                  inputStyle
                }
              >
                <option>
                  5 mins
                </option>

                <option>
                  10 mins
                </option>

                <option>
                  15 mins
                </option>

                <option>
                  20 mins
                </option>

                <option>
                  25 mins
                </option>

                <option>
                  30 mins
                </option>

                <option>
                  45 mins
                </option>

                <option>
                  1 hour
                </option>

                <option>
                  1 hour 30 mins
                </option>

                <option>
                  2 hours
                </option>
              </select>

              <button
                style={{
                  background:
                    "#22c55e",

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
                Enable
              </button>
            </div>
          </div>
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
                "1100px",
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
                  Ref Code
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
                  Network
                </th>

                <th
                  style={
                    thStyle
                  }
                >
                  Package
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
                  Auto Time
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
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {orders.map(
                (
                  order,
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
                        order.ref
                      }
                    </td>

                    <td
                      style={
                        tdStyle
                      }
                    >
                      {
                        order.phone
                      }
                    </td>

                    <td
                      style={
                        tdStyle
                      }
                    >
                      {
                        order.network
                      }
                    </td>

                    <td
                      style={
                        tdStyle
                      }
                    >
                      {
                        order.package
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
                        order.amount
                      }
                    </td>

                    <td
                      style={{
                        ...tdStyle,

                        color:
                          statusColor(
                            order.status
                          ),

                        fontWeight:
                          "700",
                      }}
                    >
                      {
                        order.status
                      }
                    </td>

                    <td
                      style={
                        tdStyle
                      }
                    >
                      {
                        order.time
                      }
                    </td>

                    <td
                      style={
                        tdStyle
                      }
                    >
                      {
                        order.date
                      }
                    </td>

                    <td
                      style={
                        tdStyle
                      }
                    >
                      <div
                        style={{
                          display:
                            "flex",

                          gap: "10px",

                          flexWrap:
                            "wrap",
                        }}
                      >
                        <select
                          style={{
                            ...inputStyle,

                            padding:
                              "10px",

                            minWidth:
                              "140px",
                          }}
                        >
                          <option>
                            Update Status
                          </option>

                          <option>
                            Delivered
                          </option>

                          <option>
                            Pending
                          </option>

                          <option>
                            Processing
                          </option>

                          <option>
                            Waiting
                          </option>

                          <option>
                            Failed
                          </option>
                        </select>

                        <button
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
                      </div>
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
