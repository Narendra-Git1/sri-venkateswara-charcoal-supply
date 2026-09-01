import { business } from "../../data/business"

function ContactActions() {
  return (
    <div className="flex flex-wrap gap-3">
      {business.phone && (
        <a
          href={`tel:${business.phone}`}
          className="inline-flex items-center rounded-lg bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
        >
          Call Us
        </a>
      )}

      {business.whatsapp && (
        <a
          href={`https://wa.me/${business.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-lg border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100"
        >
          WhatsApp
        </a>
      )}

      {business.directionsUrl && (
        <a
          href={business.directionsUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-lg border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100"
        >
          Get Directions
        </a>
      )}
    </div>
  )
}

export default ContactActions