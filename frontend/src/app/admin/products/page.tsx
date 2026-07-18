"use client";

import { useEffect, useState } from "react";
import { FiTrash2, FiLayers, FiDollarSign, FiStar, FiRefreshCw, FiPlus, FiEdit2, FiX, FiCheck } from "react-icons/fi";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  available: boolean;
}

// Initial state for clean form resets
const initialFormState = {
  name: "",
  price: 0,
  image: "👟",
  rating: 5,
  available: true
};

export default function ProductsAdmin() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  // CRUD Form States
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState(initialFormState);

  // --- 1. READ: Fetch Catalog ---
  const fetchProducts = async () => {
    setIsRefreshing(true);
    try {
      const res = await fetch("http://localhost:8080/api/products");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error("Failed fetching catalog data logs:", err);
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Open form for a brand-new item
  const handleOpenCreate = () => {
    setEditingId(null);
    setFormData(initialFormState);
    setIsFormOpen(true);
  };

  // Open form filled out with existing product values
  const handleOpenEdit = (product: Product) => {
    setEditingId(product.id);
    setFormData({
      name: product.name,
      price: product.price,
      image: product.image || "👟",
      rating: product.rating,
      available: product.available
    });
    setIsFormOpen(true);
  };

  // --- 2. CREATE & UPDATE: Submit Handler ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const isEditing = editingId !== null;
    const url = isEditing 
      ? `http://localhost:8080/api/products/${editingId}`
      : "http://localhost:8080/api/products";
    const method = isEditing ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const savedProduct = await response.json();
        
        if (isEditing) {
          // Update item inline in local state array
          setProducts(prev => prev.map(p => p.id === editingId ? savedProduct : p));
        } else {
          // Prepend new item directly to view array
          setProducts(prev => [savedProduct, ...prev]);
        }
        
        // Reset console drawer view
        setIsFormOpen(false);
        setFormData(initialFormState);
        setEditingId(null);
      } else {
        alert(`Server operation failed with response status: ${response.status}`);
      }
    } catch (err) {
      console.error("Error submitting product context payload:", err);
      alert(String(err));
    }
  };

  // --- 3. DELETE: Drop Item Operation ---
  const handleDelete = async (id: number) => {
    if (!confirm("Are you absolutely sure you want to purge this product from inventory?")) return;

    try {
      const response = await fetch(`http://localhost:8080/api/products/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setProducts(prev => prev.filter(product => product.id !== id));
      } else {
        alert(`Failed to execute deletion tracking status code: ${response.status}`);
      }
    } catch (err) {
      console.error("Error executing backend deletion operation:", err);
      alert(String(err));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/50 py-12 px-4 sm:px-6 font-sans select-none">
      <div className="mx-auto max-w-6xl">
        
        {/* Core Administrative Control Panel Header */}
        <div className="mb-10 border-b border-gray-100 pb-6 flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-2xl font-black tracking-tight text-gray-900 sm:text-3xl flex items-center gap-2.5">
              <FiLayers className="text-violet-600 text-2xl" /> Inventory Console
            </h1>
            <p className="mt-2 text-sm font-medium text-gray-400">
              Complete catalog controls: Create, view data arrays, update price parameters, and purge listings.
            </p>
          </div>

          {/* Action Trigger Deck */}
          <div className="flex items-center gap-3">
            <button
              onClick={fetchProducts}
              disabled={isRefreshing}
              className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-xs font-bold text-gray-600 transition-all hover:bg-gray-50 hover:text-gray-900 active:scale-95 disabled:opacity-50"
            >
              <FiRefreshCw className={`text-sm ${isRefreshing ? "animate-spin text-violet-600" : ""}`} />
              <span>Sync Catalog</span>
            </button>

            <button
              onClick={handleOpenCreate}
              className="flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-violet-500/10 transition-all hover:bg-violet-700 active:scale-95"
            >
              <FiPlus className="text-sm stroke-[3]" />
              <span>Add New Item</span>
            </button>
          </div>
        </div>

        {/* Dynamic Context Management Form Draw Pod */}
        {isFormOpen && (
          <div className="mb-8 rounded-2xl border border-violet-100 bg-white p-6 shadow-md shadow-violet-500/5 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex items-center justify-between mb-5 border-b border-gray-50 pb-3">
              <h2 className="text-base font-black text-gray-900">
                {editingId !== null ? "🔧 Modify Product Details" : "✨ Register New Inventory Asset"}
              </h2>
              <button 
                onClick={() => setIsFormOpen(false)} 
                className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-50"
              >
                <FiX size={18} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-3 items-end">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Item Display Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Air Max Platinum" 
                  value={formData.name}
                  onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50/50 p-3 text-sm font-semibold text-gray-900 outline-none focus:border-violet-500 focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Price Value (₹)</label>
                <div className="relative flex items-center">
                  <FiDollarSign className="absolute left-3.5 text-gray-400 text-sm" />
                  <input 
                    type="number" 
                    required
                    min="0"
                    placeholder="0" 
                    value={formData.price || ""}
                    onChange={e => setFormData(prev => ({ ...prev, price: Number(e.target.value) }))}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50/50 p-3 pl-9 text-sm font-black text-gray-900 outline-none focus:border-violet-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Thumbnail Vector/Emoji</label>
                <input 
                  type="text" 
                  placeholder="👟" 
                  value={formData.image}
                  onChange={e => setFormData(prev => ({ ...prev, image: e.target.value }))}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50/50 p-3 text-sm font-semibold text-gray-900 outline-none focus:border-violet-500 focus:bg-white transition-all"
                />
              </div>

              <div className="sm:col-span-2 flex items-center gap-6 rounded-xl border border-gray-100 bg-gray-50/50 px-4 py-3 h-[46px]">
                <label className="flex items-center gap-2.5 cursor-pointer text-xs font-bold text-gray-600">
                  <input 
                    type="checkbox"
                    checked={formData.available}
                    onChange={e => setFormData(prev => ({ ...prev, available: e.target.checked }))}
                    className="h-4 w-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500"
                  />
                  <span>Publish Item Live immediately</span>
                </label>
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="w-1/2 sm:w-auto px-4 h-[46px] text-xs font-bold rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-50 active:scale-95 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 sm:w-auto px-5 h-[46px] text-xs font-bold rounded-xl bg-violet-600 text-white hover:bg-violet-700 shadow-sm shadow-violet-500/10 active:scale-95 transition-all flex items-center justify-center gap-1.5"
                >
                  <FiCheck className="text-sm stroke-[3]" />
                  <span>Save Product</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Database Content Board Canvas */}
        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm shadow-gray-200/40">
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-left">
              
              {/* Header Track Panel labels */}
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/70 text-xs font-bold uppercase tracking-wider text-gray-400">
                  <th className="py-4 px-6">Product Details</th>
                  <th className="py-4 px-6">Price Point</th>
                  <th className="py-4 px-6">Rating Log</th>
                  <th className="py-4 px-6">Status Info</th>
                  <th className="py-4 px-6 text-center">Operational Actions</th>
                </tr>
              </thead>

              {/* Dynamic Rows Context Body Section */}
              <tbody className="divide-y divide-gray-50 text-sm font-medium text-gray-700">
                {products.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-12 text-center font-bold text-gray-400 bg-white">
                      No active listings found inside database storage tracks.
                    </td>
                  </tr>
                ) : (
                  products.map((product) => (
                    <tr 
                      key={product.id} 
                      className="transition-colors duration-200 hover:bg-gray-50/40"
                    >
                      
                      {/* Visual Details Frame */}
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 text-2xl shadow-2xs border border-gray-100 flex-shrink-0">
                            {product.image || "📦"}
                          </div>
                          <div>
                            <span className="font-bold text-gray-900 tracking-tight block max-w-[200px] truncate">
                              {product.name}
                            </span>
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-wide block mt-0.5">
                              SKU-ID: #{product.id}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Pricing Track */}
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-0.5 text-gray-900 font-black tracking-tight">
                          <span>₹{product.price}</span>
                        </div>
                      </td>

                      {/* Rating Visual Badge */}
                      <td className="py-4 px-6">
                        <div className="inline-flex items-center gap-1 rounded-md border border-amber-100 bg-amber-50/40 px-2 py-0.5 text-xs font-black text-amber-700">
                          <FiStar className="text-[10px] fill-amber-500 stroke-amber-500" />
                          <span>{(product.rating || 0).toFixed(1)}</span>
                        </div>
                      </td>

                      {/* Availability Pill Flag */}
                      <td className="py-4 px-6">
                        {product.available ? (
                          <span className="inline-flex rounded-md bg-emerald-50 border border-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700 uppercase tracking-wider">
                            Live Active
                          </span>
                        ) : (
                          <span className="inline-flex rounded-md bg-red-50 border border-red-100 px-2 py-0.5 text-[10px] font-bold text-red-700 uppercase tracking-wider">
                            Depleted
                          </span>
                        )}
                      </td>

                      {/* Double Operational Actions Deck */}
                      <td className="py-4 px-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            onClick={() => handleOpenEdit(product)}
                            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-gray-100 bg-white text-gray-400 shadow-2xs transition-all duration-200 hover:bg-violet-50 hover:border-violet-100 hover:text-violet-600 active:scale-90"
                            aria-label={`Edit ${product.name}`}
                          >
                            <FiEdit2 className="text-sm" />
                          </button>
                          
                          <button
                            onClick={() => handleDelete(product.id)}
                            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-gray-100 bg-white text-gray-400 shadow-2xs transition-all duration-200 hover:bg-red-50 hover:border-red-100 hover:text-red-500 active:scale-90"
                            aria-label={`Purge ${product.name}`}
                          >
                            <FiTrash2 className="text-base" />
                          </button>
                        </div>
                      </td>

                    </tr>
                  ))
                )}
              </tbody>

            </table>
          </div>
        </div>

      </div>
    </div>
  );
}