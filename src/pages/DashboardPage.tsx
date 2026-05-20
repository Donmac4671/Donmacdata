
import { Wallet, Users, ShoppingCart, TrendingUp } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-[#050816] text-white">
      <aside className="w-72 glass p-6 border-r border-slate-800">
        <h2 className="text-2xl font-bold mb-10">
          Reseller Admin
        </h2>

        <nav className="space-y-4">
          <div className="p-4 rounded-xl bg-violet-600">
            Dashboard
          </div>

          <div className="p-4 rounded-xl hover:bg-slate-800 cursor-pointer">
            Orders
          </div>

          <div className="p-4 rounded-xl hover:bg-slate-800 cursor-pointer">
            Resellers
          </div>

          <div className="p-4 rounded-xl hover:bg-slate-800 cursor-pointer">
            Withdrawals
          </div>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <div className="gradient rounded-3xl p-8 mb-8">
          <h1 className="text-4xl font-bold mb-2">
            Welcome Back 👋
          </h1>

          <p className="text-white/80">
            Monitor orders, profits and resellers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card
            title="Wallet Balance"
            value="₦2,450,000"
            icon={<Wallet />}
          />

          <Card
            title="Total Customers"
            value="1,280"
            icon={<Users />}
          />

          <Card
            title="Orders"
            value="15,420"
            icon={<ShoppingCart />}
          />

          <Card
            title="Profit"
            value="₦480,000"
            icon={<TrendingUp />}
          />
        </div>

        <div className="glass rounded-3xl p-6">
          <h2 className="text-2xl font-semibold mb-6">
            Recent Orders
          </h2>

          <div className="space-y-4">
            {[1,2,3,4].map((item) => (
              <div
                key={item}
                className="flex justify-between items-center bg-[#0f172a] p-4 rounded-2xl"
              >
                <div>
                  <p className="font-semibold">
                    MTN 10GB
                  </p>

                  <p className="text-sm text-gray-400">
                    Customer Purchase
                  </p>
                </div>

                <div className="text-green-400 font-bold">
                  Successful
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

function Card({
  title,
  value,
  icon
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="glass rounded-3xl p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="bg-violet-600 p-3 rounded-xl">
          {icon}
        </div>
      </div>

      <p className="text-gray-400 mb-2">{title}</p>

      <h3 className="text-3xl font-bold">{value}</h3>
    </div>
  );
}
