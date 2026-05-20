import { useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import { supabase } from "../lib/supabase";

export default function ResellersPage() {
  const [resellers, setResellers] = useState<any[]>([]);

  const [showModal, setShowModal] =
    useState(false);

  const [email, setEmail] = useState("");

  const [fullName, setFullName] =
    useState("");

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

  async function createReseller() {
    alert(
      "Reseller creation backend comes next"
    );

    setShowModal(false);
  }

  async function blockReseller(id: string) {
    await supabase
      .from("profiles")
      .update({
        status: "blocked",
      })
      .eq("id", id);

    fetchResellers();
  }

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold">
            Resellers
          </h1>

          <p className="text-gray-400 mt-2">
            Manage reseller accounts
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="gradient px-6 py-3 rounded-2xl font-semibold"
        >
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
                Name
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
                  {reseller.full_name ||
                    "No name"}
                </td>

                <td className="p-5">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
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
                  <div className="flex gap-3">
                    <button
                      className="bg-blue-600 px-4 py-2 rounded-xl"
                    >
                      Credit
                    </button>

                    <button
                      onClick={() =>
                        blockReseller(
                          reseller.id
                        )
                      }
                      className="bg-red-600 px-4 py-2 rounded-xl"
                    >
                      Block
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="glass p-8 rounded-3xl w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6">
              Add Reseller
            </h2>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-4 rounded-xl bg-slate-900"
                value={fullName}
                onChange={(e) =>
                  setFullName(e.target.value)
                }
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full p-4 rounded-xl bg-slate-900"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />

              <button
                onClick={createReseller}
                className="gradient w-full p-4 rounded-xl font-semibold"
              >
                Create Reseller
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
