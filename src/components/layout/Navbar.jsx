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

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950 shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

        {/* Brand */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="group flex shrink-0 items-center gap-3"
        >

          {/* Venkateswara Image */}
          <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-neutral-900">
            <img
              src="/images/venkateswara-navbar.webp"
              alt="Sri Venkateswara"
              className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
            />
          </div>

          {/* Brand */}
          <div className="leading-tight">
            <div className="text-lg font-bold tracking-tight text-white transition duration-300 group-hover:text-amber-400">
              Sri Venkateswara
            </div>

            <div className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-400 sm:text-xs">
              Charcoal Supply
            </div>
          </div>

        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center lg:flex">

          {navItems.map((item) => {
            const isActive = location.pathname === item.href

            return (
              <Link
                key={item.label}
                to={item.href}
                className={`group relative whitespace-nowrap rounded-md px-3 py-3 text-sm font-medium transition duration-300 xl:px-4 ${
                  isActive
                    ? "text-amber-400"
                    : "text-neutral-300 hover:bg-neutral-900 hover:text-amber-400"
                }`}
              >
                {item.label}

                {/* Animated Underline */}
                <span
                  className={`absolute bottom-1 left-3 right-3 h-0.5 rounded-full bg-amber-500 transition-transform duration-300 xl:left-4 xl:right-4 ${
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            )
          })}

        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-lg text-neutral-200 transition duration-300 hover:border-amber-500 hover:text-amber-400 lg:hidden"
        >
          {isOpen ? "✕" : "☰"}
        </button>

      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-neutral-800 bg-neutral-950 lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">

            {navItems.map((item) => {
              const isActive = location.pathname === item.href

              return (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block border-b border-neutral-800 px-3 py-3 text-sm font-medium transition duration-300 last:border-b-0 ${
                    isActive
                      ? "text-amber-400"
                      : "text-neutral-300 hover:bg-neutral-900 hover:text-amber-400"
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}

          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar