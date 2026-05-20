import { useEffect, useState } from "react";

import AdminLayout from "../layouts/AdminLayout";

import { supabase } from "../lib/supabase";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    resellers: 0,
    customers: 0,
    orders: 0,
    revenue: 0,
  });

  async function loadStats() {
    const { count: resellerCount } =
      await supabase
        .from("profiles")
        .select("*", {
          count: "exact",
          head: true,
        })
        .eq("role", "reseller");

    const { count: customerCount } =
      await supabase
        .from("profiles")
        .select("*", {
          count: "exact",
          head: true,
        })
        .eq("role", "customer");

    const { count: orderCount } =
      await supabase
        .from("orders")
        .select("*", {
          count: "exact",
          head: true,
        });

    setStats({
      resellers: resellerCount || 0,
      customers: customerCount || 0,
      orders: orderCount || 0,
      revenue: 0,
    });
  }

  useEffect(() => {
    loadStats();
  }, []);

  return (
    <AdminLayout>
      <div className="gradient rounded-3xl p-10 mb-10 shadow-2xl">
        <h1 className="text-5xl font-black">
          Admin Dashboard
        </h1>

        <p className="text-white/70 mt-3 text-lg">
          DonmacData Management Platform
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="glass p-8 rounded-3xl">
          <p className="text-gray-400 text-lg">
            Resellers
          </p>

          <h2 className="text-5xl font-bold mt-4">
            {stats.resellers}
          </h2>
        </div>

        <div className="glass p-8 rounded-3xl">
          <p className="text-gray-400 text-lg">
            Customers
          </p>

          <h2 className="text-5xl font-bold mt-4">
            {stats.customers}
          </h2>
        </div>

        <div className="glass p-8 rounded-3xl">
          <p className="text-gray-400 text-lg">
            Orders
          </p>

          <h2 className="text-5xl font-bold mt-4">
            {stats.orders}
          </h2>
        </div>

        <div className="glass p-8 rounded-3xl">
          <p className="text-gray-400 text-lg">
            Revenue
          </p>

          <h2 className="text-5xl font-bold mt-4">
            ₵0.00
          </h2>
        </div>
      </div>
    </AdminLayout>
  );
}
