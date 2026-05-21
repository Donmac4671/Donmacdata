import { useState } from "react";

import AdminLayout from "../layouts/AdminLayout";

function generateRef() {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  let result = "";

  for (let i = 0; i < 7; i++) {
    result +=
      chars[
        Math.floor(
          Math.random() *
            chars.length
        )
      ];
  }

  return result;
}

export default function OrdersPage() {
  const [search, setSearch] =
    useState("");

  const [network, setNetwork] =
    useState("All");

  const [status, setStatus] =
    useState("All");

  const [autoTime, setAutoTime] =
    useState("15 Minutes");

  const [orders, setOrders] =
    useState([
      {
        id: 1,
        ref: generateRef(),
        phone:
          "0551234567",
        network: "MTN",
        package:
          "10GB",
        amount:
          "GH₵43.00",
        status:
          "Delivered",
        auto:
          true,
        date:
          "2026-05-21",
      },

      {
        id: 2,
        ref: generateRef(),
        phone:
          "0209876543",
        network:
          "Telecel",
        package:
          "Mashup",
        amount:
          "GH₵10.00",
        status:
          "Processing",
        auto:
          true,
        date:
          "2026-05-21",
      },

      {
        id: 3,
        ref: generateRef(),
        phone:
          "0277777777",
        network:
          "AirtelTigo",
        package:
          "50GB",
        amount:
          "GH₵95.00",
        status:
          "Pending",
        auto:
          false,
        date:
          "2026-05-20",
      },
    ]);

  const filteredOrders =
    orders.filter(
      (item) => {
        const matchesSearch =
          item.phone.includes(
            search
          ) ||
          item.ref
            .toLowerCase()
            .includes(
              search.toLowerCase()
            );

        const matchesNetwork =
          network ===
            "All" ||
          item.network ===
            network;

        const matchesStatus =
          status ===
            "All" ||
          item.status ===
            status;

        return (
          matchesSearch &&
          matchesNetwork &&
          matchesStatus
        );
      }
    );

  function updateStatus(
    id: number,
    newStatus: string
  ) {
    const updated =
      orders.map(
        (item) => {
          if (
            item.id === id
          ) {
            return {
              ...item,
              status:
                newStatus,
            };
          }

          return item;
        }
      );

    setOrders(updated);
  }

  function deleteOrder(
    id: number
  ) {
    const updated =
      orders.filter(
        (item) =>
          item.id !== id
      );

    setOrders(updated);
  }

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
      "Failed"
    )
      return "#ef4444";

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

    return "#9ca3af";
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
                  "38px",

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
              customer orders
            </p>
          </div>

          <div
            style={{
              background:
                "#0f172a",

              padding:
                "14px 18px",

              borderRadius:
                "16px",

              border:
                "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <p
              style={{
                color:
                  "#94a3b8",

                fontSize:
                  "14px",

                marginBottom:
                  "6px",
              }}
            >
              Auto Delivery
            </p>

            <select
              value={
                autoTime
              }
              onChange={(
                e
              ) =>
                setAutoTime(
                  e.target
                    .value
                )
              }
              style={{
                background:
                  "#111827",

                color:
                  "white",

                border:
                  "none",

                padding:
                  "10px",

                borderRadius:
                  "10px",

                outline:
                  "none",
              }}
            >
              <option>
                5 Minutes
              </option>

              <option>
                10 Minutes
              </option>

              <option>
                15 Minutes
              </option>

              <option>
                20 Minutes
              </option>

              <option>
                25 Minutes
              </option>

              <option>
                30 Minutes
              </option>

              <option>
                45 Minutes
              </option>

              <option>
                1 Hour
              </option>

              <option>
                1 Hour 30 Minutes
              </option>

              <option>
                2 Hours
              </option>
            </select>
          </div>
        </div>

        {/* FILTERS */}

        <div
          style={{
            display: "grid",

            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",

            gap: "18px",

            marginBottom:
              "30px",
          }}
        >
          <input
            placeholder="Search phone or ref code"
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            style={
              inputStyle
            }
          />

          <select
            value={network}
            onChange={(e) =>
              setNetwork(
                e.target.value
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
            onChange={(e) =>
              setStatus(
                e.target.value
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

            <option>
              Failed
            </option>
          </select>

          <input
            type="date"
            style={
              inputStyle
            }
          />

          <input
            type="date"
            style={
              inputStyle
            }
          />
        </div>

        {/* STATS */}

        <div
          style={{
            display: "grid",

            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",

            gap: "18px",

            marginBottom:
              "30px",
          }}
        >
          <div
            style={
              statCard
            }
          >
            <p
              style={
                statTitle
              }
            >
              Total Orders
            </p>

            <h2
              style={
                statValue
              }
            >
              {
                filteredOrders.length
              }
            </h2>
          </div>

          <div
            style={
              statCard
            }
          >
            <p
              style={
                statTitle
              }
            >
              Delivered
            </p>

            <h2
              style={{
                ...statValue,
                color:
                  "#22c55e",
              }}
            >
              {
                filteredOrders.filter(
                  (
                    item
                  ) =>
                    item.status ===
                    "Delivered"
                ).length
              }
            </h2>
          </div>

          <div
            style={
              statCard
            }
          >
            <p
              style={
                statTitle
              }
            >
              Processing
            </p>

            <h2
              style={{
                ...statValue,
                color:
                  "#3b82f6",
              }}
            >
              {
                filteredOrders.filter(
                  (
                    item
                  ) =>
                    item.status ===
                    "Processing"
                ).length
              }
            </h2>
          </div>

          <div
            style={
              statCard
            }
          >
            <p
              style={
                statTitle
              }
            >
              Failed
            </p>

            <h2
              style={{
                ...statValue,
                color:
                  "#ef4444",
              }}
            >
              {
                filteredOrders.filter(
                  (
                    item
                  ) =>
                    item.status ===
                    "Failed"
                ).length
              }
            </h2>
          </div>
        </div>

        {/* ORDERS */}

        <div
          style={{
            display: "grid",

            gap: "22px",
          }}
        >
          {filteredOrders.map(
            (item) => (
              <div
                key={
                  item.id
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
                {/* TOP */}

                <div
                  style={{
                    display:
                      "flex",

                    justifyContent:
                      "space-between",

                    alignItems:
                      "center",

                    flexWrap:
                      "wrap",

                    gap: "18px",

                    marginBottom:
                      "20px",
                  }}
                >
                  <div>
                    <h2
                      style={{
                        fontSize:
                          "22px",

                        fontWeight:
                          "800",

                        marginBottom:
                          "10px",
                      }}
                    >
                      {
                        item.ref
                      }
                    </h2>

                    <p
                      style={{
                        color:
                          "#94a3b8",
                      }}
                    >
                      {
                        item.phone
                      }
                    </p>
                  </div>

                  <div>
                    <span
                      style={{
                        color:
                          statusColor(
                            item.status
                          ),

                        fontWeight:
                          "800",

                        fontSize:
                          "15px",
                      }}
                    >
                      {
                        item.status
                      }
                    </span>
                  </div>
                </div>

                {/* DETAILS */}

                <div
                  style={{
                    display:
                      "grid",

                    gridTemplateColumns:
                      "repeat(auto-fit,minmax(180px,1fr))",

                    gap: "18px",

                    marginBottom:
                      "24px",
                  }}
                >
                  <div>
                    <p
                      style={
                        detailTitle
                      }
                    >
                      Network
                    </p>

                    <h3
                      style={
                        detailValue
                      }
                    >
                      {
                        item.network
                      }
                    </h3>
                  </div>

                  <div>
                    <p
                      style={
                        detailTitle
                      }
                    >
                      Package
                    </p>

                    <h3
                      style={
                        detailValue
                      }
                    >
                      {
                        item.package
                      }
                    </h3>
                  </div>

                  <div>
                    <p
                      style={
                        detailTitle
                      }
                    >
                      Amount
                    </p>

                    <h3
                      style={
                        detailValue
                      }
                    >
                      {
                        item.amount
                      }
                    </h3>
                  </div>

                  <div>
                    <p
                      style={
                        detailTitle
                      }
                    >
                      Date
                    </p>

                    <h3
                      style={
                        detailValue
                      }
                    >
                      {
                        item.date
                      }
                    </h3>
                  </div>
                </div>

                {/* ACTIONS */}

                <div
                  style={{
                    display:
                      "flex",

                    flexWrap:
                      "wrap",

                    gap: "12px",
                  }}
                >
                  <button
                    onClick={() =>
                      updateStatus(
                        item.id,
                        "Waiting"
                      )
                    }
                    style={{
                      ...statusButton,
                      color:
                        "#9ca3af",
                    }}
                  >
                    Waiting
                  </button>

                  <button
                    onClick={() =>
                      updateStatus(
                        item.id,
                        "Pending"
                      )
                    }
                    style={{
                      ...statusButton,
                      color:
                        "#facc15",
                    }}
                  >
                    Pending
                  </button>

                  <button
                    onClick={() =>
                      updateStatus(
                        item.id,
                        "Processing"
                      )
                    }
                    style={{
                      ...statusButton,
                      color:
                        "#3b82f6",
                    }}
                  >
                    Processing
                  </button>

                  <button
                    onClick={() =>
                      updateStatus(
                        item.id,
                        "Delivered"
                      )
                    }
                    style={{
                      ...statusButton,
                      color:
                        "#22c55e",
                    }}
                  >
                    Delivered
                  </button>

                  <button
                    onClick={() =>
                      updateStatus(
                        item.id,
                        "Failed"
                      )
                    }
                    style={{
                      ...statusButton,
                      color:
                        "#ef4444",
                    }}
                  >
                    Failed
                  </button>

                  <button
                    onClick={() =>
                      deleteOrder(
                        item.id
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
                        "12px 18px",

                      borderRadius:
                        "12px",

                      fontWeight:
                        "700",

                      cursor:
                        "pointer",
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )
          )}
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

  padding: "16px",

  borderRadius:
    "16px",

  outline: "none",

  width: "100%",

  boxSizing:
    "border-box" as const,
};

const statCard = {
  background:
    "#0f172a",

  padding: "18px",

  borderRadius:
    "18px",

  border:
    "1px solid rgba(255,255,255,0.08)",
};

const statTitle = {
  color: "#94a3b8",

  marginBottom:
    "8px",

  fontSize: "14px",
};

const statValue = {
  fontSize: "28px",

  fontWeight:
    "900",
};

const detailTitle = {
  color: "#94a3b8",

  marginBottom:
    "8px",

  fontSize: "14px",
};

const detailValue = {
  fontSize: "18px",

  fontWeight:
    "700",
};

const statusButton = {
  background:
    "#111827",

  border:
    "1px solid rgba(255,255,255,0.08)",

  padding:
    "12px 16px",

  borderRadius:
    "12px",

  fontWeight:
    "700",

  cursor:
    "pointer",
};
