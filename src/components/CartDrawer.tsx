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
        zIndex: 9999,
        display:
          "flex",
        justifyContent:
          "flex-end",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth:
            "520px",
          background:
            "#020617",
          color: "white",
          height: "100vh",
          overflow:
            "auto",
          padding:
            "30px",
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
              "30px",
          }}
        >
          <div>
            <h1
              style={{
                fontSize:
                  "34px",
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
                  "8px",
              }}
            >
              Checkout your
              packages
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
                "32px",
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
              "#081028",
            border:
              "1px solid rgba(255,255,255,0.08)",
            borderRadius:
              "24px",
            padding:
              "24px",
            marginBottom:
              "24px",
          }}
        >
          <p
            style={{
              color:
                "#94a3b8",
              marginBottom:
                "10px",
            }}
          >
            Wallet Balance
          </p>

          <h1
            style={{
              fontSize:
                "42px",
              fontWeight:
                "900",
            }}
          >
            GH₵
            {
              walletBalance
            }
          </h1>
        </div>

        {/* ITEMS */}

        <div
          style={{
            display: "grid",
            gap: "18px",
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
                    "#081028",
                  border:
                    "1px solid rgba(255,255,255,0.08)",
                  borderRadius:
                    "24px",
                  padding:
                    "20px",
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
                  <div>
                    <h2
                      style={{
                        fontSize:
                          "24px",
                        fontWeight:
                          "900",
                      }}
                    >
                      {
                        item.name
                      }
                    </h2>

                    <p
                      style={{
                        color:
                          "#94a3b8",
                        marginTop:
                          "8px",
                      }}
                    >
                      {
                        item.network
                      }
                    </p>
                  </div>

                  <h2
                    style={{
                      color:
                        "#38bdf8",
                    }}
                  >
                    GH₵
                    {
                      item.price
                    }
                  </h2>
                </div>

                <div
                  style={{
                    display:
                      "grid",
                    gap: "10px",
                    marginBottom:
                      "18px",
                  }}
                >
                  <Info
                    title="Phone"
                    value={
                      item.phone
                    }
                  />

                  <Info
                    title="Validity"
                    value={
                      item.validity
                    }
                  />
                </div>

                <button
                  onClick={() =>
                    removeItem(
                      index
                    )
                  }
                  style={{
                    width:
                      "100%",
                    padding:
                      "14px",
                    border:
                      "none",
                    borderRadius:
                      "14px",
                    background:
                      "#dc2626",
                    color:
                      "white",
                    fontWeight:
                      "800",
                    cursor:
                      "pointer",
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
            background:
              "#081028",
            border:
              "1px solid rgba(255,255,255,0.08)",
            borderRadius:
              "24px",
            padding:
              "24px",
            marginTop:
              "24px",
          }}
        >
          <div
            style={{
              display:
                "flex",
              justifyContent:
                "space-between",
              marginBottom:
                "20px",
            }}
          >
            <h2
              style={{
                fontSize:
                  "24px",
                fontWeight:
                  "800",
              }}
            >
              Total
            </h2>

            <h2
              style={{
                fontSize:
                  "32px",
                fontWeight:
                  "900",
                color:
                  "#38bdf8",
              }}
            >
              GH₵
              {total}
            </h2>
          </div>

          <button
            disabled={
              cart.length ===
              0
            }
            onClick={
              checkout
            }
            style={{
              width: "100%",
              padding:
                "18px",
              borderRadius:
                "18px",
              border:
                "none",
              background:
                cart.length ===
                0
                  ? "#334155"
                  : "linear-gradient(90deg,#2563eb,#7c3aed)",
              color:
                "white",
              fontSize:
                "20px",
              fontWeight:
                "900",
              cursor:
                "pointer",
            }}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

function Info({
  title,
  value,
}: any) {
  return (
    <div>
      <p
        style={{
          color:
            "#94a3b8",
          marginBottom:
            "6px",
          fontSize:
            "14px",
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
