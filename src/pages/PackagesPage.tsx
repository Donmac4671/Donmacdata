import { useState } from "react";

import AdminLayout from "../layouts/AdminLayout";

export default function PackagesPage() {
  const [activeTab, setActiveTab] =
    useState("MTN");

  const tabs = [
    "MTN",
    "Telecel",
    "AirtelTigo Premium",
    "AirtelTigo Big Time",
    "Mashup",
    "Voice + SMS",
    "Voice + Data + SMS",
    "Airtime",
    "Special Offers",
  ];

  const [packages, setPackages] =
    useState([
      // MTN
      {
        id: 1,
        category: "MTN",
        name: "1GB",
        price: "GH₵4.40",
        active: true,
      },

      {
        id: 2,
        category: "MTN",
        name: "2GB",
        price: "GH₵8.80",
        active: true,
      },

      {
        id: 3,
        category: "MTN",
        name: "5GB",
        price: "GH₵22.00",
        active: true,
      },

      {
        id: 4,
        category: "MTN",
        name: "10GB",
        price: "GH₵43.00",
        active: true,
      },

      {
        id: 5,
        category: "MTN",
        name: "50GB",
        price: "GH₵202.00",
        active: true,
      },

      // TELECEL
      {
        id: 6,
        category:
          "Telecel",
        name: "2GB",
        price:
          "GH₵10.20",
        active: true,
      },

      {
        id: 7,
        category:
          "Telecel",
        name: "10GB",
        price:
          "GH₵42.00",
        active: true,
      },

      {
        id: 8,
        category:
          "Telecel",
        name: "50GB",
        price:
          "GH₵189.00",
        active: true,
      },

      // AIRTELTIGO PREMIUM
      {
        id: 9,
        category:
          "AirtelTigo Premium",
        name: "1GB",
        price:
          "GH₵4.30",
        active: true,
      },

      {
        id: 10,
        category:
          "AirtelTigo Premium",
        name: "20GB",
        price:
          "GH₵81.00",
        active: true,
      },

      {
        id: 11,
        category:
          "AirtelTigo Premium",
        name: "30GB",
        price:
          "GH₵122.00",
        active: true,
      },

      // BIG TIME
      {
        id: 12,
        category:
          "AirtelTigo Big Time",
        name: "50GB",
        price:
          "GH₵95.00",
        active: true,
      },

      {
        id: 13,
        category:
          "AirtelTigo Big Time",
        name: "100GB",
        price:
          "GH₵177.00",
        active: true,
      },

      {
        id: 14,
        category:
          "AirtelTigo Big Time",
        name: "200GB",
        price:
          "GH₵370.00",
        active: true,
      },

      // MASHUP
      {
        id: 15,
        category:
          "Mashup",
        name:
          "¢1 - 15.27MB & 15.64 Minutes",
        price: "GH₵1",
        active: true,
      },

      {
        id: 16,
        category:
          "Mashup",
        name:
          "¢10 - 180.72MB & 173.39 Minutes",
        price:
          "GH₵10",
        active: true,
      },

      {
        id: 17,
        category:
          "Mashup",
        name:
          "¢29.99 - 541.97MB & 520 Minutes",
        price:
          "GH₵29.99",
        active: true,
      },

      // VOICE + SMS
      {
        id: 18,
        category:
          "Voice + SMS",
        name:
          "¢1 - 21 Minutes + 5 SMS",
        price: "GH₵1",
        active: true,
      },

      {
        id: 19,
        category:
          "Voice + SMS",
        name:
          "¢10 - 236 Minutes + 50 SMS",
        price:
          "GH₵10",
        active: true,
      },

      // VOICE DATA SMS
      {
        id: 20,
        category:
          "Voice + Data + SMS",
        name:
          "¢1 - 16 Minutes + 17.83MB + 5 SMS",
        price: "GH₵1",
        active: true,
      },

      {
        id: 21,
        category:
          "Voice + Data + SMS",
        name:
          "¢29.99 - 539 Minutes + 601.52MB + 50 SMS",
        price:
          "GH₵29.99",
        active: true,
      },

      // AIRTIME
      {
        id: 22,
        category:
          "Airtime",
        name:
          "Custom Airtime Range",
        price:
          "GH₵0.50 - GH₵50",
        active: true,
      },

      // SPECIAL OFFERS
      {
        id: 23,
        category:
          "Special Offers",
        name:
          "200 Minutes All Networks",
        price:
          "GH₵7",
        active: true,
      },
    ]);

  const filteredPackages =
    packages.filter(
      (item) =>
        item.category ===
        activeTab
    );

  function togglePackage(
    id: number
  ) {
    const updated =
      packages.map(
        (item) => {
          if (
            item.id === id
          ) {
            return {
              ...item,
              active:
                !item.active,
            };
          }

          return item;
        }
      );

    setPackages(updated);
  }

  function deletePackage(
    id: number
  ) {
    const updated =
      packages.filter(
        (item) =>
          item.id !== id
      );

    setPackages(updated);
  }

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
            flexWrap: "wrap",
            gap: "20px",
            marginBottom:
              "30px",
          }}
        >
          <div>
            <h1
              style={{
                fontSize:
                  "38px",
                fontWeight:
                  "900",
                marginBottom:
                  "8px",
              }}
            >
              Packages
            </h1>

            <p
              style={{
                color:
                  "#94a3b8",
              }}
            >
              Manage all
              network
              packages
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
            + Add Package
          </button>
        </div>

        {/* TABS */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            overflowX:
              "auto",
            marginBottom:
              "30px",
            paddingBottom:
              "10px",
          }}
        >
          {tabs.map(
            (tab) => (
              <button
                key={tab}
                onClick={() =>
                  setActiveTab(
                    tab
                  )
                }
                style={{
                  background:
                    activeTab ===
                    tab
                      ? "#2563eb"
                      : "#111827",

                  color:
                    "white",

                  border:
                    "none",

                  padding:
                    "14px 18px",

                  borderRadius:
                    "14px",

                  cursor:
                    "pointer",

                  fontWeight:
                    "700",

                  whiteSpace:
                    "nowrap",
                }}
              >
                {tab}
              </button>
            )
          )}
        </div>

        {/* SEARCH */}
        <div
          style={{
            marginBottom:
              "24px",
          }}
        >
          <input
            placeholder="Search package..."
            style={{
              background:
                "#111827",

              border:
                "1px solid rgba(255,255,255,0.08)",

              color:
                "white",

              padding:
                "14px",

              borderRadius:
                "14px",

              outline:
                "none",

              width:
                "100%",
            }}
          />
        </div>

        {/* CARDS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(280px,1fr))",
            gap: "20px",
          }}
        >
          {filteredPackages.map(
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
                    marginBottom:
                      "18px",
                  }}
                >
                  <h2
                    style={{
                      fontSize:
                        "22px",

                      fontWeight:
                        "800",

                      marginBottom:
                        "10px",

                      lineHeight:
                        "1.4",
                    }}
                  >
                    {
                      item.name
                    }
                  </h2>

                  <p
                    style={{
                      color:
                        "#38bdf8",

                      fontWeight:
                        "700",

                      fontSize:
                        "18px",
                    }}
                  >
                    {
                      item.price
                    }
                  </p>
                </div>

                <div
                  style={{
                    marginBottom:
                      "20px",
                  }}
                >
                  <span
                    style={{
                      color:
                        item.active
                          ? "#22c55e"
                          : "#ef4444",

                      fontWeight:
                        "700",
                    }}
                  >
                    {item.active
                      ? "ACTIVE"
                      : "OFF"}
                  </span>
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
                      togglePackage(
                        item.id
                      )
                    }
                    style={{
                      background:
                        item.active
                          ? "#f59e0b"
                          : "#22c55e",

                      border:
                        "none",

                      color:
                        "white",

                      padding:
                        "12px 16px",

                      borderRadius:
                        "12px",

                      fontWeight:
                        "700",

                      cursor:
                        "pointer",
                    }}
                  >
                    {item.active
                      ? "Turn OFF"
                      : "Turn ON"}
                  </button>

                  <button
                    style={{
                      background:
                        "#2563eb",

                      border:
                        "none",

                      color:
                        "white",

                      padding:
                        "12px 16px",

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
                    onClick={() =>
                      deletePackage(
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
                        "12px 16px",

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
