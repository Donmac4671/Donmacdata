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
          "#081028",
        border:
          "1px solid rgba(255,255,255,0.08)",
        borderRadius:
          "30px",
        padding:
          "28px",
      }}
    >
      <div
        style={{
          display:
            "flex",
          justifyContent:
            "space-between",
          marginBottom:
            "30px",
        }}
      >
        <h2
          style={{
            fontSize:
              "38px",
            fontWeight:
              "900",
          }}
        >
          {item.name}
        </h2>

        <div
          style={{
            background:
              "#052e16",
            color:
              "#22c55e",
            padding:
              "10px 18px",
            borderRadius:
              "999px",
            fontWeight:
              "800",
          }}
        >
          ACTIVE
        </div>
      </div>

      <h1
        style={{
          fontSize:
            "48px",
          color:
            "#38bdf8",
          marginBottom:
            "30px",
        }}
      >
        GH₵
        {item.price}
      </h1>

      <div
        style={{
          display:
            "inline-block",
          background:
            "#172554",
          padding:
            "12px 20px",
          borderRadius:
            "16px",
          marginBottom:
            "30px",
          fontWeight:
            "700",
        }}
      >
        {item.network}
      </div>

      <button
        onClick={onBuy}
        style={{
          width: "100%",
          padding:
            "18px",
          borderRadius:
            "18px",
          border:
            "none",
          background:
            "linear-gradient(90deg,#2563eb,#7c3aed)",
          color:
            "white",
          fontWeight:
            "800",
          fontSize:
            "20px",
          cursor:
            "pointer",
        }}
      >
        Buy Now
      </button>
    </div>
  );
}
