import {
  useEffect,
  useState,
} from "react";

import AdminLayout from "../layouts/AdminLayout";

import { supabase } from "../lib/supabase";

export default function TransactionsPage() {
  const [transactions, setTransactions] =
    useState<any[]>([]);

  async function fetchTransactions() {
    const { data } = await supabase
      .from("transactions")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    setTransactions(data || []);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <AdminLayout>
      <div className="mb-10">
        <h1 className="text-5xl font-black">
          Transactions
        </h1>

        <p className="text-gray-400 mt-2">
          Wallet funding history
        </p>
      </div>

      <div className="glass rounded-3xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-900">
            <tr>
              <th className="p-5 text-left">
                Type
              </th>

              <th className="p-5 text-left">
                Amount
              </th>

              <th className="p-5 text-left">
                Description
              </th>

              <th className="p-5 text-left">
                Date
              </th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((trx) => (
              <tr
                key={trx.id}
                className="border-t border-slate-800"
              >
                <td className="p-5 capitalize">
                  {trx.type}
                </td>

                <td className="p-5">
                  ₵
                  {Number(trx.amount).toFixed(
                    2
                  )}
                </td>

                <td className="p-5">
                  {trx.description}
                </td>

                <td className="p-5">
                  {new Date(
                    trx.created_at
                  ).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
