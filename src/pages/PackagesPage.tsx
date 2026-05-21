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
    "Telecel Voice + SMS",
    "Telecel Voice + Data + SMS",
    "Airtime",
    "Special Offers",
  ];

  const [packages, setPackages] =
  useState([
    // =========================
    // MTN
    // =========================

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
      name: "3GB",
      price: "GH₵13.20",
      active: true,
    },

    {
      id: 4,
      category: "MTN",
      name: "4GB",
      price: "GH₵17.60",
      active: true,
    },

    {
      id: 5,
      category: "MTN",
      name: "5GB",
      price: "GH₵22.00",
      active: true,
    },

    {
      id: 6,
      category: "MTN",
      name: "6GB",
      price: "GH₵26.40",
      active: true,
    },

    {
      id: 7,
      category: "MTN",
      name: "7GB",
      price: "GH₵30.80",
      active: true,
    },

    {
      id: 8,
      category: "MTN",
      name: "8GB",
      price: "GH₵35.20",
      active: true,
    },

    {
      id: 9,
      category: "MTN",
      name: "10GB",
      price: "GH₵43.00",
      active: true,
    },

    {
      id: 10,
      category: "MTN",
      name: "15GB",
      price: "GH₵63.00",
      active: true,
    },

    {
      id: 11,
      category: "MTN",
      name: "20GB",
      price: "GH₵83.00",
      active: true,
    },

    {
      id: 12,
      category: "MTN",
      name: "25GB",
      price: "GH₵105.00",
      active: true,
    },

    {
      id: 13,
      category: "MTN",
      name: "30GB",
      price: "GH₵126.00",
      active: true,
    },

    {
      id: 14,
      category: "MTN",
      name: "40GB",
      price: "GH₵163.00",
      active: true,
    },

    {
      id: 15,
      category: "MTN",
      name: "50GB",
      price: "GH₵202.00",
      active: true,
    },

    // =========================
    // TELECEL
    // =========================

    {
      id: 16,
      category: "Telecel",
      name: "2GB",
      price: "GH₵10.20",
      active: true,
    },

    {
      id: 17,
      category: "Telecel",
      name: "3GB",
      price: "GH₵15.40",
      active: true,
    },

    {
      id: 18,
      category: "Telecel",
      name: "5GB",
      price: "GH₵22.00",
      active: true,
    },

    {
      id: 19,
      category: "Telecel",
      name: "10GB",
      price: "GH₵42.00",
      active: true,
    },

    {
      id: 20,
      category: "Telecel",
      name: "15GB",
      price: "GH₵60.00",
      active: true,
    },

    {
      id: 21,
      category: "Telecel",
      name: "20GB",
      price: "GH₵80.00",
      active: true,
    },

    {
      id: 22,
      category: "Telecel",
      name: "25GB",
      price: "GH₵98.00",
      active: true,
    },

    {
      id: 23,
      category: "Telecel",
      name: "30GB",
      price: "GH₵118.00",
      active: true,
    },

    {
      id: 24,
      category: "Telecel",
      name: "40GB",
      price: "GH₵158.00",
      active: true,
    },

    {
      id: 25,
      category: "Telecel",
      name: "50GB",
      price: "GH₵189.00",
      active: true,
    },

    // =========================
    // AIRTELTIGO PREMIUM
    // =========================

    {
      id: 26,
      category:
        "AirtelTigo Premium",
      name: "1GB",
      price: "GH₵4.30",
      active: true,
    },

    {
      id: 27,
      category:
        "AirtelTigo Premium",
      name: "2GB",
      price: "GH₵8.60",
      active: true,
    },

    {
      id: 28,
      category:
        "AirtelTigo Premium",
      name: "3GB",
      price: "GH₵12.90",
      active: true,
    },

    {
      id: 29,
      category:
        "AirtelTigo Premium",
      name: "4GB",
      price: "GH₵17.20",
      active: true,
    },

    {
      id: 30,
      category:
        "AirtelTigo Premium",
      name: "5GB",
      price: "GH₵21.50",
      active: true,
    },

    {
      id: 31,
      category:
        "AirtelTigo Premium",
      name: "6GB",
      price: "GH₵25.80",
      active: true,
    },

    {
      id: 32,
      category:
        "AirtelTigo Premium",
      name: "7GB",
      price: "GH₵30.10",
      active: true,
    },

    {
      id: 33,
      category:
        "AirtelTigo Premium",
      name: "8GB",
      price: "GH₵34.40",
      active: true,
    },

    {
      id: 34,
      category:
        "AirtelTigo Premium",
      name: "10GB",
      price: "GH₵41.00",
      active: true,
    },

    {
      id: 35,
      category:
        "AirtelTigo Premium",
      name: "12GB",
      price: "GH₵49.00",
      active: true,
    },

    {
      id: 36,
      category:
        "AirtelTigo Premium",
      name: "15GB",
      price: "GH₵62.00",
      active: true,
    },

    {
      id: 37,
      category:
        "AirtelTigo Premium",
      name: "20GB",
      price: "GH₵81.00",
      active: true,
    },

    {
      id: 38,
      category:
        "AirtelTigo Premium",
      name: "25GB",
      price: "GH₵103.00",
      active: true,
    },

    {
      id: 39,
      category:
        "AirtelTigo Premium",
      name: "30GB",
      price: "GH₵122.00",
      active: true,
    },

    // =========================
    // BIG TIME
    // =========================

    {
      id: 40,
      category:
        "AirtelTigo Big Time",
      name: "15GB",
      price: "GH₵58.00",
      active: true,
    },

    {
      id: 41,
      category:
        "AirtelTigo Big Time",
      name: "20GB",
      price: "GH₵65.00",
      active: true,
    },

    {
      id: 42,
      category:
        "AirtelTigo Big Time",
      name: "30GB",
      price: "GH₵75.00",
      active: true,
    },

    {
      id: 43,
      category:
        "AirtelTigo Big Time",
      name: "40GB",
      price: "GH₵86.00",
      active: true,
    },

    {
      id: 44,
      category:
        "AirtelTigo Big Time",
      name: "50GB",
      price: "GH₵95.00",
      active: true,
    },

    {
      id: 45,
      category:
        "AirtelTigo Big Time",
      name: "60GB",
      price: "GH₵106.00",
      active: true,
    },

    {
      id: 46,
      category:
        "AirtelTigo Big Time",
      name: "70GB",
      price: "GH₵138.00",
      active: true,
    },

    {
      id: 47,
      category:
        "AirtelTigo Big Time",
      name: "80GB",
      price: "GH₵152.00",
      active: true,
    },

    {
      id: 48,
      category:
        "AirtelTigo Big Time",
      name: "90GB",
      price: "GH₵163.00",
      active: true,
    },

    {
      id: 49,
      category:
        "AirtelTigo Big Time",
      name: "100GB",
      price: "GH₵177.00",
      active: true,
    },

    {
      id: 50,
      category:
        "AirtelTigo Big Time",
      name: "130GB",
      price: "GH₵222.00",
      active: true,
    },

    {
      id: 51,
      category:
        "AirtelTigo Big Time",
      name: "140GB",
      price: "GH₵248.00",
      active: true,
    },

    {
      id: 52,
      category:
        "AirtelTigo Big Time",
      name: "150GB",
      price: "GH₵275.00",
      active: true,
    },

    {
      id: 53,
      category:
        "AirtelTigo Big Time",
      name: "200GB",
      price: "GH₵370.00",
      active: true,
    },

// =========================
// MASHUP
// =========================

{
  id: 54,
  category: "Mashup",
  name:
    "¢1 - 15.27MB & 15.64 Minutes",
  price: "GH₵1",
  active: true,
},

{
  id: 55,
  category: "Mashup",
  name:
    "¢2 - 30.53MB & 31.27 Minutes",
  price: "GH₵2",
  active: true,
},

{
  id: 56,
  category: "Mashup",
  name:
    "¢3 - 48.8MB & 46.92 Minutes",
  price: "GH₵3",
  active: true,
},

{
  id: 57,
  category: "Mashup",
  name:
    "¢4 - 61.07MB & 62.55 Minutes",
  price: "GH₵4",
  active: true,
},

{
  id: 58,
  category: "Mashup",
  name:
    "¢5 - 86.12MB & 83.24 Minutes",
  price: "GH₵5",
  active: true,
},

{
  id: 59,
  category: "Mashup",
  name:
    "¢6 - 103.35MB & 99.88 Minutes",
  price: "GH₵6",
  active: true,
},

{
  id: 60,
  category: "Mashup",
  name:
    "¢7 - 120.27MB & 116.53 Minutes",
  price: "GH₵7",
  active: true,
},

{
  id: 61,
  category: "Mashup",
  name:
    "¢8 - 137MB & 133.18 Minutes",
  price: "GH₵8",
  active: true,
},

{
  id: 62,
  category: "Mashup",
  name:
    "¢9 - 155.02MB & 149.83 Minutes",
  price: "GH₵9",
  active: true,
},

{
  id: 63,
  category: "Mashup",
  name:
    "¢10 - 180.72MB & 173.39 Minutes",
  price: "GH₵10",
  active: true,
},

{
  id: 64,
  category: "Mashup",
  name:
    "¢15 - 271.07MB & 260.08 Minutes",
  price: "GH₵15",
  active: true,
},

{
  id: 65,
  category: "Mashup",
  name:
    "¢20 - 361.43MB & 346.78 Minutes",
  price: "GH₵20",
  active: true,
},

{
  id: 66,
  category: "Mashup",
  name:
    "¢25 - 451.79MB & 433.48 Minutes",
  price: "GH₵25",
  active: true,
},

{
  id: 67,
  category: "Mashup",
  name:
    "¢29.99 - 541.97MB & 520 Minutes",
  price: "GH₵29.99",
  active: true,
},

// =========================
// TELECEL VOICE + SMS
// =========================

{
  id: 68,
  category:
    "Telecel Voice + SMS",
  name:
    "¢1 - 21 Minutes + 5 SMS",
  price: "GH₵1",
  active: true,
},

{
  id: 69,
  category:
    "Telecel Voice + SMS",
  name:
    "¢2 - 43 Minutes + 5 SMS",
  price: "GH₵2",
  active: true,
},

{
  id: 70,
  category:
    "Telecel Voice + SMS",
  name:
    "¢3 - 64 Minutes + 5 SMS",
  price: "GH₵3",
  active: true,
},

{
  id: 71,
  category:
    "Telecel Voice + SMS",
  name:
    "¢4 - 84 Minutes + 5 SMS",
  price: "GH₵4",
  active: true,
},

{
  id: 72,
  category:
    "Telecel Voice + SMS",
  name:
    "¢5 - 114 Minutes + 10 SMS",
  price: "GH₵5",
  active: true,
},

{
  id: 73,
  category:
    "Telecel Voice + SMS",
  name:
    "¢6 - 137 Minutes + 10 SMS",
  price: "GH₵6",
  active: true,
},

{
  id: 74,
  category:
    "Telecel Voice + SMS",
  name:
    "¢7 - 160 Minutes + 10 SMS",
  price: "GH₵7",
  active: true,
},

{
  id: 75,
  category:
    "Telecel Voice + SMS",
  name:
    "¢8 - 183 Minutes + 10 SMS",
  price: "GH₵8",
  active: true,
},

{
  id: 76,
  category:
    "Telecel Voice + SMS",
  name:
    "¢9 - 206 Minutes + 10 SMS",
  price: "GH₵9",
  active: true,
},

{
  id: 77,
  category:
    "Telecel Voice + SMS",
  name:
    "¢10 - 236 Minutes + 50 SMS",
  price: "GH₵10",
  active: true,
},

{
  id: 78,
  category:
    "Telecel Voice + SMS",
  name:
    "¢15 - 354 Minutes + 50 SMS",
  price: "GH₵15",
  active: true,
},

{
  id: 79,
  category:
    "Telecel Voice + SMS",
  name:
    "¢20 - 486 Minutes + 50 SMS",
  price: "GH₵20",
  active: true,
},

{
  id: 80,
  category:
    "Telecel Voice + SMS",
  name:
    "¢25 - 607 Minutes + 50 SMS",
  price: "GH₵25",
  active: true,
},

{
  id: 81,
  category:
    "Telecel Voice + SMS",
  name:
    "¢29.99 - 729 Minutes + 50 SMS",
  price: "GH₵29.99",
  active: true,
},

// =========================
// TELECEL VOICE + DATA + SMS
// =========================

{
  id: 82,
  category:
    "Telecel Voice + Data + SMS",
  name:
    "¢1 - 16 Minutes + 17.83MB + 5 SMS",
  price: "GH₵1",
  active: true,
},

{
  id: 83,
  category:
    "Telecel Voice + Data + SMS",
  name:
    "¢2 - 32 Minutes + 35.66MB + 5 SMS",
  price: "GH₵2",
  active: true,
},

{
  id: 84,
  category:
    "Telecel Voice + Data + SMS",
  name:
    "¢3 - 48 Minutes + 53.49MB + 5 SMS",
  price: "GH₵3",
  active: true,
},

{
  id: 85,
  category:
    "Telecel Voice + Data + SMS",
  name:
    "¢4 - 64 Minutes + 71.32MB + 5 SMS",
  price: "GH₵4",
  active: true,
},

{
  id: 86,
  category:
    "Telecel Voice + Data + SMS",
  name:
    "¢5 - 85 Minutes + 94.72MB + 10 SMS",
  price: "GH₵5",
  active: true,
},

{
  id: 87,
  category:
    "Telecel Voice + Data + SMS",
  name:
    "¢6 - 102 Minutes + 113.66MB + 10 SMS",
  price: "GH₵6",
  active: true,
},

{
  id: 88,
  category:
    "Telecel Voice + Data + SMS",
  name:
    "¢7 - 119 Minutes + 132.6MB + 10 SMS",
  price: "GH₵7",
  active: true,
},

{
  id: 89,
  category:
    "Telecel Voice + Data + SMS",
  name:
    "¢8 - 136 Minutes + 151.54MB + 10 SMS",
  price: "GH₵8",
  active: true,
},

{
  id: 90,
  category:
    "Telecel Voice + Data + SMS",
  name:
    "¢9 - 153 Minutes + 170.49MB + 10 SMS",
  price: "GH₵9",
  active: true,
},

{
  id: 91,
  category:
    "Telecel Voice + Data + SMS",
  name:
    "¢10 - 175 Minutes + 195MB + 50 SMS",
  price: "GH₵10",
  active: true,
},

{
  id: 92,
  category:
    "Telecel Voice + Data + SMS",
  name:
    "¢15 - 262 Minutes + 292.5MB + 50 SMS",
  price: "GH₵15",
  active: true,
},

{
  id: 93,
  category:
    "Telecel Voice + Data + SMS",
  name:
    "¢20 - 359 Minutes + 401.15MB + 50 SMS",
  price: "GH₵20",
  active: true,
},

{
  id: 94,
  category:
    "Telecel Voice + Data + SMS",
  name:
    "¢25 - 449 Minutes + 501.43MB + 50 SMS",
  price: "GH₵25",
  active: true,
},

{
  id: 95,
  category:
    "Telecel Voice + Data + SMS",
  name:
    "¢29.99 - 539 Minutes + 601.52MB + 50 SMS",
  price: "GH₵29.99",
  active: true,
},
    
    // =========================
// AIRTIME
// =========================

{
  id: 96,
  category: "Airtime",
  name:
    "MTN Airtime",
  price:
    "GH₵0.50 - GH₵50",
  active: true,
},

{
  id: 97,
  category: "Airtime",
  name:
    "Telecel Airtime",
  price:
    "GH₵0.50 - GH₵50",
  active: true,
},

{
  id: 98,
  category: "Airtime",
  name:
    "AirtelTigo Airtime",
  price:
    "GH₵0.50 - GH₵50",
  active: true,
},

// =========================
// SPECIAL OFFERS
// =========================

{
  id: 99,
  category:
    "Special Offers",
  name:
    "¢7 - 200 Minutes All Networks (7 Days)",
  price:
    "GH₵7",
  active: true,
},

    {
      id: 55,
      category:
        "Special Offers",
      name:
        "200 Minutes All Networks",
      price:
        "GH₵6",
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
