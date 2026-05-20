import { useState } from "react";

import AdminLayout from "../layouts/AdminLayout";

export default function OrdersPage() {
  const [orders, setOrders] =
    useState([
      {
        id: 1,
        customer: "Kwame",
        network: "MTN",
        package:
          "10GB Data Bundle",
        amount: "₵120",
        status: "pending",
        date: "20 May 2026",
      },

      {
        id: 2,
        customer: "Ama",
        network: "Telecel",
        package:
          "5GB Bundle",
        amount: "₵50",
        status: "delivered",
        date: "20 May 2026",
      },
    ]);

  function updateStatus(
    id: number,
    status: string
  ) {
    const updated =
      orders.map((order) =>
        order.id === id
          ? {
              ...order,
              status,
            }
          : order
      );

    setOrders(updated);
  }

  return (
    <AdminLayout>
      <h1 style={title}>
        Orders
      </h1>

      <div style={card}>
        <table style={table}>
          <thead>
            <tr>
              <th style={th}>
                Customer
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
                Date
              </th>

              <th style={th}>
                Update
              </th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                style={{
                  borderTop:
                    "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <td style={td}>
                  {
                    order.customer
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
                      ...statusStyle(
                        order.status
                      ),
                    }}
                  >
                    {
                      order.status
                    }
                  </span>
                </td>

                <td style={td}>
                  {order.date}
                </td>

                <td style={td}>
                  <select
                    value={
                      order.status
                    }
                    onChange={(
                      e
                    ) =>
                      updateStatus(
                        order.id,
                        e.target
                          .value
                      )
                    }
                    style={
                      selectStyle
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}

function statusStyle(
  status: string
) {
  switch (status) {
    case "failed":
      return {
        background:
          "#7f1d1d",
        color: "#fca5a5",
      };

    case "waiting":
      return {
        background:
          "#374151",
        color: "#d1d5db",
      };

    case "pending":
      return {
        background:
          "#78350f",
        color: "#fde68a",
      };

    case "processing":
      return {
        background:
          "#1e3a8a",
        color: "#93c5fd",
      };

    case "delivered":
      return {
        background:
          "#052e16",
        color: "#86efac",
      };

    default:
      return {};
  }
}

const title = {
  fontSize: "42px",
  fontWeight: "900",
  marginBottom: "24px",
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

const selectStyle = {
  background: "#111827",
  color: "white",
  border: "none",
  padding: "10px",
  borderRadius: "12px",
};
