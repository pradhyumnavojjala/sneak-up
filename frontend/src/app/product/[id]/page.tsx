import { notFound } from "next/navigation";
import ProductHero from "@/components/product-details/ProductHero";
import QuantitySelector from "@/components/product-details/QuantitySelector";
import AddToCartButton from "@/components/product-details/AddToCartButton";
import ProductInfo from "@/components/product-details/ProductInfo";
import { products } from "@/data/products";
import { FiShield, FiTruck, FiRotateCcw } from "react-icons/fi";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50/30 pb-20 select-none font-sans">
      
      {/* Immersive Top Visual Display */}
      <ProductHero
        image={product.image}
        name={product.name}
        rating={product.rating}
        price={product.price}
        category={product.category}
      />

      {/* Main Structural Layout Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 items-start">
          
          {/* Left Column: Descriptive Metadata Profile */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-lg font-bold text-gray-900 mb-4 tracking-tight">
                Product Specifications
              </h2>
              <ProductInfo
                description="Freshly prepared using premium ingredients and delivered with care. Perfect quality, delicious taste, and fast delivery guaranteed."
              />
            </div>
            
            {/* Quick Trust Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                <FiTruck className="text-xl text-violet-600 flex-shrink-0" />
                <span className="text-xs font-semibold text-gray-600">Lightning Fast Hot Delivery</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                <FiShield className="text-xl text-violet-600 flex-shrink-0" />
                <span className="text-xs font-semibold text-gray-600">100% Quality Inspected</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                <FiRotateCcw className="text-xl text-violet-600 flex-shrink-0" />
                <span className="text-xs font-semibold text-gray-600">Easy Instant Cancellations</span>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Action Checkout Panel */}
          <div className="lg:sticky lg:top-24">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm space-y-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Selection Overview</span>
                <h3 className="text-base font-bold text-gray-900 mt-1 truncate">{product.name}</h3>
                <div className="mt-2 flex items-baseline gap-1.5 text-gray-900">
                  <span className="text-2xl font-black tracking-tight text-violet-600">₹{product.price}</span>
                  <span className="text-xs font-medium text-gray-400">/ per item</span>
                </div>
              </div>

              <hr className="border-gray-50" />

              {/* Functional Interaction Utilities */}
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-xl bg-gray-50/50 p-2.5 border border-gray-100">
                  <span className="text-xs font-bold text-gray-500 pl-2">Select Quantity</span>
                  <QuantitySelector />
                </div>
                
                <div className="w-full transition-transform duration-200 active:scale-[0.99] [&>button]:w-full [&>button]:justify-center [&>button]:py-4 [&>button]:rounded-xl [&>button]:font-bold [&>button]:shadow-md [&>button]:shadow-violet-500/10">
                  <AddToCartButton product={product} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}