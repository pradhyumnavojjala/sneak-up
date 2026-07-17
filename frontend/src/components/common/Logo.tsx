import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">

      <span className="text-3xl transition-transform duration-300 hover:scale-110">
        🥷
      </span>

      <div className="flex flex-col leading-none">

        <span className="text-2xl font-bold tracking-tight text-sneakup-purple">
          SneakUp
        </span>

        <span className="text-xs text-gray-500">
          Heat • Shop • Smile
        </span>

      </div>

    </Link>
  );
}