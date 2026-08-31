import { business } from "../../data/business"

function ContactActions() {
  const hasPhone = Boolean(business.phone)
  const hasWhatsApp = Boolean(business.whatsapp)
  const hasMaps = Boolean(business.mapsUrl)

  return (
    <div className="flex flex-wrap gap-3">
      {hasPhone && (
        <a
          href={`tel:${business.phone}`}
          className="inline-flex items-center justify-center rounded-lg bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
        >
          Call Us
        </a>
      )}

      {hasWhatsApp && (
        <a
          href={`https://wa.me/${business.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-lg border border-neutral-900 px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100"
        >
          WhatsApp
        </a>
      )}

      {hasMaps && (
        <a
          href={business.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-lg border border-neutral-300 px-5 py-3 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-100"
        >
          Get Directions
        </a>
      )}
    </div>
  )
}

export default ContactActions