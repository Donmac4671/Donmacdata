import AdminLayout from "../layouts/AdminLayout";

export default function AnnouncementsPage() {
  const announcements = [
    {
      id: 1,
      title:
        "System Upgrade",
      message:
        "MTN services may delay tonight between 12AM and 2AM.",

      status: "Active",

      date:
        "2026-05-20",
    },

    {
      id: 2,
      title:
        "New Telecel Bundles",

      message:
        "New Telecel voice + data packages are now available.",

      status: "Draft",

      date:
        "2026-05-18",
    },

    {
      id: 3,
      title:
        "Promo Alert",

      message:
        "Enjoy cheaper AirtelTigo bundles this weekend.",

      status: "Draft",

      date:
        "2026-05-17",
    },
  ];

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
                  "40px",

                fontWeight:
                  "900",

                marginBottom:
                  "8px",
              }}
            >
              Announcements
            </h1>

            <p
              style={{
                color:
                  "#94a3b8",
              }}
            >
              Manage popup
              announcements
            </p>
          </div>

          <button
            style={{
              background:
                "linear-gradient(135deg,#2563eb,#7c3aed)",

              border:
                "none",

              color:
                "white",

              padding:
                "14px 24px",

              borderRadius:
                "14px",

              fontWeight:
                "700",

              cursor:
                "pointer",
            }}
          >
            + Add Announcement
          </button>
        </div>

        {/* CREATE BOX */}
        <div
          style={{
            background:
              "#0f172a",

            border:
              "1px solid rgba(255,255,255,0.08)",

            borderRadius:
              "24px",

            padding: "24px",

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
                "20px",
            }}
          >
            Create Announcement
          </h2>

          <div
            style={{
              display: "grid",

              gap: "18px",
            }}
          >
            <input
              placeholder="Announcement title"
              style={inputStyle}
            />

            <textarea
              placeholder="Write announcement..."
              rows={5}
              style={{
                ...inputStyle,

                resize:
                  "none",
              }}
            />

            <div
              style={{
                display: "flex",

                gap: "14px",

                flexWrap:
                  "wrap",
              }}
            >
              <button
                style={{
                  background:
                    "#22c55e",

                  border:
                    "none",

                  color:
                    "white",

                  padding:
                    "14px 24px",

                  borderRadius:
                    "14px",

                  fontWeight:
                    "700",

                  cursor:
                    "pointer",
                }}
              >
                Save & Show
              </button>

              <button
                style={{
                  background:
                    "#374151",

                  border:
                    "none",

                  color:
                    "white",

                  padding:
                    "14px 24px",

                  borderRadius:
                    "14px",

                  fontWeight:
                    "700",

                  cursor:
                    "pointer",
                }}
              >
                Save as Draft
              </button>
            </div>
          </div>
        </div>

        {/* ANNOUNCEMENTS */}
        <div
          style={{
            display: "grid",

            gap: "20px",
          }}
        >
          {announcements.map(
            (
              item
            ) => (
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

                    gap: "16px",

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
                          "8px",
                      }}
                    >
                      {
                        item.title
                      }
                    </h2>

                    <p
                      style={{
                        color:
                          "#94a3b8",

                        fontSize:
                          "14px",
                      }}
                    >
                      {
                        item.date
                      }
                    </p>
                  </div>

                  <div
                    style={{
                      padding:
                        "10px 16px",

                      borderRadius:
                        "999px",

                      fontWeight:
                        "700",

                      background:
                        item.status ===
                        "Active"
                          ? "rgba(34,197,94,0.15)"
                          : "rgba(156,163,175,0.15)",

                      color:
                        item.status ===
                        "Active"
                          ? "#22c55e"
                          : "#9ca3af",
                    }}
                  >
                    {
                      item.status
                    }
                  </div>
                </div>

                <p
                  style={{
                    color:
                      "#e2e8f0",

                    lineHeight:
                      "1.8",

                    marginBottom:
                      "24px",
                  }}
                >
                  {
                    item.message
                  }
                </p>

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
                    Edit
                  </button>

                  <button
                    style={{
                      background:
                        item.status ===
                        "Active"
                          ? "#f59e0b"
                          : "#22c55e",

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
                    {item.status ===
                    "Active"
                      ? "Hide"
                      : "Show"}
                  </button>

                  <button
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

  padding: "16px",

  borderRadius:
    "14px",

  outline: "none",

  width: "100%",

  boxSizing:
    "border-box" as const,

  fontSize: "14px",
};
