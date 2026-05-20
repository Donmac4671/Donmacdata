import { useEffect, useState } from "react";

import AdminLayout from "../layouts/AdminLayout";

import { supabase } from "../lib/supabase";

export default function OrdersPage() {
  const [orders, setOrders] = useState<any[]>(
    []
  );

  async function fetchOrders() {
    const { data } = await supabase
      .from("orders")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    setOrders(data || []);
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Orders
        </h1>

        <p className="text-gray-400 mt-2">
          All customer orders
        </p>
      </div>

      <div className="glass rounded-3xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-900">
            <tr>
              <th className="p-5 text-left">
                Product
              </th>

              <th className="p-5 text-left">
                Amount
              </th>

              <th className="p-5 text-left">
                Status
              </th>

              <th className="p-5 text-left">
                Date
              </th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-t border-slate-800"
              >
                <td className="p-5">
                  {order.product}
                </td>

                <td className="p-5">
                  ₵
                  {Number(order.amount).toFixed(
                    2
                  )}
                </td>

                <td className="p-5">
                  {order.status}
                </td>

                <td className="p-5">
                  {new Date(
                    order.created_at
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
