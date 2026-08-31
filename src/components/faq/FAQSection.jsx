import SectionHeading from "../common/SectionHeading"

const faqs = [
  {
    question: "What types of charcoal do you supply?",
    answer:
      "We supply charcoal for iron heating, electrical grounding, tandoor cooking, BBQ and other requirements.",
  },
  {
    question: "Do you provide wholesale quantities?",
    answer:
      "Yes. We support bulk and commercial requirements. Customers can enquire with their quantity and requirement.",
  },
  {
    question: "Can I purchase charcoal for household use?",
    answer:
      "Yes. Retail supply is available for household, cooking and BBQ requirements.",
  },
  {
    question: "How can I enquire about a product?",
    answer:
      "You can contact us through the enquiry options provided on the website.",
  },
  {
    question: "Do you provide delivery?",
    answer:
      "Delivery availability and service areas can be confirmed directly with us based on the requirement.",
  },
]

function FAQSection() {
  return (
    <section id="faq" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Find answers to common questions about our charcoal products and supply."
          align="center"
        />

        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-neutral-200 bg-white p-6"
            >
              <summary className="cursor-pointer list-none pr-8 text-lg font-bold text-neutral-950">
                {faq.question}

                <span className="float-right text-2xl transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 leading-7 text-neutral-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

      </div>
    </section>
  )
}

export default FAQSection