import { useState } from "react";

import { supabase } from "../lib/supabase";

export default function CreditWalletModal({
  userId,
  close,
}: any) {
  const [amount, setAmount] = useState("");

  async function creditWallet() {
    const numericAmount =
      Number(amount);

    const { data: profile } =
      await supabase
        .from("profiles")
        .select("wallet_balance")
        .eq("id", userId)
        .single();

    const currentBalance =
      profile?.wallet_balance || 0;

    const newBalance =
      currentBalance + numericAmount;

    await supabase
      .from("profiles")
      .update({
        wallet_balance: newBalance,
      })
      .eq("id", userId);

    await supabase
      .from("transactions")
      .insert({
        user_id: userId,
        type: "credit",
        amount: numericAmount,
        description:
          "Admin wallet funding",
      });

    alert("Wallet credited");

    close();
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="glass p-8 rounded-3xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6">
          Credit Wallet
        </h2>

        <input
          type="number"
          placeholder="Amount"
          className="w-full p-4 rounded-xl bg-slate-900 mb-4"
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
  );
}
