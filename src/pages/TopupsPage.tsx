import { useState } from "react";

import AdminLayout from "../layouts/AdminLayout";

export default function TopupsPage() {
  const [topups, setTopups] =
    useState([
      {
        id: 1,
        transaction:
          "TXN29383",
        network: "MTN",
        amount:
          "GH₵50",
        status:
          "Claimed",
        claimedBy:
          "Kwame",
        date:
          "2026-05-21",
      },

      {
        id: 2,
        transaction:
          "TXN77281",
        network:
          "Telecel",
        amount:
          "GH₵20",
        status:
          "Unclaimed",
        claimedBy:
          "-",
        date:
          "2026-05-20",
      },
    ]);

  function deleteTopup(
    id: number
  ) {
    setTopups(
      topups.filter(
        (item) =>
          item.id !== id
      )
    );
  }

  return (
    <AdminLayout>
      <div>
        <h1
          style={{
            fontSize:
              "38px",
            fontWeight:
              "900",
            marginBottom:
              "10px",
          }}
        >
          Top Ups
        </h1>

        <p
          style={{
            color:
              "#94a3b8",
            marginBottom:
              "30px",
          }}
        >
          Manage reseller
          topup claims
        </p>

        <div
          style={{
            display:
              "grid",
            gap: "20px",
          }}
        >
          {topups.map(
            (item) => (
              <div
                key={
                  item.id
                }
                style={{
                  background:
                    "#0f172a",
                  padding:
                    "24px",
                  borderRadius:
                    "24px",
                  border:
                    "1px solid rgba(255,255,255,0.08)",
                }}
              >
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
                        titleStyle
                      }
                    >
                      Transaction
                    </p>

                    <h3
                      style={
                        valueStyle
                      }
                    >
                      {
                        item.transaction
                      }
                    </h3>
                  </div>

                  <div>
                    <p
                      style={
                        titleStyle
                      }
                    >
                      Network
                    </p>

                    <h3
                      style={
                        valueStyle
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
                        titleStyle
                      }
                    >
                      Amount
                    </p>

                    <h3
                      style={
                        valueStyle
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
                        titleStyle
                      }
                    >
                      Status
                    </p>

                    <h3
                      style={{
                        ...valueStyle,
                        color:
                          item.status ===
                          "Claimed"
                            ? "#22c55e"
                            : "#ef4444",
                      }}
                    >
                      {
                        item.status
                      }
                    </h3>
                  </div>

                  <div>
                    <p
                      style={
                        titleStyle
                      }
                    >
                      Claimed By
                    </p>

                    <h3
                      style={
                        valueStyle
                      }
                    >
                      {
                        item.claimedBy
                      }
                    </h3>
                  </div>

                  <div>
                    <p
                      style={
                        titleStyle
                      }
                    >
                      Date
                    </p>

                    <h3
                      style={
                        valueStyle
                      }
                    >
                      {
                        item.date
                      }
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() =>
                    deleteTopup(
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
            )
          )}
        </div>
      </div>
    </AdminLayout>
  );
}

const titleStyle = {
  color: "#94a3b8",
  marginBottom:
    "8px",
  fontSize: "14px",
};

const valueStyle = {
  fontSize: "18px",
  fontWeight:
    "700",
};
