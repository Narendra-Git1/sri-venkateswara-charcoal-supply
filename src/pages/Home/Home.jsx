import ContactActions from "../../components/contact/ContactActions"
import WhyChooseUs from "../../components/common/WhyChooseUs"
import ProductsSection from "../../components/products/ProductsSection"
import WholesaleSection from "../../components/wholesale/WholesaleSection"
import GallerySection from "../../components/gallery/GallerySection"
import FAQSection from "../../components/faq/FAQSection"
import ContactSection from "../../components/contact/ContactSection"
import About from "../About/About"

function Home() {
  return (
    <main>

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden bg-neutral-950 text-white">

        {/* Background Glow */}
        <div className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] translate-x-1/4 -translate-y-1/4 rounded-full bg-amber-500/10 blur-3xl" />

        <div className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] -translate-x-1/3 translate-y-1/3 rounded-full bg-amber-500/5 blur-3xl" />

        {/* Hero Container */}
        <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">

          <div className="grid items-start gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12">

            {/* =====================================================
                LEFT CONTENT
            ====================================================== */}
            <div className="pt-1">

              {/* Badge */}
              <div className="group mb-4 inline-flex cursor-default items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 transition-all duration-300 hover:border-amber-400/60 hover:bg-amber-400/15">

                <span className="h-2 w-2 rounded-full bg-amber-400 transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_10px_rgba(251,191,36,0.8)]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-amber-300">
                  Wholesale & Retail
                </span>

              </div>

              {/* Business Name */}
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500 sm:text-sm">
                Sri Venkateswara Charcoal Supply
              </p>

              {/* Main Heading */}
              <h1 className="mt-3 max-w-2xl text-4xl font-extrabold leading-[1.04] tracking-tight sm:text-5xl lg:text-[3.7rem] xl:text-[4rem]">

                Reliable Charcoal

                <span className="block text-amber-400">
                  Supply for Every
                </span>

                <span className="block text-amber-400">
                  Requirement
                </span>

              </h1>

              {/* Description */}
              <p className="mt-5 max-w-xl text-base leading-7 text-neutral-300 sm:text-lg">
                Quality charcoal solutions for household, commercial,
                cooking, BBQ and grounding requirements.
              </p>

              {/* ===================================================
                  SERVICE CARDS
              ==================================================== */}
              <div className="mt-6 grid max-w-xl grid-cols-3 gap-2 sm:gap-3">

                {/* Retail */}
                <div className="group cursor-default rounded-xl border border-neutral-800 bg-neutral-900/70 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:bg-neutral-900 hover:shadow-lg hover:shadow-amber-500/10 sm:p-4">

                  <p className="text-sm font-bold text-white transition-colors duration-300 group-hover:text-amber-300">
                    Retail
                  </p>

                  <p className="mt-1 text-xs leading-5 text-neutral-500 transition-colors duration-300 group-hover:text-neutral-300">
                    Household needs
                  </p>

                </div>

                {/* Wholesale */}
                <div className="group cursor-default rounded-xl border border-neutral-800 bg-neutral-900/70 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:bg-neutral-900 hover:shadow-lg hover:shadow-amber-500/10 sm:p-4">

                  <p className="text-sm font-bold text-white transition-colors duration-300 group-hover:text-amber-300">
                    Wholesale
                  </p>

                  <p className="mt-1 text-xs leading-5 text-neutral-500 transition-colors duration-300 group-hover:text-neutral-300">
                    Bulk supply
                  </p>

                </div>

                {/* Commercial */}
                <div className="group cursor-default rounded-xl border border-neutral-800 bg-neutral-900/70 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:bg-neutral-900 hover:shadow-lg hover:shadow-amber-500/10 sm:p-4">

                  <p className="text-sm font-bold text-white transition-colors duration-300 group-hover:text-amber-300">
                    Commercial
                  </p>

                  <p className="mt-1 text-xs leading-5 text-neutral-500 transition-colors duration-300 group-hover:text-neutral-300">
                    Business needs
                  </p>

                </div>

              </div>

            </div>


            {/* =====================================================
                RIGHT CONTENT
            ====================================================== */}
            <div className="relative">

              {/* Image Glow */}
              <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-amber-500/10 blur-3xl" />

              {/* Image */}
              <div className="group relative overflow-hidden rounded-[1.5rem] border border-neutral-800 bg-neutral-900 shadow-2xl">

                <img
                  src="/images/bbq-charcoal.jpg"
                  alt="Quality charcoal for BBQ and cooking"
                  className="
                    h-[270px]
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-[1.03]
                    sm:h-[330px]
                    lg:h-[360px]
                  "
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/10 to-transparent" />

                {/* Image Information */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">

                  <div className="rounded-xl border border-white/10 bg-neutral-950/85 p-4 shadow-xl backdrop-blur-md">

                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-300 sm:text-xs">
                      Sri Venkateswara Charcoal Supply
                    </p>

                    <p className="mt-1.5 text-sm font-bold text-white sm:text-base">
                      Cooking • BBQ • Commercial • Grounding
                    </p>

                  </div>

                </div>

              </div>


              {/* =================================================
                  CONTACT ACTIONS
              ================================================== */}
              <div className="mt-4">

                {/* Contact Buttons */}
                <div
                  className="
                    flex flex-wrap
                    items-center
                    gap-3

                    [&_a]:rounded-lg
                    [&_a]:border
                    [&_a]:border-neutral-700
                    [&_a]:bg-neutral-900
                    [&_a]:px-5
                    [&_a]:py-3
                    [&_a]:font-semibold
                    [&_a]:text-white
                    [&_a]:transition-all
                    [&_a]:duration-300

                    [&_a:hover]:-translate-y-1
                    [&_a:hover]:border-amber-400
                    [&_a:hover]:bg-amber-400
                    [&_a:hover]:text-neutral-950
                    [&_a:hover]:shadow-lg
                    [&_a:hover]:shadow-amber-500/20

                    [&_button]:rounded-lg
                    [&_button]:border
                    [&_button]:border-neutral-700
                    [&_button]:bg-neutral-900
                    [&_button]:px-5
                    [&_button]:py-3
                    [&_button]:font-semibold
                    [&_button]:text-white
                    [&_button]:transition-all
                    [&_button]:duration-300

                    [&_button:hover]:-translate-y-1
                    [&_button:hover]:border-amber-400
                    [&_button:hover]:bg-amber-400
                    [&_button:hover]:text-neutral-950
                    [&_button:hover]:shadow-lg
                    [&_button:hover]:shadow-amber-500/20
                  "
                >
                  <ContactActions />
                </div>


                {/* =================================================
                    PROFESSIONAL TRUST QUOTES
                ================================================== */}
                <div className="mt-6 grid gap-3 sm:grid-cols-3">

                  {/* Quote 1 */}
                  <div
                    className="
                      group
                      rounded-xl
                      border
                      border-neutral-800
                      bg-neutral-900/60
                      p-4
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-amber-400/40
                      hover:bg-neutral-900
                      hover:shadow-lg
                      hover:shadow-amber-500/10
                    "
                  >
                    <div className="mb-3 flex h-7 w-7 items-center justify-center rounded-full bg-amber-400/10 text-amber-400 transition group-hover:bg-amber-400 group-hover:text-neutral-950">
                      <span className="text-lg font-bold">
                        “
                      </span>
                    </div>

                    <p className="text-xs font-medium leading-5 text-neutral-300 sm:text-sm">
                      Quality You Can Trust. Supply You Can Depend On.
                    </p>

                  </div>


                  {/* Quote 2 */}
                  <div
                    className="
                      group
                      rounded-xl
                      border
                      border-neutral-800
                      bg-neutral-900/60
                      p-4
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-amber-400/40
                      hover:bg-neutral-900
                      hover:shadow-lg
                      hover:shadow-amber-500/10
                    "
                  >
                    <div className="mb-3 flex h-7 w-7 items-center justify-center rounded-full bg-amber-400/10 text-amber-400 transition group-hover:bg-amber-400 group-hover:text-neutral-950">
                      <span className="text-lg font-bold">
                        “
                      </span>
                    </div>

                    <p className="text-xs font-medium leading-5 text-neutral-300 sm:text-sm">
                      Bulk Supply. Reliable Service. Quality Charcoal.
                    </p>

                  </div>


                  {/* Quote 3 */}
                  <div
                    className="
                      group
                      rounded-xl
                      border
                      border-neutral-800
                      bg-neutral-900/60
                      p-4
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-amber-400/40
                      hover:bg-neutral-900
                      hover:shadow-lg
                      hover:shadow-amber-500/10
                    "
                  >
                    <div className="mb-3 flex h-7 w-7 items-center justify-center rounded-full bg-amber-400/10 text-amber-400 transition group-hover:bg-amber-400 group-hover:text-neutral-950">
                      <span className="text-lg font-bold">
                        “
                      </span>
                    </div>

                    <p className="text-xs font-medium leading-5 text-neutral-300 sm:text-sm">
                      Quality Charcoal. Reliable Supply. Every Time.
                    </p>

                  </div>

                </div>


                {/* Trust Line */}
                <div className="mt-5 flex items-center gap-3">

                  <div className="h-px flex-1 bg-neutral-800" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                    Trusted Charcoal Supply
                  </p>

                  <div className="h-px flex-1 bg-neutral-800" />

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          WHY CHOOSE US
      ========================================================== */}
      <WhyChooseUs />


      {/* =========================================================
          ABOUT
      ========================================================== */}
      <About />


      {/* =========================================================
          PRODUCTS
      ========================================================== */}
      <ProductsSection />


      {/* =========================================================
          WHOLESALE & RETAIL
      ========================================================== */}
      <WholesaleSection />


      {/* =========================================================
          GALLERY
      ========================================================== */}
      <GallerySection />


      {/* =========================================================
          FAQ
      ========================================================== */}
      <FAQSection />


      {/* =========================================================
          CONTACT
      ========================================================== */}
      <ContactSection />

    </main>
  )
}

export default Home