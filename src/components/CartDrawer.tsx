type Props = {
  open: boolean;

  onClose: () => void;

  cart: any[];

  setCart: any;

  walletBalance: number;

  checkout: () => void;
};

export default function CartDrawer({
  open,
  onClose,
  cart,
  setCart,
  walletBalance,
  checkout,
}: Props) {
  if (!open)
    return null;

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

  function removeItem(
    index: number
  ) {
    const updated =
      [...cart];

    updated.splice(
      index,
      1
    );

    setCart(updated);
  }

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

        justifyContent:
          "flex-end",

        zIndex: 9999,
      }}
    >
      <div
        style={{
          width: "100%",

          maxWidth:
            "420px",

          background:
            "#111827",

          height:
            "100vh",

          overflow:
            "auto",

          padding:
            "24px",

          borderLeft:
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
          <div>
            <h1
              style={{
                fontSize:
                  "28px",

                fontWeight:
                  "900",
              }}
            >
              Cart
            </h1>

            <p
              style={{
                color:
                  "#94a3b8",

                marginTop:
                  "6px",
              }}
            >
              {
                cart.length
              }{" "}
              item(s)
            </p>
          </div>

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

        {/* WALLET */}

        <div
          style={{
            background:
              "#0f172a",

            borderRadius:
              "18px",

            padding:
              "18px",

            marginBottom:
              "24px",
          }}
        >
          <p
            style={{
              color:
                "#94a3b8",

              marginBottom:
                "8px",
            }}
          >
            Wallet Balance
          </p>

          <h2
            style={{
              fontSize:
                "28px",

              fontWeight:
                "900",
            }}
          >
            GH₵
            {
              walletBalance
            }
          </h2>
        </div>

        {/* ITEMS */}

        <div
          style={{
            display:
              "grid",

            gap: "16px",
          }}
        >
          {cart.map(
            (
              item,
              index
            ) => (
              <div
                key={
                  index
                }
                style={{
                  background:
                    "#0f172a",

                  borderRadius:
                    "18px",

                  padding:
                    "18px",
                }}
              >
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
                  <h3
                    style={{
                      fontWeight:
                        "800",
                    }}
                  >
                    {
                      item.name
                    }
                  </h3>

                  <h3
                    style={{
                      color:
                        "#38bdf8",

                      fontWeight:
                        "800",
                    }}
                  >
                    GH₵
                    {
                      item.price
                    }
                  </h3>
                </div>

                <p
                  style={{
                    color:
                      "#94a3b8",

                    fontSize:
                      "14px",

                    marginBottom:
                      "6px",
                  }}
                >
                  {
                    item.phone
                  }
                </p>

                <p
                  style={{
                    color:
                      "#94a3b8",

                    fontSize:
                      "14px",

                    marginBottom:
                      "14px",
                  }}
                >
                  {
                    item.validity
                  }
                </p>

                <button
                  onClick={() =>
                    removeItem(
                      index
                    )
                  }
                  style={{
                    width:
                      "100%",

                    background:
                      "#dc2626",

                    border:
                      "none",

                    color:
                      "white",

                    padding:
                      "12px",

                    borderRadius:
                      "12px",

                    cursor:
                      "pointer",

                    fontWeight:
                      "700",
                  }}
                >
                  Remove
                </button>
              </div>
            )
          )}
        </div>

        {/* TOTAL */}

        <div
          style={{
            marginTop:
              "24px",

            background:
              "#0f172a",

            borderRadius:
              "18px",

            padding:
              "18px",
          }}
        >
          <div
            style={{
              display:
                "flex",

              justifyContent:
                "space-between",

              marginBottom:
                "18px",
            }}
          >
            <h2
              style={{
                fontWeight:
                  "800",
              }}
            >
              Total
            </h2>

            <h2
              style={{
                color:
                  "#38bdf8",

                fontWeight:
                  "900",
              }}
            >
              GH₵
              {total}
            </h2>
          </div>

          <button
            onClick={
              checkout
            }
            disabled={
              cart.length ===
              0
            }
            style={{
              width: "100%",

              background:
                cart.length ===
                0
                  ? "#334155"
                  : "#2563eb",

              border:
                "none",

              color:
                "white",

              padding:
                "16px",

              borderRadius:
                "14px",

              cursor:
                "pointer",

              fontWeight:
                "800",

              fontSize:
                "15px",
            }}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
