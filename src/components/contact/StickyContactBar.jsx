import { business } from "../../data/business"

function StickyContactBar() {
  const hasContactActions =
    business.phone ||
    business.whatsapp ||
    business.directionsUrl

  if (!hasContactActions) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-neutral-200 bg-white p-3 shadow-lg lg:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-3 gap-2">

        {business.phone && (
          <a
            href={`tel:${business.phone}`}
            className="flex items-center justify-center rounded-lg bg-neutral-950 px-3 py-3 text-xs font-bold text-white"
          >
            Call
          </a>
        )}

        {business.whatsapp && (
          <a
            href={`https://wa.me/${business.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center rounded-lg border border-neutral-300 bg-white px-3 py-3 text-xs font-bold text-neutral-900"
          >
            WhatsApp
          </a>
        )}

        {business.directionsUrl && (
          <a
            href={business.directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center rounded-lg border border-neutral-300 bg-white px-3 py-3 text-xs font-bold text-neutral-900"
          >
            Directions
          </a>
        )}

      </div>
    </div>
  )
}

export default StickyContactBar