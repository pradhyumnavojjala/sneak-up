"use client";

import { useEffect, useState } from "react";

interface OrderItem {
  id: number;
  quantity: number;
  price: number;
  product: {
    name: string;
  };
}

interface Order {
  id: number;
  customerName: string;
  phone: string;
  address: string;
  totalAmount: number;
  status: string;
  orderTime: string;
  items: OrderItem[];
}

export default function OrdersAdmin() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadOrders = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch("http://localhost:8080/api/orders");
      if (!res.ok) {
        throw new Error(`Server returned status ${res.status}`);
      }
      const data = await res.json();
      setOrders(Array.isArray(data) ? data : []);
    } catch (err: any) {
      console.error("Error loading orders:", err);
      setError(err.message || "Failed to load orders from server.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const updateStatus = async (id: number, status: string) => {
    try {
      const res = await fetch(`http://localhost:8080/api/orders/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });
      
      if (!res.ok) throw new Error("Failed to update status");
      
      // Fast optimistic state update UI response
      setOrders(prev =>
        prev.map(o => (o.id === id ? { ...o, status } : o))
      );
    } catch (err: any) {
      alert(err.message);
      loadOrders(); // Rollback to actual database state on failure
    }
  };

  // UI helper for dynamic status color rings and backgrounds
  const getStatusStyle = (status: string) => {
    switch (status?.toLowerCase()) {
      case "pending":
        return "bg-amber-50 text-amber-700 border-amber-200";
      case "preparing":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "out for delivery":
        return "bg-purple-50 text-purple-700 border-purple-200";
      case "delivered":
        return "bg-green-50 text-green-700 border-green-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Manage Orders</h1>
          <p className="text-sm text-gray-500 mt-1">Track incoming client checkouts and change logistics status real-time.</p>
        </div>
        <button 
          onClick={loadOrders}
          className="bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium shadow-sm transition"
        >
          🔄 Refresh Feed
        </button>
      </div>

      {/* Network Error Shield */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
          <span className="font-semibold">Backend Link Failure:</span> {error}
        </div>
      )}

      {/* Main Order Cards Grid Container */}
      <div className="space-y-6">
        {isLoading ? (
          <div className="bg-white rounded-xl border p-12 text-center text-gray-500 font-medium shadow-sm">
            Fetching secure digital transactions...
          </div>
        ) : orders.length === 0 ? (
          <div className="bg-white rounded-xl border p-12 text-center text-gray-400 shadow-sm">
            No dynamic client orders found in the database system logs.
          </div>
        ) : (
          orders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition overflow-hidden"
            >
              {/* Header Details Panel */}
              <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row justify-between gap-4 bg-gray-50/50">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 flex-1">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 block">Order ID</span>
                    <h2 className="font-bold text-lg text-gray-900">#{order.id}</h2>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 block">Customer</span>
                    <p className="font-medium text-gray-800">{order.customerName}</p>
                    <p className="text-xs text-gray-500">{order.phone}</p>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 block">Shipping Location</span>
                    <p className="text-sm text-gray-700 font-medium line-clamp-2">{order.address}</p>
                  </div>
                </div>

                <div className="flex flex-row md:flex-col items-end justify-between md:justify-center gap-2 border-t md:border-t-0 pt-3 md:pt-0">
                  <div className="text-left md:text-right">
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 block">Grand Total</span>
                    <p className="font-black text-xl text-emerald-600">₹{order.totalAmount}</p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${getStatusStyle(order.status)}`}>
                      {order.status}
                    </span>
                    <select
                      value={order.status}
                      onChange={(e) => updateStatus(order.id, e.target.value)}
                      className="border border-gray-300 rounded-lg p-1.5 text-sm bg-white text-gray-700 shadow-sm outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Preparing">Preparing</option>
                      <option value="Out for Delivery">Out for Delivery</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Items Summary Sub-Section */}
              <div className="p-6 bg-white">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                  Cart Contents ({order.items?.length || 0} items)
                </h3>
                
                <div className="bg-gray-50 rounded-lg border border-gray-100 overflow-hidden">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-gray-200 text-xs font-semibold text-gray-500 uppercase bg-gray-100/70">
                        <th className="p-3">Product Item Specification</th>
                        <th className="p-3 text-center w-24">Qty</th>
                        <th className="p-3 text-right w-32">Unit Price</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm">
                      {order.items?.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-50/50">
                          <td className="p-3 font-medium text-gray-800">
                            {item.product?.name || "Unknown Product SKU"}
                          </td>
                          <td className="p-3 text-center text-gray-600 font-mono">
                            × {item.quantity}
                          </td>
                          <td className="p-3 text-right text-gray-500 font-mono">
                            ₹{item.price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}