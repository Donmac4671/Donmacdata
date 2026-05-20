import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
  console.log("LOGIN START");

  const response =
    await supabase.auth.signInWithPassword({
      email,
      password,
    });

  console.log("FULL RESPONSE:", response);

  if (response.error) {
    console.log("LOGIN ERROR:", response.error);

    alert(response.error.message);
    return;
  }

  console.log("LOGIN SUCCESS");

  window.location.href = "/admin";
}

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050816]">
      <div className="glass w-full max-w-md p-8 rounded-3xl shadow-2xl">
        <div className="gradient h-20 rounded-2xl mb-6"></div>

        <h1 className="text-3xl font-bold mb-2 text-white">
          DonmacData
        </h1>

        <p className="text-gray-400 mb-8">
          Login to continue
        </p>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 rounded-xl bg-[#0f172a] border border-slate-700 text-white outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 rounded-xl bg-[#0f172a] border border-slate-700 text-white outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="w-full gradient p-4 rounded-xl font-semibold text-white"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
