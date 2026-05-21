import { useState } from "react";

import AdminLayout from "../layouts/AdminLayout";

export default function ComplaintsPage() {
  const [
    complaints,
    setComplaints,
  ] = useState([
    {
      id: 1,
      user:
        "Michael Mensah",
      phone:
        "0241234567",
      message:
        "MTN bundle delayed after payment.",

      status: "Pending",

      date:
        "2026-05-20",

      reply: "",
    },

    {
      id: 2,
      user:
        "Sarah Arthur",
      phone:
        "0559988776",
      message:
        "Wallet deducted twice.",

      status:
        "Resolved",

      date:
        "2026-05-19",

      reply:
        "Refund has been processed.",
    },
  ]);

  const [replyBox, setReplyBox] =
    useState("");

  function statusColor(
    status: string
  ) {
    switch (status) {
      case "Pending":
        return "#facc15";

      case "Resolved":
        return "#22c55e";

      default:
        return "white";
    }
  }

  function replyComplaint(
    id: number
  ) {
    const updated =
      complaints.map(
        (
          complaint
        ) => {
          if (
            complaint.id ===
            id
          ) {
            return {
              ...complaint,

              reply:
                replyBox,

              status:
                "Resolved",
            };
          }

          return complaint;
        }
      );

    setComplaints(
      updated
    );

    setReplyBox("");
  }

  function deleteComplaint(
    id: number
  ) {
    const updated =
      complaints.filter(
        (
          complaint
        ) =>
          complaint.id !==
          id
      );

    setComplaints(
      updated
    );
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
                "40px",

              fontWeight:
                "900",

              marginBottom:
                "8px",
            }}
          >
            Complaints
          </h1>

          <p
            style={{
              color:
                "#94a3b8",
            }}
          >
            Manage reseller
            and customer
            complaints
          </p>
        </div>

        {/* FILTERS */}
        <div
          style={{
            background:
              "#0f172a",

            padding: "24px",

            borderRadius:
              "24px",

            marginBottom:
              "30px",

            display: "grid",

            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",

            gap: "18px",

            border:
              "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <input
            placeholder="Search phone or customer"
            style={inputStyle}
          />

          <input
            type="date"
            style={inputStyle}
          />

          <input
            type="date"
            style={inputStyle}
          />
        </div>

        {/* COMPLAINTS */}
        <div
          style={{
            display: "grid",

            gap: "20px",
          }}
        >
          {complaints.map(
            (
              complaint
            ) => (
              <div
                key={
                  complaint.id
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

                    gap: "16px",

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
                          "8px",
                      }}
                    >
                      {
                        complaint.user
                      }
                    </h2>

                    <p
                      style={{
                        color:
                          "#94a3b8",
                      }}
                    >
                      {
                        complaint.phone
                      }
                    </p>
                  </div>

                  <div
                    style={{
                      color:
                        statusColor(
                          complaint.status
                        ),

                      fontWeight:
                        "700",
                    }}
                  >
                    {
                      complaint.status
                    }
                  </div>
                </div>

                {/* MESSAGE */}
                <div
                  style={{
                    marginBottom:
                      "20px",
                  }}
                >
                  <p
                    style={{
                      color:
                        "#e2e8f0",

                      lineHeight:
                        "1.8",
                    }}
                  >
                    {
                      complaint.message
                    }
                  </p>
                </div>

                {/* DATE */}
                <p
                  style={{
                    color:
                      "#64748b",

                    marginBottom:
                      "20px",
                  }}
                >
                  {
                    complaint.date
                  }
                </p>

                {/* REPLY */}
                {complaint.reply && (
                  <div
                    style={{
                      background:
                        "#111827",

                      padding:
                        "18px",

                      borderRadius:
                        "16px",

                      marginBottom:
                        "20px",
                    }}
                  >
                    <p
                      style={{
                        color:
                          "#22c55e",

                        fontWeight:
                          "700",

                        marginBottom:
                          "10px",
                      }}
                    >
                      Admin Reply
                    </p>

                    <p
                      style={{
                        color:
                          "white",
                      }}
                    >
                      {
                        complaint.reply
                      }
                    </p>
                  </div>
                )}

                {/* ACTIONS */}
                <div
                  style={{
                    display:
                      "flex",

                    flexDirection:
                      "column",

                    gap: "16px",
                  }}
                >
                  <textarea
                    placeholder="Reply to complaint..."
                    value={
                      replyBox
                    }
                    onChange={(
                      e
                    ) =>
                      setReplyBox(
                        e.target
                          .value
                      )
                    }
                    rows={4}
                    style={{
                      ...inputStyle,

                      resize:
                        "none",
                    }}
                  />

                  <div
                    style={{
                      display:
                        "flex",

                      gap: "14px",

                      flexWrap:
                        "wrap",
                    }}
                  >
                    <button
                      onClick={() =>
                        replyComplaint(
                          complaint.id
                        )
                      }
                      style={{
                        background:
                          "#2563eb",

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
                      Reply
                    </button>

                    <button
                      onClick={() =>
                        deleteComplaint(
                          complaint.id
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

  padding: "14px",

  borderRadius:
    "14px",

  outline: "none",

  width: "100%",

  boxSizing:
    "border-box" as const,
};
