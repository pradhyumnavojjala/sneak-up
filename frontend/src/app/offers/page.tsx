"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { FiArrowLeft, FiTag, FiClock, FiPlus, FiMinus, FiShoppingBag, FiCheckCircle } from "react-icons/fi";

// Clean frontend type definition
interface Offer {
  id: string;
  title: string;
  badge: string;
  description: string;
  discountDisplay: string;
  originalPrice: number;
  offerPrice: number;
  emoji: string;
  expiresIn: string;
}

interface ClaimedOffer {
  id: string;
  title: string;
  price: number;
  quantity: number;
  emoji: string;
}

// Maps backend structural values to dynamic frontend Tailwind style packages
const getStyleTraits = (badge: string) => {
  switch (badge?.toLowerCase()) {
    case "hot":
      return {
        bgColor: "from-rose-50/70 to-orange-50/40",
        borderColor: "border-rose-100/80",
        accentColor: "bg-rose-600 text-white"
      };
    case "value":
      return {
        bgColor: "from-amber-50/70 to-yellow-50/40",
        borderColor: "border-amber-100/80",
        accentColor: "bg-amber-600 text-white"
      };
    default:
      return {
        bgColor: "from-zinc-50 to-zinc-100/50",
        borderColor: "border-zinc-200/60",
        accentColor: "bg-zinc-800 text-white"
      };
  }
};

export default function OffersShowcasePage() {
  const router = useRouter();
  
  const [dbOffers, setDbOffers] = React.useState<Offer[]>([]);
  const [cart, setCart] = React.useState<ClaimedOffer[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [successId, setSuccessId] = React.useState<string | null>(null);

  // Sync with Spring Boot Rest Endpoint
  React.useEffect(() => {
    async function fetchOffers() {
      try {
        // Using direct local endpoint or configure your proxy block in next.config.js
        const response = await fetch("http://localhost:8080/api/offers"); 
        if (!response.ok) throw new Error("Database server returned invalid status code");
        
        const rawData = await response.json();
        
        // Formats database snake_case columns systematically into camelCase UI states
        const normalizedData = rawData.map((item: any, idx: number) => ({
          id: String(item.id || item.offer_id || `offer-fallback-${idx}`),
          title: item.title || "Special Incentive Package",
          badge: item.badge || "PROMO",
          description: item.description || "No description provided.",
          discountDisplay: item.discountDisplay || item.discount_display || "SAVE",
          originalPrice: Number(item.originalPrice || item.original_price || 0),
          offerPrice: Number(item.offerPrice || item.offer_price || 0),
          emoji: item.emoji || "🏷️",
          expiresIn: item.expiresIn || item.expires_in || "Limited Time",
        }));

        setDbOffers(normalizedData);
      } catch (err) {
        console.error("Error pulling live Spring Boot properties:", err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchOffers();
  }, []);

  const claimOffer = (offer: Offer) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === offer.id);
      if (existing) {
        return prev.map((item) =>
          item.id === offer.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { id: offer.id, title: offer.title, price: offer.offerPrice, quantity: 1, emoji: offer.emoji }];
    });

    setSuccessId(offer.id);
    setTimeout(() => setSuccessId(null), 1000);
  };

  const reduceOfferCount = (id: string) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === id);
      if (existing?.quantity === 1) {
        return prev.filter((item) => item.id !== id);
      }
      return prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  const totalPromotionalCost = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleSQLSubmit = async () => {
    if (cart.length === 0) return;
    setIsSubmitting(true);
    
    try {
      const response = await fetch("http://localhost:8080/api/orders/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          claimedOffers: cart.map(item => ({
            offerId: item.id,
            quantity: item.quantity,
            rateCharged: item.price
          })),
          totalAmount: totalPromotionalCost,
          transactionType: "PROMO_OFFER"
        }),
      });

      if (!response.ok) throw new Error("SQL commit rejected by server endpoint.");

      alert("Offers successfully logged to SQL database schema!");
      setCart([]);
    } catch (err) {
      console.error("SQL Save Error:", err);
      alert("Failed to sync structural promo fields with SQL table rows.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50/60 py-16 px-4 sm:px-6 font-sans text-zinc-900 select-none">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Left Column: Offers Display Only */}
        <div className="lg:col-span-2">
          <button
            onClick={() => router.back()}
            className="mb-8 inline-flex items-center gap-2 rounded-xl border border-zinc-200/60 bg-white px-4 py-2.5 text-xs font-bold text-zinc-500 shadow-2xs transition-all hover:text-zinc-900 hover:border-zinc-300"
          >
            <FiArrowLeft /> Back to Dashboard
          </button>

          <div className="mb-12 border-b border-zinc-200/60 pb-8">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 px-2.5 py-0.5 text-3xs font-black text-rose-600 uppercase tracking-widest border border-rose-100">
              <FiTag size={10} /> Live Database Pipeline
            </div>
            <h1 className="mt-3 text-3xl font-black tracking-tight text-zinc-900 sm:text-4xl">
              Active Campaign Tiers
            </h1>
            <p className="mt-2 text-sm font-medium text-zinc-400 max-w-xl leading-relaxed">
              Standalone premium incentives. Loaded directly via Spring Framework configuration maps from underlying data instances.
            </p>
          </div>

          {isLoading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((n) => (
                <div key={`loader-skeleton-${n}`} className="h-32 w-full animate-pulse rounded-2xl bg-zinc-200/60" />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {dbOffers.map((offer) => {
                const activeCount = cart.find((item) => item.id === offer.id)?.quantity || 0;
                const isClaimed = successId === offer.id;
                const styles = getStyleTraits(offer.badge);

                return (
                  <div
                    key={offer.id}
                    className={`rounded-2xl border ${styles.borderColor} bg-gradient-to-br ${styles.bgColor} p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 transition-all`}
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-4xl bg-white p-3 rounded-xl border border-zinc-100 shadow-3xs shrink-0">
                        {offer.emoji}
                      </span>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`rounded px-1.5 py-0.5 text-4xs font-black uppercase tracking-wider ${styles.accentColor}`}>
                            {offer.badge}
                          </span>
                          <span className="inline-flex items-center gap-1 text-3xs font-bold text-zinc-400">
                            <FiClock size={10} /> {offer.expiresIn}
                          </span>
                        </div>
                        <h3 className="text-sm font-black text-zinc-900 mt-2 tracking-tight">{offer.title}</h3>
                        <p className="text-3xs font-bold text-zinc-400 uppercase mt-0.5 tracking-wider">ID Ref: {offer.id}</p>
                        <p className="text-xs font-medium text-zinc-500 mt-2 max-w-md leading-relaxed">
                          {offer.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex sm:flex-col items-baseline sm:items-end justify-between sm:justify-center border-t border-zinc-200/40 sm:border-t-0 pt-4 sm:pt-0 shrink-0 gap-3">
                      <div className="text-right flex flex-col sm:items-end">
                        <span className="text-3xs font-black text-rose-600 uppercase font-mono bg-rose-50 border border-rose-100/50 px-2 py-0.5 rounded mb-1">
                          {offer.discountDisplay}
                        </span>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-3xs font-bold text-zinc-400 line-through">${offer.originalPrice.toFixed(2)}</span>
                          <span className="text-xl font-black text-zinc-950">${offer.offerPrice.toFixed(2)}</span>
                        </div>
                      </div>

                      <div>
                        {activeCount > 0 ? (
                          <div className="flex items-center gap-2 rounded-xl bg-white p-1 border border-zinc-200 shadow-3xs">
                            <button
                              onClick={() => reduceOfferCount(offer.id)}
                              className="p-1.5 text-zinc-500 hover:text-zinc-900 transition-colors rounded hover:bg-zinc-50"
                            >
                              <FiMinus size={10} />
                            </button>
                            <span className="text-xs font-black px-1.5 min-w-[14px] text-center text-zinc-800">{activeCount}</span>
                            <button
                              onClick={() => claimOffer(offer)}
                              className="p-1.5 text-zinc-500 hover:text-zinc-900 transition-colors rounded hover:bg-zinc-50"
                            >
                              <FiPlus size={10} />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => claimOffer(offer)}
                            className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-3xs font-black uppercase tracking-wider transition-all shadow-3xs active:scale-97 ${
                              isClaimed ? "bg-emerald-600 text-white" : "bg-zinc-950 text-white hover:bg-zinc-800"
                            }`}
                          >
                            {isClaimed ? <FiCheckCircle /> : <FiPlus />} Claim Deal
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Right Column: SQL Submission Summary Panel */}
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xs sticky top-8 lg:mt-[112px]">
          <h3 className="text-xs font-black uppercase tracking-wider text-zinc-400 flex items-center gap-2 mb-4">
            <FiShoppingBag /> Selected Promotions
          </h3>
          
          {cart.length === 0 ? (
            <p className="text-xs font-bold text-zinc-400 text-center py-10 border border-dashed border-zinc-100 rounded-xl">
              No promotions staging for SQL compilation.
            </p>
          ) : (
            <div className="space-y-2.5 max-h-[280px] overflow-y-auto mb-4 pr-1">
              {cart.map((item) => (
                <div key={`cart-item-${item.id}`} className="flex items-center justify-between text-xs border-b border-zinc-50 pb-2">
                  <span className="font-bold text-zinc-800">
                    {item.emoji} {item.title} <span className="text-zinc-400 ml-1">x{item.quantity}</span>
                  </span>
                  <span className="font-black text-zinc-950">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
          )}

          <div className="border-t border-zinc-100 pt-4 mt-4 flex items-center justify-between mb-6">
            <span className="text-xs font-bold text-zinc-500">Aggregate Value:</span>
            <span className="text-lg font-black text-zinc-950">${totalPromotionalCost.toFixed(2)}</span>
          </div>

          <button
            onClick={handleSQLSubmit}
            disabled={cart.length === 0 || isSubmitting}
            className="w-full text-center rounded-xl bg-zinc-950 text-white py-3 text-2xs font-black uppercase tracking-widest transition-all hover:bg-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.99]"
          >
            {isSubmitting ? "Syncing SQL Records..." : "Commit Batch to SQL"}
          </button>
        </div>

      </div>
    </div>
  );
}