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
    function checkSize() {
      setIsMobile(
        window.innerWidth <
          900
      );
    }

    checkSize();

    window.addEventListener(
      "resize",
      checkSize
    );

    return () =>
      window.removeEventListener(
        "resize",
        checkSize
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
    <div style={wrapper}>
      {/* MOBILE HEADER */}
      {isMobile && (
        <div
          style={
            mobileHeader
          }
        >
          <h1
            style={
              mobileLogo
            }
          >
            DonmacData
          </h1>

          <button
            onClick={() =>
              setOpen(
                true
              )
            }
            style={
              menuButton
            }
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
            style={
              overlay
            }
          />
        )}

      {/* SIDEBAR */}
      <aside
        style={{
          ...sidebar,

          transform:
            isMobile
              ? open
                ? "translateX(0)"
                : "translateX(-100%)"
              : "translateX(0)",
        }}
      >
        <div>
          <div
            style={
              topSection
            }
          >
            <div>
              <h1
                style={
                  logo
                }
              >
                DonmacData
              </h1>

              <p
                style={
                  sub
                }
              >
                Admin Panel
              </p>
            </div>

            {isMobile && (
              <button
                onClick={() =>
                  setOpen(
                    false
                  )
                }
                style={
                  closeBtn
                }
              >
                ✕
              </button>
            )}
          </div>

          <div
            style={
              menuWrap
            }
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
                    ...menuStyle,

                    background:
                      location.pathname ===
                      menu.path
                        ? "linear-gradient(135deg,#2563eb,#7c3aed)"
                        : "transparent",
                  }}
                >
                  {
                    menu.name
                  }
                </Link>
              )
            )}
          </div>
        </div>

        <button
          style={
            logoutBtn
          }
        >
          Logout
        </button>
      </aside>

      {/* MAIN */}
      <main
        style={{
          ...main,

          marginLeft:
            isMobile
              ? "0"
              : "300px",
        }}
      >
        <div style={content}>
          {children}
        </div>
      </main>
    </div>
  );
}

const wrapper = {
  minHeight: "100vh",
  background: "#050816",
  color: "white",
};

const sidebar = {
  width: "300px",

  background:
    "linear-gradient(180deg,#0B1120,#111827)",

  borderRight:
    "1px solid rgba(255,255,255,0.08)",

  position: "fixed" as const,

  top: 0,

  left: 0,

  bottom: 0,

  padding: "30px 22px",

  display: "flex",

  flexDirection:
    "column" as const,

  justifyContent:
    "space-between",

  zIndex: 1000,

  transition:
    "0.3s ease",
};

const topSection = {
  display: "flex",

  justifyContent:
    "space-between",

  alignItems: "center",
};

const logo = {
  fontSize: "34px",

  fontWeight: "900",

  margin: 0,
};

const sub = {
  color: "#94a3b8",

  marginTop: "8px",
};

const menuWrap = {
  marginTop: "40px",

  display: "flex",

  flexDirection:
    "column" as const,

  gap: "12px",
};

const menuStyle = {
  color: "white",

  textDecoration:
    "none",

  padding:
    "16px 18px",

  borderRadius:
    "16px",

  fontWeight: "600",

  transition:
    "0.2s ease",

  border:
    "1px solid rgba(255,255,255,0.05)",
};

const logoutBtn = {
  width: "100%",

  background:
    "linear-gradient(135deg,#dc2626,#ef4444)",

  border: "none",

  color: "white",

  padding: "18px",

  borderRadius:
    "18px",

  fontWeight: "700",

  cursor: "pointer",

  fontSize: "15px",
};

const main = {
  minHeight: "100vh",

  transition:
    "0.3s ease",
};

const content = {
  padding: "40px",

  maxWidth: "1700px",
};

const mobileHeader = {
  height: "72px",

  background:
    "rgba(11,17,32,0.95)",

  backdropFilter:
    "blur(10px)",

  display: "flex",

  alignItems: "center",

  justifyContent:
    "space-between",

  padding: "0 20px",

  position: "sticky" as const,

  top: 0,

  zIndex: 100,
};

const mobileLogo = {
  fontSize: "28px",

  fontWeight: "900",
};

const menuButton = {
  background: "#111827",

  border: "none",

  color: "white",

  width: "48px",

  height: "48px",

  borderRadius: "14px",

  fontSize: "24px",

  cursor: "pointer",
};

const closeBtn = {
  background: "#111827",

  border: "none",

  color: "white",

  width: "40px",

  height: "40px",

  borderRadius: "12px",

  cursor: "pointer",
};

const overlay = {
  position: "fixed" as const,

  inset: 0,

  background:
    "rgba(0,0,0,0.6)",

  zIndex: 999,
};
