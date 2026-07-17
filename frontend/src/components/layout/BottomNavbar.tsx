import Link from "next/link";
import { promotions } from "@/data/promotions";

export default function BottomNavbar() {
  // Double the list array to ensure seamless repetition for the infinite scroll wrap
  const items = [...promotions, ...promotions];

  return (
    <div className="relative border-y border-gray-100 bg-gray-50/70 py-2 backdrop-blur-sm overflow-hidden select-none">
      
      {/* Premium Vignette Mask: Fades out the left and right edges seamlessly */}
      <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-gray-50/90 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-gray-50/90 to-transparent pointer-events-none" />

      {/* Marquee Wrapper Track */}
      <div className="flex w-max items-center">
        <div className="animate-marquee flex gap-6 whitespace-nowrap px-3 hover:[animation-play-state:paused] cursor-pointer">
          {items.map((item, index) => (
            <Link
              key={`${item.id}-${index}`}
              href={item.href}
              className={`group flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-4 py-2 text-sm font-semibold transition-all duration-300 hover:shadow-md hover:border-violet-100`}
            >
              {/* Animated Icon Ring */}
              <span className={`flex h-7 w-7 text-base items-center justify-center rounded-lg ${item.theme.bg} transition-transform duration-300 group-hover:scale-110`}>
                {item.icon}
              </span>
              
              {/* Text Layout Block */}
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-gray-900 font-bold">{item.title}</span>
                  {item.badge && (
                    <span className={`rounded-md px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-white ${item.theme.accent}`}>
                      {item.badge}
                    </span>
                  )}
                </div>
                <span className="text-[10px] font-normal text-gray-400">
                  {item.subtitle}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}