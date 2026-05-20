import {
  Link,
  useLocation,
} from "react-router-dom";

import {
  useEffect,
  useState,
} from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const location =
    useLocation();

  const [open, setOpen] =
    useState(false);

  const [
    isMobile,
    setIsMobile,
  ] = useState(false);

  useEffect(() => {
    const checkMobile =
      () => {
        setIsMobile(
          window.innerWidth <
            900
        );
      };

    checkMobile();

    window.addEventListener(
      "resize",
      checkMobile
    );

    return () =>
      window.removeEventListener(
        "resize",
        checkMobile
      );
  }, []);

  const menus = [
    {
      name: "Dashboard",
      path: "/admin",
    },

    {
      name: "Resellers",
      path:
        "/admin/resellers",
    },

    {
      name: "Customers",
      path:
        "/admin/customers",
    },

    {
      name: "Orders",
      path:
        "/admin/orders",
    },

    {
      name: "Top Ups",
      path:
        "/admin/topups",
    },

    {
      name:
        "Complaints",
      path:
        "/admin/complaints",
    },

    {
      name:
        "Announcements",
      path:
        "/admin/announcements",
    },

    {
      name:
        "Packages",
      path:
        "/admin/packages",
    },

    {
      name:
        "Rankings",
      path:
        "/admin/rankings",
    },
  ];

  return (
    <div
      style={{
        minHeight:
          "100vh",

        background:
          "#050816",

        color: "white",
      }}
    >
      {/* MOBILE HEADER */}
      {isMobile && (
        <div
          style={{
            height: "70px",

            background:
              "#0B1120",

            display: "flex",

            alignItems:
              "center",

            justifyContent:
              "space-between",

            padding:
              "0 20px",

            position:
              "sticky" as const,

            top: 0,

            zIndex: 1000,

            borderBottom:
              "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h1
            style={{
              fontSize:
                "24px",

              fontWeight:
                "900",
            }}
          >
            DonmacData
          </h1>

          <button
            onClick={() =>
              setOpen(
                true
              )
            }
            style={{
              width:
                "45px",

              height:
                "45px",

              border:
                "none",

              borderRadius:
                "12px",

              background:
                "#111827",

              color:
                "white",

              fontSize:
                "22px",

              cursor:
                "pointer",
            }}
          >
            ☰
          </button>
        </div>
      )}

      {/* OVERLAY */}
      {isMobile &&
        open && (
          <div
            onClick={() =>
              setOpen(
                false
              )
            }
            style={{
              position:
                "fixed" as const,

              inset: 0,

              background:
                "rgba(0,0,0,0.6)",

              zIndex: 999,
            }}
          />
        )}

      {/* SIDEBAR */}
      <div
        style={{
          width: "230px",

          background:
            "#0B1120",

          position:
            "fixed" as const,

          top: 0,

          left: 0,

          bottom: 0,

          padding:
            "20px",

          borderRight:
            "1px solid rgba(255,255,255,0.08)",

          overflowY:
            "auto" as const,

          zIndex: 1000,

          transition:
            "0.3s ease",

          transform:
            isMobile
              ? open
                ? "translateX(0)"
                : "translateX(-100%)"
              : "translateX(0)",
        }}
      >
        <h1
          style={{
            fontSize:
              "30px",

            fontWeight:
              "900",

            marginBottom:
              "6px",
          }}
        >
          DonmacData
        </h1>

        <p
          style={{
            color:
              "#94a3b8",

            marginBottom:
              "30px",

            fontSize:
              "14px",
          }}
        >
          Admin Panel
        </p>

        <div
          style={{
            display:
              "flex",

            flexDirection:
              "column" as const,

            gap: "10px",
          }}
        >
          {menus.map(
            (menu) => (
              <Link
                key={
                  menu.path
                }
                to={
                  menu.path
                }
                onClick={() =>
                  setOpen(
                    false
                  )
                }
                style={{
                  padding:
                    "14px",

                  borderRadius:
                    "14px",

                  textDecoration:
                    "none",

                  color:
                    "white",

                  fontWeight:
                    "600",

                  fontSize:
                    "14px",

                  background:
                    location.pathname ===
                    menu.path
                      ? "linear-gradient(135deg,#2563eb,#7c3aed)"
                      : "#111827",
                }}
              >
                {
                  menu.name
                }
              </Link>
            )
          )}
        </div>

        <button
          style={{
            marginTop:
              "30px",

            width: "100%",

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
              "700",

            cursor:
              "pointer",

            fontSize:
              "14px",
          }}
        >
          Logout
        </button>
      </div>

      {/* MAIN CONTENT */}
      <div
        style={{
          marginLeft:
            isMobile
              ? "0"
              : "230px",

          width:
            isMobile
              ? "100%"
              : "calc(100% - 230px)",

          padding:
            isMobile
              ? "20px"
              : "35px",

          boxSizing:
            "border-box" as const,
        }}
      >
        {children}
      </div>
    </div>
  );
}
