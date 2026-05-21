import {
  useEffect,
  useMemo,
  useState,
} from "react";

import AdminLayout from "../layouts/AdminLayout";

import { supabase } from "../lib/supabase";

export default function OrdersPage() {
  const [orders, setOrders] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  const [statusFilter, setStatusFilter] =
    useState("All");

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
        "Delete order?"
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

  const filteredOrders =
    useMemo(() => {
      return orders.filter(
        (item) => {
          const matchesSearch =
            item.phone
              ?.toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||
            item.reference
              ?.toLowerCase()
              .includes(
                search.toLowerCase()
              );

          const matchesStatus =
            statusFilter ===
              "All" ||
            item.status ===
              statusFilter;

          return (
            matchesSearch &&
            matchesStatus
          );
        }
      );
    }, [
      orders,
      search,
      statusFilter,
    ]);

  const totalRevenue =
    orders.reduce(
      (
        total,
        item
      ) =>
        total +
        Number(
          item.amount || 0
        ),
      0
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
              fontSize:
                "18px",
            }}
          >
            Live Telecom
            Order Processing
            Center
          </p>
        </div>

        {/* STATS */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
            marginBottom:
              "30px",
          }}
        >
          <StatCard
            title="Total Orders"
            value={
              orders.length
            }
          />

          <StatCard
            title="Pending"
            value={
              orders.filter(
                (
                  x
                ) =>
                  x.status ===
                  "Pending"
              ).length
            }
          />

          <StatCard
            title="Waiting"
            value={
              orders.filter(
                (
                  x
                ) =>
                  x.status ===
                  "Waiting"
              ).length
            }
          />

          <StatCard
            title="Processing"
            value={
              orders.filter(
                (
                  x
                ) =>
                  x.status ===
                  "Processing"
              ).length
            }
          />

          <StatCard
            title="Delivered"
            value={
              orders.filter(
                (
                  x
                ) =>
                  x.status ===
                  "Delivered"
              ).length
            }
          />

          <StatCard
            title="Revenue"
            value={`GH₵${totalRevenue}`}
          />
        </div>

        {/* FILTERS */}

        <div
          style={{
            background:
              "#081028",
            border:
              "1px solid rgba(255,255,255,0.08)",
            borderRadius:
              "24px",
            padding:
              "20px",
            marginBottom:
              "30px",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap: "16px",
          }}
        >
          <input
            placeholder="Search phone or reference"
            value={search}
            onChange={(
              e
            ) =>
              setSearch(
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
              statusFilter
            }
            onChange={(
              e
            ) =>
              setStatusFilter(
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
              Pending
            </option>

            <option>
              Waiting
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
        </div>

        {/* ORDERS */}

        {loading ? (
          <div
            style={{
              textAlign:
                "center",
              padding:
                "50px",
              color:
                "#94a3b8",
            }}
          >
            Loading orders...
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gap: "20px",
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
                      "#081028",
                    border:
                      "1px solid rgba(255,255,255,0.08)",
                    borderRadius:
                      "28px",
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
                            "900",
                          marginBottom:
                            "8px",
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

                    <StatusBadge
                      status={
                        item.status
                      }
                    />
                  </div>

                  {/* DETAILS */}

                  <div
                    style={{
                      display:
                        "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit,minmax(180px,1fr))",
                      gap: "20px",
                      marginBottom:
                        "24px",
                    }}
                  >
                    <Info
                      title="Package"
                      value={
                        item.package
                      }
                    />

                    <Info
                      title="Network"
                      value={
                        item.network
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
                        "Customer"
                      }
                    />

                    <Info
                      title="Validity"
                      value={
                        item.validity ||
                        "N/A"
                      }
                    />

                    <Info
                      title="Date"
                      value={new Date(
                        item.created_at
                      ).toLocaleString()}
                    />
                  </div>

                  {/* ACTIONS */}

                  <div
                    style={{
                      display:
                        "flex",
                      gap: "12px",
                      flexWrap:
                        "wrap",
                    }}
                  >
                    <ActionButton
                      title="Pending"
                      color="#facc15"
                      onClick={() =>
                        updateStatus(
                          item.id,
                          "Pending"
                        )
                      }
                    />

                    <ActionButton
                      title="Waiting"
                      color="#f97316"
                      onClick={() =>
                        updateStatus(
                          item.id,
                          "Waiting"
                        )
                      }
                    />

                    <ActionButton
                      title="Processing"
                      color="#3b82f6"
                      onClick={() =>
                        updateStatus(
                          item.id,
                          "Processing"
                        )
                      }
                    />

                    <ActionButton
                      title="Delivered"
                      color="#22c55e"
                      onClick={() =>
                        updateStatus(
                          item.id,
                          "Delivered"
                        )
                      }
                    />

                    <ActionButton
                      title="Failed"
                      color="#ef4444"
                      onClick={() =>
                        updateStatus(
                          item.id,
                          "Failed"
                        )
                      }
                    />

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
        )}
      </div>
    </AdminLayout>
  );
}

function StatCard({
  title,
  value,
}: any) {
  return (
    <div
      style={{
        background:
          "#081028",
        border:
          "1px solid rgba(255,255,255,0.08)",
        borderRadius:
          "24px",
        padding:
          "24px",
      }}
    >
      <p
        style={{
          color:
            "#94a3b8",
          marginBottom:
            "10px",
        }}
      >
        {title}
      </p>

      <h1
        style={{
          fontSize:
            "34px",
          fontWeight:
            "900",
        }}
      >
        {value}
      </h1>
    </div>
  );
}

function Info({
  title,
  value,
}: any) {
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
          fontWeight:
            "800",
          fontSize:
            "18px",
        }}
      >
        {value}
      </h3>
    </div>
  );
}

function StatusBadge({
  status,
}: any) {
  function bg() {
    if (
      status ===
      "Delivered"
    )
      return "#052e16";

    if (
      status ===
      "Processing"
    )
      return "#172554";

    if (
      status ===
      "Waiting"
    )
      return "#431407";

    if (
      status ===
      "Pending"
    )
      return "#422006";

    if (
      status ===
      "Failed"
    )
      return "#450a0a";

    return "#111827";
  }

  function color() {
    if (
      status ===
      "Delivered"
    )
      return "#22c55e";

    if (
      status ===
      "Processing"
    )
      return "#60a5fa";

    if (
      status ===
      "Waiting"
    )
      return "#fb923c";

    if (
      status ===
      "Pending"
    )
      return "#facc15";

    if (
      status ===
      "Failed"
    )
      return "#ef4444";

    return "white";
  }

  return (
    <div
      style={{
        background:
          bg(),
        color:
          color(),
        padding:
          "10px 18px",
        borderRadius:
          "999px",
        fontWeight:
          "800",
      }}
    >
      {status}
    </div>
  );
}

function ActionButton({
  title,
  color,
  onClick,
}: any) {
  return (
    <button
      onClick={onClick}
      style={{
        background:
          "#111827",
        border:
          "1px solid rgba(255,255,255,0.08)",
        color,
        padding:
          "12px 18px",
        borderRadius:
          "12px",
        fontWeight:
          "800",
        cursor:
          "pointer",
      }}
    >
      {title}
    </button>
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
