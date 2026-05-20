
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050816]">
      <div className="glass w-full max-w-md p-8 rounded-3xl shadow-2xl">
        <div className="gradient h-20 rounded-2xl mb-6"></div>

        <h1 className="text-3xl font-bold mb-2">
          Reseller Platform
        </h1>

        <p className="text-gray-400 mb-8">
          Login to continue
        </p>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 rounded-xl bg-[#0f172a] border border-slate-700 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 rounded-xl bg-[#0f172a] border border-slate-700 outline-none"
          />

          <button
            onClick={() => navigate("/dashboard")}
            className="w-full gradient p-4 rounded-xl font-semibold"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
