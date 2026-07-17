import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-sneakup-dark text-white">

      {/* Background Glow */}

      <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-sneakup-purple/20 blur-3xl" />

      <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-sneakup-orange/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 lg:grid-cols-5">

          {/* Brand */}

          <div className="lg:col-span-2">

            <h2 className="text-4xl font-extrabold">
              Sneak<span className="text-sneakup-orange">Up</span>
            </h2>

            <p className="mt-6 max-w-md leading-8 text-gray-400">
              Delivering groceries, meals and everyday essentials
              from trusted local stores in just minutes.
            </p>

            <div className="mt-8 flex gap-4">

              <button className="rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:scale-105">
                Google Play
              </button>

              <button className="rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:bg-white hover:text-black">
                App Store
              </button>

            </div>

          </div>

          {/* Company */}

          <div>

            <h3 className="mb-5 text-xl font-bold">
              Company
            </h3>

            <div className="space-y-3 text-gray-400">

              <Link href="#">About</Link><br />

              <Link href="#">Careers</Link><br />

              <Link href="#">Partner With Us</Link><br />

              <Link href="#">Blog</Link>

            </div>

          </div>

          {/* Explore */}

          <div>

            <h3 className="mb-5 text-xl font-bold">
              Explore
            </h3>

            <div className="space-y-3 text-gray-400">

              <Link href="/stores">Stores</Link><br />

              <Link href="/categories">Categories</Link><br />

              <Link href="#">Offers</Link><br />

              <Link href="#">Rewards</Link>

            </div>

          </div>

          {/* Support */}

          <div>

            <h3 className="mb-5 text-xl font-bold">
              Support
            </h3>

            <div className="space-y-3 text-gray-400">

              <Link href="#">Help Center</Link><br />

              <Link href="#">Contact</Link><br />

              <Link href="#">Privacy Policy</Link><br />

              <Link href="#">Terms</Link>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-12 h-px bg-white/10" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          <p className="text-gray-400">
            © 2026 SneakUp. All rights reserved.
          </p>

          <div className="flex gap-8 text-gray-400">

            <Link href="#">Instagram</Link>

            <Link href="#">Facebook</Link>

            <Link href="#">LinkedIn</Link>

            <Link href="#">X</Link>

          </div>

        </div>

      </div>

      {/* Watermark */}

      <div className="pointer-events-none absolute bottom-4 right-8 text-[180px] opacity-[0.04]">
        🛵
      </div>

    </footer>
  );
}