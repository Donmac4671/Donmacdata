type Props = {
  item: any;

  onBuy: () => void;
};

export default function PackageCard({
  item,
  onBuy,
}: Props) {
  return (
    <div
      style={{
        background:
          "#111827",

        border:
          "1px solid rgba(255,255,255,0.05)",

        borderRadius:
          "18px",

        padding:
          "20px",

        transition:
          "0.2s",

        display:
          "flex",

        flexDirection:
          "column",

        justifyContent:
          "space-between",
      }}
    >
      {/* TOP */}

      <div>
        <div
          style={{
            display:
              "flex",

            justifyContent:
              "space-between",

            alignItems:
              "center",

            marginBottom:
              "18px",
          }}
        >
          <div
            style={{
              background:
                "#1e293b",

              color:
                "#38bdf8",

              padding:
                "6px 12px",

              borderRadius:
                "999px",

              fontSize:
                "12px",

              fontWeight:
                "700",
            }}
          >
            {
              item.network
            }
          </div>

          <div
            style={{
              color:
                "#94a3b8",

              fontSize:
                "13px",
            }}
          >
            {
              item.validity
            }
          </div>
        </div>

        <h1
          style={{
            fontSize:
              "34px",

            fontWeight:
              "900",

            marginBottom:
              "10px",
          }}
        >
          {item.name}
        </h1>

        <h2
          style={{
            fontSize:
              "28px",

            fontWeight:
              "800",

            color:
              "#38bdf8",

            marginBottom:
              "18px",
          }}
        >
          GH₵
          {item.price}
        </h2>
      </div>

      {/* BUTTON */}

      <button
        onClick={onBuy}
        style={{
          width: "100%",

          background:
            "#2563eb",

          border:
            "none",

          color:
            "white",

          padding:
            "14px",

          borderRadius:
            "14px",

          fontWeight:
            "800",

          cursor:
            "pointer",

          fontSize:
            "15px",
        }}
      >
        Buy Now
      </button>
    </div>
  );
}
