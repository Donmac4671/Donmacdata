export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#050816] text-white p-8">
      <div className="gradient rounded-3xl p-8 mb-8">
        <h1 className="text-4xl font-bold">
          Welcome Admin 👋
        </h1>

        <p className="text-white/80 mt-2">
          DonmacData Dashboard
        </p>
      </div>

      <div className="grid grid-cols-4 gap-6">
        <div className="glass p-6 rounded-3xl">
          <h2>Total Resellers</h2>
          <p className="text-4xl font-bold mt-4">0</p>
        </div>

        <div className="glass p-6 rounded-3xl">
          <h2>Customers</h2>
          <p className="text-4xl font-bold mt-4">0</p>
        </div>

        <div className="glass p-6 rounded-3xl">
          <h2>Orders</h2>
          <p className="text-4xl font-bold mt-4">0</p>
        </div>

        <div className="glass p-6 rounded-3xl">
          <h2>Revenue</h2>
          <p className="text-4xl font-bold mt-4">₵0.00</p>
        </div>
      </div>
    </div>
  );
}
