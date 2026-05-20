import {
  useState,
} from "react";

import AdminLayout from "../layouts/AdminLayout";

function generateRef() {
  return Math.random()
    .toString(36)
    .substring(2, 10)
    .toUpperCase();
}

export default function OrdersPage() {
  const [orders, setOrders] =
    useState([
      {
        id: 1,
        ref: generateRef(),
        phone: "0240000000",
        network: "MTN",
        package:
          "10GB Bundle",
        amount: "₵120",
        status: "pending",
        autoTime: "15 mins",
        date: "2026-05-20",
      },
    ]);

  const [
    search,
    setSearch,
  ] = useState("");

  const [
    network,
    setNetwork,
  ] = useState("");

  const filtered =
    orders.filter((o) => {
      return (
        (o.ref
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
          o.phone.includes(
            search
          )) &&
        (network
          ? o.network ===
            network
          : true)
      );
    });

  function updateStatus(
    id: number,
    status: string
  ) {
    setOrders(
      orders.map((o) =>
        o.id === id
          ? {
              ...o,
              status,
            }
          : o
      )
    );
  }

  function deleteOrder(
    id: number
  ) {
    const confirmDelete =
      confirm(
        "Delete order?"
      );

    if (!confirmDelete)
      return;

    setOrders(
      orders.filter(
        (o) => o.id !== id
      )
    );
  }

  return (
    <AdminLayout>
      <h1 style={title}>
        Orders
      </h1>

      {/* FILTERS */}
      <div style={filterWrap}>
        <input
          placeholder="Search ref or phone"
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          style={input}
        />

        <select
          value={network}
          onChange={(e) =>
            setNetwork(
              e.target.value
            )
          }
          style={input}
        >
          <option value="">
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
          style={input}
        />

        <input
          type="date"
          style={input}
        />
      </div>

      {/* TABLE */}
      <div style={card}>
        <table style={table}>
          <thead>
            <tr>
              <th style={th}>
                Ref Code
              </th>

              <th style={th}>
                Phone
              </th>

              <th style={th}>
                Network
              </th>

              <th style={th}>
                Package
              </th>

              <th style={th}>
                Amount
              </th>

              <th style={th}>
                Status
              </th>

              <th style={th}>
                Auto Deliver
              </th>

              <th style={th}>
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {filtered.map(
              (order) => (
                <tr
                  key={
                    order.id
                  }
                  style={{
                    borderTop:
                      "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <td style={td}>
                    {order.ref}
                  </td>

                  <td style={td}>
                    {
                      order.phone
                    }
                  </td>

                  <td style={td}>
                    {
                      order.network
                    }
                  </td>

                  <td style={td}>
                    {
                      order.package
                    }
                  </td>

                  <td style={td}>
                    {
                      order.amount
                    }
                  </td>

                  <td style={td}>
                    <span
                      style={{
                        color:
                          getStatusColor(
                            order.status
                          ),
                        fontWeight:
                          "700",
                      }}
                    >
                      {
                        order.status
                      }
                    </span>
                  </td>

                  <td style={td}>
                    <select
                      style={
                        input
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
                  </td>

                  <td style={td}>
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
                        style={
                          input
                        }
                      >
                        <option value="failed">
                          Failed
                        </option>

                        <option value="waiting">
                          Waiting
                        </option>

                        <option value="pending">
                          Pending
                        </option>

                        <option value="processing">
                          Processing
                        </option>

                        <option value="delivered">
                          Delivered
                        </option>
                      </select>

                      <button
                        onClick={() =>
                          deleteOrder(
                            order.id
                          )
                        }
                        style={
                          deleteBtn
                        }
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
    </AdminLayout>
  );
}

function getStatusColor(
  status: string
) {
  switch (status) {
    case "failed":
      return "#ef4444";

    case "waiting":
      return "#9ca3af";

    case "pending":
      return "#facc15";

    case "processing":
      return "#3b82f6";

    case "delivered":
      return "#22c55e";

    default:
      return "white";
  }
}

const title = {
  fontSize: "42px",
  fontWeight: "900",
  marginBottom: "24px",
};

const filterWrap = {
  display: "flex",
  gap: "14px",
  flexWrap: "wrap" as const,
  marginBottom: "24px",
};

const input = {
  background: "#111827",
  border: "none",
  padding: "14px",
  borderRadius: "14px",
  color: "white",
};

const card = {
  background: "#0B1120",
  padding: "24px",
  borderRadius: "24px",
  overflowX: "auto" as const,
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

const deleteBtn = {
  background: "#dc2626",
  border: "none",
  color: "white",
  padding: "12px 16px",
  borderRadius: "12px",
  cursor: "pointer",
};
