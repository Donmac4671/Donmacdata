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
        background:
          "#050816",

        minHeight:
          "100vh",

        color: "white",
      }}
    >
      {/* MOBILE TOPBAR */}
      {isMobile && (
        <div
          style={{
            height: "70px",

            display:
              "flex",

            alignItems:
              "center",

            justifyContent:
              "space-between",

            padding:
              "0 20px",

            background:
              "#0B1120",

            borderBottom:
              "1px solid rgba(255,255,255,0.08)",

            position:
              "sticky",

            top: 0,

            zIndex: 999,
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
                "48px",

              height:
                "48px",

              border:
                "none",

              borderRadius:
                "12px",

              background:
                "#111827",

              color:
                "white",

              fontSize:
                "24px",

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
                "fixed",

              inset: 0,

              background:
                "rgba(0,0,0,0.6)",

              zIndex: 998,
            }}
          />
        )}

      {/* SIDEBAR */}
      <aside
        style={{
          width: "280px",

          background:
            "#0B1120",

          borderRight:
            "1px solid rgba(255,255,255,0.08)",

          position:
            "fixed",

          top: 0,

          left: 0,

          bottom: 0,

          padding:
            "24px",

          zIndex: 999,

          overflowY:
            "auto",

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
              "38px",

            fontWeight:
              "900",

            marginBottom:
              "8px",
          }}
        >
          DonmacData
        </h1>

        <p
          style={{
            color:
              "#94a3b8",

            marginBottom:
              "40px",
          }}
        >
          Admin Panel
        </p>

        <div
          style={{
            display:
              "flex",

            flexDirection:
              "column",

            gap: "12px",
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
                    "16px",

                  borderRadius:
                    "14px",

                  textDecoration:
                    "none",

                  color:
                    "white",

                  fontWeight:
                    "600",

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
              "40px",

            width: "100%",

            background:
              "#dc2626",

            border:
              "none",

            color:
              "white",

            padding:
              "16px",

            borderRadius:
              "14px",

            fontWeight:
              "700",

            cursor:
              "pointer",
          }}
        >
          Logout
        </button>
      </aside>

      {/* PAGE CONTENT */}
      <main
        style={{
          marginLeft:
            isMobile
              ? "0"
              : "280px",

          padding:
            isMobile
              ? "20px"
              : "40px",

          width:
            isMobile
              ? "100%"
              : "calc(100% - 280px)",

          boxSizing:
            "border-box",
        }}
      >
        {children}
      </main>
    </div>
  );
}
