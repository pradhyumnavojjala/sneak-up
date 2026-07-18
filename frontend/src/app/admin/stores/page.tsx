"use client";

import { useEffect, useState } from "react";

interface Store {
  id?: number;
  name: string;
  emoji: string;
  color: string;
  delivery: string;
  rating: number;
}

export default function StoresAdmin() {
  const [stores, setStores] = useState<Store[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [isOpen, setIsOpen] = useState(false);
  const [editingStore, setEditingStore] = useState<Store | null>(null);

  // Form States
  const [name, setName] = useState("");
  const [emoji, setEmoji] = useState("");
  const [color, setColor] = useState("#3B82F6");
  const [delivery, setDelivery] = useState("");
  const [rating, setRating] = useState(5.0);

  const loadStores = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch("http://localhost:8080/api/stores");
      if (!res.ok) {
        throw new Error(`Server responded with status ${res.status}`);
      }
      const data = await res.json();
      setStores(Array.isArray(data) ? data : []);
    } catch (err: any) {
      console.error("Error loading stores:", err);
      setError(err.message || "Failed to connect to the backend server.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadStores();
  }, []);

  const openModal = (store: Store | null = null) => {
    if (store) {
      setEditingStore(store);
      setName(store.name || "");
      setEmoji(store.emoji || "");
      setColor(store.color || "#3B82F6");
      setDelivery(store.delivery || "");
      setRating(store.rating ?? 5.0);
    } else {
      setEditingStore(null);
      setName("");
      setEmoji("");
      setColor("#3B82F6");
      setDelivery("");
      setRating(5.0);
    }
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setEditingStore(null);
  };

  const saveStore = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { name, emoji, color, delivery, rating: Number(rating) };
    const url = editingStore 
      ? `http://localhost:8080/api/stores/${editingStore.id}` 
      : "http://localhost:8080/api/stores";
    
    const method = editingStore ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed to save store details");
      closeModal();
      loadStores();
    } catch (err: any) {
      alert(err.message);
    }
  };

  const deleteStore = async (id: number) => {
    if (!confirm("Are you sure you want to delete this store?")) return;
    try {
      const res = await fetch(`http://localhost:8080/api/stores/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete store");
      loadStores();
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Manage Stores</h1>
        <button
          onClick={() => openModal()}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition shadow-sm"
        >
          + Add New Store
        </button>
      </div>

      {/* Error Alert View */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg flex justify-between items-center">
          <div>
            <span className="font-semibold">Connection Error:</span> {error}
            <p className="text-sm text-red-600 mt-1">Make sure your Spring Boot backend is running and CORS is enabled via `@CrossOrigin`.</p>
          </div>
          <button onClick={loadStores} className="bg-red-600 text-white px-3 py-1.5 rounded text-sm hover:bg-red-700 font-medium">
            Retry Connection
          </button>
        </div>
      )}

      {/* Main Table Interface */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="p-4 text-left font-semibold text-gray-600 text-sm">Store</th>
              <th className="p-4 font-semibold text-gray-600 text-sm text-center">Theme Color</th>
              <th className="p-4 font-semibold text-gray-600 text-sm text-center">Rating</th>
              <th className="p-4 font-semibold text-gray-600 text-sm text-center">Delivery</th>
              <th className="p-4 font-semibold text-gray-600 text-sm text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={5} className="p-12 text-center text-gray-500 font-medium">
                  Loading storefront data...
                </td>
              </tr>
            ) : stores.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-12 text-center text-gray-400">
                  No stores found in database. Click "+ Add New Store" to populate the table.
                </td>
              </tr>
            ) : (
              stores.map((store) => (
                <tr key={store.id} className="border-b border-gray-100 hover:bg-gray-50 transition">
                  <td className="p-4 font-medium text-gray-800">
                    <span className="mr-2 text-xl">{store.emoji || "🏪"}</span> {store.name}
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex justify-center items-center gap-2">
                      <span 
                        className="w-4 h-4 rounded-full border border-gray-300 inline-block shadow-sm" 
                        style={{ backgroundColor: store.color || "#3B82F6" }}
                      />
                      <span className="text-xs text-gray-500 font-mono uppercase">{store.color || "#3B82F6"}</span>
                    </div>
                  </td>
                  <td className="p-4 text-center text-amber-500 font-medium">
                    ⭐ {typeof store.rating === "number" ? store.rating.toFixed(1) : "0.0"}
                  </td>
                  <td className="p-4 text-center text-gray-600 text-sm">{store.delivery || "N/A"}</td>
                  <td className="p-4 text-center">
                    <div className="flex justify-center gap-3">
                      <button
                        onClick={() => openModal(store)}
                        className="bg-amber-50 hover:bg-amber-600 text-white px-3 py-1.5 rounded text-sm font-medium transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => store.id && deleteStore(store.id)}
                        className="bg-red-50 hover:bg-red-600 text-white px-3 py-1.5 rounded text-sm font-medium transition"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Dynamic Upsert Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <div className="bg-gray-900 text-white p-4 flex justify-between items-center">
              <h3 className="font-bold text-lg">
                {editingStore ? "✏️ Edit Store Details" : "🏪 Add New Store"}
              </h3>
              <button onClick={closeModal} className="text-gray-400 hover:text-white text-2xl leading-none">
                &times;
              </button>
            </div>
            
            <form onSubmit={saveStore} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Store Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none transition text-gray-900"
                  placeholder="e.g. Fresh Mart"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Icon/Emoji</label>
                  <input
                    type="text"
                    required
                    value={emoji}
                    onChange={(e) => setEmoji(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-center text-xl focus:ring-2 focus:ring-blue-500 outline-none transition text-gray-900"
                    placeholder="🍎, 🍕, ☕"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Theme Color</label>
                  <div className="flex gap-2">
                    <input
                      type="color"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      className="w-10 h-10 border border-gray-300 p-0 rounded cursor-pointer"
                    />
                    <input
                      type="text"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-2 py-1 text-sm font-mono uppercase text-gray-900"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Time</label>
                  <input
                    type="text"
                    required
                    value={delivery}
                    onChange={(e) => setDelivery(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none transition text-gray-900"
                    placeholder="e.g. 20-30 min"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Initial Rating</label>
                  <input
                    type="number"
                    step="0.1"
                    min="1"
                    max="5"
                    required
                    value={rating}
                    onChange={(e) => setRating(parseFloat(e.target.value) || 0)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none transition text-gray-900"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-gray-700 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
                >
                  {editingStore ? "Save Changes" : "Create Store"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}