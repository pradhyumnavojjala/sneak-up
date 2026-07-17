export interface Promotion {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  badge?: string;
  ctaText: string;
  href: string;
  theme: {
    bg: string;
    text: string;
    accent: string;
  };
}

export const promotions: Promotion[] = [
  {
    id: "free-shipping",
    icon: "🔥",
    title: "Free Delivery Above ₹499",
    subtitle: "Automatic checkout discount applied",
    badge: "Most Popular",
    ctaText: "Shop Now",
    href: "/shop",
    theme: {
      bg: "bg-amber-50",
      text: "text-amber-900",
      accent: "bg-amber-500",
    },
  },
  {
    id: "ready-meals-20",
    icon: "🍜",
    title: "20% OFF Ready-to-Heat",
    subtitle: "Premium meals prepared fresh daily",
    badge: "Chef's Pick",
    ctaText: "View Menu",
    href: "/categories/ready-to-heat",
    theme: {
      bg: "bg-orange-50",
      text: "text-orange-900",
      accent: "bg-orange-500",
    },
  },
  {
    id: "fresh-veggies",
    icon: "🥦",
    title: "Fresh Vegetables Restocked",
    subtitle: "100% Organic & locally sourced farm picks",
    badge: "Daily Fresh",
    ctaText: "Grab Fresh",
    href: "/categories/vegetables",
    theme: {
      bg: "bg-emerald-50",
      text: "text-emerald-900",
      accent: "bg-emerald-500",
    },
  },
  {
    id: "weekend-flash",
    icon: "⚡",
    title: "Weekend Flash Sale",
    subtitle: "Insane limited-time price drops",
    badge: "Limited Time",
    ctaText: "Unlock Deals",
    href: "/offers/flash-sale",
    theme: {
      bg: "bg-violet-50",
      text: "text-violet-900",
      accent: "bg-violet-600",
    },
  },
  {
    id: "fresh-dairy",
    icon: "🥛",
    title: "Fresh Dairy Every Morning",
    subtitle: "Pure milk & butter delivered by 7 AM",
    badge: "Subscription",
    ctaText: "Subscribe",
    href: "/categories/dairy",
    theme: {
      bg: "bg-blue-50",
      text: "text-blue-900",
      accent: "bg-blue-500",
    },
  },
  {
    id: "bakery-b2g1",
    icon: "🍩",
    title: "Buy 2 Get 1 Free Bakery Items",
    subtitle: "Sweet treats baked completely from scratch",
    badge: "Weekend Treat",
    ctaText: "Claim Offer",
    href: "/categories/bakery",
    theme: {
      bg: "bg-pink-50",
      text: "text-pink-900",
      accent: "bg-pink-500",
    },
  },
];