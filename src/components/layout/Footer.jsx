function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">

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

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-300">
            Quick Links
          </h3>

          <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3">
            <a href="/" className="text-sm text-neutral-400 hover:text-white">
              Home
            </a>

            <a href="#products" className="text-sm text-neutral-400 hover:text-white">
              Products
            </a>

            <a href="#about" className="text-sm text-neutral-400 hover:text-white">
              About Us
            </a>

            <a href="#wholesale" className="text-sm text-neutral-400 hover:text-white">
              Wholesale & Retail
            </a>

            <a href="#gallery" className="text-sm text-neutral-400 hover:text-white">
              Gallery
            </a>

            <a href="#faq" className="text-sm text-neutral-400 hover:text-white">
              FAQ
            </a>

            <a href="#contact" className="text-sm text-neutral-400 hover:text-white">
              Contact
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-300">
            Contact
          </h3>

          <div className="mt-4 space-y-3 text-sm text-neutral-400">
            <p>Phone: To be confirmed</p>
            <p>WhatsApp: To be confirmed</p>
            <p>Location: To be confirmed</p>
            <p>Business Hours: To be confirmed</p>
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