import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  async function handleLogin() {
  const { error } =
    await supabase.auth.signInWithPassword({
      email,
      password,
    });

  if (error) {
    alert(error.message);
    return;
  }

  setTimeout(() => {
    window.location.href = "/admin";
  }, 500);
}

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050816]">
      <div className="glass w-full max-w-md p-8 rounded-3xl">
        <div className="gradient h-24 rounded-2xl mb-6"></div>

        <h1 className="text-4xl font-bold text-white mb-2">
          DonmacData
        </h1>

        <p className="text-gray-400 mb-8">
          Login to continue
        </p>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 rounded-xl bg-slate-900 text-white outline-none"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 rounded-xl bg-slate-900 text-white outline-none"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button
            type="button"
            onClick={handleLogin}
            className="gradient w-full p-4 rounded-xl font-semibold text-white"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
