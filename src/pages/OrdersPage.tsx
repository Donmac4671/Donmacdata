import {
  useEffect,
  useState,
} from "react";

import AdminLayout from "../layouts/AdminLayout";

import { supabase } from "../lib/supabase";

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
  const [orders, setOrders] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [network, setNetwork] =
    useState("MTN");

  const [packageName, setPackageName] =
    useState("10GB");

  const [phone, setPhone] =
    useState("");

  const [amount, setAmount] =
    useState("");

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

    const channel =
      supabase
        .channel(
          "orders-realtime"
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

  async function createOrder() {
    if (
      !phone ||
      !amount
    ) {
      alert(
        "Fill all fields"
      );

      return;
    }

    const { error } =
      await supabase
        .from("orders")
        .insert([
          {
            reference:
              generateRef(),
            network,
            package:
              packageName,
            phone,
            amount:
              Number(
                amount
              ),
            status:
              "Pending",
            auto_delivery:
              false,
          },
        ]);

    if (error) {
      console.log(error);

      alert(
        "Failed to create order"
      );

      return;
    }

    setPhone("");
    setAmount("");

    alert(
      "Order created"
    );
  }

  async function updateStatus(
    id: string,
    status: string
  ) {
    const { error } =
      await supabase
        .from("orders")
        .update({
          status,
        })
        .eq("id", id);

    if (error) {
      console.log(error);

      return;
    }
  }

  async function deleteOrder(
    id: string
  ) {
    const confirmed =
      confirm(
        "Delete this order?"
      );

    if (!confirmed)
      return;

    const { error } =
      await supabase
        .from("orders")
        .delete()
        .eq("id", id);

    if (error) {
      console.log(error);
    }
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
            Orders
          </h1>

          <p
            style={{
              color:
                "#94a3b8",
            }}
          >
            Live Telecom
            Order Management
          </p>
        </div>

        {/* CREATE ORDER */}

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
            marginBottom:
              "30px",
          }}
        >
          <h2
            style={{
              fontSize:
                "26px",
              fontWeight:
                "800",
              marginBottom:
                "24px",
            }}
          >
            Create Order
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(220px,1fr))",
              gap: "18px",
            }}
          >
            <select
              value={
                network
              }
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
                MTN
              </option>

              <option>
                Telecel
              </option>

              <option>
                AirtelTigo
              </option>
            </select>

            <input
              placeholder="Package"
              value={
                packageName
              }
              onChange={(
                e
              ) =>
                setPackageName(
                  e.target
                    .value
                )
              }
              style={
                inputStyle
              }
            />

            <input
              placeholder="Phone Number"
              value={phone}
              onChange={(
                e
              ) =>
                setPhone(
                  e.target
                    .value
                )
              }
              style={
                inputStyle
              }
            />

            <input
              placeholder="Amount"
              value={amount}
              onChange={(
                e
              ) =>
                setAmount(
                  e.target
                    .value
                )
              }
              style={
                inputStyle
              }
            />
          </div>

          <button
            onClick={
              createOrder
            }
            style={{
              marginTop:
                "24px",
              background:
                "#2563eb",
              border:
                "none",
              color:
                "white",
              padding:
                "14px 22px",
              borderRadius:
                "14px",
              fontWeight:
                "700",
              cursor:
                "pointer",
            }}
          >
            Create Order
          </button>
        </div>

        {/* ORDERS */}

        <div
          style={{
            display: "grid",
            gap: "20px",
          }}
        >
          {loading ? (
            <div
              style={{
                textAlign:
                  "center",
                padding:
                  "40px",
                color:
                  "#94a3b8",
              }}
            >
              Loading...
            </div>
          ) : (
            orders.map(
              (item) => (
                <div
                  key={
                    item.id
                  }
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
                      gap: "20px",
                      marginBottom:
                        "20px",
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
                            "10px",
                        }}
                      >
                        {
                          item.reference
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

                    <div
                      style={{
                        color:
                          statusColor(
                            item.status
                          ),
                        fontWeight:
                          "800",
                        fontSize:
                          "16px",
                      }}
                    >
                      {
                        item.status
                      }
                    </div>
                  </div>

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
                    <Info
                      title="Network"
                      value={
                        item.network
                      }
                    />

                    <Info
                      title="Package"
                      value={
                        item.package
                      }
                    />

                    <Info
                      title="Amount"
                      value={`GH₵${item.amount}`}
                    />

                    <Info
                      title="Date"
                      value={new Date(
                        item.created_at
                      ).toLocaleString()}
                    />
                  </div>

                  <div
                    style={{
                      display:
                        "flex",
                      gap: "12px",
                      flexWrap:
                        "wrap",
                    }}
                  >
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
            )
          )}
        </div>
      </div>
    </AdminLayout>
  );
}

function Info({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div>
      <p
        style={{
          color:
            "#94a3b8",
          marginBottom:
            "8px",
          fontSize:
            "14px",
        }}
      >
        {title}
      </p>

      <h3
        style={{
          fontSize:
            "18px",
          fontWeight:
            "700",
        }}
      >
        {value}
      </h3>
    </div>
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
