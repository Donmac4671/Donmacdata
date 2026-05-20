import {
  useState,
} from "react";

import AdminLayout from "../layouts/AdminLayout";

export default function TopupsPage() {
  const [topups] =
    useState([
      {
        id: "TP123",
        network: "MTN",
        amount: "₵200",
        status:
          "claimed",
        claimedBy:
          "Kwame",
        date:
          "2026-05-20",
      },
    ]);

  return (
    <AdminLayout>
      <h1 style={title}>
        Top Ups
      </h1>

      {/* FILTERS */}
      <div style={filterWrap}>
        <input
          type="date"
          style={input}
        />

        <input
          type="date"
          style={input}
        />
      </div>

      <div style={card}>
        <table style={table}>
          <thead>
            <tr>
              <th style={th}>
                Transaction ID
              </th>

              <th style={th}>
                Network
              </th>

              <th style={th}>
                Amount
              </th>

              <th style={th}>
                Status
              </th>

              <th style={th}>
                Claimed By
              </th>

              <th style={th}>
                Date
              </th>
            </tr>
          </thead>

          <tbody>
            {topups.map(
              (topup) => (
                <tr
                  key={
                    topup.id
                  }
                >
                  <td style={td}>
                    {
                      topup.id
                    }
                  </td>

                  <td style={td}>
                    {
                      topup.network
                    }
                  </td>

                  <td style={td}>
                    {
                      topup.amount
                    }
                  </td>

                  <td style={td}>
                    {
                      topup.status
                    }
                  </td>

                  <td style={td}>
                    {
                      topup.claimedBy
                    }
                  </td>

                  <td style={td}>
                    {
                      topup.date
                    }
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
  border: "1px solid #374151",
  color: "white",
  padding: "14px",
  borderRadius: "14px",
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
