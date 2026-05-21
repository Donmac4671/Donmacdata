import { useState } from "react";

import AdminLayout from "../layouts/AdminLayout";

export default function AnnouncementsPage() {
  const [title, setTitle] =
    useState("");

  const [message, setMessage] =
    useState("");

  const [announcements, setAnnouncements] =
    useState([
      {
        id: 1,
        title:
          "System Update",
        message:
          "Welcome to DonmacData platform.",
        active: true,
      },
    ]);

  function addAnnouncement() {
    if (
      !title ||
      !message
    )
      return;

    setAnnouncements([
      {
        id:
          Date.now(),
        title,
        message,
        active: false,
      },
      ...announcements,
    ]);

    setTitle("");
    setMessage("");
  }

  function toggleAnnouncement(
    id: number
  ) {
    setAnnouncements(
      announcements.map(
        (item) =>
          item.id === id
            ? {
                ...item,
                active:
                  !item.active,
              }
            : item
      )
    );
  }

  function deleteAnnouncement(
    id: number
  ) {
    setAnnouncements(
      announcements.filter(
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
          Announcements
        </h1>

        <p
          style={{
            color:
              "#94a3b8",
            marginBottom:
              "30px",
          }}
        >
          Manage popup
          messages shown to
          users
        </p>

        {/* CREATE */}

        <div
          style={{
            background:
              "#0f172a",
            padding:
              "24px",
            borderRadius:
              "24px",
            marginBottom:
              "30px",
            border:
              "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div
            style={{
              display:
                "grid",
              gap: "16px",
            }}
          >
            <input
              placeholder="Announcement title"
              value={title}
              onChange={(e) =>
                setTitle(
                  e.target
                    .value
                )
              }
              style={
                inputStyle
              }
            />

            <textarea
              placeholder="Announcement message"
              value={
                message
              }
              onChange={(e) =>
                setMessage(
                  e.target
                    .value
                )
              }
              rows={5}
              style={
                inputStyle
              }
            />

            <button
              onClick={
                addAnnouncement
              }
              style={
                primaryButton
              }
            >
              Add
              Announcement
            </button>
          </div>
        </div>

        {/* LIST */}

        <div
          style={{
            display:
              "grid",
            gap: "20px",
          }}
        >
          {announcements.map(
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
                        item.title
                      }
                    </h2>

                    <p
                      style={{
                        color:
                          "#cbd5e1",
                      }}
                    >
                      {
                        item.message
                      }
                    </p>
                  </div>

                  <div
                    style={{
                      color:
                        item.active
                          ? "#22c55e"
                          : "#ef4444",
                      fontWeight:
                        "800",
                    }}
                  >
                    {item.active
                      ? "SHOWING"
                      : "HIDDEN"}
                  </div>
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
                      toggleAnnouncement(
                        item.id
                      )
                    }
                    style={
                      primaryButton
                    }
                  >
                    {item.active
                      ? "Hide"
                      : "Show"}
                  </button>

                  <button
                    onClick={() =>
                      deleteAnnouncement(
                        item.id
                      )
                    }
                    style={
                      deleteButton
                    }
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
    "16px",
  outline: "none",
  width: "100%",
  boxSizing:
    "border-box" as const,
};

const primaryButton = {
  background:
    "#2563eb",
  border: "none",
  color: "white",
  padding:
    "14px 18px",
  borderRadius:
    "14px",
  fontWeight:
    "700",
  cursor:
    "pointer",
};

const deleteButton = {
  background:
    "#dc2626",
  border: "none",
  color: "white",
  padding:
    "14px 18px",
  borderRadius:
    "14px",
  fontWeight:
    "700",
  cursor:
    "pointer",
};
