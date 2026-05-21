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

  const [search, setSearch] =
    useState("");

  const [statusFilter, setStatusFilter] =
    useState("All");

  const [networkFilter, setNetworkFilter] =
    useState("All");

  const [fromDate, setFromDate] =
    useState("");

  const [toDate, setToDate] =
    useState("");

  const [
    autoDeliveryTime,
    setAutoDeliveryTime,
  ] = useState("0");

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

  async function autoDeliverOrder(
    id: string,
    minutes: number
  ) {
    if (!minutes) return;

    setTimeout(async () => {
      await supabase
        .from("orders")
        .update({
          status:
            "Delivered",
        })
        .eq("id", id);
    }, minutes * 60 * 1000);
  }

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
              autoDeliveryTime !==
              "0",

            delivery_time:
              Number(
                autoDeliveryTime
              ),

            ordered_by:
              "Admin",

            source:
              "Admin",
          },
        ]);

    if (error) {
      console.log(error);

      alert(
        "Failed to create order"
      );

      return;
    }

    if (
      autoDeliveryTime !==
      "0"
    ) {
      const latest =
        await supabase
          .from("orders")
          .select("*")
          .order(
            "created_at",
            {
              ascending: false,
            }
          )
          .limit(1)
          .single();

      if (
        latest.data
      ) {
        autoDeliverOrder(
          latest.data.id,
          Number(
            autoDeliveryTime
          )
        );
      }
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

  const filteredOrders =
    orders.filter(
      (item) => {
        const matchesSearch =
          item.reference
            ?.toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||
          item.phone?.includes(
            search
          );

        const matchesStatus =
          statusFilter ===
            "All" ||
          item.status ===
            statusFilter;

        const matchesNetwork =
          networkFilter ===
            "All" ||
          item.network ===
            networkFilter;

        const orderDate =
          new Date(
            item.created_at
          );

        const matchesFrom =
          !fromDate ||
          orderDate >=
            new Date(
              fromDate
            );

        const matchesTo =
          !toDate ||
          orderDate <=
            new Date(
              toDate +
                "T23:59:59"
            );

        return (
          matchesSearch &&
          matchesStatus &&
          matchesNetwork &&
          matchesFrom &&
          matchesTo
        );
      }
    );

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

        {/* FILTERS */}

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
                "24px",
              fontWeight:
                "800",
              marginBottom:
                "24px",
            }}
          >
            Filters
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(200px,1fr))",
              gap: "18px",
            }}
          >
            <input
              placeholder="Search Ref or Phone"
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              style={inputStyle}
            />

            <select
              value={
                statusFilter
              }
              onChange={(e) =>
                setStatusFilter(
                  e.target.value
                )
              }
              style={inputStyle}
            >
              <option>
                All
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

            <select
              value={
                networkFilter
              }
              onChange={(e) =>
                setNetworkFilter(
                  e.target.value
                )
              }
              style={inputStyle}
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
            </select>

            <input
              type="date"
              value={
                fromDate
              }
              onChange={(e) =>
                setFromDate(
                  e.target.value
                )
              }
              style={inputStyle}
            />

            <input
              type="date"
              value={toDate}
              onChange={(e) =>
                setToDate(
                  e.target.value
                )
              }
              style={inputStyle}
            />
          </div>
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

            <select
              value={
                autoDeliveryTime
              }
              onChange={(
                e
              ) =>
                setAutoDeliveryTime(
                  e.target
                    .value
                )
              }
              style={
                inputStyle
              }
            >
              <option value="0">
                Manual Delivery
              </option>

              <option value="5">
                5 Minutes
              </option>

              <option value="10">
                10 Minutes
              </option>

              <option value="15">
                15 Minutes
              </option>

              <option value="20">
                20 Minutes
              </option>

              <option value="25">
                25 Minutes
              </option>

              <option value="30">
                30 Minutes
              </option>

              <option value="45">
                45 Minutes
              </option>

              <option value="60">
                1 Hour
              </option>

              <option value="90">
                1 Hour 30 Minutes
              </option>

              <option value="120">
                2 Hours
              </option>
            </select>
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
          ) : filteredOrders
              .length ===
            0 ? (
            <div
              style={{
                background:
                  "#0f172a",
                border:
                  "1px solid rgba(255,255,255,0.08)",
                borderRadius:
                  "24px",
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
            filteredOrders.map(
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
                      title="Source"
                      value={
                        item.source ||
                        "Admin"
                      }
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
