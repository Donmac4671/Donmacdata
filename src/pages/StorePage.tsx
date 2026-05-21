import {
  useState,
} from "react";

import PackageCard from "../components/PackageCard";

import PackageModal from "../components/PackageModal";

const packages = [
  {
    name: "5GB",

    network: "MTN",

    price: 22,

    validity:
      "90 Days",
  },

  {
    name: "10GB",

    network:
      "Telecel",

    price: 42,

    validity:
      "60 Days",
  },

  {
    name: "100GB",

    network:
      "AirtelTigo Big Time",

    price: 177,

    validity:
      "Non Expiry",
  },

  {
    name: "Mashup ¢10",

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

    alert(
      "Added to cart"
    );
  }

  return (
    <div
      style={{
        padding:
          "40px",
        minHeight:
          "100vh",
        background:
          "#020617",
        color: "white",
      }}
    >
      <div
        style={{
          marginBottom:
            "40px",
        }}
      >
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
            fontSize:
              "20px",
          }}
        >
          Buy affordable
          data bundles
        </p>
      </div>

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
    </div>
  );
}
