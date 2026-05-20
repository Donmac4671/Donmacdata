import { useEffect, useState } from "react";

import AdminLayout from "../layouts/AdminLayout";
import { supabase } from "../lib/supabase";

export default function ResellersPage() {
  const [resellers, setResellers] = useState<any[]>([]);

  async function fetchResellers() {
    const { data } = await supabase
      .from("profiles")
      .select("*")
      .eq("role", "reseller");

    setResellers(data || []);
  }

  useEffect(() => {
    fetchResellers();
  }, []);

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">
          Resellers
        </h1>

        <button className="gradient px-6 py-3 rounded-xl">
          Add Reseller
        </button>
      </div>

      <div className="glass rounded-3xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-900">
            <tr>
              <th className="p-4 text-left">
                Email
              </th>

              <th className="p-4 text-left">
                Status
              </th>

              <th className="p-4 text-left">
                Wallet
              </th>
            </tr>
          </thead>

          <tbody>
            {resellers.map((reseller) => (
              <tr
                key={reseller.id}
                className="border-t border-slate-800"
              >
                <td className="p-4">
                  {reseller.email}
                </td>

                <td className="p-4">
                  {reseller.status}
                </td>

                <td className="p-4">
                  ₵{reseller.wallet_balance}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
