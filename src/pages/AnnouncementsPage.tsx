import {
  useState,
} from "react";

import AdminLayout from "../layouts/AdminLayout";

export default function AnnouncementsPage() {
  const [
    message,
    setMessage,
  ] = useState("");

  const [
    announcements,
    setAnnouncements,
  ] = useState<any[]>([]);

  function addAnnouncement() {
    if (!message) return;

    setAnnouncements([
      {
        id: Date.now(),
        text: message,
        active: true,
      },

      ...announcements,
    ]);

    setMessage("");
  }

  function toggleAnnouncement(
    id: number
  ) {
    const updated =
      announcements.map(
        (item) =>
          item.id === id
            ? {
                ...item,
                active:
                  !item.active,
              }
            : item
      );

    setAnnouncements(updated);
  }

  return (
    <AdminLayout>
      <h1 style={title}>
        Announcements
      </h1>

      {/* CREATE */}
      <div style={card}>
        <textarea
          placeholder="Type announcement..."
          value={message}
          onChange={(e) =>
            setMessage(
              e.target.value
            )
          }
          style={textarea}
        />

        <button
          onClick={
            addAnnouncement
          }
          style={button}
        >
          Add Announcement
        </button>
      </div>

      {/* LIST */}
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          flexDirection:
            "column",
          gap: "20px",
        }}
      >
        {announcements.map(
          (item) => (
            <div
              key={item.id}
              style={{
                background:
                  "#0B1120",
                padding: "24px",
                borderRadius:
                  "24px",
              }}
            >
              <p
                style={{
                  marginBottom:
                    "20px",
                }}
              >
                {item.text}
              </p>

              <button
                onClick={() =>
                  toggleAnnouncement(
                    item.id
                  )
                }
                style={{
                  background:
                    item.active
                      ? "#16a34a"
                      : "#374151",

                  border:
                    "none",

                  color:
                    "white",

                  padding:
                    "12px 18px",

                  borderRadius:
                    "14px",

                  cursor:
                    "pointer",
                }}
              >
                {item.active
                  ? "Showing"
                  : "Hidden"}
              </button>
            </div>
          )
        )}
      </div>
    </AdminLayout>
  );
}

const title = {
  fontSize: "42px",
  fontWeight: "900",
  marginBottom: "24px",
};

const card = {
  background: "#0B1120",
  padding: "24px",
  borderRadius: "24px",
  display: "flex",
  flexDirection: "column" as const,
  gap: "20px",
};

const textarea = {
  minHeight: "180px",
  background: "#111827",
  border: "none",
  borderRadius: "18px",
  padding: "20px",
  color: "white",
};

const button = {
  background:
    "linear-gradient(135deg,#2563eb,#7c3aed)",

  border: "none",

  color: "white",

  padding: "18px",

  borderRadius: "18px",

  fontWeight: "700",

  cursor: "pointer",
};
