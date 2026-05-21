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
  {
    category: "MTN",
    name: "1GB",
    network: "MTN",
    price: 4.4,
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
    category: "Telecel",
    name: "10GB",
    network: "Telecel",
    price: 42,
    validity: "60 Days",
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
      "Special Offer",

    name:
      "200 Minutes",

    network:
      "Telecel Special Offer",

    price: 7,

    validity:
      "7 Days",
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
    "AT Premium",
    "Big Time",
    "Mashup",
    "Voice + SMS",
    "Voice + Data",
    "Special Offer",
    "Airtime",
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

    const {
      error:
        walletError,
    } = await supabase
      .from("wallets")
      .update({
        balance:
          newBalance,
      })
      .eq(
        "id",
        walletId
      );

    if (walletError) {
      console.log(
        walletError
      );

      alert(
        "Wallet update failed"
      );

      return;
    }

    const orders =
      cart.map(
        (item) => ({
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
        })
      );

    const {
      error:
        orderError,
    } = await supabase
      .from("orders")
      .insert(
        orders
      );

    if (orderError) {
      console.log(
        orderError
      );

      alert(
        orderError.message
      );

      return;
    }

    setWalletBalance(
      newBalance
    );

    setCart([]);

    setCartOpen(
      false
    );

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
          }}
        >
          Affordable telecom bundles
        </p>
      </div>

      {/* TOP */}

      <div
        style={{
          display:
            "flex",

          justifyContent:
            "space-between",

          alignItems:
            "center",

          marginBottom:
            "24px",

          flexWrap:
            "wrap",

          gap: "14px",
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

          gap: "10px",

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

                whiteSpace:
                  "nowrap",

                fontWeight:
                  "700",
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
          display:
            "grid",

          gridTemplateColumns:
            "repeat(auto-fit,minmax(230px,1fr))",

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
