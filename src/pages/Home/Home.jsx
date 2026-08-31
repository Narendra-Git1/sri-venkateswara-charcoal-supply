import ContactActions from "../../components/contact/ContactActions"

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
          <div className="max-w-3xl">

            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Sri Venkateswara Charcoal Supply
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Reliable Charcoal Supply for Every Requirement
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-300 sm:text-lg">
              Quality charcoal solutions for household, commercial,
              cooking, BBQ and grounding requirements.
            </p>

            <div className="mt-8">
              <ContactActions />
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Home