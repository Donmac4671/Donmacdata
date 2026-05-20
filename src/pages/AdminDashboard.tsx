import { useAuth } from "../context/AuthContext";

export default function AdminDashboard() {
  const { profile } = useAuth();

  return (
    <div className="min-h-screen bg-[#050816] text-white p-8">
      <div className="gradient rounded-3xl p-8 mb-8">
        <h1 className="text-4xl font-bold">
          Welcome Admin
        </h1>

        <p className="text-white/80 mt-2">
          {profile?.email}
        </p>
      </div>

      <div className="grid grid-cols-4 gap-6">
        <div className="glass p-6 rounded-3xl">
          <h2 className="text-gray-400">
            Total Resellers
          </h2>

          <p className="text-4xl font-bold mt-4">
            0
          </p>
        </div>

        <div className="glass p-6 rounded-3xl">
          <h2 className="text-gray-400">
            Customers
          </h2>

          <p className="text-4xl font-bold mt-4">
            0
          </p>
        </div>

        <div className="glass p-6 rounded-3xl">
          <h2 className="text-gray-400">
            Orders
          </h2>

          <p className="text-4xl font-bold mt-4">
            0
          </p>
        </div>

        <div className="glass p-6 rounded-3xl">
          <h2 className="text-gray-400">
            Revenue
          </h2>

          <p className="text-4xl font-bold mt-4">
            ₦0
          </p>
        </div>
      </div>
    </div>
  );
}
