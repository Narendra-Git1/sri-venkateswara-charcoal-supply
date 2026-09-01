import { business } from "../../data/business"

function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">

        {/* Business */}
        <div>
          <h2 className="text-xl font-bold">
            Sri Venkateswara
          </h2>

          <p className="mt-1 text-sm font-medium text-neutral-400">
            Charcoal Supply
          </p>

          <p className="mt-4 max-w-sm text-sm leading-6 text-neutral-400">
            Quality charcoal supply for household, commercial,
            cooking, BBQ and grounding requirements.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-300">
            Quick Links
          </h3>

          <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3">
            <a href="/" className="text-sm text-neutral-400 hover:text-white">
              Home
            </a>

            <a href="/products" className="text-sm text-neutral-400 hover:text-white">
              Products
            </a>

            <a href="/about" className="text-sm text-neutral-400 hover:text-white">
              About Us
            </a>

            <a
              href="/wholesale-retail"
              className="text-sm text-neutral-400 hover:text-white"
            >
              Wholesale & Retail
            </a>

            <a href="/gallery" className="text-sm text-neutral-400 hover:text-white">
              Gallery
            </a>

            <a href="/faq" className="text-sm text-neutral-400 hover:text-white">
              FAQ
            </a>

            <a href="/contact" className="text-sm text-neutral-400 hover:text-white">
              Contact
            </a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-300">
            Contact
          </h3>

          <div className="mt-4 space-y-3 text-sm text-neutral-400">

            <a
              href={`tel:${business.phone}`}
              className="block hover:text-white"
            >
              Phone: {business.phone}
            </a>

            <a
              href={`https://wa.me/${business.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="block hover:text-white"
            >
              WhatsApp: {business.whatsapp}
            </a>

            <p>
              Location: {business.address}
            </p>

            <p>
              Business Hours: {business.businessHours}
            </p>

            <a
              href={business.directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block font-semibold text-white hover:text-neutral-300"
            >
              Get Directions →
            </a>

          </div>
        </div>

      </div>

      <div className="border-t border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 py-5 text-sm text-neutral-500 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Sri Venkateswara Charcoal Supply.
          All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer