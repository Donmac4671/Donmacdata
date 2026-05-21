import {
  useState,
} from "react";

type Props = {
  open: boolean;

  packageItem: any;

  onClose: () => void;

  onAddToCart: (
    item: any,
    phone: string
  ) => void;
};

export default function PackageModal({
  open,
  packageItem,
  onClose,
  onAddToCart,
}: Props) {
  const [phone, setPhone] =
    useState("");

  if (!open)
    return null;

  return (
    <div
      style={{
        position:
          "fixed",

        inset: 0,

        background:
          "rgba(0,0,0,0.7)",

        display:
          "flex",

        alignItems:
          "center",

        justifyContent:
          "center",

        zIndex: 9999,

        padding:
          "20px",
      }}
    >
      <div
        style={{
          background:
            "#111827",

          width: "100%",

          maxWidth:
            "420px",

          borderRadius:
            "24px",

          padding:
            "28px",

          border:
            "1px solid rgba(255,255,255,0.05)",
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

            marginBottom:
              "24px",
          }}
        >
          <h1
            style={{
              fontSize:
                "28px",

              fontWeight:
                "900",
            }}
          >
            {
              packageItem.name
            }
          </h1>

          <button
            onClick={
              onClose
            }
            style={{
              background:
                "transparent",

              border:
                "none",

              color:
                "white",

              fontSize:
                "28px",

              cursor:
                "pointer",
            }}
          >
            ×
          </button>
        </div>

        {/* INFO */}

        <div
          style={{
            background:
              "#0f172a",

            borderRadius:
              "18px",

            padding:
              "18px",

            marginBottom:
              "20px",
          }}
        >
          <Info
            title="Network"
            value={
              packageItem.network
            }
          />

          <Info
            title="Validity"
            value={
              packageItem.validity
            }
          />

          <Info
            title="Price"
            value={`GH₵${packageItem.price}`}
          />
        </div>

        {/* INPUT */}

        <div
          style={{
            marginBottom:
              "20px",
          }}
        >
          <label
            style={{
              display:
                "block",

              marginBottom:
                "10px",

              color:
                "#94a3b8",

              fontSize:
                "14px",
            }}
          >
            Phone Number
          </label>

          <input
            value={phone}
            onChange={(e) =>
              setPhone(
                e.target
                  .value
              )
            }
            placeholder="024XXXXXXX"
            style={{
              width: "100%",

              background:
                "#0f172a",

              border:
                "1px solid rgba(255,255,255,0.05)",

              color:
                "white",

              padding:
                "14px",

              borderRadius:
                "14px",

              outline:
                "none",

              boxSizing:
                "border-box",
            }}
          />
        </div>

        {/* BUTTON */}

        <button
          onClick={() => {
            if (!phone) {
              alert(
                "Enter phone number"
              );

              return;
            }

            onAddToCart(
              packageItem,
              phone
            );

            setPhone("");

            onClose();
          }}
          style={{
            width: "100%",

            background:
              "#2563eb",

            border:
              "none",

            color:
              "white",

            padding:
              "16px",

            borderRadius:
              "14px",

            fontWeight:
              "800",

            fontSize:
              "15px",

            cursor:
              "pointer",
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

function Info({
  title,
  value,
}: any) {
  return (
    <div
      style={{
        display:
          "flex",

        justifyContent:
          "space-between",

        marginBottom:
          "12px",
      }}
    >
      <p
        style={{
          color:
            "#94a3b8",
        }}
      >
        {title}
      </p>

      <h3
        style={{
          fontWeight:
            "700",
        }}
      >
        {value}
      </h3>
    </div>
  );
}
