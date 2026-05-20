import {
  useState,
} from "react";

import AdminLayout from "../layouts/AdminLayout";

export default function AnnouncementsPage() {
  const [
    announcements,
    setAnnouncements,
  ] = useState<any[]>([]);

  const [
    text,
    setText,
  ] = useState("");

  function addMessage() {
    if (!text) return;

    setAnnouncements([
      {
        id: Date.now(),
        text,
        active: false,
      },

      ...announcements,
    ]);

    setText("");
  }

  function toggleMessage(
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

  function editMessage(
    id: number
  ) {
    const updated =
      prompt(
        "Edit message"
      );

    if (!updated) return;

    setAnnouncements(
      announcements.map(
        (item) =>
          item.id === id
            ? {
                ...item,
                text: updated,
              }
            : item
      )
    );
  }

  return (
    <AdminLayout>
      <h1 style={title}>
        Announcements
      </h1>

      <div style={card}>
        <textarea
          placeholder="Type message..."
          value={text}
          onChange={(e) =>
            setText(
              e.target.value
            )
          }
          style={textarea}
        />

        <button
          onClick={addMessage}
          style={button}
        >
          Add Message
        </button>
      </div>

      <div
        style={{
          marginTop: "24px",
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
              style={messageCard}
            >
              <p>
                {item.text}
              </p>

              <div
                style={{
                  display:
                    "flex",
                  gap: "12px",
                  flexWrap:
                    "wrap",
                  marginTop:
                    "20px",
                }}
              >
                <button
                  onClick={() =>
                    toggleMessage(
                      item.id
                    )
                  }
                  style={{
                    ...button,
                    background:
                      item.active
                        ? "#16a34a"
                        : "#374151",
                  }}
                >
                  {item.active
                    ? "Showing"
                    : "Hidden"}
                </button>

                <button
                  onClick={() =>
                    editMessage(
                      item.id
                    )
                  }
                  style={{
                    ...button,
                    background:
                      "#2563eb",
                  }}
                >
                  Edit
                </button>
              </div>
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
};

const textarea = {
  width: "100%",
  minHeight: "180px",
  background: "#111827",
  border: "1px solid #374151",
  color: "white",
  padding: "20px",
  borderRadius: "18px",
};

const button = {
  border: "none",
  color: "white",
  padding: "14px 20px",
  borderRadius: "14px",
  cursor: "pointer",
  marginTop: "18px",
};

const messageCard = {
  background: "#0B1120",
  padding: "24px",
  borderRadius: "24px",
};
