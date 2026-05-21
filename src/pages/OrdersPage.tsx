import { useState } from "react";

import AdminLayout from "../layouts/AdminLayout";

export default function OrdersPage() {
  const [network, setNetwork] =
    useState("All");

  const [orders, setOrders] =
    useState([
      {
        id: 1,
        ref: "DMX82AK",
        phone:
          "0241234567",
        network: "MTN",
        package:
          "200GB",
        amount:
          "GH₵ 350",
        status:
          "Delivered",
        date:
          "2026-05-20",
      },

      {
        id: 2,
        ref: "DMA91LP",
        phone:
          "0559988776",
        network:
          "Telecel",
        package:
          "Mashup",
        amount:
          "GH₵ 120",
        status:
          "Pending",
        date:
          "2026-05-20",
      },

      {
        id: 3,
        ref: "DMB55TR",
        phone:
          "0274455661",
        network:
          "AirtelTigo",
        package:
          "Voice + SMS",
        amount:
          "GH₵ 80",
        status:
          "Processing",
        date:
          "2026-05-19",
      },
    ]);

  function statusColor(
    status: string
  ) {
    switch (status) {
      case "Failed":
        return "#ef4444";

      case "Waiting":
        return "#9ca3af";

      case "Pending":
        return "#facc15";

      case "Processing":
        return "#3b82f6";

      case "Delivered":
        return "#22c55e";

      default:
        return "white";
    }
  }

  function updateStatus(
    id: number,
    status: string
  ) {
    const updated =
      orders.map(
        (order) => {
          if (
            order.id === id
          ) {
            return {
              ...order,
              status,
            };
          }

          return order;
        }
      );

    setOrders(updated);
  }

  function deleteOrder(
    id: number
  ) {
    const updated =
      orders.filter(
        (order) =>
          order.id !== id
      );

    setOrders(updated);
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
              All Networks
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
                "1200px",
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
                (order) => (
                  <tr
                    key={
                      order.id
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
                          value={
                            order.status
                          }
                          onChange={(
                            e
                          ) =>
                            updateStatus(
                              order.id,
                              e
                                .target
                                .value
                            )
                          }
                          style={{
                            background:
                              "#111827",
                            border:
                              "1px solid rgba(255,255,255,0.08)",
                            color:
                              "white",
                            padding:
                              "10px",
                            borderRadius:
                              "10px",
                          }}
                        >
                          <option>
                            Failed
                          </option>

                          <option>
                            Waiting
                          </option>

                          <option>
                            Pending
                          </option>

                          <option>
                            Processing
                          </option>

                          <option>
                            Delivered
                          </option>
                        </select>

                        <button
                          onClick={() =>
                            deleteOrder(
                              order.id
                            )
                          }
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
                              "10px",
                            fontWeight:
                              "700",
                            cursor:
                              "pointer",
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
