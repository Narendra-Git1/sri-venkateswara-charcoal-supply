import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Wholesale & Retail", href: "/wholesale-retail" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const handleNavigation = () => {
    setIsOpen(false)

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }

  const handleBrandNavigation = () => {
    setIsOpen(false)

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950 shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

        {/* =====================================================
            BRAND
        ====================================================== */}

        <Link
          to="/"
          onClick={handleBrandNavigation}
          aria-label="Sri Venkateswara Charcoal Supply - Home"
          className="
            group
            flex
            shrink-0
            items-center
            gap-3
            rounded-lg
            transition-all
            duration-300
            active:scale-[0.98]
          "
        >
          {/* Logo */}
          <div
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              overflow-hidden
              rounded-lg
              bg-neutral-900
              transition-all
              duration-300

              /* Desktop / Laptop Hover */
              lg:group-hover:bg-neutral-800
              lg:group-hover:shadow-lg
              lg:group-hover:shadow-amber-500/10

              /* Touch */
              group-active:bg-neutral-800
            "
          >
            <img
              src="/images/venkateswara-navbar.webp"
              alt="Sri Venkateswara"
              loading="eager"
              decoding="async"
              className="
                h-full
                w-full
                object-contain
                transition-transform
                duration-300

                lg:group-hover:scale-105
                group-active:scale-95
              "
            />
          </div>

          {/* Brand Text */}
          <div className="leading-tight">
            <div
              className="
                text-lg
                font-bold
                tracking-tight
                text-white
                transition-colors
                duration-300

                lg:group-hover:text-amber-400
                group-active:text-amber-400
              "
            >
              Sri Venkateswara
            </div>

            <div
              className="
                mt-0.5
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-neutral-400
                sm:text-xs
              "
            >
              Charcoal Supply
            </div>
          </div>
        </Link>

        {/* =====================================================
            DESKTOP / LAPTOP NAVIGATION
        ====================================================== */}

        <div className="hidden items-center lg:flex">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href

            return (
              <Link
                key={item.label}
                to={item.href}
                onClick={handleNavigation}
                className={`
                  group
                  relative
                  whitespace-nowrap
                  rounded-md
                  px-3
                  py-3
                  text-sm
                  font-medium
                  transition-all
                  duration-300
                  active:scale-95
                  xl:px-4

                  ${
                    isActive
                      ? "text-amber-400"
                      : "text-neutral-300"
                  }

                  /* DESKTOP HOVER */
                  ${
                    !isActive
                      ? "lg:hover:bg-neutral-900 lg:hover:text-amber-400"
                      : ""
                  }
                `}
              >
                {item.label}

                {/* Animated Underline */}
                <span
                  className={`
                    pointer-events-none
                    absolute
                    bottom-1
                    left-3
                    right-3
                    h-0.5
                    origin-center
                    rounded-full
                    bg-amber-500
                    transition-transform
                    duration-300
                    ease-out
                    xl:left-4
                    xl:right-4

                    ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 lg:group-hover:scale-x-100"
                    }
                  `}
                />
              </Link>
            )
          })}
        </div>

        {/* =====================================================
            MOBILE / TABLET MENU BUTTON
        ====================================================== */}

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((previous) => !previous)}
          className="
            rounded-lg
            border
            border-neutral-700
            bg-neutral-900
            px-3
            py-2
            text-lg
            text-neutral-200
            transition-all
            duration-300

            /* Tablet / Desktop hover */
            hover:border-amber-500
            hover:bg-neutral-800
            hover:text-amber-400

            /* Touch */
            active:scale-95
            active:border-amber-500
            active:text-amber-400

            lg:hidden
          "
        >
          <span
            className={`
              inline-block
              transition-transform
              duration-300
              ease-out

              ${
                isOpen
                  ? "rotate-90"
                  : "rotate-0"
              }
            `}
          >
            {isOpen ? "✕" : "☰"}
          </span>
        </button>
      </nav>

      {/* =====================================================
          MOBILE / TABLET NAVIGATION
      ====================================================== */}

      {isOpen && (
        <div
          className="
            border-t
            border-neutral-800
            bg-neutral-950
            lg:hidden
          "
        >
          {/* Scrollable Mobile Menu */}
          <div
            className="
              max-h-[calc(100vh-72px)]
              overflow-y-auto
              overscroll-contain
              pb-32
            "
          >
            <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">

              {navItems.map((item) => {
                const isActive =
                  location.pathname === item.href

                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={handleNavigation}
                    className={`
                      group
                      relative
                      flex
                      min-h-[52px]
                      items-center
                      justify-between
                      overflow-hidden
                      border-b
                      border-neutral-800
                      px-3
                      py-3
                      text-sm
                      font-medium
                      transition-all
                      duration-200

                      active:scale-[0.98]
                      active:bg-neutral-800
                      active:text-amber-400

                      ${
                        isActive
                          ? "bg-neutral-900 text-amber-400"
                          : "text-neutral-300"
                      }
                    `}
                  >
                    {/* Left Accent Line */}
                    <span
                      className={`
                        absolute
                        left-0
                        top-0
                        h-full
                        w-0.5
                        bg-amber-500
                        transition-transform
                        duration-200

                        ${
                          isActive
                            ? "scale-y-100"
                            : "scale-y-0 group-active:scale-y-100"
                        }
                      `}
                    />

                    {/* Menu Label */}
                    <span
                      className="
                        transition-all
                        duration-200

                        lg:group-hover:translate-x-1
                        lg:group-hover:text-amber-400

                        group-active:translate-x-1
                        group-active:text-amber-400
                      "
                    >
                      {item.label}
                    </span>

                    {/* Arrow */}
                    <span
                      className={`
                        text-neutral-600
                        transition-all
                        duration-200

                        lg:group-hover:translate-x-1
                        lg:group-hover:text-amber-400

                        group-active:translate-x-2
                        group-active:text-amber-400

                        ${
                          isActive
                            ? "translate-x-1 text-amber-400"
                            : ""
                        }
                      `}
                    >
                      →
                    </span>
                  </Link>
                )
              })}

            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar