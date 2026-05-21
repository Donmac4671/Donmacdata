import { useState } from "react";

import AdminLayout from "../layouts/AdminLayout";

export default function ComplaintsPage() {
  const [reply, setReply] =
    useState("");

  const complaints = [
    {
      id: 1,
      name: "Kwame",
      phone:
        "0551234567",
      message:
        "My order delayed",
      date:
        "2026-05-21",
    },

    {
      id: 2,
      name: "Ama",
      phone:
        "0201111111",
      message:
        "Topup not received",
      date:
        "2026-05-20",
    },
  ];

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
          Complaints
        </h1>

        <p
          style={{
            color:
              "#94a3b8",
            marginBottom:
              "30px",
          }}
        >
          View and reply
          to complaints
        </p>

        <div
          style={{
            display:
              "grid",
            gap: "20px",
          }}
        >
          {complaints.map(
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
                    marginBottom:
                      "20px",
                  }}
                >
                  <h2
                    style={{
                      fontSize:
                        "24px",
                      fontWeight:
                        "800",
                      marginBottom:
                        "12px",
                    }}
                  >
                    {
                      item.name
                    }
                  </h2>

                  <p
                    style={{
                      color:
                        "#94a3b8",
                      marginBottom:
                        "8px",
                    }}
                  >
                    {
                      item.phone
                    }
                  </p>

                  <p
                    style={{
                      marginBottom:
                        "8px",
                    }}
                  >
                    {
                      item.message
                    }
                  </p>

                  <p
                    style={{
                      color:
                        "#64748b",
                    }}
                  >
                    {
                      item.date
                    }
                  </p>
                </div>

                <div
                  style={{
                    display:
                      "grid",
                    gap: "14px",
                  }}
                >
                  <textarea
                    placeholder="Reply complaint..."
                    value={reply}
                    onChange={(e) =>
                      setReply(
                        e.target
                          .value
                      )
                    }
                    rows={4}
                    style={{
                      background:
                        "#111827",
                      border:
                        "1px solid rgba(255,255,255,0.08)",
                      color:
                        "white",
                      padding:
                        "16px",
                      borderRadius:
                        "16px",
                      outline:
                        "none",
                    }}
                  />

                  <button
                    style={{
                      background:
                        "#2563eb",
                      border:
                        "none",
                      color:
                        "white",
                      padding:
                        "14px 18px",
                      borderRadius:
                        "14px",
                      fontWeight:
                        "700",
                      cursor:
                        "pointer",
                    }}
                  >
                    Send Reply
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
