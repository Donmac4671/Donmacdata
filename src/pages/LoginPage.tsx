import {
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import { supabase } from "../lib/supabase";

export default function LoginPage() {
  const navigate =
    useNavigate();

  const [email, setEmail] =
    useState("");

  const [
    password,
    setPassword,
  ] = useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  async function handleLogin(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setLoading(true);

    setError("");

    const { error } =
      await supabase.auth.signInWithPassword(
        {
          email,
          password,
        }
      );

    setLoading(false);

    if (error) {
      setError(
        error.message
      );

      return;
    }

    navigate("/admin");
  }

  return (
    <div style={wrapper}>
      {/* LEFT SIDE */}
      <div style={left}>
        <div>
          <h1 style={logo}>
            DonmacData
          </h1>

          <p style={tagline}>
            Smart VTU &
            Reseller
            Management
            Platform
          </p>

          <div
            style={{
              marginTop:
                "40px",

              display: "flex",

              flexDirection:
                "column",

              gap: "20px",
            }}
          >
            <Feature
              text="Fast Data Delivery"
            />

            <Feature
              text="Wallet Top Ups"
            />

            <Feature
              text="Reseller Analytics"
            />

            <Feature
              text="Advanced Dashboard"
            />
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div style={right}>
        <form
          onSubmit={
            handleLogin
          }
          style={card}
        >
          <div
            style={{
              marginBottom:
                "30px",
            }}
          >
            <h2 style={title}>
              Welcome Back
            </h2>

            <p
              style={
                subtitle
              }
            >
              Login to
              continue
            </p>
          </div>

          {error && (
            <div
              style={
                errorBox
              }
            >
              {error}
            </div>
          )}

          <div
            style={{
              display:
                "flex",

              flexDirection:
                "column",

              gap: "20px",
            }}
          >
            <div>
              <label
                style={
                  label
                }
              >
                Email
              </label>

              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(
                  e
                ) =>
                  setEmail(
                    e
                      .target
                      .value
                  )
                }
                style={
                  input
                }
              />
            </div>

            <div>
              <label
                style={
                  label
                }
              >
                Password
              </label>

              <input
                type="password"
                placeholder="Enter password"
                value={
                  password
                }
                onChange={(
                  e
                ) =>
                  setPassword(
                    e
                      .target
                      .value
                  )
                }
                style={
                  input
                }
              />
            </div>

            <button
              type="submit"
              disabled={
                loading
              }
              style={
                button
              }
            >
              {loading
                ? "Logging in..."
                : "Login"}
            </button>
          </div>

          <div
            style={{
              marginTop:
                "30px",

              textAlign:
                "center",

              color:
                "#94a3b8",

              fontSize:
                "14px",
            }}
          >
            Powered by
            DonmacData
          </div>
        </form>
      </div>
    </div>
  );
}

function Feature({
  text,
}: {
  text: string;
}) {
  return (
    <div style={feature}>
      <div style={dot} />

      <span>{text}</span>
    </div>
  );
}

const wrapper = {
  minHeight: "100vh",

  display: "flex",

  flexWrap: "wrap" as const,

  background:
    "linear-gradient(135deg,#050816,#0f172a)",
};

const left = {
  flex: 1,

  minWidth: "320px",

  display: "flex",

  alignItems: "center",

  justifyContent:
    "center",

  padding: "60px",
};

const right = {
  flex: 1,

  minWidth: "320px",

  display: "flex",

  alignItems: "center",

  justifyContent:
    "center",

  padding: "30px",
};

const card = {
  width: "100%",

  maxWidth: "480px",

  background:
    "rgba(15,23,42,0.92)",

  border:
    "1px solid rgba(255,255,255,0.08)",

  backdropFilter:
    "blur(14px)",

  borderRadius:
    "30px",

  padding: "40px",

  boxSizing:
    "border-box" as const,
};

const logo = {
  fontSize: "72px",

  fontWeight: "900",

  color: "white",
};

const tagline = {
  color: "#94a3b8",

  fontSize: "22px",

  marginTop: "20px",

  maxWidth: "500px",

  lineHeight: 1.6,
};

const title = {
  fontSize: "42px",

  fontWeight: "900",

  color: "white",
};

const subtitle = {
  color: "#94a3b8",

  marginTop: "10px",
};

const label = {
  display: "block",

  marginBottom: "10px",

  color: "#cbd5e1",

  fontWeight: "600",
};

const input = {
  width: "100%",

  background: "#111827",

  border:
    "1px solid #374151",

  color: "white",

  padding: "18px",

  borderRadius:
    "16px",

  fontSize: "16px",

  outline: "none",

  boxSizing:
    "border-box" as const,
};

const button = {
  width: "100%",

  background:
    "linear-gradient(135deg,#2563eb,#7c3aed)",

  border: "none",

  color: "white",

  padding: "18px",

  borderRadius:
    "16px",

  fontWeight: "700",

  fontSize: "16px",

  cursor: "pointer",

  marginTop: "10px",
};

const feature = {
  display: "flex",

  alignItems: "center",

  gap: "14px",

  color: "white",

  fontSize: "18px",
};

const dot = {
  width: "14px",

  height: "14px",

  borderRadius: "50%",

  background:
    "linear-gradient(135deg,#2563eb,#7c3aed)",
};

const errorBox = {
  background:
    "rgba(220,38,38,0.2)",

  border:
    "1px solid rgba(220,38,38,0.4)",

  color: "#fecaca",

  padding: "16px",

  borderRadius:
    "14px",

  marginBottom: "20px",
};
