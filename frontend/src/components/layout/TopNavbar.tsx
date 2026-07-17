import Link from "next/link";
import { FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";

import Logo from "@/components/common/Logo";
import SearchBar from "@/components/common/SearchBar";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Stores", href: "/stores" },
  { name: "Categories", href: "/categories" },
  { name: "Offers", href: "/offers" },
  { name: "About", href: "/about" },
];

export default function TopNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">

      <div className="mx-auto max-w-7xl px-6">

        <div className="flex h-20 items-center justify-between gap-8">


          {/* Logo + Navigation */}
          <div className="flex items-center gap-10">

            <div className="shrink-0">
              <Logo />
            </div>


            <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-gray-600">

              {navLinks.map((item) => (

                <Link
                  key={item.name}
                  href={item.href}
                  className="
                    relative py-2
                    transition-colors duration-200
                    hover:text-sneakup-purple

                    after:absolute
                    after:bottom-0
                    after:left-0
                    after:h-[2px]
                    after:w-0
                    after:bg-sneakup-purple
                    after:transition-all
                    after:duration-200

                    hover:after:w-full
                  "
                >
                  {item.name}
                </Link>

              ))}

            </nav>

          </div>



          {/* Search */}

          <div className="max-w-xl flex-1">

            <SearchBar />

          </div>




          {/* Actions */}

          <div className="flex items-center gap-4">


            {/* Wishlist */}

            <button
              aria-label="Wishlist"
              className="
                group rounded-full p-2
                text-gray-600

                transition-all duration-200

                hover:bg-sneakup-purple/10
                hover:text-sneakup-purple
              "
            >

              <FiHeart
                className="
                  text-xl
                  transition-transform duration-200
                  group-hover:scale-110
                "
              />

            </button>




            {/* Cart */}

            <button
              aria-label="Cart"
              className="
                group relative rounded-full p-2
                text-gray-600

                transition-all duration-200

                hover:bg-sneakup-purple/10
                hover:text-sneakup-purple
              "
            >

              <FiShoppingCart
                className="
                  text-xl
                  transition-transform duration-200
                  group-hover:scale-110
                "
              />


              {/* Cart Count */}

              <span
                className="
                  absolute
                  -right-1
                  -top-1

                  flex
                  h-4
                  w-4

                  items-center
                  justify-center

                  rounded-full

                  bg-sneakup-orange

                  text-[10px]
                  font-bold
                  text-white
                "
              >
                2
              </span>


            </button>





            {/* User */}

            <button
              aria-label="User Account"
              className="
                group rounded-full p-2
                text-gray-600

                transition-all duration-200

                hover:bg-sneakup-purple/10
                hover:text-sneakup-purple
              "
            >

              <FiUser
                className="
                  text-xl
                  transition-transform duration-200
                  group-hover:scale-110
                "
              />

            </button>



          </div>


        </div>

      </div>

    </header>
  );
}