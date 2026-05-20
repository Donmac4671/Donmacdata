import { useEffect, useState } from "react";

import AdminLayout from "../layouts/AdminLayout";

import { supabase } from "../lib/supabase";

export default function CustomersPage() {
  const [customers, setCustomers] =
    useState<any[]>([]);

  async function fetchCustomers() {
    const { data } = await supabase
      .from("profiles")
      .select("*")
      .eq("role", "customer");

    setCustomers(data || []);
  }

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Customers
        </h1>

        <p className="text-gray-400 mt-2">
          View all customers
        </p>
      </div>

      <div className="glass rounded-3xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-900">
            <tr>
              <th className="p-5 text-left">
                Email
              </th>

              <th className="p-5 text-left">
                Wallet
              </th>

              <th className="p-5 text-left">
                Status
              </th>

              <th className="p-5 text-left">
                Created
              </th>
            </tr>
          </thead>

          <tbody>
            {customers.map((customer) => (
              <tr
                key={customer.id}
                className="border-t border-slate-800"
              >
                <td className="p-5">
                  {customer.email}
                </td>

                <td className="p-5">
                  ₵
                  {Number(
                    customer.wallet_balance || 0
                  ).toFixed(2)}
                </td>

                <td className="p-5">
                  {customer.status}
                </td>

                <td className="p-5">
                  {new Date(
                    customer.created_at
                  ).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
