export interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
  color: string;
}

export const features: Feature[] = [
  {
    id: 1,
    icon: "⚡",
    title: "Lightning Fast",
    description: "Get groceries and meals delivered in as little as 15 minutes.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    id: 2,
    icon: "🛡️",
    title: "Trusted Stores",
    description: "Every partner store is carefully verified for quality and service.",
    color: "from-green-400 to-emerald-500",
  },
  {
    id: 3,
    icon: "💳",
    title: "Secure Payments",
    description: "Pay safely with UPI, Cards, Wallets or Cash on Delivery.",
    color: "from-blue-400 to-cyan-500",
  },
  {
    id: 4,
    icon: "🎁",
    title: "Daily Rewards",
    description: "Earn Sneak Coins every time you order and unlock exciting rewards.",
    color: "from-purple-500 to-pink-500",
  },
];