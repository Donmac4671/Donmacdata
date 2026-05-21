import {
  useEffect,
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
    name: "MTN 5GB",
    network: "MTN",
    price: 22,
    validity:
      "90 Days",
  },

  {
    name:
      "Telecel 10GB",
    network:
      "Telecel",
    price: 42,
    validity:
      "60 Days",
  },

  {
    name:
      "AT Big Time 100GB",
    network:
      "AirtelTigo Big Time",
    price: 177,
    validity:
      "Non Expiry",
  },

  {
    name:
      "Mashup ¢10",
    network:
      "Mashup",
    price: 10,
    validity:
      "Non Expiry",
  },

  {
    name:
      "Special Offer",
    network:
      "Telecel",
    price: 7,
    validity:
      "7 Days",
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

  useEffect(() => {
    loadWallet();
  }, []);

  async function loadWallet() {
    const { data, error } =
      await supabase
        .from("wallets")
        .select("*")
        .limit(1)
        .single();

    if (error) {
      console.log(error);

      return;
    }

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
    if (
      cart.length ===
      0
    ) {
      return;
    }

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

    const walletUpdate =
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

    if (
      walletUpdate.error
    ) {
      console.log(
        walletUpdate.error
      );

      alert(
        "Wallet update failed"
      );

      return;
    }

    for (const item of cart) {
      const orderInsert =
        await supabase
          .from(
            "orders"
          )
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

      if (
        orderInsert.error
      ) {
        console.log(
          orderInsert.error
        );
      }

      const transactionInsert =
        await supabase
          .from(
            "transactions"
          )
          .insert([
            {
              reference:
                generateRef(),

              type:
                "Debit",

              amount:
                item.price,

              status:
                "Success",

              description: `Purchase of ${item.name}`,
            },
          ]);

      if (
        transactionInsert.error
      ) {
        console.log(
          transactionInsert.error
        );
      }
    }

    setWalletBalance(
      newBalance
    );

    setCart([]);

    setCartOpen(false);

    alert(
      "Checkout successful"
    );
  }

  return (
    <div
      style={{
        background:
          "#020617",
        minHeight:
          "100vh",
        color: "white",
        padding:
          "40px",
      }}
    >
      {/* HEADER */}

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
            "40px",
        }}
      >
        <div>
          <h1
            style={{
              fontSize:
                "52px",
              fontWeight:
                "900",
            }}
          >
            Telecom Store
          </h1>

          <p
            style={{
              color:
                "#94a3b8",
              marginTop:
                "10px",
            }}
          >
            Buy affordable
            telecom bundles
          </p>
        </div>

        <div
          style={{
            display:
              "flex",
            gap: "16px",
            flexWrap:
              "wrap",
          }}
        >
          <div
            style={{
              background:
                "#081028",
              border:
                "1px solid rgba(255,255,255,0.08)",
              borderRadius:
                "18px",
              padding:
                "16px 22px",
            }}
          >
            <p
              style={{
                color:
                  "#94a3b8",
                marginBottom:
                  "8px",
                fontSize:
                  "14px",
              }}
            >
              Wallet
            </p>

            <h2
              style={{
                fontWeight:
                  "900",
                fontSize:
                  "28px",
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
                "linear-gradient(90deg,#2563eb,#7c3aed)",
              border:
                "none",
              borderRadius:
                "18px",
              padding:
                "18px 24px",
              color:
                "white",
              fontWeight:
                "900",
              fontSize:
                "18px",
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
      </div>

      {/* PACKAGES */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",
          gap: "24px",
        }}
      >
        {packages.map(
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

      {/* PACKAGE MODAL */}

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
