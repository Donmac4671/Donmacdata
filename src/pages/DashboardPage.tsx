import { useEffect, useState } from "react";

import AdminLayout from "../layouts/AdminLayout";

import { supabase } from "../lib/supabase";

export default function DashboardPage() {
  const [orders, setOrders] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  async function loadOrders() {
    setLoading(true);

    const { data, error } =
      await supabase
        .from("orders")
        .select("*")
        .order(
          "created_at",
          {
            ascending: false,
          }
        );

    if (error) {
      console.log(error);
      return;
    }

    setOrders(data || []);

    setLoading(false);
  }

  useEffect(() => {
    loadOrders();

    // REALTIME

    const channel =
      supabase
        .channel(
          "orders-live"
        )
        .on(
          "postgres_changes",
          {
            event: "*",
            schema:
              "public",
            table:
              "orders",
          },
          () => {
            loadOrders();
          }
        )
        .subscribe();

    return () => {
      supabase.removeChannel(
        channel
      );
    };
  }, []);

  const deliveredOrders =
    orders.filter(
      (item) =>
        item.status ===
        "Delivered"
    ).length;

  const processingOrders =
    orders.filter(
      (item) =>
        item.status ===
        "Processing"
    ).length;

  const failedOrders =
    orders.filter(
      (item) =>
        item.status ===
        "Failed"
    ).length;

  const totalRevenue =
    orders.reduce(
      (
        total,
        item
      ) =>
        total +
        Number(
          item.amount ||
            0
        ),
      0
    );

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

    if (
      value ===
      "Failed"
    )
      return "#ef4444";

    return "#94a3b8";
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
              }}
            >
              Live Telecom
              Management
              System
            </p>
          </div>

          <button
            onClick={
              loadOrders
            }
            style={{
              background:
                "#2563eb",
              border:
                "none",
              color:
                "white",
              padding:
                "14px 20px",
              borderRadius:
                "14px",
              fontWeight:
                "700",
              cursor:
                "pointer",
            }}
          >
            Refresh
          </button>
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
          <Card
            title="Total Orders"
            value={
              orders.length
            }
            color="#3b82f6"
          />

          <Card
            title="Delivered"
            value={
              deliveredOrders
            }
            color="#22c55e"
          />

          <Card
            title="Processing"
            value={
              processingOrders
            }
            color="#facc15"
          />

          <Card
            title="Failed"
            value={
              failedOrders
            }
            color="#ef4444"
          />

          <Card
            title="Revenue"
            value={`GH₵${totalRevenue}`}
            color="#8b5cf6"
          />
        </div>

        {/* ORDERS */}

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
              display: "flex",
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
                  "30px",
                fontWeight:
                  "800",
              }}
            >
              Recent Orders
            </h2>

            <div
              style={{
                color:
                  "#22c55e",
                fontWeight:
                  "700",
              }}
            >
              LIVE
            </div>
          </div>

          {loading ? (
            <div
              style={{
                padding:
                  "40px",
                textAlign:
                  "center",
                color:
                  "#94a3b8",
              }}
            >
              Loading orders...
            </div>
          ) : orders.length ===
            0 ? (
            <div
              style={{
                padding:
                  "40px",
                textAlign:
                  "center",
                color:
                  "#94a3b8",
              }}
            >
              No orders found
            </div>
          ) : (
            <table
              style={{
                width:
                  "100%",
                borderCollapse:
                  "collapse",
                minWidth:
                  "900px",
              }}
            >
              <thead>
                <tr>
                  {[
                    "Reference",
                    "Network",
                    "Package",
                    "Phone",
                    "Amount",
                    "Status",
                    "Date",
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
                            "18px",
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
                {orders.map(
                  (
                    item
                  ) => (
                    <tr
                      key={
                        item.id
                      }
                    >
                      <td
                        style={
                          tdStyle
                        }
                      >
                        {
                          item.reference
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
                          item.package
                        }
                      </td>

                      <td
                        style={
                          tdStyle
                        }
                      >
                        {
                          item.phone
                        }
                      </td>

                      <td
                        style={
                          tdStyle
                        }
                      >
                        GH₵
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

                      <td
                        style={
                          tdStyle
                        }
                      >
                        {new Date(
                          item.created_at
                        ).toLocaleString()}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}

function Card({
  title,
  value,
  color,
}: {
  title: string;
  value: any;
  color: string;
}) {
  return (
    <div
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
          width: "60px",
          height: "60px",
          borderRadius:
            "18px",
          background:
            color,
          opacity: 0.15,
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
        }}
      >
        {title}
      </p>

      <h2
        style={{
          fontSize:
            "34px",
          fontWeight:
            "900",
          color:
            color,
        }}
      >
        {value}
      </h2>
    </div>
  );
}

const tdStyle = {
  padding: "18px",
  borderBottom:
    "1px solid rgba(255,255,255,0.08)",
};
