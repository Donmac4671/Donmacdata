import {
  useState,
} from "react";

import AdminLayout from "../layouts/AdminLayout";

export default function ComplaintsPage() {
  const [reply, setReply] =
    useState("");

  return (
    <AdminLayout>
      <h1 style={title}>
        Complaints
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
        <h3>
          Transaction Delay
        </h3>

        <p
          style={{
            color: "#94a3b8",
            marginTop: "12px",
          }}
        >
          Customer says order
          delayed
        </p>

        <textarea
          placeholder="Reply..."
          value={reply}
          onChange={(e) =>
            setReply(
              e.target.value
            )
          }
          style={textarea}
        />

        <button style={button}>
          Send Reply
        </button>
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
};

const textarea = {
  width: "100%",
  minHeight: "150px",
  background: "#111827",
  border: "1px solid #374151",
  color: "white",
  padding: "20px",
  borderRadius: "18px",
  marginTop: "20px",
};

const button = {
  background:
    "linear-gradient(135deg,#2563eb,#7c3aed)",

  border: "none",

  color: "white",

  padding: "16px 22px",

  borderRadius: "14px",

  marginTop: "20px",

  cursor: "pointer",
};
