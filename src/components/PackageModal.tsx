type Props = {
  open: boolean;

  onClose: () => void;

  packageItem: any;

  onAddToCart: (
    item: any,
    phone: string
  ) => void;
};

import {
  useState,
} from "react";

export default function PackageModal({
  open,
  onClose,
  packageItem,
  onAddToCart,
}: Props) {
  const [phone, setPhone] =
    useState("");

  if (
    !open ||
    !packageItem
  )
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
          width: "100%",
          maxWidth:
            "700px",
          background:
            "white",
          borderRadius:
            "28px",
          padding:
            "32px",
          position:
            "relative",
        }}
      >
        {/* CLOSE */}

        <button
          onClick={
            onClose
          }
          style={{
            position:
              "absolute",
            top: "20px",
            right: "20px",
            background:
              "transparent",
            border:
              "none",
            fontSize:
              "32px",
            cursor:
              "pointer",
            color:
              "#475569",
          }}
        >
          ×
        </button>

        {/* HEADER */}

        <div
          style={{
            display:
              "flex",
            alignItems:
              "center",
            gap: "16px",
            marginBottom:
              "30px",
          }}
        >
          <div
            style={{
              width: "60px",
              height:
                "60px",
              borderRadius:
                "50%",
              background:
                "#facc15",
              display:
                "flex",
              alignItems:
                "center",
              justifyContent:
                "center",
              fontWeight:
                "800",
            }}
          >
            {
              packageItem.network
            }
          </div>

          <div>
            <h1
              style={{
                fontSize:
                  "36px",
                fontWeight:
                  "900",
                color:
                  "#0f172a",
              }}
            >
              {
                packageItem.name
              }
            </h1>

            <p
              style={{
                color:
                  "#64748b",
                fontSize:
                  "22px",
              }}
            >
              Add bundle to
              cart
            </p>
          </div>
        </div>

        {/* DETAILS */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
            marginBottom:
              "30px",
          }}
        >
          <div
            style={{
              background:
                "#f1f5f9",
              borderRadius:
                "20px",
              padding:
                "24px",
            }}
          >
            <p
              style={{
                color:
                  "#64748b",
                marginBottom:
                  "12px",
                fontSize:
                  "18px",
              }}
            >
              Price
            </p>

            <h2
              style={{
                fontSize:
                  "42px",
                fontWeight:
                  "900",
                color:
                  "#020617",
              }}
            >
              GH₵
              {
                packageItem.price
              }
            </h2>
          </div>

          <div
            style={{
              background:
                "#f1f5f9",
              borderRadius:
                "20px",
              padding:
                "24px",
            }}
          >
            <p
              style={{
                color:
                  "#64748b",
                marginBottom:
                  "12px",
                fontSize:
                  "18px",
              }}
            >
              Validity
            </p>

            <h2
              style={{
                fontSize:
                  "42px",
                fontWeight:
                  "900",
                color:
                  "#020617",
              }}
            >
              {
                packageItem.validity
              }
            </h2>
          </div>
        </div>

        {/* PHONE */}

        <div
          style={{
            marginBottom:
              "30px",
          }}
        >
          <label
            style={{
              display:
                "block",
              marginBottom:
                "14px",
              fontWeight:
                "700",
              fontSize:
                "20px",
              color:
                "#0f172a",
            }}
          >
            Recipient Phone
            Number
          </label>

          <input
            placeholder="e.g. 0549358359"
            value={phone}
            onChange={(e) =>
              setPhone(
                e.target.value
              )
            }
            style={{
              width: "100%",
              padding:
                "20px",
              borderRadius:
                "18px",
              border:
                "1px solid #cbd5e1",
              fontSize:
                "20px",
              outline:
                "none",
              boxSizing:
                "border-box",
            }}
          />
        </div>

        {/* BUTTONS */}

        <div
          style={{
            display:
              "flex",
            gap: "20px",
            flexWrap:
              "wrap",
          }}
        >
          <button
            onClick={
              onClose
            }
            style={{
              flex: 1,
              padding:
                "18px",
              borderRadius:
                "18px",
              border:
                "1px solid #cbd5e1",
              background:
                "white",
              fontSize:
                "22px",
              fontWeight:
                "700",
              cursor:
                "pointer",
            }}
          >
            Cancel
          </button>

          <button
            onClick={() => {
              if (
                !phone
              ) {
                alert(
                  "Enter phone number"
                );

                return;
              }

              onAddToCart(
                packageItem,
                phone
              );

              onClose();
            }}
            style={{
              flex: 1,
              padding:
                "18px",
              borderRadius:
                "18px",
              border:
                "none",
              background:
                "linear-gradient(90deg,#7c3aed,#ec4899)",
              color:
                "white",
              fontSize:
                "22px",
              fontWeight:
                "800",
              cursor:
                "pointer",
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
