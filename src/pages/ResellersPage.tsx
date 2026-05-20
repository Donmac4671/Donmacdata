import {
  useEffect,
  useState,
} from "react";

import AdminLayout from "../layouts/AdminLayout";

import { supabase } from "../lib/supabase";

export default function ResellersPage() {
  const [resellers, setResellers] =
    useState<any[]>([]);

  const [showModal, setShowModal] =
    useState(false);

  const [selectedUser, setSelectedUser] =
    useState<any>(null);

  const [amount, setAmount] =
    useState("");

  async function fetchResellers() {
    const { data } = await supabase
      .from("profiles")
      .select("*")
      .eq("role", "reseller")
      .order("created_at", {
        ascending: false,
      });

    setResellers(data || []);
  }

  useEffect(() => {
    fetchResellers();
  }, []);

  async function blockReseller(
    id: string
  ) {
    await supabase
      .from("profiles")
      .update({
        status: "blocked",
      })
      .eq("id", id);

    fetchResellers();
  }

  async function unblockReseller(
    id: string
  ) {
    await supabase
      .from("profiles")
      .update({
        status: "active",
      })
      .eq("id", id);

    fetchResellers();
  }

  async function deleteReseller(
    id: string
  ) {
    const confirmed = confirm(
      "Delete reseller?"
    );

    if (!confirmed) return;

    await supabase
      .from("profiles")
      .delete()
      .eq("id", id);

    fetchResellers();
  }

  async function creditWallet() {
    if (!selectedUser) return;

    const numericAmount =
      Number(amount);

    const newBalance =
      Number(
        selectedUser.wallet_balance || 0
      ) + numericAmount;

    await supabase
      .from("profiles")
      .update({
        wallet_balance: newBalance,
      })
      .eq("id", selectedUser.id);

    await supabase
      .from("transactions")
      .insert({
        user_id: selectedUser.id,
        type: "credit",
        amount: numericAmount,
        description:
          "Admin credited reseller wallet",
      });

    setShowModal(false);

    setAmount("");

    fetchResellers();
  }

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-5xl font-black">
            Resellers
          </h1>

          <p className="text-gray-400 mt-2">
            Manage reseller accounts
          </p>
        </div>

        <button className="gradient px-6 py-4 rounded-2xl font-semibold">
          Add Reseller
        </button>
      </div>

      <div className="glass rounded-3xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-900">
            <tr>
              <th className="p-5 text-left">
                Email
              </th>

              <th className="p-5 text-left">
                Status
              </th>

              <th className="p-5 text-left">
                Wallet
              </th>

              <th className="p-5 text-left">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {resellers.map((reseller) => (
              <tr
                key={reseller.id}
                className="border-t border-slate-800 hover:bg-slate-900/40"
              >
                <td className="p-5">
                  {reseller.email}
                </td>

                <td className="p-5">
                  <span
                    className={`px-4 py-2 rounded-full text-sm ${
                      reseller.status ===
                      "blocked"
                        ? "bg-red-500/20 text-red-400"
                        : "bg-green-500/20 text-green-400"
                    }`}
                  >
                    {reseller.status}
                  </span>
                </td>

                <td className="p-5">
                  ₵
                  {Number(
                    reseller.wallet_balance || 0
                  ).toFixed(2)}
                </td>

                <td className="p-5">
                  <div className="flex gap-3 flex-wrap">
                    <button
                      onClick={() => {
                        setSelectedUser(
                          reseller
                        );

                        setShowModal(true);
                      }}
                      className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl"
                    >
                      Credit
                    </button>

                    {reseller.status ===
                    "blocked" ? (
                      <button
                        onClick={() =>
                          unblockReseller(
                            reseller.id
                          )
                        }
                        className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-xl"
                      >
                        Unblock
                      </button>
                    ) : (
                      <button
                        onClick={() =>
                          blockReseller(
                            reseller.id
                          )
                        }
                        className="bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded-xl"
                      >
                        Block
                      </button>
                    )}

                    <button
                      onClick={() =>
                        deleteReseller(
                          reseller.id
                        )
                      }
                      className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="glass p-8 rounded-3xl w-full max-w-md">
            <h2 className="text-3xl font-bold mb-6">
              Credit Wallet
            </h2>

            <input
              type="number"
              placeholder="Amount"
              className="w-full p-4 rounded-xl bg-slate-900 mb-4 outline-none"
              value={amount}
              onChange={(e) =>
                setAmount(e.target.value)
              }
            />

            <button
              onClick={creditWallet}
              className="gradient w-full p-4 rounded-xl font-semibold"
            >
              Credit Wallet
            </button>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
