import {
  useEffect,
  useState,
} from "react";

import AdminLayout from "../layouts/AdminLayout";

import { supabase } from "../lib/supabase";

export default function ResellersPage() {
  const [resellers, setResellers] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [showModal, setShowModal] =
    useState(false);

  const [formData, setFormData] =
    useState({
      email: "",
      phone: "",
      location: "",
    });

  async function fetchResellers() {
    const { data } = await supabase
      .from("profiles")
      .select("*")
      .eq("role", "reseller")
      .order("created_at", {
        ascending: false,
      });

    setResellers(data || []);

    setLoading(false);
  }

  useEffect(() => {
    fetchResellers();
  }, []);

  async function addReseller() {
    if (!formData.email) return;

    await supabase
      .from("profiles")
      .insert({
        email: formData.email,
        phone: formData.phone,
        location: formData.location,
        role: "reseller",
        status: "active",
        wallet_balance: 0,
      });

    setShowModal(false);

    setFormData({
      email: "",
      phone: "",
      location: "",
    });

    fetchResellers();
  }

  async function blockUser(id: string) {
    await supabase
      .from("profiles")
      .update({
        status: "blocked",
      })
      .eq("id", id);

    fetchResellers();
  }

  async function deleteUser(id: string) {
    const confirmDelete = confirm(
      "Delete reseller?"
    );

    if (!confirmDelete) return;

    await supabase
      .from("profiles")
      .delete()
      .eq("id", id);

    fetchResellers();
  }

  return (
    <AdminLayout>
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent:
            "space-between",
          alignItems: "center",
          marginBottom: "30px",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "42px",
              fontWeight: "900",
            }}
          >
            Resellers
          </h1>

          <p
            style={{
              color: "#94a3b8",
            }}
          >
            Manage all resellers
          </p>
        </div>

        <button
          onClick={() =>
            setShowModal(true)
          }
          style={{
            background:
              "linear-gradient(135deg,#2563eb,#7c3aed)",
            border: "none",
            color: "white",
            padding: "16px 22px",
            borderRadius: "18px",
            fontWeight: "700",
            cursor: "pointer",
          }}
        >
          + Add Reseller
        </button>
      </div>

      {/* TABLE */}
      <div
        style={{
          background: "#0B1120",
          borderRadius: "24px",
          overflowX: "auto",
          padding: "20px",
        }}
      >
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table
            style={{
              width: "100%",
              borderCollapse:
                "collapse",
            }}
          >
            <thead>
              <tr
                style={{
                  textAlign: "left",
                  color: "#94a3b8",
                }}
              >
                <th
                  style={{
                    padding: "14px",
                  }}
                >
                  Email
                </th>

                <th
                  style={{
                    padding: "14px",
                  }}
                >
                  Phone
                </th>

                <th
                  style={{
                    padding: "14px",
                  }}
                >
                  Location
                </th>

                <th
                  style={{
                    padding: "14px",
                  }}
                >
                  Wallet
                </th>

                <th
                  style={{
                    padding: "14px",
                  }}
                >
                  Status
                </th>

                <th
                  style={{
                    padding: "14px",
                  }}
                >
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {resellers.map(
                (reseller) => (
                  <tr
                    key={
                      reseller.id
                    }
                    style={{
                      borderTop:
                        "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <td
                      style={{
                        padding:
                          "16px",
                      }}
                    >
                      {
                        reseller.email
                      }
                    </td>

                    <td
                      style={{
                        padding:
                          "16px",
                      }}
                    >
                      {
                        reseller.phone
                      }
                    </td>

                    <td
                      style={{
                        padding:
                          "16px",
                      }}
                    >
                      {
                        reseller.location
                      }
                    </td>

                    <td
                      style={{
                        padding:
                          "16px",
                      }}
                    >
                      ₵
                      {Number(
                        reseller.wallet_balance ||
                          0
                      ).toFixed(2)}
                    </td>

                    <td
                      style={{
                        padding:
                          "16px",
                      }}
                    >
                      <span
                        style={{
                          background:
                            reseller.status ===
                            "blocked"
                              ? "#7f1d1d"
                              : "#052e16",
                          color:
                            reseller.status ===
                            "blocked"
                              ? "#fca5a5"
                              : "#86efac",
                          padding:
                            "8px 14px",
                          borderRadius:
                            "999px",
                          fontSize:
                            "14px",
                        }}
                      >
                        {
                          reseller.status
                        }
                      </span>
                    </td>

                    <td
                      style={{
                        padding:
                          "16px",
                      }}
                    >
                      <div
                        style={{
                          display:
                            "flex",
                          gap: "10px",
                          flexWrap:
                            "wrap",
                        }}
                      >
                        <button
                          style={
                            actionButtonBlue
                          }
                        >
                          Credit
                        </button>

                        <button
                          onClick={() =>
                            blockUser(
                              reseller.id
                            )
                          }
                          style={
                            actionButtonYellow
                          }
                        >
                          Block
                        </button>

                        <button
                          onClick={() =>
                            deleteUser(
                              reseller.id
                            )
                          }
                          style={
                            actionButtonRed
                          }
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        )}
      </div>

      {/* MODAL */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background:
              "rgba(0,0,0,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent:
              "center",
            zIndex: 3000,
            padding: "20px",
          }}
        >
          <div
            style={{
              background:
                "#0B1120",
              width: "100%",
              maxWidth: "500px",
              borderRadius:
                "24px",
              padding: "30px",
            }}
          >
            <h2
              style={{
                fontSize: "32px",
                fontWeight: "800",
                marginBottom:
                  "24px",
              }}
            >
              Add Reseller
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection:
                  "column",
                gap: "16px",
              }}
            >
              <input
                placeholder="Email"
                value={
                  formData.email
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email:
                      e.target
                        .value,
                  })
                }
                style={inputStyle}
              />

              <input
                placeholder="Phone"
                value={
                  formData.phone
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone:
                      e.target
                        .value,
                  })
                }
                style={inputStyle}
              />

              <input
                placeholder="Location"
                value={
                  formData.location
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    location:
                      e.target
                        .value,
                  })
                }
                style={inputStyle}
              />

              <button
                onClick={
                  addReseller
                }
                style={{
                  background:
                    "linear-gradient(135deg,#2563eb,#7c3aed)",
                  border:
                    "none",
                  color:
                    "white",
                  padding:
                    "18px",
                  borderRadius:
                    "18px",
                  fontWeight:
                    "700",
                  cursor:
                    "pointer",
                }}
              >
                Create Reseller
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}

const inputStyle = {
  background: "#111827",
  border: "none",
  padding: "18px",
  borderRadius: "18px",
  color: "white",
  fontSize: "16px",
};

const actionButtonBlue = {
  background: "#2563eb",
  border: "none",
  color: "white",
  padding: "10px 14px",
  borderRadius: "12px",
  cursor: "pointer",
};

const actionButtonYellow = {
  background: "#ca8a04",
  border: "none",
  color: "white",
  padding: "10px 14px",
  borderRadius: "12px",
  cursor: "pointer",
};

const actionButtonRed = {
  background: "#dc2626",
  border: "none",
  color: "white",
  padding: "10px 14px",
  borderRadius: "12px",
  cursor: "pointer",
};
