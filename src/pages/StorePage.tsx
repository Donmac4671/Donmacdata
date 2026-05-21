import {
  useEffect,
  useMemo,
  useState,
} from "react";

import PackageCard from "../components/PackageCard";

import PackageModal from "../components/PackageModal";

import CartDrawer from "../components/CartDrawer";

import { supabase } from "../lib/supabase";

function generateRef() {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  let result = "";

  for (let i = 0; i < 7; i++) {
    result +=
      chars[
        Math.floor(
          Math.random() *
            chars.length
        )
      ];
  }

  return result;
}

const packages = [
  /* ================= MTN ================= */

  {
    category: "MTN",
    name: "1GB",
    network: "MTN",
    price: 4.4,
    validity: "90 Days",
  },

  {
    category: "MTN",
    name: "2GB",
    network: "MTN",
    price: 8.8,
    validity: "90 Days",
  },

  {
    category: "MTN",
    name: "3GB",
    network: "MTN",
    price: 13.2,
    validity: "90 Days",
  },

  {
    category: "MTN",
    name: "4GB",
    network: "MTN",
    price: 17.6,
    validity: "90 Days",
  },

  {
    category: "MTN",
    name: "5GB",
    network: "MTN",
    price: 22,
    validity: "90 Days",
  },

  {
    category: "MTN",
    name: "10GB",
    network: "MTN",
    price: 43,
    validity: "90 Days",
  },

  {
    category: "MTN",
    name: "20GB",
    network: "MTN",
    price: 83,
    validity: "90 Days",
  },

  {
    category: "MTN",
    name: "50GB",
    network: "MTN",
    price: 202,
    validity: "90 Days",
  },

  /* ================= TELECEL ================= */

  {
    category: "Telecel",
    name: "2GB",
    network: "Telecel",
    price: 10.2,
    validity: "60 Days",
  },

  {
    category: "Telecel",
    name: "3GB",
    network: "Telecel",
    price: 15.4,
    validity: "60 Days",
  },

  {
    category: "Telecel",
    name: "5GB",
    network: "Telecel",
    price: 22,
    validity: "60 Days",
  },

  {
    category: "Telecel",
    name: "10GB",
    network: "Telecel",
    price: 42,
    validity: "60 Days",
  },

  {
    category: "Telecel",
    name: "20GB",
    network: "Telecel",
    price: 80,
    validity: "60 Days",
  },

  {
    category: "Telecel",
    name: "50GB",
    network: "Telecel",
    price: 189,
    validity: "60 Days",
  },

  /* ================= AIRTELTIGO PREMIUM ================= */

  {
    category:
      "AT Premium",

    name: "1GB",

    network:
      "AirtelTigo Premium",

    price: 4.3,

    validity:
      "60 Days",
  },

  {
    category:
      "AT Premium",

    name: "5GB",

    network:
      "AirtelTigo Premium",

    price: 21.5,

    validity:
      "60 Days",
  },

  {
    category:
      "AT Premium",

    name: "10GB",

    network:
      "AirtelTigo Premium",

    price: 41,

    validity:
      "60 Days",
  },

  {
    category:
      "AT Premium",

    name: "20GB",

    network:
      "AirtelTigo Premium",

    price: 81,

    validity:
      "60 Days",
  },

  {
    category:
      "AT Premium",

    name: "30GB",

    network:
      "AirtelTigo Premium",

    price: 122,

    validity:
      "60 Days",
  },

  /* ================= BIG TIME ================= */

  {
    category:
      "Big Time",

    name: "15GB",

    network:
      "AirtelTigo Big Time",

    price: 58,

    validity:
      "Non Expiry",
  },

  {
    category:
      "Big Time",

    name: "30GB",

    network:
      "AirtelTigo Big Time",

    price: 75,

    validity:
      "Non Expiry",
  },

  {
    category:
      "Big Time",

    name: "50GB",

    network:
      "AirtelTigo Big Time",

    price: 95,

    validity:
      "Non Expiry",
  },

  {
    category:
      "Big Time",

    name: "100GB",

    network:
      "AirtelTigo Big Time",

    price: 177,

    validity:
      "Non Expiry",
  },

  {
    category:
      "Big Time",

    name: "200GB",

    network:
      "AirtelTigo Big Time",

    price: 370,

    validity:
      "Non Expiry",
  },

  /* ================= MASHUP ================= */

  {
    category:
      "Mashup",

    name:
      "¢1 Mashup",

    network:
      "Mashup",

    price: 1,

    validity:
      "Non Expiry",
  },

  {
    category:
      "Mashup",

    name:
      "¢5 Mashup",

    network:
      "Mashup",

    price: 5,

    validity:
      "Non Expiry",
  },

  {
    category:
      "Mashup",

    name:
      "¢10 Mashup",

    network:
      "Mashup",

    price: 10,

    validity:
      "Non Expiry",
  },

  {
    category:
      "Mashup",

    name:
      "¢20 Mashup",

    network:
      "Mashup",

    price: 20,

    validity:
      "Non Expiry",
  },

  {
    category:
      "Mashup",

    name:
      "¢29.99 Mashup",

    network:
      "Mashup",

    price: 29.99,

    validity:
      "Non Expiry",
  },

  /* ================= TELECEL VOICE + SMS ================= */

  {
    category:
      "Voice + SMS",

    name:
      "¢1 Voice + SMS",

    network:
      "Telecel Voice + SMS",

    price: 1,

    validity:
      "Non Expiry",
  },

  {
    category:
      "Voice + SMS",

    name:
      "¢5 Voice + SMS",

    network:
      "Telecel Voice + SMS",

    price: 5,

    validity:
      "Non Expiry",
  },

  {
    category:
      "Voice + SMS",

    name:
      "¢10 Voice + SMS",

    network:
      "Telecel Voice + SMS",

    price: 10,

    validity:
      "Non Expiry",
  },

  {
    category:
      "Voice + SMS",

    name:
      "¢20 Voice + SMS",

    network:
      "Telecel Voice + SMS",

    price: 20,

    validity:
      "Non Expiry",
  },

  /* ================= VOICE + DATA + SMS ================= */

  {
    category:
      "Voice + Data",

    name:
      "¢1 Voice + Data",

    network:
      "Telecel Voice + Data + SMS",

    price: 1,

    validity:
      "Non Expiry",
  },

  {
    category:
      "Voice + Data",

    name:
      "¢5 Voice + Data",

    network:
      "Telecel Voice + Data + SMS",

    price: 5,

    validity:
      "Non Expiry",
  },

  {
    category:
      "Voice + Data",

    name:
      "¢10 Voice + Data",

    network:
      "Telecel Voice + Data + SMS",

    price: 10,

    validity:
      "Non Expiry",
  },

  {
    category:
      "Voice + Data",

    name:
      "¢20 Voice + Data",

    network:
      "Telecel Voice + Data + SMS",

    price: 20,

    validity:
      "Non Expiry",
  },

  /* ================= SPECIAL OFFER ================= */

  {
    category:
      "Special Offer",

    name:
      "200 Minutes",

    network:
      "Telecel Special Offer",

    price: 7,

    validity:
      "7 Days",
  },

  /* ================= AIRTIME ================= */

  {
    category:
      "Airtime",

    name:
      "GH₵0.50 Airtime",

    network:
      "All Networks",

    price: 0.5,

    validity:
      "Instant",
  },

  {
    category:
      "Airtime",

    name:
      "GH₵1 Airtime",

    network:
      "All Networks",

    price: 1,

    validity:
      "Instant",
  },

  {
    category:
      "Airtime",

    name:
      "GH₵5 Airtime",

    network:
      "All Networks",

    price: 5,

    validity:
      "Instant",
  },

  {
    category:
      "Airtime",

    name:
      "GH₵10 Airtime",

    network:
      "All Networks",

    price: 10,

    validity:
      "Instant",
  },

  {
    category:
      "Airtime",

    name:
      "GH₵20 Airtime",

    network:
      "All Networks",

    price: 20,

    validity:
      "Non Expiry",
  },

  {
    category:
      "Airtime",

    name:
      "GH₵50 Airtime",

    network:
      "All Networks",

    price: 50,

    validity:
      "Non Expiry",
  },
];

export default function StorePage() {
  const [
    selectedPackage,
    setSelectedPackage,
  ] = useState<any>(
    null
  );

  const [cart, setCart] =
    useState<any[]>([]);

  const [
    cartOpen,
    setCartOpen,
  ] = useState(false);

  const [
    walletBalance,
    setWalletBalance,
  ] = useState(0);

  const [
    walletId,
    setWalletId,
  ] = useState("");

  const [
    activeTab,
    setActiveTab,
  ] = useState("All");

  useEffect(() => {
    loadWallet();
  }, []);

  async function loadWallet() {
    const { data } =
      await supabase
        .from("wallets")
        .select("*")
        .limit(1)
        .single();

    if (data) {
      setWalletBalance(
        Number(
          data.balance
        )
      );

      setWalletId(
        data.id
      );
    }
  }

  const tabs = [
    "All",
    "MTN",
    "Telecel",
    "Big Time",
    "Mashup",
    "Airtime",
    "Telecel Voice + Sms",
    "Telecel Voice + Data + Sms",
    "Telecel Special Offer"
  ];

  const filteredPackages =
    useMemo(() => {
      if (
        activeTab ===
        "All"
      ) {
        return packages;
      }

      return packages.filter(
        (item) =>
          item.category ===
          activeTab
      );
    }, [activeTab]);

  function addToCart(
    item: any,
    phone: string
  ) {
    setCart([
      ...cart,
      {
        ...item,
        phone,
      },
    ]);

    setCartOpen(true);
  }

  async function checkout() {
    const total =
      cart.reduce(
        (
          total,
          item
        ) =>
          total +
          Number(
            item.price
          ),
        0
      );

    if (
      walletBalance <
      total
    ) {
      alert(
        "Insufficient wallet balance"
      );

      return;
    }

    const newBalance =
      walletBalance -
      total;

    await supabase
      .from("wallets")
      .update({
        balance:
          newBalance,
      })
      .eq(
        "id",
        walletId
      );

    for (const item of cart) {
      await supabase
        .from("orders")
        .insert([
          {
            reference:
              generateRef(),

            network:
              item.network,

            package:
              item.name,

            phone:
              item.phone,

            amount:
              item.price,

            validity:
              item.validity,

            source:
              "Customer",

            status:
              "Waiting",
          },
        ]);
    }

    setWalletBalance(
      newBalance
    );

    setCart([]);

    setCartOpen(false);

    alert(
      "Order placed successfully"
    );
  }

  return (
    <div
      style={{
        minHeight:
          "100vh",
        background:
          "#0f172a",
        color: "white",
        padding:
          "24px",
      }}
    >
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
              "32px",
            fontWeight:
              "800",
            marginBottom:
              "8px",
          }}
        >
          Telecom Store
        </h1>

        <p
          style={{
            color:
              "#94a3b8",
            fontSize:
              "15px",
          }}
        >
          Affordable data
          bundles
        </p>
      </div>

      {/* TOP BAR */}

      <div
        style={{
          display:
            "flex",
          justifyContent:
            "space-between",
          alignItems:
            "center",
          gap: "16px",
          flexWrap:
            "wrap",
          marginBottom:
            "24px",
        }}
      >
        <div
          style={{
            background:
              "#111827",
            padding:
              "14px 18px",
            borderRadius:
              "14px",
            border:
              "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <p
            style={{
              color:
                "#94a3b8",
              fontSize:
                "13px",
            }}
          >
            Wallet Balance
          </p>

          <h2
            style={{
              fontSize:
                "24px",
              fontWeight:
                "800",
              marginTop:
                "4px",
            }}
          >
            GH₵
            {
              walletBalance
            }
          </h2>
        </div>

        <button
          onClick={() =>
            setCartOpen(
              true
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
              "14px 18px",
            borderRadius:
              "14px",
            fontWeight:
              "700",
            cursor:
              "pointer",
          }}
        >
          Cart (
          {
            cart.length
          }
          )
        </button>
      </div>

      {/* TABS */}

      <div
        style={{
          display:
            "flex",
          gap: "12px",
          overflowX:
            "auto",
          marginBottom:
            "24px",
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

                border:
                  "none",

                color:
                  "white",

                padding:
                  "12px 18px",

                borderRadius:
                  "12px",

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

      {/* PACKAGES */}

      <div
        style={{
          display: "grid",

          gridTemplateColumns:
            "repeat(auto-fit,minmax(240px,1fr))",

          gap: "18px",
        }}
      >
        {filteredPackages.map(
          (item) => (
            <PackageCard
              key={
                item.name
              }
              item={item}
              onBuy={() =>
                setSelectedPackage(
                  item
                )
              }
            />
          )
        )}
      </div>

      {/* MODAL */}

      <PackageModal
        open={
          !!selectedPackage
        }
        packageItem={
          selectedPackage
        }
        onClose={() =>
          setSelectedPackage(
            null
          )
        }
        onAddToCart={
          addToCart
        }
      />

      {/* CART */}

      <CartDrawer
        open={cartOpen}
        onClose={() =>
          setCartOpen(
            false
          )
        }
        cart={cart}
        setCart={setCart}
        walletBalance={
          walletBalance
        }
        checkout={
          checkout
        }
      />
    </div>
  );
}
